import { FC } from "react";
import { z } from "zod";
import { getHeroes } from "@/app/_lib/handler/heroes";
import { HeroSchema } from "@/app/_data/hero/schema";
import { Sorry } from "@/app/search/_components/sorry";
import { NoData } from "@/app/search/_components/no-data";
import Link from "next/link";
import { Tags } from "../../../_components/tags";

export const Hero: FC<{ hero: z.infer<typeof HeroSchema> }> = ({
	hero,
}) => {
	return (
		<Link href={`/search/hero/result/${hero.id}`}>
			<div>{`[${hero.rarity}] ${hero.epithet} ${hero.name}`}</div>
			<Tags tags={hero.tags} />
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

			return heroes.map((hero) => <Hero hero={hero} />);
		})
		.catch((err) => {
			console.error(err);
			return <NoData />;
		});
};
