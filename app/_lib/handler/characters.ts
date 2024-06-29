import { CharactersSchema } from "@/app/_data/character/schema";

export const getCharacters = async (rarity: string, name: string, tags: string, skills: string) => {
	let query = "";
	if (skills) {
		query = `skills=${skills}`
	}

	if (rarity) {
		query = query + `&rarity=${rarity}`;
	}

	if (name) {
		query = query + `&name=${name}`;
	}

	if (tags) {
		query = query + `&tags=${tags}`;
	}

	const response = await fetch(
		`${process.env.API_URL}/api/characters?${query}`,
		{
			next: { revalidate: 10 },
		},
	);

	if (response.ok) {
		const data = await response.json();
		const result = CharactersSchema.safeParse(data);
		if (result.success) {
			return result.data;
		}

		console.error(result.error.errors);
		throw new Error("Invalid response data");
	}
	console.error(response);
	throw new Error(`HTTP error ${response.status}`);
};
