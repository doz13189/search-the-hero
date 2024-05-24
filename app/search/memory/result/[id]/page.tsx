import { MemorySchema } from "@/app/_data/memory/schema";
import { Tags } from "@/app/search/_components/tags";
import { z } from "zod";


const createDescription = (memory: z.infer<typeof MemorySchema>) => {
	let description = memory.description;
	for (const keys of memory.levels[3].skill)  {
		for (const key in keys) {
			// @ts-ignore: fixme
			description = description.replace(`@${key}`, `${keys[key]}`)
		}
	}
	return description;
}

export default function Page({ params }: { params: { id: string } }) {
	const response = fetch(
		`${process.env.API_URL}/api/memory?id=${params.id}`,
		{
			next: { revalidate: 10 },
		},
	);

	return response.then((value) => {
		if (value.ok) {
			const data = value.json();
			return data.then((data) => {
				return (
					<div className="min-h-screen container mx-auto py-1 px-3">
						<div className="py-1">{`[${data.memories.rarity}] ${data.memories.name}`}</div>
						<div className="py-1">
						<Tags tags={data.memories} />
						</div>
						<div className="
							mt-1
							p-1
							text-xs
							bg-light-gray
							rounded-lg
						">{createDescription(data.memories)}</div>
					</div>
				);
			});
		} else {
			return <div>Not found</div>;
		}
	})
}