import { getTagLabel } from "@/app/_data/memory/label";
import { MemorySchema } from "@/app/_data/memory/schema";
import { FC } from "react";
import { z } from "zod";
import { getMemories } from "../../../../_lib/handler/memories";
import { Sorry } from "@/app/search/_components/sorry";
import { NoData } from "@/app/search/_components/no-data";

export const Memory: FC<{ memory: z.infer<typeof MemorySchema> }> = ({
	memory,
}) => {
	return (
		<div>
			<div>{memory.name}</div>
			{memory.tags.map((tag) => (
				<span
					key={tag}
					className="inline-block bg-yellow text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded"
				>
					{getTagLabel(tag)}
				</span>
			))}
		</div>
	);
};

export const Memories: FC<{
	args: {
		searchParams: { rarity: string; tags: string };
	};
}> = ({ args }) => {
	const argRarity = args.searchParams?.rarity;
	const argTags = args.searchParams?.tags;

	if (argRarity === "N" || argRarity === "R" || argRarity === "SR") {
		return <Sorry />;
	}

	const response = getMemories(argRarity, argTags);
	return response
		.then((value) => {
			const memories = value.memories;
			if (!memories) {
				return <NoData />;
			}

			if (memories.length === 0) {
				return <NoData />;
			}

			return memories.map((memory) => <Memory memory={memory} />);
		})
		.catch((err) => {
			console.error(err);
			return <NoData />;
		});
};
