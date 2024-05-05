import { getTagLabel } from "@/app/_data/memory/label";
import { MemorySchema } from "@/app/_data/memory/schema";
import { FC } from "react";
import { z } from "zod";
import { getMemories } from "../../../_lib/handler/memories";

export const Sorry: FC = () => {
	return <>レアリティが N, R, SR のメモリーのデータは準備中です...</>;
};

export const NoMemories: FC = () => {
	return (
		<>
			<p>見つかりません。</p>
			<p>あるいは、データの準備中です...</p>
		</>
	);
};

export const Memory: FC<{ memory: z.infer<typeof MemorySchema> }> = ({
	memory,
}) => {
	return (
		<div>
			<div>{memory.name}</div>
			{memory.tags.map((tag) => (
				<span
					key={memory.id}
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
