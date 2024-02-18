export const getMemories = async (searchParams: string) => {
	const response = await fetch(`${process.env.API_URL}/api/memory?tags=${searchParams}`, {
		next: { revalidate: 10 },
	});
	if (response.ok) {
		return response.json();
	}
	return [];
};

