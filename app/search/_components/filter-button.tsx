"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";
import { createQuery } from "../_lib/create-query";

export const FilterButton: FC<{ pathname: string, rarity: string; skills: string[], name?: string; tags?: string[] }> = ({
	pathname,
	rarity,
	skills,
	name,
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
		${skills.length === 0 && !rarity && !name && (tags?.length === 0 || !tags) ? "bg-gray-300 text-gray-500" : "bg-yellow"}
  `}
		onClick={() =>
			router.push(`/search/${pathname}/result?${createQuery(rarity, skills, name, tags)}`)
		}
		disabled={skills.length === 0 && !rarity && !name && (tags?.length === 0 || !tags)}
	>
		検索
	</button>
	);
};
