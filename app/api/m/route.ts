import { heroes } from "@/app/_data/hero/object";
import JsonQuery from "json-query";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	const id = request.nextUrl.searchParams.get("id");
	const response = JsonQuery(`heroes[id=${id}]`, {
		data: heroes,
	}).value;

	return NextResponse.json({ heroes: response }, { status: 200 });
}
