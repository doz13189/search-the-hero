import { heroes } from "@/app/_data/hero/object";
import { HeroSchema } from "@/app/_data/hero/schema";
import JsonQuery from "json-query";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET(request: NextRequest) {
	const tags = request.nextUrl.searchParams.get("tags");
	const rarity = request.nextUrl.searchParams.get("rarity");

	let searchParams = "";
	if (tags) {
		searchParams = searchParams + tags
			?.split(",")
			.map((tag) => `actionSkill1[**][*tags~${tag}]`)
			.join("");
	}

	if (rarity) {
		searchParams = searchParams + `[*rarity=${rarity}]`;
	}

	const response = JsonQuery('heroes[*]', {
		data: { heroes },
	}).value[0]

	const plusUltra = response.filter((hero: z.infer<typeof HeroSchema>) => {
		return hero.plusUltra.tags.includes('powerUpSingle')
	});

	const actionSkill1 = response.filter((hero: z.infer<typeof HeroSchema>) => {
		return hero.actionSkill1.tags.includes('powerUpSingle')
	});

	const actionSkill2 = response.filter((hero: z.infer<typeof HeroSchema>) => {
		return hero.actionSkill2.tags.includes('powerUpSingle')
	});

	const autoSkill1 = response.filter((hero: z.infer<typeof HeroSchema>) => {
		return hero.autoSkill1.tags.includes('powerUpSingle')
	});

	const autoSkill2 = response.filter((hero: z.infer<typeof HeroSchema>) => {
		return hero.autoSkill2.tags.includes('powerUpSingle')
	});

	const combinedArray = [
		...plusUltra,
		...actionSkill1,
		...actionSkill2,
		...autoSkill1,
		...autoSkill2
	];

	const uniqueHeroes = Array.from(new Set(combinedArray));
	
	return NextResponse.json({ heroes: uniqueHeroes }, { status: 200 });
}
