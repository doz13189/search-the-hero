import { HeroesSchema } from "@/app/_data/hero/schema";

export const getHeroes = async (rarity: string, tags: string) => {
	const response = await fetch(
		`${process.env.API_URL}/api/heroes?tags=${tags}`,
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
