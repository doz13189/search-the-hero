import { HeroSchema, HeroesSchema } from "@/app/_data/hero/schema";
import { z } from "zod";

export const getHero = async (id: string) => {
	const response = await fetch(
		`${process.env.API_URL}/api/hero?id=${id}`,
		{
			next: { revalidate: 10 },
		},
	);

	if (response.ok) {
		const data = await response.json();
		const result = z.object({
			heroes: HeroSchema,
		}).safeParse(data);

		if (result.success) {
			return result.data;
		}

		throw new Error("Invalid response data");
	}
	console.error(response);
	throw new Error(`HTTP error ${response.status}`);
};
