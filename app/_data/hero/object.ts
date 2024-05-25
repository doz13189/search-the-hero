import { z } from "zod";
import { HeroesSchema } from "./schema";

export const heroes: z.infer<typeof HeroesSchema> = {
	heroes: [
		{
			id: 1161007,
			epithet: "穿く灼熱",
			name: "エンデヴァー",
			rarity: "UR",
			resist: {
				burning: 100,
				frozen: 50,
				frostbite: 50,
			},
			critical: 10,
			defense: 100,
			plusUltra: {
				description:
				'敵単体に@key1%ダメージ、高確率(80%)で燃焼(4ターン)を付与/自分のアクションスキル威力@key2%アップ(4ターン)/敵が燃焼の時、このスキルに貫通を付与',
				levels: [
					{ level: 1, skill: [{ key1: 650, key2: 30, key3: null }] },
					{ level: 2, skill: [{ key1: 650, key2: 30, key3: null }] },
					{ level: 3, skill: [{ key1: 650, key2: 30, key3: null }] },
					{ level: 4, skill: [{ key1: 650, key2: 30, key3: null }] },
					{ level: 5, skill: [{ key1: 650, key2: 30, key3: null }] },
				],
			},
			actionSkill1 : {
				description:
				'敵全体に@key1%ダメージ、クリティカル率@key2%ダウン(4ターン)、中確率(55%)で燃焼(4ターン)を付与/自分のHPが50%以上の時、このスキルに貫通を付与/敵にかばう、挑発のキャラがいたら、このスキルのスキル威力@key3%アップ',
				levels: [
					{ level: 1, skill: [{ key1: 300, key2: 30, key3: 30 }] },
					{ level: 2, skill: [{ key1: 300, key2: 30, key3: 30 }] },
					{ level: 3, skill: [{ key1: 300, key2: 30, key3: 30 }] },
					{ level: 4, skill: [{ key1: 300, key2: 30, key3: 30 }] },
					{ level: 5, skill: [{ key1: 300, key2: 30, key3: 30 }] },
				],
			},
			actionSkill2 : {
				description:
				'敵全体に@key1%ダメージ/このスキルでCHAIN成功時、自分のプルスウルトラゲージ@key2%アップ/敵に燃焼のキャラがいたら、このスキルに貫通を付与/敵にかばう、挑発のキャラがいたら、このスキルのスキル威力@key3%アップ',
				levels: [
					{ level: 1, skill: [{ key1: 300, key2: 30, key3: 30 }] },
					{ level: 2, skill: [{ key1: 300, key2: 30, key3: 30 }] },
					{ level: 3, skill: [{ key1: 300, key2: 30, key3: 30 }] },
					{ level: 4, skill: [{ key1: 300, key2: 30, key3: 30 }] },
					{ level: 5, skill: [{ key1: 300, key2: 30, key3: 30 }] },
				],
			},
			autoSkill1 : {
				description:
				'自分にスタン完全耐性を付与/自分が敵を1人撃破した時、自分のパワー@key1%アップ/自分が戦闘不能になった時、味方全体にくいしばり(2回)を付与、逆境(5ターン)を付与',
				levels: [
					{ level: 1, skill: [{ key1: 25, key2: null, key3: null }] },
					{ level: 2, skill: [{ key1: 25, key2: null, key3: null }] },
					{ level: 3, skill: [{ key1: 25, key2: null, key3: null }] },
					{ level: 4, skill: [{ key1: 25, key2: null, key3: null }] },
					{ level: 5, skill: [{ key1: 25, key2: null, key3: null }] },
				],
			},
			autoSkill2 : {
				description:
				'自分のHPが80%以上の時、自分のスキル威力@key1%アップ/自分のHPが50%以上の時、味方全体のスピード@key2%アップ/自分のHPが30%以上の時、自分のパワー@key3%アップ',
				levels: [
					{ level: 1, skill: [{ key1: 30, key2: 25, key3: 30 }] },
					{ level: 2, skill: [{ key1: 30, key2: 25, key3: 30 }] },
					{ level: 3, skill: [{ key1: 30, key2: 25, key3: 30 }] },
					{ level: 4, skill: [{ key1: 30, key2: 25, key3: 30 }] },
					{ level: 5, skill: [{ key1: 30, key2: 25, key3: 30 }] },
				],
			},
			tags: [
				"allBurning",
				"singleActionSkillImpactUp",
				"piercingShot",
				"allCriticalHitRateDown",
				"singleSkillImpactUp",
				"stunImmunity",
				"singlePowerUp",
				"lastStand",
				"allSpeedUp",
			],
		},
	]
	,
};
