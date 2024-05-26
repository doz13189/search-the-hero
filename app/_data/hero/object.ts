import { z } from "zod";
import { HeroesSchema } from "./schema";

export const heroes: z.infer<typeof HeroesSchema> = {
	heroes: [
		{
			"id": "1101001",
			"epithet": "日々の修練",
			"name": "緑谷出久",
			"rarity": "r",
			"type": "int",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "デトロイトスマッシュ（Plus Ultra） 敵単体に450%ダメージ/自分のパワーを10%ダウン(3ターン)/与えたダメージの一定量を自分も受ける",
				"levels": [
					{
						"level": 1,
						"skill": [
							{
								"key1": null,
								"key2": null,
								"key3": null
							}
						]
					},
					{
						"level": 2,
						"skill": [
							{
								"key1": null,
								"key2": null,
								"key3": null
							}
						]
					},
					{
						"level": 3,
						"skill": [
							{
								"key1": null,
								"key2": null,
								"key3": null
							}
						]
					},
					{
						"level": 4,
						"skill": [
							{
								"key1": null,
								"key2": null,
								"key3": null
							}
						]
					},
					{
						"level": 5,
						"skill": [
							{
								"key1": null,
								"key2": null,
								"key3": null
							}
						]
					}
				]
			},
			"actionSkill1": {
				"name": "Action Skill Lv.2",
				"description": "デラウェアスマッシュ DX 敵単体に300%ダメージ/与えたダメージの一定量を自分も受ける Cool Down 4 Turns",
				"levels": [
					{
						"level": 1,
						"skill": [
							{
								"key1": null,
								"key2": null,
								"key3": null
							}
						]
					},
					{
						"level": 2,
						"skill": [
							{
								"key1": null,
								"key2": null,
								"key3": null
							}
						]
					},
					{
						"level": 3,
						"skill": [
							{
								"key1": null,
								"key2": null,
								"key3": null
							}
						]
					},
					{
						"level": 4,
						"skill": [
							{
								"key1": null,
								"key2": null,
								"key3": null
							}
						]
					},
					{
						"level": 5,
						"skill": [
							{
								"key1": null,
								"key2": null,
								"key3": null
							}
						]
					}
				]
			},
			"actionSkill2": {
				"name": "Action Skill Lv.2",
				"description": "迎撃態勢 DX 味方全体のパワーを35%アップ(3ターン) Cool Down 4 Turns",
				"levels": [
					{
						"level": 1,
						"skill": [
							{
								"key1": null,
								"key2": null,
								"key3": null
							}
						]
					},
					{
						"level": 2,
						"skill": [
							{
								"key1": null,
								"key2": null,
								"key3": null
							}
						]
					},
					{
						"level": 3,
						"skill": [
							{
								"key1": null,
								"key2": null,
								"key3": null
							}
						]
					},
					{
						"level": 4,
						"skill": [
							{
								"key1": null,
								"key2": null,
								"key3": null
							}
						]
					},
					{
						"level": 5,
						"skill": [
							{
								"key1": null,
								"key2": null,
								"key3": null
							}
						]
					}
				]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "鋭い分析力 自分のHPが50％未満の時、自分のパワーを30%アップ",
				"levels": [
					{
						"level": 1,
						"skill": [
							{
								"key1": null,
								"key2": null,
								"key3": null
							}
						]
					},
					{
						"level": 2,
						"skill": [
							{
								"key1": null,
								"key2": null,
								"key3": null
							}
						]
					},
					{
						"level": 3,
						"skill": [
							{
								"key1": null,
								"key2": null,
								"key3": null
							}
						]
					},
					{
						"level": 4,
						"skill": [
							{
								"key1": null,
								"key2": null,
								"key3": null
							}
						]
					},
					{
						"level": 5,
						"skill": [
							{
								"key1": null,
								"key2": null,
								"key3": null
							}
						]
					}
				]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "行動派オタク 自分のHPが50％以上の時、自分のスピードを25%アップ",
				"levels": [
					{
						"level": 1,
						"skill": [
							{
								"key1": null,
								"key2": null,
								"key3": null
							}
						]
					},
					{
						"level": 2,
						"skill": [
							{
								"key1": null,
								"key2": null,
								"key3": null
							}
						]
					},
					{
						"level": 3,
						"skill": [
							{
								"key1": null,
								"key2": null,
								"key3": null
							}
						]
					},
					{
						"level": 4,
						"skill": [
							{
								"key1": null,
								"key2": null,
								"key3": null
							}
						]
					},
					{
						"level": 5,
						"skill": [
							{
								"key1": null,
								"key2": null,
								"key3": null
							}
						]
					}
				]
			},
			"tags": ["singlePowerDown"]
		}
	]
};
