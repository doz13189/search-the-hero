"use client";

import { Rarity, Tags } from "@/app/_data/memory/schema";
import { useRouter } from "next/navigation";
import { ChangeEvent, FC, useState } from "react";

export const createQuery = (rarity: string, tags: string[]) => {
	const rarityQuery = rarity ? `rarity=${rarity}` : null;
	const tagsQuery = tags?.length > 0 ? `tags=${tags.join(",")}` : null;

	const queries = [rarityQuery, tagsQuery].filter((query) => query !== null);
	return queries.join("&");
};

export const SearchFilters: FC<{ rarity: string; tags: string[] }> = ({
	rarity,
	tags,
}) => {
	return (
		<div className="relative">
			<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
				<svg
					className="w-4 h-4 text-gray-500 text-gray-400"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 20 20"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
					/>
				</svg>
			</div>
			<p
				id="search"
				className="
				w-full
				p-4
				ps-10
				h-14
				text-sm
				text-gray-900
				bg-light-gray
				border-2
				border-grey
				rounded-lg
				overflow-hidden
				text-overflow-ellipsis
				whitespace-nowrap
			"
			>
				{rarity && `${rarity},`}
				{tags && `${tags.join(",")}`}
			</p>
		</div>
	);
};

const SearchComponent: FC<{
	args: {
		searchParams: { rarity: string; tags: string };
	};
}> = ({ args }) => {
	const argRarity = args.searchParams?.rarity;
	const argTags = args.searchParams?.tags?.split(",");

	const [rarity, setRarity] = useState(argRarity || "");
	const [tags, setTags] = useState<string[]>(argTags || []);

	const router = useRouter();

	const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const options = event.target.options;
		const values: string[] = [];

		for (let i = 0; i < options.length; i++) {
			if (options[i].selected) {
				values.push(options[i].value);
			}
		}

		setTags(values);
	};

	return (
		<div>
			<label
				htmlFor="search"
				className="mb-2 text-sm font-medium text-gray-900 sr-only text-white"
			>
				Search
			</label>

			<SearchFilters rarity={rarity} tags={tags} />

			<div
				className="
					flex
					justify-end
				"
			>
				<button
					type="submit"
					className="
						my-3
						mx-3
						px-4
						py-2
						text-sm
						bg-yellow
						border-2
						border-grey
						rounded-lg
					"
					onClick={() => {
						setRarity("");
						setTags([]);
					}}
				>
					Reset
				</button>
				<button
					type="submit"
					className="
						my-3
						px-4
						py-2
						text-sm
						bg-yellow
						border-2
						border-grey
						rounded-lg
					"
					onClick={() =>
						router.push(`/search/result?${createQuery(rarity, tags)}`)
					}
				>
					Search
				</button>
			</div>

			<div className="my-3">
				<form>
					<label htmlFor="countries" className="block mb-2">
						レアリティ
					</label>
					<select
						id="countries"
						className="
						block
						bg-gray
						border-2
						border-grey
						rounded-lg
						w-full
						p-2.5
						"
						onChange={(event) => setRarity(event.target.value)}
						value={rarity}
					>
						<option value={""}>レアリティを選んでください</option>
						{Rarity.options.map((rarity) => {
							return (
								<option key={rarity} value={rarity}>
									{rarity}
								</option>
							);
						})}
					</select>
				</form>
			</div>

			<div className="my-3">
				<form>
					<label htmlFor="countries_multiple" className="block mb-2">
						スキル効果
					</label>
					<select
						multiple
						id="countries_multiple"
						className="
							block
							p-2.5
							bg-gray
							border-2
							border-grey
							rounded-lg
							w-full
						"
						onChange={handleSelectChange}
						value={tags}
					>
						<option value={""}>スキル効果を選んでください</option>
						{Tags.options.map((tag) => {
							return (
								<option key={tag} value={tag}>
									{tag}
								</option>
							);
						})}
					</select>
				</form>
			</div>
		</div>
	);
};

export default SearchComponent;
