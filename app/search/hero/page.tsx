"use client";

import { FilterButton } from "../_components/filter-button";
import { RarityForm } from "../_components/rarity-form";
import { ResetButton } from "../_components/reset-button";
import { SearchFilters } from "../_components/search-filters";
import { SkillForm } from "../_components/skill-form";
import { useState } from "react";

export default function Search(args: {
	searchParams: { rarity: string; tags: string };
}) {
	const argRarity = args.searchParams?.rarity;
	const argTags = args.searchParams?.tags?.split(",");

	const [rarity, setRarity] = useState(argRarity || "");
	const [tags, setTags] = useState<string[]>(argTags || []);

	return (
		<div className="py-1 px-3">
			<div className="mb-3">
				<div>
					<RarityForm rarity={rarity} setRarity={setRarity} />
				</div>

				<div className="my-2">
					<SkillForm tags={tags} setTags={setTags} />
				</div>

				<SearchFilters rarity={rarity} tags={tags} />

				<label
					htmlFor="search"
					className="text-sm font-medium text-gray-900 sr-only text-white"
				>
					Search
				</label>
				<div className="flex justify-end">
					<div className="flex-initial">
						<ResetButton setRarity={setRarity} setTags={setTags} />
					</div>
					<div className="flex-initial">
						<FilterButton pathname="hero" rarity={rarity} tags={tags} />
					</div>
				</div>
			</div>

			{/*
			<div className="fixed bottom-3 left-1">
				<Link
					href={"/message"}
					className="
						my-1
						mx-1
						px-4
						py-1
						text-sm
						bg-yellow
						border-2
						border-grey
						rounded-lg
					"
				>
					Question
				</Link>
			</div>
			*/}
		</div>
	);
}
