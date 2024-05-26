import { HeroesSchema } from "@/app/_data/hero/schema";

export const getHeroes = async (rarity: string, tags: string) => {
	let query = "";
	if (tags) {
		query = `tags=${tags}`
	}

	if (rarity) {
		query = query + `&rarity=${rarity}`;
	}

	const response = await fetch(
		`${process.env.API_URL}/api/heroes?${query}`,
		{
			next: { revalidate: 10 },
		},
	);

	if (response.ok) {
		const data = await response.json();
		const result = HeroesSchema.safeParse(data);
		if (result.success) {
			return result.data;
		}

		throw new Error("Invalid response data");
	}
	console.error(response);
	throw new Error(`HTTP error ${response.status}`);
};
