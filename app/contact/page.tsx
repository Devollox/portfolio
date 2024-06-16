import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";
import {Article} from "@/app/projects/article";

const redis = Redis.fromEnv();
export const revalidate = 60;

export const metadata = {
	title: 'Contact',
}

export default async function ProjectsPage() {
	const sorted = [
		{
			"title": "Discord",
			"description": "My personal corner of happiness.",
			"slug": "/"
		},
		{
			"title": "Steam",
			"description": "I have so many games but I only play one.",
			"slug": "/"
		},
		{
			"title": "Twitter",
			"description": "Elon Musk is a good person.",
			"slug": "/"
		}
	]
	return (
		<div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 ">
			<div className="flex flex-col items-center w-full h-full">
				<Navigation />
				<div className="w-[560px] px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 ">
					<div className="max-w-2xl mx-auto lg:mx-0">
						<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
							Contact
						</h2>
						<p className="mt-4 text-zinc-400">
							These are my social contacts where you can write to me.
						</p>
					</div>
					<div className="w-full h-px bg-zinc-800" />
				</div>
				<div className="w-[510px] m-6 text-neutral-700 dark:text-neutral-300">
					{sorted.map((project) => (
						<a href={`${project.slug}`} className="flex gap-x-4 px-4 -mx-4 pt-4 rounded-[12px] border-none hover:bg-neutral-50 dark:hover:bg-neutral-900 group">
							<div
								className="bg-neutral-100 dark:bg-neutral-800 w-[36px] h-[36px] rounded-[10px] mt-[2px] flex-shrink-0 shadow-shorter overflow-hidden">
								<div className="text-sm text-neutral-400 font-semibold flex justify-center items-center h-full">
									{project.title.substring(0,2)}
								</div>
							</div>
							<div className="flex flex-col text-sm border-b border-neutral-100 dark:border-neutral-900  flex-auto  pb-4 text-neutral-700 group-hover:border-transparent dark:text-neutral-300">
								<div className='w-[350px]'>{project.title}</div>
								<div className="text-neutral-500 dark:text-neutral-500 flex justify-between gap-x-2 items-center">
									<div className='w-[350px]'>{project.description}</div>
								</div>
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	);
}
