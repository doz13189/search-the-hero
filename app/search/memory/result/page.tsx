import { Suspense } from "react";
import { Memories } from "./_components/list";
import { SearchFilters } from "../../_components/search-filters";
import { EditFilterButton } from "../../_components/edit-filter-button";

export default function MemorySearchResult(args: {
	searchParams: { rarity: string; skills: string, offset: string, limit: string };
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
					<EditFilterButton pathname={"memory"} rarity={argRarity} skills={argSkills} />
				</div>
			</div>

			<Suspense fallback={"Loading..."}>
				<Memories args={args} />
			</Suspense>
		</div>
	);
}
