
import { getTagLabel } from "@/app/_data/_common/schema";
import { FC } from "react";
import { Tags } from "./tags";

export const SearchFilters: FC<{ rarity: string; tags: string[] }> = ({
	rarity,
	tags,
}) => {
	return (
		<div className="relative">
			<div className="inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
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
			<div className="ps-10">
				{rarity &&
					<span
						key={rarity}
						className="inline-block text-xs"
					>
						{`${rarity},`}
					</span>
				}
				{tags.map((tag) => (
					<span
						key={tag}
						className="inline-block text-xs"
					>
						{`${getTagLabel(tag as any)},`}
					</span>
				))}
			</div>

		</div>
	);
};