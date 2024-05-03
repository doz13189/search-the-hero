import { memories } from "@/app/_data/memory/object";
import JsonQuery from "json-query";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	const tags = request.nextUrl.searchParams.get("tags");
	const searchParams = tags
		?.split(",")
		.map((tag) => `[*tags~${tag}][*rarity~UR]`)
		.join("");

	const response = JsonQuery(`memories[**]${searchParams}`, {
		data: memories,
	}).value;

	return NextResponse.json({ memories: response }, { status: 200 });
}
