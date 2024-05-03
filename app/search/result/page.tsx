import { Suspense } from "react";
import { SearchFilters } from "../SearchComponent";
import { EditFilterButton } from "./edit-filter-button";
import { Memories } from "./memories";

export default async function Tags(args: {
	searchParams: { rarity: string; tags: string };
}) {
	const argRarity = args.searchParams?.rarity;
	const argTags = args.searchParams?.tags?.split(",");

	return (
		<div className="min-h-screen container mx-auto py-5 px-3">
			<div className="mb-3">
				<SearchFilters rarity={argRarity} tags={argTags} />
				<div
					className="
					flex
					justify-end
				"
				>
					<EditFilterButton rarity={argRarity} tags={argTags} />
				</div>
			</div>

			<Suspense fallback={"Loading..."}>
				<Memories args={args} />
			</Suspense>
		</div>
	);
}
