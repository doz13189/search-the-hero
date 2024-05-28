import { heroes } from "@/app/_data/hero/object";
import JsonQuery from "json-query";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	const tags = request.nextUrl.searchParams.get("tags");
	const rarity = request.nextUrl.searchParams.get("rarity");

	let searchParams = "";
	if (tags) {
		searchParams = searchParams + tags
			?.split(",")
			.map((tag) => `[*tags~${tag}]`)
			.join("");
	}

	if (rarity) {
		searchParams = searchParams + `[*rarity=${rarity}]`;
	}

	const response = JsonQuery(`heroes[**]${searchParams}`, {
		data: heroes,
	}).value;

	return NextResponse.json({ heroes: response }, { status: 200 });
}