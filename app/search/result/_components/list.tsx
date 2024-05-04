import { getTagLabel } from "@/app/_data/memory/label";
import { MemorySchema } from "@/app/_data/memory/schema";
import { FC } from "react";
import { z } from "zod";
import { getMemories } from "../../../_lib/handler/memories";

export const NoMemories: FC = () => {
	return <>No Data...</>;
};

export const Memory: FC<{ memory: z.infer<typeof MemorySchema> }> = ({
	memory,
}) => {
	return (
		<div>
			<div key={memory.id}>{memory.name}</div>
			{memory.tags.map((tag) => (
				<span className="bg-yellow text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
					{getTagLabel(tag)}
				</span>
			))}

			<div>{}</div>
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

	const response = getMemories(argRarity, argTags);
	return response
		.then((value) => {
			const memories = value.memories;
			if (!memories) {
				return <NoMemories />;
			}

			if (memories.length === 0) {
				return <NoMemories />;
			}

			return memories.map((memory) => <Memory memory={memory} />);
		})
		.catch((err) => {
			console.error(err);
			return <NoMemories />;
		});
};
