import type { Project } from "@/.contentlayer/generated";
import React from "react";

type Props = {
	project: Project;
	views: number;
};

export const Article: React.FC<Props> = ({ project, views }) => {
	return (
		<a href={`/projects/${project.slug}`} className="flex gap-x-4 px-4 -mx-4 pt-4 rounded-[12px] border-none hover:bg-neutral-50 dark:hover:bg-neutral-900 group">
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
					<div className="text-neutral-400 dark:text-neutral-500 tabular-nums">
						{project.date ? (
						<time dateTime={new Date(project.date).toISOString()}>
							{new Date(project.date).getFullYear()}
						</time>
					) : (
						<span>soon</span>
					)}</div>
				</div>
			</div>
		</a>
	);
};
