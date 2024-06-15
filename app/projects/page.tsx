import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";

const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function ProjectsPage() {
	const views = (
		await redis.mget<number[]>(
			...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":")),
		)
	).reduce((acc, v, i) => {
		acc[allProjects[i].slug] = v ?? 0;
		return acc;
	}, {} as Record<string, number>);
	const featured = allProjects.find(
		(project) => project.slug === "planetfall",
	)!;
	const top2 = allProjects.find((project) => project.slug === "envshare")!;
	const top3 = allProjects.find((project) => project.slug === "qstash")!;
	const sorted = allProjects
		.filter((p) => p.published)
		.filter(
			(project) =>
				project.slug !== featured.slug &&
				project.slug !== top2.slug &&
				project.slug !== top3.slug,
		)
		.sort(
			(a, b) =>
				new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
				new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
		);

	return (
		<div className="flex flex-col items-center w-full h-full">
			<Navigation />
			<div className="w-[460px] m-6 md:m-20 text-neutral-700 dark:text-neutral-300">
				{sorted.map((project) => (
						<Card key={project.slug}>
							<Article project={project} views={views[project.slug] ?? 0} />
						</Card>
					))}
			</div>
		</div>
	);
}
