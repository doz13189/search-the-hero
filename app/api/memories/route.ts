import { MemorySkills } from "@/app/_data/_common/schema";
import { memories } from "@/app/_data/memory/object";
import { MemorySchema } from "@/app/_data/memory/schema";
import JsonQuery from "json-query";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET(request: NextRequest) {
	const rarity = request.nextUrl.searchParams.get("rarity");
	const skills = request.nextUrl.searchParams.get("skills");

	const offset = parseInt(request.nextUrl.searchParams.get("offset") || "0");
	const limit = parseInt(request.nextUrl.searchParams.get("limit") || "10");

	let response = JsonQuery('memories[*]', {
		data: { memories },
	}).value[0]

	if (rarity) {
		response = response.filter((memory: z.infer<typeof MemorySchema>) => {
			return memory.rarity === rarity
		});
	}

	if (skills) {
		skills
			?.split(",")
			.map((skill) => {
				response = response.filter((memory: z.infer<typeof MemorySchema>) => {
					return memory.skills.includes(skill as z.infer<typeof MemorySkills>)
				});
			});
	}

	return NextResponse.json({
		memories: response.slice(offset, offset + limit),
		result: {
			offset,
			limit,
			total: response.length
		}
		
	 }, { status: 200 });
}
