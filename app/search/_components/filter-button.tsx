"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";
import { createQuery } from "../_lib/create-query";

export const FilterButton: FC<{ pathname: string, rarity: string; tags: string[] }> = ({
	pathname,
	rarity,
	tags
}) => {
	const router = useRouter();

	return (
		<button
		type="submit"
		className={`
		my-1
		px-4
		py-1
		w-32
		text-sm
		border-2
		border-grey
		rounded-lg
		${tags.length === 0 ? "bg-gray-300 text-gray-500" : "bg-yellow"}
  `}
		onClick={() =>
			router.push(`/search/${pathname}/result?${createQuery(rarity, tags)}`)
		}
		disabled={tags.length === 0}
	>
		検索
	</button>
	);
};
