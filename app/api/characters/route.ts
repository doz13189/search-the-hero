import { CharacterSkills, Tags } from "@/app/_data/_common/schema";
import { characters } from "@/app/_data/character/object";
import { CharacterSchema } from "@/app/_data/character/schema";
import JsonQuery from "json-query";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET(request: NextRequest) {
	const rarity = request.nextUrl.searchParams.get("rarity");
	const name = request.nextUrl.searchParams.get("name");
	const tags = request.nextUrl.searchParams.get("tags");
	const skills = request.nextUrl.searchParams.get("skills");

	let response = JsonQuery('characters[*]', {
		data: { characters },
	}).value[0]

	if (rarity) {
		response = response.filter((character: z.infer<typeof CharacterSchema>) => {
			return character.rarity === rarity
		});
	}

	if (name) {
		response = response.filter((character: z.infer<typeof CharacterSchema>) => {
			return character.name === name
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
					return character.skills.includes(skill as z.infer<typeof CharacterSkills>)
				});
			})
	}
	
	return NextResponse.json({ characters: response }, { status: 200 });
}
