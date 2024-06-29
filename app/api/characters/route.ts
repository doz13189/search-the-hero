import { CharacterSkills } from "@/app/_data/_common/schema";
import { characters } from "@/app/_data/character/object";
import { CharacterSchema } from "@/app/_data/character/schema";
import JsonQuery from "json-query";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET(request: NextRequest) {
	const rarity = request.nextUrl.searchParams.get("rarity");
	const skills = request.nextUrl.searchParams.get("skills");

	let response = JsonQuery('characters[*]', {
		data: { characters },
	}).value[0]

	if (rarity) {
		response = response.filter((character: z.infer<typeof CharacterSchema>) => {
			return character.rarity === rarity
		});
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
