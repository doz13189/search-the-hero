import { getTagLabel } from "@/app/_data/_common/label";
import { FC } from "react";
import { z } from "zod";
import { getHeroes } from "@/app/_lib/handler/heroes";
import { HeroSchema } from "@/app/_data/hero/schema";
import { Sorry } from "@/app/search/_components/sorry";
import { NoData } from "@/app/search/_components/no-data";
import Link from "next/link";

export const Hero: FC<{ memory: z.infer<typeof HeroSchema> }> = ({
	memory,
}) => {
	return (
		<Link href={`/search/hero/result/${memory.id}`}>
			<div>{memory.epithet} {memory.name}</div>
			{memory.tags.map((tag) => (
				<span
					key={tag}
					className="inline-block bg-yellow text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded"
				>
					{getTagLabel(tag)}
				</span>
			))}
		</Link>
	);
};

export const Heroes: FC<{
	args: {
		searchParams: { rarity: string; tags: string };
	};
}> = ({ args }) => {
	const argRarity = args.searchParams?.rarity;
	const argTags = args.searchParams?.tags;

	if (argRarity === "N" || argRarity === "R" || argRarity === "SR") {
		return <Sorry />;
	}

	const response = getHeroes(argRarity, argTags);
	return response
		.then((value) => {
			const heroes = value.heroes;
			if (!heroes) {
				return <NoData />;
			}

			if (heroes.length === 0) {
				return <NoData />;
			}

			return heroes.map((hero) => <Hero memory={hero} />);
		})
		.catch((err) => {
			console.error(err);
			return <NoData />;
		});
};
