import { z } from "zod";
import { Rarity, Tags } from "../_common/schema";

export const HeroSchema = z.object({
	id: z.number(),
	epithet: z.string(),
	name: z.string(),	
	rarity: Rarity,
	// levels: z.array(
	// 	z.object({
	// 		level: z.number(),
	// 		skill: z.array(
	// 			z.object({
	// 				key1: z.number(),
	// 				key2: z.number(),
	// 				key3: z.number(),
	// 			}),
	// 		),
	// 	}),
	// ),
	tags: z.array(Tags),
});

export const HeroesSchema = z.object({
	heroes: z.array(HeroSchema),
});
