import { characters } from "@/app/_data/character/object";
import JsonQuery from "json-query";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	const id = request.nextUrl.searchParams.get("id");
	const response = JsonQuery(`characters[id=${id}]`, {
		data: characters,
	}).value;

	return NextResponse.json({ characters: response }, { status: 200 });
}
