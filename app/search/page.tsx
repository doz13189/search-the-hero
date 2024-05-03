import SearchComponent from "./SearchComponent";

export default async function Search(args: {
	searchParams: { rarity: string; tags: string };
}) {
	return (
		<main className="py-5 px-3">
			<div className="mb-3">
				<SearchComponent args={args} />
			</div>
		</main>
	);
}
