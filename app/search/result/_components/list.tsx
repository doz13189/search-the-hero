import { FC } from "react";
import { getMemories } from "../../../_lib/handler/memories";

export const NoMemories: FC = () => {
	return <>No Data...</>;
};

export const Memory: FC<{ id: number; name: string }> = ({ id, name }) => {
	return <div key={id}>{name}</div>;
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

			return memories.map((memory) => (
				<Memory id={memory.id} name={memory.name} />
			));
		})
		.catch((err) => {
			console.error(err);
			return <NoMemories />;
		});
};
