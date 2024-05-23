import { getTagLabel } from "@/app/_data/_common/label";
import { FC } from "react";
import { z } from "zod";;
import { HeroSchema } from "@/app/_data/hero/schema";

export const Tags: FC<{ memory: z.infer<typeof HeroSchema> }> = ({
	memory,
}) => {
	return (
		<>
			{memory.tags.map((tag) => (
				<span
					key={tag}
					className="inline-block bg-yellow text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded"
				>
					{getTagLabel(tag)}
				</span>
			))}
		</>
	);
};

