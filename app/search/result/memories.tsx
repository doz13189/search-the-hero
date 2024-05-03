import { FC } from "react";
import { getMemories } from "../../handler/requests";

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

	const memories = getMemories(argRarity, argTags);
	return memories
		.then((response) => {
			if (!response) {
				return <NoMemories />;
			}

			if (response?.length === 0) {
				return <NoMemories />;
			}

			return response.map((memory) => (
				<Memory id={memory.id} name={memory.name} />
			));
		})
		.catch((err) => {
			console.error(err);
			return <NoMemories />;
		});
};
