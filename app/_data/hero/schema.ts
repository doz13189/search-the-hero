import { z } from "zod";
import { Rarity, Type, skillTags } from "../_common/schema";
import { typedObjectKeys } from "../_common/utils";

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
	name: z.string(),
	description: z.string(),
	levels: LevelsSchema,
});

const [firstKey, ...otherKeys] = typedObjectKeys(skillTags);
export const HeroSchema = z.object({
	id: z.string(),
	epithet: z.string(),
	name: z.string(),
	rarity: Rarity,
	type: Type,
	// NOTE: データ取得の難易度が高いため、一旦、保留
	// resist: z.object({
	// 	burning: z.number(),
	// 	frozen: z.number(),
	// 	frostbite: z.number(),
	// }),
	// critical: z.number(),
	// defense: z.number(),
	plusUltra: SkillSchema,
	actionSkill1: SkillSchema,
	actionSkill2: SkillSchema,
	autoSkill1: SkillSchema,
	autoSkill2: SkillSchema,
	tags: z.array(z.enum([firstKey, ...otherKeys]))
});

export const HeroesSchema = z.object({
	heroes: z.array(HeroSchema),
});