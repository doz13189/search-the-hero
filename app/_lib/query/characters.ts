import { Tags } from "@/app/_data/_common/schema";
import { characters } from "@/app/_data/character/object";
import { CharacterSchema } from "@/app/_data/character/schema";
import { z } from "zod";

export const getCharacters = async ({
	rarity,
	name,
	tags,
	skills,
	offset,
	limit
}: {rarity: string, name: string, tags: string, skills: string, offset: string, limit: string }) => {

	let response = characters.characters;


	if (rarity) {
		response = response.filter((character) => {
			return character.rarity === rarity
		});
	}

	if (name) {
		response = response.filter((character) => {
			return character.name.includes(name);
		});
	}

	if (tags) {
		tags
			?.split(",")
			.map((tag) => {
				response = response.filter((character: z.infer<typeof CharacterSchema>) => {
					return character.tags.includes(tag as z.infer<typeof Tags>)
				});
			})
	}
	
	if (skills) {
		skills
			?.split(",")
			.map((skill) => {
				response = response.filter((character: z.infer<typeof CharacterSchema>) => {
					// @ts-ignore
					return character.skills.includes(skill)
				});
			});
	}

	return {
		characters: response.slice(parseInt(offset), parseInt(offset) + parseInt(limit)),
		result: {
			offset: parseInt(offset),
			limit: parseInt(limit),
			total: response.length
		}

	}
};
