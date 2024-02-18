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
					return <div key={memory.id}>{memory.name}</div>;
				})}
		</div>
	);
}
