import { FC } from "react";
import { z } from "zod";
import { CharacterSchema } from "@/app/_data/character/schema";
import { NoData } from "@/app/search/_components/no-data";
import Link from "next/link";
import { Skills } from "../../../_components/skills";
import { typeLabel } from "../_utils/label";
import { getCharacters } from "@/app/_lib/handler/characters";

export const Character: FC<{ character: z.infer<typeof CharacterSchema> }> = ({
	character,
}) => {
	return (
		<Link href={`/search/character/result/${character.id}`}>
			<div>{`[${character.rarity.toUpperCase()}/${typeLabel(character.type)}タイプ] ${character.epithet} ${character.name}`}</div>
			<Skills skills={[...character.skills]} />
		</Link>
	);
};

export const Characters: FC<{
	args: {
		searchParams: { rarity: string; skills: string };
	};
}> = ({ args }) => {
	const argRarity = args.searchParams?.rarity;
	const argTags = args.searchParams?.skills;

	const response = getCharacters(argRarity, argTags);
	return response
		.then((value) => {
			const characters = value.characters;
			if (!characters) {
				return <NoData />;
			}

			if (characters.length === 0) {
				return <NoData />;
			}

			return characters.map((character) => <div className="mb-3"><Character character={character} /></div>);
		})
		.catch((err) => {
			console.error(err);
			return <NoData />;
		});
};
