import { FC, Suspense } from "react";
import { getMemories } from "../../handler/requests";
import SearchComponent from "../SearchComponent";

const NoMemories: FC = () => {
	return (
		<>No Data...</>
	);
}

const Memory: FC<{ id: number, name: string}> = ({ id, name}) => {
	return (
		<div key={id}>{name}</div>
	);
}

const Memories: FC<{ tags: string }> = ({
	tags
}) => {
	const memories = getMemories(tags);
	return (
		memories.then(response => {
			if (!response) {
				return <NoMemories />;
			}

			if (response?.length === 0) {
				return <NoMemories />;
			}

			return response.map(memory => (
				<Memory id={memory.id} name={memory.name} />
			))
		}).catch(err => {
			console.error(err);
			return <NoMemories />;
		})
	);
}

export default async function Tags(args: {
	params: { tags: string };
	searchParams: object;
}) {
	const tags = args.params.tags;
	console.log("fire" )

	return (
		<div className="min-h-screen container mx-auto py-5 px-3">
			<div className="mb-3">
				<SearchComponent />
			</div>

			<Suspense fallback={<>Loading...</>}>
				<Memories tags={tags} />
			</Suspense>
		</div>
	);
}
