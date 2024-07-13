import { FC } from "react";
import { z } from "zod";
import { CharacterSchema } from "@/app/_data/character/schema";
import { NoData } from "@/app/search/_components/no-data";
import Link from "next/link";
import { Skills } from "../../../_components/skills";
import { getCharacters } from "@/app/_lib/handler/characters";
import Image from "next/image";
import { getImageNameByAttribute, getImageNameByRarity } from "@/app/search/_lib/utils";

export const Character: FC<{ character: z.infer<typeof CharacterSchema> }> = ({
	character,
}) => {
	return (
		<Link href={`/search/character/result/${character.id}`}>
			<div className="flex my-1">
				<div className="relative w-12 h-12">
					<Image
						src={`/bg/chara_bg_10${getImageNameByRarity(character.rarity)}.webp`}
						width={50}
						height={50}
						alt="character icon"
						className="absolute top-0 left-0"
					/>
					<Image
						src={`/character-icon/icon_m_${character.id}_00.webp`}
						width={50}
						height={50}
						alt="character icon"
						className="absolute top-0 left-0"
					/>
					<Image
						src={`/frame/chara_frame_10${getImageNameByRarity(character.rarity)}.webp`}
						width={50}
						height={50}
						alt="character icon"
						className="absolute top-0 left-0"
					/>
					<Image
						src={`/attribute/card_attribute_0${getImageNameByAttribute(character.type)}.webp`}
						width={15}
						height={15}
						alt="character icon"
						className="absolute bottom-0 left-0"
					/>
					<Image
						src={`/rarity/card_rarity_0${getImageNameByRarity(character.rarity)}.webp`}
						width={15}
						height={15}
						alt="character icon"
						className="absolute top-0 left-0"
					/>
				</div>
				<div className="content-center mx-3">{`${character.epithet} ${character.name}`}</div>
			</div>
			<Skills skills={[...character.skills]} />
		</Link>
	);
};

export const Characters: FC<{
	args: {
		searchParams: { rarity: string; name: string; skills: string; tags: string; };
	};
}> = ({ args }) => {
	const argRarity = args.searchParams?.rarity;
	const argSkills = args.searchParams?.skills;
	const argName = args.searchParams?.name;
	const argTags = args.searchParams?.tags;

	const response = getCharacters(argRarity, argName, argTags, argSkills);
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
