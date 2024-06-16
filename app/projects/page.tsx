import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();
export const revalidate = 60;

export const metadata = {
	title: 'Projects',
}

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
	const sorted = allProjects
		.filter((p) => p.published)
		.sort(
			(a, b) =>
				new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
				new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
		);

	return (
		<div className="flex flex-col items-center w-full h-full">
			<Navigation />
			<div className="w-[560px] px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 ">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						Projects
					</h2>
					<p className="mt-4 text-zinc-400">
						Some of the projects are from work and some are on my own time.
					</p>
				</div>
				<div className="w-full h-px bg-zinc-800" />
			</div>
			<div className="w-[510px] m-6 text-neutral-700 dark:text-neutral-300">
				{sorted.map((project) => (
						<Card key={project.slug}>
							<Article project={project} views={views[project.slug] ?? 0} />
						</Card>
					))}
			</div>
		</div>
	);
}
