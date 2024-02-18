import SearchComponent from "../SearchComponent";
import { getMemories } from "../requests";

export default async function Tags(args: {
	params: { tags: string };
	searchParams: object;
}) {
	const tags = args.params.tags;
	const memories = await getMemories(tags);

	return (
		<div className="min-h-screen container mx-auto py-24 px-3">
			<div className="mb-3">
				<SearchComponent />
			</div>

			{memories.response
				// biome-ignore lint/suspicious/noExplicitAny: あとで修正する
				.map((memory: any) => {
					// let description = memory.description;
					// description = description.replace(
					// 	"@key1",
					// 	String(memory.levels[0].skill[0].key1),
					// );
					// console.log(description);

					// description = description.replace(
					// 	"@key2",
					// 	String(memory.levels[0].skill[0].key2),
					// );
					// console.log(description);

					// description = description.replace(
					// 	"@key3",
					// 	String(memory.levels[0].skill[0].key3),
					// );

					return (
						<div>
							<div key={memory.id}>{memory.name}</div>
							{/* <div>{description}</div> */}
						</div>
					);
				})}
		</div>
	);
}
