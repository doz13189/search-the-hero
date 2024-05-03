import { z } from "zod";
import { MemoriesSchema } from "./schema";
// Critical Hit Rate UP
// Critical Resistance UP
// Ecstatic
// Cooldown Time DOWN
// Skill Impact UP
// Hit Rate UP
// Normal Attack Impact UP
// Critical Hit Impact UP
// Action Skill Impact UP
// Plus Ultra Move Impact UP
// Normal Attack Damage DOWN
// Critical Damage DOWN
// Skill Damage DOWN
// Action Skill Damage DOWN
// Plus Ultra Move Damage DOWN
// Plus Ultra Gauge UP
// Damage DOWN
// Counter
// Status Ailment Null
// Evasion
// Barrier
// Double Attack
// HP Regeneration
// Cover
// Hide
// Damage Taken Restore
// Last Stand
// Resilience
// Composure
// Camouflage
// Bullseye
// Piercing Shot
// Dealt Damage Restore
// Reduce Burning and Bleeding
// Burning Damage DOWN
// Bleeding Damage DOWN
// Recovery
// Remove Buffs
// Overwhelm
// Persistence
// Phase Damage DOWN
// Elasticity
// Multi-Use Skills
// Cancel Status Ailments
// Sharp Eye
// Agile
// Status Ailment Counter
// Confusion Hit Rate UP
// Burn Hit Rate UP
// Bleed Hit Rate UP
// Paralysis Hit Rate UP
// Bind Hit Rate UP
// Freeze Hit Rate UP
// Charm Hit Rate UP
// Blind Hit Rate UP
// Fear Hit Rate UP
// Frostbite Hit Rate UP
// Hellfire Hit Rate UP
// Stun Hit Rate UP
// Aggro
// Plus Ultra Gauge Charging UP
// Power DOWN
// Defense DOWN
// Speed DOWN
// Max HP DOWN
// Critical Hit Rate DOWN
// Critical Resistance DOWN
// PU Gauge Fill Rate DOWN
// Cooldown Time UP
// Skill Impact DOWN
// Hit Rate DOWN
// Critical Skill Impact DOWN
// Action Skill Impact DOWN
// Plus Ultra Move Skill Impact DOWN
// Plus Ultra Gauge DOWN
// Skills Sealed
// Confusion
// Burning
// Bleeding
// Paralysis
// Bound
// Frozen
// Charmed
// Blind
// Fear
// Meat Lump
// Remove Status Changes
// Stun
// Buff Block
// Recovery Block
// Confusion Hit Rate DOWN
// Burn Hit Rate DOWN
// Bleed Hit Rate DOWN
// Paralysis Hit Rate DOWN
// Bind Hit Rate DOWN
// Freeze Hit Rate DOWN
// Charm Hit Rate DOWN
// Blind Hit Rate DOWN
// Fear Hit Rate DOWN
// Frostbite Hit Rate DOWN
// Hellfire Hit Rate DOWN
// Fatigue
// Frostbite
// Hellfire
// Power DOWN Resist. UP
// Defense DOWN Resist. UP
// Speed DOWN Resist. UP
// Max HP DOWN Resist. UP
// Crit. Hit Rate DOWN Resist. UP
// Skill Impact DOWN Resist. UP
// PU Gauge DOWN Resist. UP
// Skills Sealed Resist. UP
// Confusion Resist. UP
// Burn Resist. UP
// Bleed Resist. UP
// Paralysis Resist. UP
// Bind Resist. UP
// Freeze Resist. UP
// Charm Resist. UP
// Blind Resist. UP
// Fear Resist. UP
// Meat Lump Resist. UP
// Frostbite Resist. UP
// Hellfire Resist. UP
// Stun Resist. UP
// Buff Block Resist. UP
// Power DOWN Resist. DOWN
// Defense DOWN Resist. DOWN
// Speed DOWN Resist. DOWN
// Max HP DOWN Resist. DOWN
// Crit. Hit Rate DOWN Resist. DOWN
// Skill Impact DOWN Resist. DOWN
// PU Gauge DOWN Resist. DOWN
// Skills Sealed Resist. DOWN
// Confusion Resist. DOWN
// Burn Resist. DOWN
// Bleed Resist. DOWN
// Paralysis Resist. DOWN
// Bind Resist. DOWN
// Freeze Resist. DOWN
// Charm Resist. DOWN
// Blind Resist. DOWN
// Fear Resist. DOWN
// Meat Lump Resist. DOWN
// Frostbite Resist. DOWN
// Buff Block Resist. DOWN
// Power DOWN Immunity
// Defense DOWN Immunity
// Speed DOWN Immunity
// Max HP DOWN Immunity
// Crit. Hit Rate DOWN Immunity
// Critical Resistance DOWN Immunity
// Skill Impact DOWN Immunity
// Critical Skill Impact DOWN Immunity
// Action Skill Impact DOWN Immunity
// Plus Ultra Move Skill Impact DOWN Immunity
// Plus Ultra Gauge DOWN Immunity
// Skills Sealed Immunity
// Confusion Immunity
// Burn Immunity
// Bleed Immunity
// Paralysis Immunity
// Bind Immunity
// Freeze Immunity
// Charm Immunity
// Blind Immunity
// Fear Immunity
// Meat Lump Immunity
// Frostbite Immunity
// Stun Immunity
// Buff Block Immunity
// Recovery Block Immunity
// Battle Rules
// Stress
// Fa Jin

export const memories: z.infer<typeof MemoriesSchema> = {
	memories: [
		{
			id: 2400127,
			name: "Global Ver. 2nd Anniv.!",
			description:
				'自分のスピード@key1%アップ、恐怖耐性アップ/"力タイプ"、"技タイプ"、"知タイプ"が装備した時、自分のクリティカル率@key2%アップ/"信タイプ"、"破タイプ"が装備した時、自分のディフェンス@key3%アップ',
			rarity: "UR",
			levels: [
				{ level: 1, skill: [{ key1: 20, key2: 20, key3: 20 }] },
				{ level: 2, skill: [{ key1: 25, key2: 20, key3: 20 }] },
				{ level: 3, skill: [{ key1: 30, key2: 20, key3: 20 }] },
				{ level: 4, skill: [{ key1: 35, key2: 30, key3: 30 }] },
			],
			tags: [
				"singleBuffSpeedUp",
				"singleBuffDefenseUp",
				"singleBuffCriticalUp",
			],
		},
		{
			id: 2400123,
			name: "一撃で仕留めろ",
			description:
				'"力タイプ"が装備した時、自分の最大HP@key1%アップ、バリア(1ヒット)を付与(最大1回)/3ターン毎に、味方全体のスキル威力@key2%アップ(1ターン)(最大3回)、プルスウルトラゲージ@key3%アップ(最大3回)',
			rarity: "UR",
			levels: [
				{ level: 1, skill: [{ key1: 20, key2: 20, key3: 20 }] },
				{ level: 2, skill: [{ key1: 25, key2: 20, key3: 20 }] },
				{ level: 3, skill: [{ key1: 30, key2: 20, key3: 20 }] },
				{ level: 4, skill: [{ key1: 30, key2: 25, key3: 20 }] },
			],
			tags: [
				"singleBuffMaxHpUP",
				"AllBuffSkillImpactUp",
				"AllBuffPlusUltraGaugeUp",
				"AllBuffSkillImpactUp",
			],
		},
	],
};
