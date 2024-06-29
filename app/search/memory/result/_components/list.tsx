import { MemorySchema } from "@/app/_data/memory/schema";
import { FC } from "react";
import { z } from "zod";
import { getMemories } from "../../../../_lib/handler/memories";
import { NoData } from "@/app/search/_components/no-data";
import Link from "next/link";
import { Skills } from "@/app/search/_components/skills";

export const Memory: FC<{ memory: z.infer<typeof MemorySchema> }> = ({
	memory,
}) => {
	return (
		<Link href={`/search/memory/result/${memory.id}`}>
			<div>{`[${memory.rarity.toUpperCase()}] ${memory.name}`}</div>
			<Skills skills={[...memory.skills]} />
		</Link>
	);
};

export const Memories: FC<{
	args: {
		searchParams: { rarity: string; skills: string };
	};
}> = ({ args }) => {
	const argRarity = args.searchParams?.rarity;
	const argSkills = args.searchParams?.skills;

	const response = getMemories(argRarity, argSkills);
	return response
		.then((value) => {
			const memories = value.memories;
			if (!memories) {
				return <NoData />;
			}

			if (memories.length === 0) {
				return <NoData />;
			}

			return memories.map((memory) => <div className="mb-3"><Memory memory={memory} /></div>);
		})
		.catch((err) => {
			console.error(err);
			return <NoData />;
		});
};
