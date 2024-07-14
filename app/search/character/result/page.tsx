import { Suspense } from "react";
import { EditFilterButton } from "../../_components/edit-filter-button";
import { SearchFilters } from "../../_components/search-filters";
import { Characters } from "./_components/list";

export default async function CharacterSearchResult(args: {
	searchParams: { rarity: string; name: string; skills: string; tags: string, offset: string, limit: string };
}) {
	const argRarity = args.searchParams?.rarity;
	const argName = args.searchParams?.name;
	const argSkills = args.searchParams?.skills?.split(",");
	const argTags = args.searchParams?.tags?.split(",");

	return (
		<div className="min-h-screen container mx-auto py-1 px-3">
			<div className="mb-3">
				<SearchFilters rarity={argRarity} name={argName} skills={argSkills} tags={argTags} />
				<div
					className="
					flex
					justify-end
				"
				>
					<EditFilterButton pathname={"character"} rarity={argRarity} name={argName} skills={argSkills} tags={argTags} />
				</div>
			</div>

			<Suspense fallback={"Loading..."}>
				<Characters args={args} />
			</Suspense>
		</div>
	);
}
