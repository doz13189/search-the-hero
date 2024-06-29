"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";
import { createQuery } from "../_lib/create-query";

export const EditFilterButton: FC<{ pathname: string, rarity: string; skills: string[], name?: string; tags?: string[], }> = ({
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
			className="
			my-1
			px-4
			py-1
			w-32
			text-sm
			bg-yellow
			border-2
			border-grey
			rounded-lg
		"
			onClick={() => router.push(`/search/${pathname}?${createQuery(rarity, skills, name, tags)}`)}
		>
			検索条件変更
		</button>
	);
};
