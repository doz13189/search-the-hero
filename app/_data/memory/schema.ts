import { z } from "zod";
import { Rarity, Tags } from "../_common/schema";

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
	tags: z.array(Tags),
});

export const MemoriesSchema = z.object({
	memories: z.array(MemorySchema),
});
