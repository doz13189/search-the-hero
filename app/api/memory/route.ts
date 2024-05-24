import { memories } from "@/app/_data/memory/object";
import JsonQuery from "json-query";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	const id = request.nextUrl.searchParams.get("id");
	const response = JsonQuery(`memories[id=${id}]`, {
		data: memories,
	}).value;

	return NextResponse.json({ memories: response }, { status: 200 });
}
