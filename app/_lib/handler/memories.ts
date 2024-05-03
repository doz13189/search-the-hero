import { MemoriesSchema } from "@/app/_data/memory/schema";

export const getMemories = async (rarity: string, tags: string) => {
	const response = await fetch(
		`${process.env.API_URL}/api/memory?tags=${tags}`,
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

		throw new Error("Invalid response data");
	}
	console.error(response);
	throw new Error(`HTTP error ${response.status}`);
};
