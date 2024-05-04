import { z } from "zod";

export const Rarity = z.enum(["UR", "SR", "R", "N"]);
export const Tags = z.enum([
	"singleBuffPowerUP",
	"allBuffPowerUP",
	"singleBuffDefenseUP",
	"allBuffDefenseUP",
	"singleBuffSpeedUP",
	"allBuffSpeedUP",
	"singleBuffMaxHpUP",
	"allBuffMaxHpUP",
	"singleBuffCriticalUp",
	"AllBuffSkillImpactUp",
	"AllBuffPlusUltraGaugeUp",
]);

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
