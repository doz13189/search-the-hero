import SearchComponent from "./SearchComponent";

export default async function Search() {
	return (
		<main className="min-h-screen container mx-auto py-24 px-3">
			<div className="mb-3">
				<SearchComponent />
			</div>
		</main>
	);
}
