import { z } from "zod";
import { Rarity, Skills } from "../_common/schema";

export const MemorySchema = z.object({
	id: z.string(),
	name: z.string(),
	rarity: Rarity,
	skills: z.array(Skills),
	stats: z.array(z.object({
		hp: z.string(),
		power: z.string(),
		speed: z.string(),
	})),
	description: z.object({
		skilllv1: z.string(),
		skilllv2: z.string(),
		skilllv3: z.string(),
		skilldxlv1: z.string(),
	}),
});

export const MemoriesSchema = z.object({
	memories: z.array(MemorySchema),
});
