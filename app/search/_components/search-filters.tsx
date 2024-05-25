
import { getTagLabel } from "@/app/_data/_common/schema";
import { FC } from "react";

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
					rounded-lg
					overflow-hidden
					text-overflow-ellipsis
					whitespace-nowrap
				"
			>
				{rarity && `${rarity},`}
				{tags &&
					`${tags
						.map((tag) => getTagLabel(tag as any))
						.join(",")}`}
			</p>
		</div>
	);
};