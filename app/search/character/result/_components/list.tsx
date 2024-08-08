import { FC } from "react";
import { z } from "zod";
import { CharacterSchema } from "@/app/_data/character/schema";
import { NoData } from "@/app/search/_components/no-data";
import Link from "next/link";
import { Skills } from "../../../_components/skills";
import { getCharacters } from "@/app/_lib/apiHandler/characters";
import Image from "next/image";
import { getImageNameByAttribute, getImageNameByRarity } from "@/app/search/_lib/utils";
import { AllPage, BackPage, NextPage } from "../../../_components/paging";

export const Character: FC<{ character: z.infer<typeof CharacterSchema> }> = ({
	character,
}) => {
	return (
		<Link href={`/search/character/result/${character.id}`}>
			<div className="flex">
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
						width={20}
						height={20}
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
		searchParams: { rarity: string; name: string; skills: string; tags: string, offset: string, limit: string };
	};
}> = ({ args }) => {
	const argRarity = args.searchParams?.rarity;
	const argSkills = args.searchParams?.skills;
	const argName = args.searchParams?.name;
	const argTags = args.searchParams?.tags;

	const argOffset = args.searchParams?.offset || "0";
	const argLimit = args.searchParams?.limit || "10";

	const response = getCharacters(argRarity, argName, argTags, argSkills, argOffset, argLimit);
	return response
		.then((value) => {
			const result = value.result;
			const characters = value.characters;
			if (!characters) {
				return <NoData />;
			}

			if (characters.length === 0) {
				return <NoData />;
			}

			return (<>
				<div className="flex my-3">
					<div className="mr-2">
						<p className="text-xs">
							{`検索結果: ${result.total} 件`}
						</p>
					</div>
					<div className="mr-2">
						<p className="text-xs">
							{`表示件数: ${result.offset + 1}-${result.offset + result.limit >= result.total ? result.total : result.offset + result.limit} 件`}
						</p>
					</div>
				</div>
				{characters.map((character) =>
					<div key={character.id} className="p-2 mb-1 bg-very-light-gray rounded-md">
						<Character key={character.id} character={character} />
					</div>)}
				<div className="flex my-3">
					<div className="flex-1">
						<BackPage pathname="character" total={result.total} rarity={argRarity} name={argName} skills={argSkills?.split(",")} tags={argTags?.split(",")} offset={argOffset} limit={argLimit} />
					</div>
					<div className="flex-1">
						<NextPage pathname="character" total={result.total} rarity={argRarity} name={argName} skills={argSkills?.split(",")} tags={argTags?.split(",")} offset={argOffset} limit={argLimit} />
					</div>
					<div className="flex-1">
						<AllPage pathname="character" total={result.total} rarity={argRarity} name={argName} skills={argSkills?.split(",")} tags={argTags?.split(",")} offset={argOffset} limit={argLimit} />
					</div>
				</div>
			</>)
		})
		.catch((err) => {
			console.error(err);
			return <NoData />;
		});
};
