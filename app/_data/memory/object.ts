import { z } from "zod";
import { MemoriesSchema } from "./schema";


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
				"singleSpeedUp",
				"singleDefenseUp",
				"singleCriticalHitRateUp",
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
				"singleMaxHpUp",
			],
		},
	],
};
