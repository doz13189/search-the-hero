import { z } from "zod";
import { Rarity, skillTags } from "../_common/schema";
import { typedObjectKeys } from "../_common/utils";

const [firstKey, ...otherKeys] = typedObjectKeys(skillTags);
export const MemorySchema = z.object({
	id: z.number(),
	name: z.string(),
	description: z.string(),
	rarity: Rarity,
	levels: z.array(
		z.object({
			level: z.number(),
			skill: z.array(
				z.object({
					key1: z.number(),
					key2: z.number(),
					key3: z.number(),
				}),
			),
		}),
	),
	tags: z.array(z.enum([firstKey, ...otherKeys]))
});

export const MemoriesSchema = z.object({
	memories: z.array(MemorySchema),
});
