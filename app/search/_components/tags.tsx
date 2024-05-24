import { getTagLabel } from "@/app/_data/_common/label";
import { FC } from "react";
import { z } from "zod";;
import { HeroSchema } from "@/app/_data/hero/schema";
import { MemorySchema } from "@/app/_data/memory/schema";

export const Tags: FC<{ tags: z.infer<typeof HeroSchema>["tags"] | z.infer<typeof MemorySchema>["tags"] }> = ({
	tags,
}) => {
	return (
		<>
			{tags.map((tag) => (
				<span
					key={tag}
					className="inline-block bg-yellow text-yellow-800 text-xs me-2 px-3.5 py-0.5 rounded"
				>
					{getTagLabel(tag)}
				</span>
			))}
		</>
	);
};

