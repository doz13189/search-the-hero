import { MemoriesSchema } from "@/data/memories";

export const getMemories = async (searchParams: string) => {
	const response = await fetch(
		`${process.env.API_URL}/api/memory?tags=${searchParams}`,
		{
			next: { revalidate: 10 },
		},
	)

	if (response.ok) {
		const data = await response.json().then((data) => data.response);
		const result = MemoriesSchema.safeParse(data);
		if (result.success) {
			return result.data;
		} else {
			console.error(result.error.errors);
			throw new Error("Invalid response data");
		}
	} else {
		throw new Error(`HTTP error ${response.status}`);
	}
};
