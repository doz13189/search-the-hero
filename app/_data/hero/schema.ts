import { z } from "zod";
import { Rarity, Tags } from "../_common/schema";

const LevelsSchema = z.array(
	z.object({
		level: z.number(),
		skill: z.array(
			z.object({
				key1: z.number().nullable(),
				key2: z.number().nullable(),
				key3: z.number().nullable(),
			}),
		),
	}),
);

const SkillSchema = z.object({
	description: z.string(),
	levels: LevelsSchema,
});

export const HeroSchema = z.object({
	id: z.number(),
	epithet: z.string(),
	name: z.string(),	
	rarity: Rarity,
	resist: z.object({
		burning: z.number(),
		frozen: z.number(),
		frostbite: z.number(),
	}),
	critical: z.number(),
	defense: z.number(),
	plusUltra: SkillSchema,
	actionSkill1: SkillSchema,
	actionSkill2: SkillSchema,
	autoSkill1: SkillSchema,
	autoSkill2: SkillSchema,
	tags: z.array(Tags),
});

export const HeroesSchema = z.object({
	heroes: z.array(HeroSchema),
});
