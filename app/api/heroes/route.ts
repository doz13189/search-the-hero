import { SkillKeyTags } from "@/app/_data/_common/schema";
import { heroes } from "@/app/_data/hero/object";
import { HeroSchema } from "@/app/_data/hero/schema";
import JsonQuery from "json-query";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET(request: NextRequest) {
	const tags = request.nextUrl.searchParams.get("tags");
	const rarity = request.nextUrl.searchParams.get("rarity");

	let response = JsonQuery('heroes[*]', {
		data: { heroes },
	}).value[0]

	if (rarity) {
		response = response.filter((hero: z.infer<typeof HeroSchema>) => {
			return hero.rarity === rarity
		});
	}

	if (tags) {
		tags
			?.split(",")
			.map((tag) => {
				const plusUltra = response.filter((hero: z.infer<typeof HeroSchema>) => {
					return hero.plusUltra.tags.includes(tag as SkillKeyTags)
				});
			
				const actionSkill1 = response.filter((hero: z.infer<typeof HeroSchema>) => {
					return hero.actionSkill1.tags.includes(tag as SkillKeyTags)
				});
			
				const actionSkill2 = response.filter((hero: z.infer<typeof HeroSchema>) => {
					return hero.actionSkill2.tags.includes(tag as SkillKeyTags)
				});
			
				const autoSkill1 = response.filter((hero: z.infer<typeof HeroSchema>) => {
					return hero.autoSkill1.tags.includes(tag as SkillKeyTags)
				});
			
				const autoSkill2 = response.filter((hero: z.infer<typeof HeroSchema>) => {
					return hero.autoSkill2.tags.includes(tag as SkillKeyTags)
				});
			
				response = Array.from(new Set(
					[
						...plusUltra,
						...actionSkill1,
						...actionSkill2,
						...autoSkill1,
						...autoSkill2
					]
				));
			})
	}
	
	return NextResponse.json({ heroes: response }, { status: 200 });
}
