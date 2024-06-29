import { Suspense } from "react";
import { EditFilterButton } from "../../_components/edit-filter-button";
import { SearchFilters } from "../../_components/search-filters";
import { Characters } from "./_components/list";

export default async function CharacterSearchResult(args: {
	searchParams: { rarity: string; skills: string };
}) {
	const argRarity = args.searchParams?.rarity;
	const argSkills = args.searchParams?.skills?.split(",");

	return (
		<div className="min-h-screen container mx-auto py-1 px-3">
			<div className="mb-3">
				<SearchFilters rarity={argRarity} skills={argSkills} />
				<div
					className="
					flex
					justify-end
				"
				>
					<EditFilterButton pathname={"character"} rarity={argRarity} skills={argSkills} />
				</div>
			</div>

			<Suspense fallback={"Loading..."}>
				<Characters args={args} />
			</Suspense>
		</div>
	);
}
