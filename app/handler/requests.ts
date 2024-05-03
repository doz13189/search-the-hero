import { MemoriesSchema } from "@/data/memories";

export const getMemories = async (rarity: string, tags: string) => {
	const response = await fetch(
		`${process.env.API_URL}/api/memory?tags=${tags}`,
		{
			next: { revalidate: 10 },
		},
	);

	if (response.ok) {
		const data = await response.json().then((data) => data.response);
		const result = MemoriesSchema.safeParse(data);
		if (result.success) {
			return result.data;
		}

		console.error(result.error.errors);
		throw new Error("Invalid response data");
	}
	throw new Error(`HTTP error ${response.status}`);
};
