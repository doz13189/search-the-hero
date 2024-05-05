"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";
import { createQuery } from "./search";

export const EditFilterButton: FC<{ rarity: string; tags: string[] }> = ({
	rarity,
	tags,
}) => {
	const router = useRouter();
	return (
		<button
			type="submit"
			className="
			my-1
			px-4
			py-1
			text-sm
			bg-yellow
			border-2
			border-grey
			rounded-lg
		"
			onClick={() => router.push(`/search?${createQuery(rarity, tags)}`)}
		>
			Edit Filters
		</button>
	);
};
