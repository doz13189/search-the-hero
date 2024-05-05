export const writeMessage = async (message: string) => {
	const response = await fetch(`${process.env.API_URL}/api/message`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		next: { revalidate: 10 },
		body: JSON.stringify({ message }),
	});

	// if (response.ok) {
	// 	const data = await response.json();
	// 	const result = MemoriesSchema.safeParse(data);
	// 	if (result.success) {
	// 		return result.data;
	// 	}

	// 	throw new Error("Invalid response data");
	// }
	// console.error(response);
	// throw new Error(`HTTP error ${response.status}`);
};
