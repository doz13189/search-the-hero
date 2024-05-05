import path from "path";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	try {
		const requestBody = await request.json();
		const filePath = path.join(
			process.cwd(),
			"app/_data/message",
			"object.json",
		);

		await writeFile(filePath, JSON.stringify(requestBody));

		return NextResponse.json(
			{ message: "Message written successfully" },
			{ status: 200 },
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ message: "Internal Server Error" },
			{ status: 200 },
		);
	}
}
