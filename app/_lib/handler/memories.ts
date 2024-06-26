import { MemoriesSchema } from "@/app/_data/memory/schema";

export const getMemories = async (rarity: string, skills: string) => {
	let query = "";
	if (skills) {
		query = `skills=${skills}`
	}

	if (rarity) {
		query = query + `&rarity=${rarity}`;
	}

	const response = await fetch(
		`${process.env.API_URL}/api/memories?${query}`,
		{
			next: { revalidate: 10 },
		},
	);

	if (response.ok) {
		const data = await response.json();
		const result = MemoriesSchema.safeParse(data);
		if (result.success) {
			return result.data;
		}

		console.error(result.error.errors);
		throw new Error("Invalid response data");
	}
	console.error(response);
	throw new Error(`HTTP error ${response.status}`);
};
