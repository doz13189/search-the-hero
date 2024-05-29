import { z } from "zod";
import { HeroesSchema } from "./schema";

export const heroes: z.infer<typeof HeroesSchema> = {
	heroes: [
		{
			"id": "1101001",
			"validationStatus": "valid",
			"epithet": "日々の修練",
			"name": "緑谷出久",
			"rarity": "r",
			"type": "int",
			"plusUltra": {
				"name": "デトロイトスマッシュ",
				"description": "敵単体に450%ダメージ/自分のパワーを10%ダウン(3ターン)/与えたダメージの一定量を自分も受ける",
				"tags": ["powerDownSingle"]	
			},
			"actionSkill1": {
				"name": "デラウェアスマッシュ",
				"description": "敵単体に300%ダメージ/与えたダメージの一定量を自分も受ける",
				"coolDown": "Cool Down 4 Turns",
				"tags": []

			},
			"actionSkill2": {
				"name": "迎撃態勢",
				"description": "味方全体のパワーを35%アップ(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["powerUpAll"]

			},
			"autoSkill1": {
				"name": "鋭い分析力",
				"description": "自分のHPが50％未満の時、自分のパワーを30%アップ",
				"tags": ["powerUpSingle"]

			},
			"autoSkill2": {
				"name": "行動派オタク",
				"description": "自分のHPが50％以上の時、自分のスピードを25%アップ",
				"tags": ["speedUpSingle"]

			},
		},
		{
			"id": "1101002",
			"validationStatus": "valid",
			"epithet": "学校生活",
			"name": "緑谷出久",
			"rarity": "r",
			"type": "mnd",
			"plusUltra": {
				"name": "デラウェアスマッシュ",
				"description": "敵単体に450%ダメージ/自分のスピードを10%ダウン(3ターン)/与えたダメージの一定量を自分も受ける",
				"tags": ["speedDownSingle"]

			},
			"actionSkill1": {
				"name": "集中力",
				"description": "自分のプルスウルトラゲージを50%アップ",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["plusUltraGaugeUpSingle"]
			},
			"actionSkill2": {
				"name": "デトロイトスマッシュ",
				"description": "敵単体に300%ダメージ/自分のパワーを10%ダウン(3ターン)/与えたダメージの一定量を自分も受ける",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["powerDownSingle"]

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "正義感 クリティカル発生時、自分のスキル威力を30%アップ(3ターン)",
				"tags": ["skillImpactUpSingle"]

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "後継者 自分のHPが50％未満の時、自分のスキル威力を40%アップ",
				"tags": ["skillImpactUpSingle"]

			},
		},
		{
			"id": "1101003",
			"validationStatus": "valid",
			"epithet": "救けるヒーローに",
			"name": "緑谷出久",
			"rarity": "sr",
			"type": "mnd",
			"plusUltra": {
				"name": "デトロイトスマッシュ",
				"description": "敵単体に550%ダメージ/自分にくいしばり(1回)を付与/与えたダメージの一定量を自分も受ける",
				"tags": ["lastStandSingle"]

			},
			"actionSkill1": {
				"name": "デトロイトスマッシュ",
				"description": "敵単体に350%ダメージ/自分のパワーを45%アップ(3ターン)/与えたダメージの一定量を自分も受ける",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["powerUpSingle"]

			},
			"actionSkill2": {
				"name": "不屈の精神",
				"description": "味方全体のパワーを30%アップ(3ターン)/自分のプルスウルトラゲージを20%アップ",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["powerUpAll", "plusUltraGaugeUpSingle"]

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "秘めた闘争本能 クリティカル発生時、自分のスキル威力を35%アップ(3ターン)",
				"tags": ["skillImpactUpSingle"]

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "観察眼 自分のHPが50％未満の時、自分のクリティカル率を30%アップ",
				"tags": ["criticalHitRateUpSingle"]

			},
		},
		{
			"id": "1101004",
			"validationStatus": "valid",
			"epithet": "渾身の一撃",
			"name": "緑谷出久",
			"rarity": "ur",
			"type": "str",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "ワン・フォー・オールフルカウル 敵単体に750%ダメージ/自分に逆境(3ターン)を付与/与えたダメージの一定量を自分も受ける",
				"tags": ["resilienceSingle"]

			},
			"actionSkill1": {
				"name": "デラウェアスマッシュ",
				"description": "敵単体に450%ダメージ/自分のパワーを40%アップ(3ターン)/与えたダメージの一定量を自分も受ける",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["powerUpSingle"]
			},
			"actionSkill2": {
				"name": "フルカウル",
				"description": "自分のパワーを60%アップ(3ターン)/自分のスピードを60%アップ(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["powerUpSingle", "speedUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "立ち向かう意思 クリティカル発生時、自分のスキル威力を40％アップ(3ターン)/自分のHPが50％未満の時、戦闘中に1度だけ自分にHP20%自動回復(3ターン)を付与",
				"tags": ["skillImpactUpSingle", "hpRegenerationSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "灯火を受け継ぐ者 自分のHPが50％未満の時、自分のクリティカル率を35%アップ",
				"tags": ["criticalHitRateUpSingle"]
			},
		},
		{
			"id": "1101005",
			"validationStatus": "valid",
			"epithet": "みんなで料理",
			"name": "緑谷出久",
			"rarity": "sr",
			"type": "str",
			"plusUltra": {
				"name": "デラウェアスマッシュ",
				"description": "敵単体に550%ダメージ/自分のパワーを40%アップ(3ターン)/与えたダメージの一定量を自分も受ける",
				"tags": ["powerUpSingle"]

			},
			"actionSkill1": {
				"name": "臨戦態勢",
				"description": "味方全体のプルスウルトラゲージを30%アップ/自分のパワーを20%アップ(3ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["plusUltraGaugeUpAll", "powerUpSingle"]
			},
			"actionSkill2": {
				"name": "デラウェアスマッシュ",
				"description": "敵単体に350%ダメージ/敵がパワーダウン状態だったらスキル威力が40%アップ/与えたダメージの一定量を自分も受ける",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["skillImpactUpSingle"]

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "ヒーローの本質 味方全体の\"力タイプ\"キャラのパワーを20%アップ",
				"tags": ["powerUpAll"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "咄嗟の判断力 自分のHPが50％以上の時、自分のパワーを30%アップ",
				"tags": ["powerUpSingle"]
			},
		},
		{
			"id": "1101006",
			"validationStatus": "valid",
			"epithet": "自分だけの技",
			"name": "緑谷出久",
			"rarity": "ur",
			"type": "mnd",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "フルカウル・シュートスタイル 敵単体に600%ダメージ/自分のスピードに応じてスキル威力アップ",
				"tags": ["skillImpactUpSingle"]

			},
			"actionSkill1": {
				"name": "フルカウル",
				"description": "自分のスピードを50%アップ(3ターン)/自分のプルスウルトラゲージを30%アップ/自分のHPが50%未満の時、自分のプルスウルトラ技の威力を30%アップ(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["speedUpSingle", "plusUltraGaugeUpSingle", "plusUltraMoveImpactUpSingle"]
			},
			"actionSkill2": {
				"name": "デトロイトスマッシュ",
				"description": "敵単体に450%ダメージ/自分のパワーを40%アップ(3ターン)/与えたダメージの一定量を自分も受ける",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["powerUpSingle"]

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "最高のヒーローに 自分のHPが50％未満の時、戦闘中に1度だけ自分のプルスウルトラゲージを50%アップ",
				"tags": ["plusUltraGaugeUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "力のコントロール 自分のHPが50％以上の時、自分のクリティカル率を30%アップ",
				"tags": ["criticalHitRateUpSingle"]

			},
		},
		{
			"id": "1101007",
			"validationStatus": "valid",
			"epithet": "期待に応えたい",
			"name": "緑谷出久",
			"rarity": "ur",
			"type": "abl",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "デラウェアスマッシュ・エアフォース 敵単体に700%ダメージ/敵単体のクリティカル率を35%ダウン(3ターン)",
				"tags": ["criticalHitRateDownSingle"]
			},
			"actionSkill1": {
				"name": "デラウェアスマッシュ",
				"description": "敵単体に400%ダメージ/敵単体のスピードを30%ダウン(4ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["speedDownSingle"]
			},
			"actionSkill2": {
				"name": "デトロイトスマッシュ",
				"description": "敵単体に400%ダメージ/敵がスピードダウン状態だったらスキル威力が50%アップ",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["skillImpactUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "未知数な活力 自分のHPが50％以上の時、自分のスキル威力を50%アップ",
				"tags": ["skillImpactUpSingle"]

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "懸ける想い 自分のHPが50％未満の時、戦闘中に1度だけ自分に回避(3回)を付与し、自分のスピードを40%アップ",
				"tags": ["evasionSingle", "speedUpSingle"]
			},
		},
		{
			"id": "1101008",
			"validationStatus": "valid",
			"epithet": "ワールドヒーローズ",
			"name": "緑谷出久",
			"rarity": "ur",
			"type": "dst",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "デラウェア・デトロイトスマッシュ 敵単体に700%ダメージ/敵が\"敵\"だったらスキル威力を40%アップ/敵がパワーダウンだったらスキル威力を30%アップ",
				"tags": ["skillImpactUpSingle"]

			},
			"actionSkill1": {
				"name": "デトロイトスマッシュ",
				"description": "敵単体に350%ダメージ/自分のスピードに応じてスキル威力アップ/敵単体のパワーを20%ダウン(3ターン)",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["powerDownSingle", "skillImpactUpSingle"]

			},
			"actionSkill2": {
				"name": "デラウェアスマッシュ",
				"description": "敵単体に400%ダメージ/自分のスピードを40%アップ(3ターン)/自分のプルスウルトラゲージを30%アップ",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["speedUpSingle", "plusUltraGaugeUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "常に心に原点を 自分のHPが50%未満の時、自分に逆境を付与、自分のパワーを50%アップ、戦闘中に1度だけ自分にくいしばり(3回)を付与",
				"tags": ["resilienceSingle", "powerUpSingle", "lastStandSingle"]

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "心を制して 戦闘開始後、自分のプルスウルトラゲージを30%アップ/WAVE開始後、味方全体のクリティカル率を30%アップ(3ターン)",
				"tags": ["plusUltraGaugeUpSingle", "criticalHitRateUpAll"]
			},
		},
		{
			"id": "1101001",
			"validationStatus": "valid",
			"epithet": "日々の修練",
			"name": "緑谷出久",
			"rarity": "r",
			"type": "int",
			"plusUltra": {
				"name": "デトロイトスマッシュ",
				"description": "敵単体に450%ダメージ/自分のパワーを10%ダウン(3ターン)/与えたダメージの一定量を自分も受ける",
				"tags": ["powerDownSingle"]

			},
			"actionSkill1": {
				"name": "デラウェアスマッシュ",
				"description": "敵単体に300%ダメージ/与えたダメージの一定量を自分も受ける",
				"coolDown": "Cool Down 4 Turns",
				"tags": []

			},
			"actionSkill2": {
				"name": "迎撃態勢",
				"description": "味方全体のパワーを35%アップ(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["powerUpAll"]

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "鋭い分析力 自分のHPが50％未満の時、自分のパワーを30%アップ",
				"tags": ["powerUpSingle"]

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "行動派オタク 自分のHPが50％以上の時、自分のスピードを25%アップ",
				"tags": ["speedUpSingle"]
			},
		},
		{
			"id": "1101002",
			"validationStatus": "valid",
			"epithet": "学校生活",
			"name": "緑谷出久",
			"rarity": "r",
			"type": "mnd",
			"plusUltra": {
				"name": "デラウェアスマッシュ",
				"description": "敵単体に450%ダメージ/自分のスピードを10%ダウン(3ターン)/与えたダメージの一定量を自分も受ける",
				"tags": ["speedDownSingle"]
			},
			"actionSkill1": {
				"name": "集中力",
				"description": "自分のプルスウルトラゲージを50%アップ",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["plusUltraGaugeUpSingle"]
			},
			"actionSkill2": {
				"name": "デトロイトスマッシュ",
				"description": "敵単体に300%ダメージ/自分のパワーを10%ダウン(3ターン)/与えたダメージの一定量を自分も受ける",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["powerDownSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "正義感 クリティカル発生時、自分のスキル威力を30%アップ(3ターン)",
				"tags": ["skillImpactUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "後継者 自分のHPが50％未満の時、自分のスキル威力を40%アップ",
				"tags": ["skillImpactUpSingle"]
			},
		},
		{
			"id": "1101003",
			"validationStatus": "valid",
			"epithet": "救けるヒーローに",
			"name": "緑谷出久",
			"rarity": "sr",
			"type": "mnd",
			"plusUltra": {
				"name": "デトロイトスマッシュ",
				"description": "敵単体に550%ダメージ/自分にくいしばり(1回)を付与/与えたダメージの一定量を自分も受ける",
				"tags": ["lastStandSingle"]
			},
			"actionSkill1": {
				"name": "デトロイトスマッシュ",
				"description": "敵単体に350%ダメージ/自分のパワーを45%アップ(3ターン)/与えたダメージの一定量を自分も受ける",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["powerUpSingle"]
			},
			"actionSkill2": {
				"name": "不屈の精神",
				"description": "味方全体のパワーを30%アップ(3ターン)/自分のプルスウルトラゲージを20%アップ",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["powerUpAll", "plusUltraGaugeUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "秘めた闘争本能 クリティカル発生時、自分のスキル威力を35%アップ(3ターン)",
				"tags": ["skillImpactUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "観察眼 自分のHPが50％未満の時、自分のクリティカル率を30%アップ",
				"tags": ["criticalHitRateUpSingle"]
			},
		},
		{
			"id": "1101004",
			"validationStatus": "valid",
			"epithet": "渾身の一撃",
			"name": "緑谷出久",
			"rarity": "ur",
			"type": "str",
			"plusUltra": {
				"name": "ワン・フォー・オールフルカウル",
				"description": "敵単体に750%ダメージ/自分に逆境(3ターン)を付与/与えたダメージの一定量を自分も受ける",
				"tags": ["resilienceSingle"]
			},
			"actionSkill1": {
				"name": "デラウェアスマッシュ",
				"description": "敵単体に450%ダメージ/自分のパワーを40%アップ(3ターン)/与えたダメージの一定量を自分も受ける",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["powerUpSingle"]
			},
			"actionSkill2": {
				"name": "フルカウル",
				"description": "自分のパワーを60%アップ(3ターン)/自分のスピードを60%アップ(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["powerUpSingle", "speedUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "立ち向かう意思 クリティカル発生時、自分のスキル威力を40％アップ(3ターン)/自分のHPが50％未満の時、戦闘中に1度だけ自分にHP20%自動回復(3ターン)を付与",
				"tags": ["skillImpactUpSingle", "hpRegenerationSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "灯火を受け継ぐ者 自分のHPが50％未満の時、自分のクリティカル率を35%アップ",
				"tags": ["criticalHitRateUpSingle"]
			},
		},
		{
			"id": "1101005",
			"validationStatus": "valid",
			"epithet": "みんなで料理",
			"name": "緑谷出久",
			"rarity": "sr",
			"type": "str",
			"plusUltra": {
				"name": "デラウェアスマッシュ",
				"description": "敵単体に550%ダメージ/自分のパワーを40%アップ(3ターン)/与えたダメージの一定量を自分も受ける",
				"tags": ["powerUpSingle"]
			},
			"actionSkill1": {
				"name": "臨戦態勢",
				"description": "味方全体のプルスウルトラゲージを30%アップ/自分のパワーを20%アップ(3ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["plusUltraGaugeUpAll", "powerUpSingle"]
			},
			"actionSkill2": {
				"name": "デラウェアスマッシュ",
				"description": "敵単体に350%ダメージ/敵がパワーダウン状態だったらスキル威力が40%アップ/与えたダメージの一定量を自分も受ける",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["skillImpactUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "ヒーローの本質 味方全体の\"力タイプ\"キャラのパワーを20%アップ",
				"tags": ["powerUpAll"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "咄嗟の判断力 自分のHPが50％以上の時、自分のパワーを30%アップ",
				"tags": ["powerUpSingle"]
			},
		},
		{
			"id": "1101006",
			"validationStatus": "valid",
			"epithet": "自分だけの技",
			"name": "緑谷出久",
			"rarity": "ur",
			"type": "mnd",
			"plusUltra": {
				"name": "フルカウル・シュートスタイル",
				"description": "敵単体に600%ダメージ/自分のスピードに応じてスキル威力アップ",
				"tags": ["skillImpactUpSingle"]
			},
			"actionSkill1": {
				"name": "フルカウル",
				"description": "自分のスピードを50%アップ(3ターン)/自分のプルスウルトラゲージを30%アップ/自分のHPが50%未満の時、自分のプルスウルトラ技の威力を30%アップ(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["speedUpSingle", "plusUltraGaugeUpSingle", "plusUltraMoveImpactUpSingle"]
			},
			"actionSkill2": {
				"name": "デトロイトスマッシュ",
				"description": "敵単体に450%ダメージ/自分のパワーを40%アップ(3ターン)/与えたダメージの一定量を自分も受ける",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["powerUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "最高のヒーローに 自分のHPが50％未満の時、戦闘中に1度だけ自分のプルスウルトラゲージを50%アップ",
				"tags": ["plusUltraGaugeUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "力のコントロール 自分のHPが50％以上の時、自分のクリティカル率を30%アップ",
				"tags": ["criticalHitRateUpSingle"]
			},
		},
		{
			"id": "1101007",
			"validationStatus": "valid",
			"epithet": "期待に応えたい",
			"name": "緑谷出久",
			"rarity": "ur",
			"type": "abl",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "デラウェアスマッシュ・エアフォース 敵単体に700%ダメージ/敵単体のクリティカル率を35%ダウン(3ターン)",
				"tags": ["criticalHitRateDownSingle"]
			},
			"actionSkill1": {
				"name": "デラウェアスマッシュ",
				"description": "敵単体に400%ダメージ/敵単体のスピードを30%ダウン(4ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["speedDownSingle"]
			},
			"actionSkill2": {
				"name": "デトロイトスマッシュ",
				"description": "敵単体に400%ダメージ/敵がスピードダウン状態だったらスキル威力が50%アップ",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["skillImpactUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "未知数な活力 自分のHPが50％以上の時、自分のスキル威力を50%アップ",
				"tags": ["skillImpactUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "懸ける想い 自分のHPが50％未満の時、戦闘中に1度だけ自分に回避(3回)を付与し、自分のスピードを40%アップ",
				"tags": ["evasionSingle", "speedUpSingle"]
			},
		},
		{
			"id": "1101008",
			"validationStatus": "valid",
			"epithet": "ワールドヒーローズ",
			"name": "緑谷出久",
			"rarity": "ur",
			"type": "dst",
			"plusUltra": {
				"name": "デラウェア・デトロイトスマッシュ",
				"description": "敵単体に700%ダメージ/敵が\"敵\"だったらスキル威力を40%アップ/敵がパワーダウンだったらスキル威力を30%アップ",
				"tags": ["skillImpactUpSingle"]
			},
			"actionSkill1": {
				"name": "デトロイトスマッシュ",
				"description": "敵単体に350%ダメージ/自分のスピードに応じてスキル威力アップ/敵単体のパワーを20%ダウン(3ターン)",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["powerDownSingle", "skillImpactUpSingle"]
			},
			"actionSkill2": {
				"name": "デラウェアスマッシュ",
				"description": "敵単体に400%ダメージ/自分のスピードを40%アップ(3ターン)/自分のプルスウルトラゲージを30%アップ",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["speedUpSingle", "plusUltraGaugeUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "常に心に原点を 自分のHPが50%未満の時、自分に逆境を付与、自分のパワーを50%アップ、戦闘中に1度だけ自分にくいしばり(3回)を付与",
				"tags": ["resilienceSingle", "powerUpSingle", "lastStandSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "心を制して 戦闘開始後、自分のプルスウルトラゲージを30%アップ/WAVE開始後、味方全体のクリティカル率を30%アップ(3ターン)",
				"tags": ["plusUltraGaugeUpSingle", "criticalHitRateUpAll"]
			},
		},
		{
			"id": "1101009",
			"validationStatus": "valid",
			"epithet": "譲れない想い",
			"name": "緑谷出久",
			"rarity": "ur",
			"type": "int",
			"plusUltra": {
				"name": "バージニアスマッシュ",
				"description": "敵単体に650%ダメージ/自分にくいしばり(2回)を付与",
				"tags": ["lastStandSingle"]
			},
			"actionSkill1": {
				"name": "デトロイトスマッシュ",
				"description": "敵単体に400%ダメージ/このスキルで2CHAIN以上成功時、自分のスキル威力を20%アップ(4ターン)/自分のHPが50%未満の時、自分のスキル威力を20%アップ(4ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["skillImpactUpSingle"]
			},
			"actionSkill2": {
				"name": "全身全霊",
				"description": "自分のプルスウルトラ技の威力を50%アップ(4ターン)/自分のプルスウルトラゲージを50%アップ",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["plusUltraMoveImpactUpSingle", "plusUltraGaugeUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "確立されし戦術 自分のHPが50％未満の時、自分のパワーを35%アップ、自分のスピードを20%アップ",
				"tags": ["powerUpSingle", "speedUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "全力でかかってこい！！ 自分のHPが30％未満の時、自分のスキル威力を45%アップ、戦闘中に1度だけ自分にくいしばり(3回)を付与",
				"tags": ["skillImpactUpSingle", "lastStandSingle"]
			},
		},
		{
			"id": "1101010",
			"validationStatus": "valid",
			"epithet": "集う英傑",
			"name": "緑谷出久",
			"rarity": "ur",
			"type": "str",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "デトロイトスラッシュ 敵単体に700%ダメージ/与えたダメージの一定量を自分も受ける/自分が不屈状態の時、自分のアクションスキルのクールタイムを1短縮する/自分のHPが50%未満の時、スキル威力が30%アップ",
				"tags": ["lastStandSingle", "cooldownTimeReductionSingle", "skillImpactUpSingle"]

			},
			"actionSkill1": {
				"name": "デトロイトスマッシュ",
				"description": "敵単体に500%ダメージ/自分のプルスウルトラゲージを25%アップ/与えたダメージの一定量を自分も受ける",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["plusUltraGaugeUpSingle"]

			},
			"actionSkill2": {
				"name": "全身常時身体許容上限",
				"description": "自分のパワーを40%アップ(3ターン)/自分のスキル威力を40%アップ(4ターン)/自分にくいしばり(1回)を付与",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["powerUpSingle", "skillImpactUpSingle", "lastStandSingle"]

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "救けて勝つ WAVE開始時、自分のプルスウルトラゲージを15%アップ/味方が1人戦闘不能になった時、自分のスキル威力を30%アップ/味方が2人戦闘不能になった時、自分のパワーを30%アップ",
				"tags": ["plusUltraGaugeUpSingle", "skillImpactUpSingle", "powerUpSingle"]

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "後戻りなんて出来ない 自分のHPが20%未満の時、戦闘中に1度だけ自分に不屈(3ターン)を付与/味方が3人戦闘不能になった時、自分のパワーを60%アップ/味方が4人戦闘不能になった時、自分に不屈(3ターン)を付与",
				"tags": ["persistence", "powerUpSingle"]
			},
		},
		{
			"id": "1101011",
			"validationStatus": "valid",
			"epithet": "浴衣で満喫！",
			"name": "緑谷出久",
			"rarity": "ur",
			"type": "int",
			"plusUltra": {
				"name": "ファイアワークスマッシュ",
				"description": "敵単体に700%ダメージ/自分が高揚状態の時、このスキルに貫通を付与/自分以外の味方全体に高揚(3ターン)を付与",
				"tags": ["piercingShot", "ecstaticAll"]

			},
			"actionSkill1": {
				"name": "セントルイススマッシュ",
				"description": "敵単体に400%ダメージ/自分が高揚状態の時、このスキルに貫通を付与し、スキル威力を20%アップ",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["piercingShot", "skillImpactUpSingle"]
			},
			"actionSkill2": {
				"name": "デラウェアスマッシュ",
				"description": "敵単体に400%ダメージ/自分のパワーを35%アップ(3ターン)/自分が高揚状態の時、敵単体のディフェンスを20%ダウン(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["powerUpSingle", "defenseDownSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "絶対心配させない 味方全体の\"雄英高校生徒\"のパワーを25%アップ",
				"tags": ["powerUpAll"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "僕の力で君を超える！ 3ターン目から、自分に高揚を付与/自分のHPが50%未満の時、戦闘中に1度だけ味方全体のプルスウルトラゲージを20%アップ",
				"tags": ["ecstaticSingle", "plusUltraGaugeUpAll"]
			},
		},
		{
			"id": "1101012",
			"validationStatus": "valid",
			"epithet": "次なる進化",
			"name": "緑谷出久",
			"rarity": "ur",
			"type": "dst",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "ヒューストンスマッシュ 敵単体に700%ダメージ/敵単体に中 確率 (40%)で拘束(1ターン)、低 確率 (10%)で拘束(2ターン)を付与/自分が逆境状態の時、拘束状態にする確率を上げる/自分のスピードがアップしている時、このスキルは必中となる",
				"tags": ["boundSingle", "bindHitRateUpSingle", "bullseye"]
			},
			"actionSkill1": {
				"name": "セントルイススマッシュ",
				"description": "敵単体に350%ダメージ/自分のスピードを40%アップ(3ターン)/自分に回避(1回)を付与",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["speedUpSingle", "evasionSingle"]
			},
			"actionSkill2": {
				"name": "デトロイトスマッシュ",
				"description": "敵単体に400%ダメージ/自分のプルスウルトラゲージを30%アップ",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["plusUltraGaugeUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "更なる向上 自分のHPが50%未満の時、自分に逆境を付与、自分のディフェンスを40%アップ",
				"tags": ["resilienceSingle", "defenseUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "考えるより先に行動 自分のパワーが5%アップ(毎ターン)(最大30%)/自分のHPが50%以上の時、自分のスキル威力を30%アップ",
				"tags": ["powerUpSingle", "skillImpactUpSingle"]
			},
		},
		{
			"id": "1101013",
			"validationStatus": "valid",
			"epithet": "振り絞れ",
			"name": "緑谷出久",
			"rarity": "sr",
			"type": "int",
			"plusUltra": {
				"name": "黒鞭",
				"description": "自分に不屈(1ターン)を付与/敵単体に500%ダメージ/敵単体に中 確率 (40%)で拘束(1ターン)を付与/与えたダメージの一定量を自分も受ける/自分のアクションスキルのクールタイムを1短縮する/自分の一時的な強化を全て解除",
				"tags": ["resilienceSingle", "boundSingle", "cooldownTimeReductionSingle", "removeBuffsSingle"]

			},
			"actionSkill1": {
				"name": "自己犠牲",
				"description": "自分の最大HPを35%アップ(3ターン)/自分のスキル威力を40%アップ(3ターン)/自分のプルスウルトラゲージを35%アップ/自分にくいしばり(4回)を付与",
				"coolDown": "Cool Down 7 Turns",
				"tags": ["maxHpUpSingle", "skillImpactUpSingle", "plusUltraGaugeUpSingle", "lastStandSingle"]

			},
			"actionSkill2": {
				"name": "デトロイトスマッシュ",
				"description": "敵単体に475%ダメージ/自分のパワーがアップしている時、スキル威力を30%アップ/与えたダメージの一定量を自分も受ける",
				"coolDown": "Cool Down 6 Turns",
				"tags": ["skillImpactUpSingle"]

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "必ず救ける 戦闘開始後、自分のディフェンスを15%アップ(3ターン)/自分が出血状態となる/自分のHPが5%未満になるたびに、自分にくいしばり(1回)を付与",
				"tags": ["defenseUpSingle", "bleedingSingle", "lastStandSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "挫折を乗り越えた男 自分に逆境を付与/自分がくいしばり状態の時、自分のパワーを15%アップ/自分のスキルでCHAIN成功時、自分のアクションスキルのクールタイムを1短縮する/戦闘開始後、自分のディフェンスが15%ダウン(3ターン)",
				"tags": ["resilienceSingle", "powerUpSingle", "cooldownTimeReductionSingle", "defenseDownSingle"]
			},
		},
		{
			"id": "1101014",
			"validationStatus": "valid",
			"epithet": "晴れ着で勝負",
			"name": "緑谷出久",
			"rarity": "ur",
			"type": "abl",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "ニューイヤースマッシュ 敵単体に700%ダメージ/敵単体に中 確率 (40%)でスタン(2ターン)を付与/このスキルは必中となる",
				"tags": ["stunSingle", "bullseye"]
			},
			"actionSkill1": {
				"name": "並行処理",
				"description": "自分にくいしばり(2回)を付与/自分のクリティカル率を30%アップ(5ターン)/自分のクリティカル時の威力を50%アップ(5ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["lastStandSingle", "criticalHitRateUpSingle"]
			},
			"actionSkill2": {
				"name": "デラウェアスマッシュ",
				"description": "敵単体に350%ダメージ/敵単体のスピードを40%ダウン(3ターン)/敵単体に低 確率 (20%)でスタン(2ターン)を付与/敵が\"力タイプ\"だったらこのスキルは必中となる",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["speedDownSingle", "stunSingle", "bullseye"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "最大のパフォーマンス 自分のHPが10%未満の時、戦闘中に1度だけ自分のクリティカル時の威力を40%アップ、自分のアクションスキルのクールタイムを5短縮する/クリティカルが発生するたびに、自分のパワーを8%アップ(最大6回)、自分のディフェンスを5%アップ(最大6回)",
				"tags": ["criticalHitImpactUpSingle", "cooldownTimeReductionSingle", "powerUpSingle", "defenseUpSingle"]

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "重ねた経験 自分のHPが20%下がるごとに、自分のクリティカル率を15%アップ",
				"tags": ["criticalHitRateUpSingle"]
			},
		},
		{
			"id": "1101015",
			"validationStatus": "valid",
			"epithet": "孤独な戦い",
			"name": "緑谷出久",
			"rarity": "ur",
			"type": "str",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "マンチェスタースマッシュ 敵単体に650%ダメージ/敵単体に中 確率 (50%)でスタン(2ターン)を付与/自分の発勁が10個以上の時、自分のアクションスキルのクールタイムを2短縮する/自分の発勁が30個以上の時、自分に高揚(8ターン)を付与し、パワーを60%アップ(8ターン)/自分の発勁が30個以上の時、クリティカル率を60%アップ/自分の発勁が30個以上の時、自分の発勁が30個減少/自分の発勁が30個未満の時、自分の発勁が6個減少",
				"tags": ["stunSingle", "cooldownTimeReductionSingle", "ecstaticSingle", "powerUpSingle", "criticalHitRateUpSingle", "faJin"]

			},
			"actionSkill1": {
				"name": "黒鞭＆シュートスタイル",
				"description": "敵単体に450%ダメージ/敵単体に中 確率 (45%)でスタン(2ターン)を付与/自分の発勁が10個以上の時、自分のクリティカル率を40%アップ/自分の発勁が15個以上の時、自分のクリティカル時の威力を45%アップ/自分の発勁が3個減少",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["stunSingle", "criticalHitRateUpSingle", "criticalHitImpactUpSingle", "faJin"]
			},
			"actionSkill2": {
				"name": "漲る力",
				"description": "自分のクリティカル率を30%アップ(4ターン)/自分のプルスウルトラゲージを20%アップ/自分に発勁を3個増加/このスキルでCHAIN成功時、自分に発勁を3個増加(成功時のCHAIN数に応じて効果アップ)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["criticalHitRateUpSingle", "plusUltraGaugeUpSingle", "faJin"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "常軌を逸する思い 毎ターン、自分に発勁を1個増加/自分の発勁が15個未満の時、自分のクリティカル率を25%アップ/自分の発勁が1個ごとに、自分のスキル威力を3%アップ",
				"tags": ["faJin", "criticalHitRateUpSingle", "skillImpactUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "継承された力 クリティカルが2回発生するたびに、自分に発勁を3個増加/自分の発勁が15個以上の時、自分のパワーを40%アップ、貫通を付与",
				"tags": ["faJin", "powerUpSingle", "piercingShot"]
			},
		},
		{
			"id": "1101016",
			"validationStatus": "valid",
			"epithet": "祝典のRUN",
			"name": "緑谷出久",
			"rarity": "ur",
			"type": "mnd",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "ウイニングシュート 敵単体に650%ダメージ/味方全体のパワーを20%アップ(3ターン)、状態異常無効(2回)を付与/自分にくいしばり(3回)を付与",
				"tags": ["powerUpAll", "statusAilmentNullAll", "lastStandSingle"]

			},
			"actionSkill1": {
				"name": "デラウェアスマッシュ",
				"description": "敵全体に300%ダメージ、クリティカル率を30%ダウン(4ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["criticalHitRateDownAll"]
			},
			"actionSkill2": {
				"name": "臨機応変",
				"description": "味方全体にHP25%自動回復(2ターン)を付与、状態異常無効(2回)を付与、状態異常を2個回復",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["hpRegenerationAll", "statusAilmentNullAll", "cancelStatusAilmentsAll"]

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "伝播する熱 自分に状態異常無効(2回)を付与(最大1回)/自分が状態異常無効の時、味方全体のパワーを20%アップ、ダメージを30%カット",
				"tags": ["statusAilmentNullSingle", "powerUpAll", "damageDownAll"]

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "ピンチを覆す 自分のスキルでCHAIN成功時、味方全体のパワーを10%アップ(最大4回)、自分のプルスウルトラゲージを20%アップ/クリティカル率がダウンしている相手から攻撃を3回受けきった後に、自分のダメージを40%カット(2ターン)",
				"tags": ["powerUpAll", "plusUltraGaugeUpSingle", "damageDownSingle"]

			},
		},
		{
			"id": "1101017",
			"validationStatus": "valid",
			"epithet": "無限の力",
			"name": "緑谷出久",
			"rarity": "ur",
			"type": "abl",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "オセオンスマッシュ 敵単体に650%ダメージ、一時的なかばう、挑発を全て解除/味方全体のスキル威力を35%アップ(3ターン)/このスキルに貫通を付与",
				"tags": ["cover", "skillImpactUpAll", "piercingShot"]

			},
			"actionSkill1": {
				"name": "デトロイトスマッシュ",
				"description": "敵単体に400%ダメージ、中 確率 (40%)でスタン(2ターン)を付与/敵がかばう、挑発だったらこのスキルに貫通を付与、スキル威力を30%アップ",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["stunSingle", "piercingShot", "skillImpactUpSingle"]
			},
			"actionSkill2": {
				"name": "黒鞭",
				"description": "敵単体に375%ダメージ、中 確率 (40%)で拘束(2ターン)を付与、スキル威力を30%ダウン(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["boundSingle", "skillImpactDownSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "柔軟な思考 自分のHPが50%未満の時、自分のアクションスキルのクールタイムを3短縮(最大1回)、プルスウルトラゲージを40%アップ(最大1回)、くいしばり(2ターン)を付与(最大1回)",
				"tags": ["cooldownTimeReductionSingle", "plusUltraGaugeUpSingle", "lastStandSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "謹厳実直 2ターン毎に、自分のプルスウルトラゲージを30%アップ、プルスウルトラ技の威力を20%アップ",
				"tags": ["plusUltraGaugeUpSingle", "plusUltraMoveImpactUpSingle"]
			},
		},
		{
			"id": "1101019",
			"validationStatus": "valid",
			"epithet": "疑似100%",
			"name": "緑谷出久",
			"rarity": "ur",
			"type": "int",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "煙幕全開3rd発勁 敵単体に650%ダメージ/敵全体に中 確率 (40%)で暗闇(3ターン)を付与/自分以外の味方全体に回避(1回)を付与/自分が不屈の時、自分のクールタイム3短縮、このスキルに貫通を付与、スキル威力40%アップ",
				"tags": ["blindAll", "evasionAll", "cooldownTimeReductionSingle", "piercingShot", "skillImpactUpSingle"]

			},
			"actionSkill1": {
				"name": "発勁",
				"description": "自分が必中の時、敵単体の一時的なくいしばり全て解除/敵単体に425%ダメージ/このスキルに貫通を付与/自分が必中の時、このスキルのスキル威力35%アップ",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["removeBuffsSingle", "piercingShot", "skillImpactUpSingle"]

			},
			"actionSkill2": {
				"name": "黒鞭＆シュートスタイル",
				"description": "自分が必中の時、敵単体の一時的な状態異常無効全て解除/敵単体に400%ダメージ、中 確率 (40%)で拘束(2ターン)を付与、ディフェンス25%ダウン(3ターン)/自分が必中の時、このスキルのスキル威力35%アップ",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["removeBuffsSingle", "boundSingle", "defenseDownSingle", "skillImpactUpSingle"]

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "視界制限 1ターン毎に、自分の発勁を1個増加(最大5回)/自分の発勁が3個未満の時、自分に状態異常無効を付与、スピード70%アップ、パワー40%アップ/自分の発勁が4個未満の時、自分に見切り50%を付与",
				"tags": ["faJin", "statusAilmentNullSingle", "speedUpSingle", "powerUpSingle", "sharpEye"]

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "綱渡りの調整 自分の発勁が1個毎に、自分のパワー8%アップ/自分の発勁が3個以上の時、自分に必中を付与/自分の発勁が5個の時、自分に不屈を付与、クリティカル率50%アップ/自分が不屈中に、相手に10回攻撃しきった時、自分の発勁を1個増加(最大1回)",
				"tags": ["faJin", "powerUpSingle", "bullseye", "persistence", "criticalHitRateUpSingle"]

			},
		},
		{
			"id": "1101020",
			"validationStatus": "valid",
			"epithet": "スチームパンク",
			"name": "緑谷出久",
			"rarity": "ur",
			"type": "dst",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "スチームスマッシュ 敵単体に700%ダメージ、一時的な強化3個解除/自分のプルスウルトラ技威力10%アップ(累積)",
				"tags": ["removeBuffsSingle", "plusUltraMoveImpactUpSingle"]

			},
			"actionSkill1": {
				"name": "デトロイトスマッシュ",
				"description": "敵単体に400%ダメージ/味方全体のプルスウルトラゲージ20%アップ、プルスウルトラ技威力45%アップ(4ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["plusUltraGaugeUpAll", "plusUltraMoveImpactUpAll"]
			},
			"actionSkill2": {
				"name": "セントルイススマッシュ",
				"description": "敵単体に400%ダメージ、スキル威力40%ダウン(3ターン)/自分にくいしばり(2回)を付与",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["skillImpactDownSingle", "lastStandSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "勉強熱心 自分に貫通を付与、最大HPダウン完全耐性を付与、プルスウルトラ効率70%アップ",
				"tags": ["piercingShot", "maxHpDownImmunity", "plusUltraEffectUpSingle"]

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "即習得 自分のクリティカル攻撃が1回発生しなかった時、自分のクールタイム1短縮、パワー5%アップ(累積)、スキル威力5%アップ(累積)/自分がクリティカルでない攻撃を1回受けきった時、自分の最大HP5%アップ(最大20回)、ディフェンス2%アップ(最大20回)",
				"tags": ["cooldownTimeReductionSingle", "powerUpSingle", "skillImpactUpSingle", "maxHpUpSingle", "defenseUpSingle"]
			},
		},
		{
			"id": "1102001",
			"validationStatus": "valid",
			"epithet": "日々の修練",
			"name": "爆豪勝己",
			"rarity": "r",
			"type": "dst",
			"plusUltra": {
				"name": "爆速ターボ",
				"description": "敵単体に400%ダメージ/自分のパワーを30%アップ(3ターン)",
				"tags": ["powerUpSingle"]

			},
			"actionSkill1": {
				"name": "A・Pショット",
				"description": "敵単体に250%ダメージ/敵単体に低 確率 (25%)で燃焼(3ターン)を付与",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["burningSingle"]

			},
			"actionSkill2": {
				"name": "傲慢",
				"description": "自分のパワーを40%アップ(3ターン)/自分のスピードを50%アップ(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["powerUpSingle", "speedUpSingle"]

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "天才肌 自分のHPが50％以上の時、自分のスピードを25%アップ",
				"tags": ["speedUpSingle"]

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "頭脳派 WAVE開始後、敵単体のパワーを20%ダウン(3ターン)",
				"tags": ["powerDownSingle"]
			},
		},
		{
			"id": "1102002",
			"validationStatus": "valid",
			"epithet": "学校生活",
			"name": "爆豪勝己",
			"rarity": "r",
			"type": "str",
			"plusUltra": {
				"name": "A・Pショット",
				"description": "敵単体に400%ダメージ/敵単体に低 確率 (30%)で燃焼(3ターン)を付与",
				"tags": ["burningSingle"]

			},
			"actionSkill1": {
				"name": "スタングレネード",
				"description": "敵全体に225%ダメージ/敵全体に低 確率 (25%)で暗闇(2ターン)を付与",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["blindAll"]
			},
			"actionSkill2": {
				"name": "闘争本能",
				"description": "自分のスキル威力を35%アップ(3ターン)/自分のクリティカル率を30%アップ(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["skillImpactUpSingle", "criticalHitRateUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "上昇志向 自分のHPが50％以上の時、自分のパワーを25%アップ",
				"tags": ["powerUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "天性のセンス WAVE開始後、敵単体のクリティカル率を20%ダウン(3ターン)",
				"tags": ["criticalHitRateDownSingle"]
			},
		},
		{
			"id": "1102003",
			"validationStatus": "valid",
			"epithet": "俺が一番だ",
			"name": "爆豪勝己",
			"rarity": "ur",
			"type": "abl",
			"plusUltra": {
				"name": "ハウザーインパクト",
				"description": "敵単体に700%ダメージ/敵が燃焼状態だったらスキル威力が50%アップ",
				"tags": ["skillImpactUpSingle"]

			},
			"actionSkill1": {
				"name": "A・Pショット",
				"description": "敵単体に400%ダメージ/敵単体に中 確率 (55%)で燃焼(3ターン)を付与/このスキルでCHAIN成功時、敵単体のディフェンスを15%ダウン(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["burningSingle", "defenseDownSingle"]
			},
			"actionSkill2": {
				"name": "スタングレネード",
				"description": "敵全体に275%ダメージ/敵全体に中 確率 (40%)で暗闇(3ターン)を付与",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["blindAll"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "爆殺卿 自分で敵を倒すたび、自分のパワーを5%アップ/自分のHPが50％以上の時、自分のパワーを35%アップ",
				"tags": ["powerUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "発汗 自分のパワーが3%アップ(毎ターン)(最大30％)/自分のHPが50％以上の時、自分のスピードを35%アップ",
				"tags": ["powerUpSingle", "speedUpSingle"]
			},
		},
		{
			"id": "1102004",
			"validationStatus": "valid",
			"epithet": "確信する勝利",
			"name": "爆豪勝己",
			"rarity": "sr",
			"type": "str",
			"plusUltra": {
				"name": "A・Pショット",
				"description": "敵単体に450%ダメージ/敵単体に低 確率 (30%)で燃焼(3ターン)を付与/自分のパワーを40%アップ(3ターン)",
				"tags": ["burningSingle", "powerUpSingle"]
			},
			"actionSkill1": {
				"name": "スタングレネード",
				"description": "敵全体に250%ダメージ/敵全体に低 確率 (25%)で暗闇(2ターン)を付与",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["blindAll"]
			},
			"actionSkill2": {
				"name": "闘争心",
				"description": "自分のパワーを50%アップ(3ターン)/自分のプルスウルトラゲージを30%アップ",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["powerUpSingle", "plusUltraGaugeUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "孤高の天才 自分のHPが50％以上の時、自分のパワーを30%アップ",
				"tags": ["powerUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "完璧主義者 自分のHPが50％以上の時、自分のクリティカル率を25%アップ",
				"tags": ["criticalHitRateUpSingle"]
			},
		},
		{
			"id": "1102005",
			"validationStatus": "valid",
			"epithet": "みんなで料理",
			"name": "爆豪勝己",
			"rarity": "sr",
			"type": "abl",
			"plusUltra": {
				"name": "爆速ターボ",
				"description": "敵単体に500%ダメージ/敵単体に低 確率 (30%)で燃焼(3ターン)を付与/敵単体のクリティカル率を25%ダウン(3ターン)",
				"tags": ["burningSingle", "criticalHitRateDownSingle"]
			},
			"actionSkill1": {
				"name": "A・Pショット",
				"description": "敵単体に300%ダメージ/敵単体に中 確率 (40%)で燃焼(3ターン)を付与/このスキルでCHAIN成功時、敵単体のスピードを20%ダウン(3ターン)",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["burningSingle", "speedDownSingle"]
			},
			"actionSkill2": {
				"name": "唯我独尊",
				"description": "敵単体のパワーを35%ダウン(3ターン)/自分のプルスウルトラゲージを40%アップ",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["powerDownSingle", "plusUltraGaugeUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "威圧 WAVE開始後、敵単体のスピードを25%ダウン(3ターン)",
				"tags": ["speedDownSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "完膚なきまでの勝利 WAVE開始後、敵単体のクリティカル率を25%ダウン(3ターン)",
				"tags": ["criticalHitRateDownSingle"]
			},
		},
		{
			"id": "1102007",
			"validationStatus": "valid",
			"epithet": "容赦なき反撃",
			"name": "爆豪勝己",
			"rarity": "ur",
			"type": "dst",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "オールレンジブラスト 敵単体に650%ダメージ/敵単体のディフェンスを30%ダウン(3ターン)",
				"tags": ["defenseDownSingle"]
			},
			"actionSkill1": {
				"name": "爆速ターボ",
				"description": "敵単体に400%ダメージ/自分のプルスウルトラゲージを40%アップ",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["plusUltraGaugeUpSingle"]
			},
			"actionSkill2": {
				"name": "スタングレネード",
				"description": "敵全体に250%ダメージ/敵全体に低 確率 (25%)で暗闇(3ターン)を付与/敵全体のディフェンスを15%ダウン(3ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["blindAll", "defenseDownAll"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "あったまってきた 自分のスキル威力が5%アップ(毎ターン)(最大40％)/戦闘開始から10ターン後、1度だけ自分のプルスウルトラゲージを50%アップ",
				"tags": ["skillImpactUpSingle", "plusUltraGaugeUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "本当に強ぇ奴の勝利 WAVE開始後、自分に余裕(3ターン)を付与/自分のHPが50％以上の時、自分のスピードを30%アップ",
				"tags": ["composureAll", "speedUpSingle"]

			},
		},
		{
			"id": "1102008",
			"validationStatus": "valid",
			"epithet": "ワールドヒーローズ",
			"name": "爆豪勝己",
			"rarity": "ur",
			"type": "str",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "A・Pショットオートカノン 敵単体に700%ダメージ/敵がクリティカル率ダウン状態だったらスキル威力を40%アップ/敵単体のスピードを30%ダウン(3ターン)",
				"tags": ["skillImpactUpSingle", "speedDownSingle"]
			},
			"actionSkill1": {
				"name": "爆速ターボ",
				"description": "敵単体に400%ダメージ/自分のスキル威力を50%アップ(3ターン)/敵単体のディフェンスを25%ダウン(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["skillImpactUpSingle", "defenseDownSingle"]
			},
			"actionSkill2": {
				"name": "A・Pショット",
				"description": "敵単体に400%ダメージ/敵単体に低 確率 (25%)で燃焼(3ターン)を付与/このスキルでCHAIN成功時、敵単体のクリティカル率を30%ダウン(3ターン)、敵単体のスピードを20%ダウン(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["burningSingle", "criticalHitRateDownSingle", "speedDownSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "No.1を超える為に 自分のHPが50%以上の時、自分に余裕を付与、自分のスピードを30%アップ/戦闘開始後、自分のプルスウルトラゲージを30%アップ",
				"tags": ["composureSingle", "speedUpSingle", "plusUltraGaugeUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "力の凝縮 自分のHPが50％未満の時、自分のパワーを40%アップ/WAVE開始後、敵単体のパワーを20%ダウン(3ターン)",
				"tags": ["powerUpSingle", "powerDownSingle"]
			},
		},
		{
			"id": "1102009",
			"validationStatus": "valid",
			"epithet": "爆速の進攻",
			"name": "爆豪勝己",
			"rarity": "ur",
			"type": "mnd",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "爆破式カタパルト 敵単体に700%ダメージ/自分がスピードダウン状態でなければ、スキル威力が20%アップ",
				"tags": ["skillImpactUpSingle"]
			},
			"actionSkill1": {
				"name": "爆速ターボ",
				"description": "敵単体に400%ダメージ/自分のスピードを30%アップ(3ターン)/敵単体のスキル威力を20%ダウン(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["speedUpSingle", "skillImpactDownSingle"]
			},
			"actionSkill2": {
				"name": "勝利への渇望",
				"description": "味方全体のクリティカル率を20%アップ(3ターン)/このスキルでCHAIN成功時、自分のプルスウルトラゲージを40%アップ",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["criticalHitRateUpAll", "plusUltraGaugeUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "圧倒的機動力 自分のスピードがアップしている時、自分のパワーを25%アップ、自分のスキル威力を15%アップ",
				"tags": ["speedUpSingle", "powerUpSingle", "skillImpactUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "変わらぬ理想 自分のスキル威力が5%アップ(毎ターン)(最大40％)/自分がスピードダウン状態でなければ、自分のプルスウルトラ技の威力を25%アップ",
				"tags": ["skillImpactUpSingle", "plusUltraMoveImpactUpSingle"]
			},
		},
		{
			"id": "1102010",
			"validationStatus": "valid",
			"epithet": "集う英傑",
			"name": "爆豪勝己",
			"rarity": "ur",
			"type": "dst",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "爆速オーガバスター 敵単体に700%ダメージ/自分のパワーを50%アップ(3ターン)/自分に高揚(3ターン)を付与",
				"tags": ["powerUpSingle", "ecstaticSingle"]
			},
			"actionSkill1": {
				"name": "スタングレネード",
				"description": "敵全体に300%ダメージ/自分のパワーを25%アップ(5ターン)/敵全体に低 確率 (30%)で暗闇(3ターン)を付与",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["powerUpSingle", "blindAll"]
			},
			"actionSkill2": {
				"name": "爆速ターボ",
				"description": "敵単体に400%ダメージ/自分のクリティカル率を20%アップ(5ターン)/自分のプルスウルトラゲージを30%アップ",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["criticalHitRateUpSingle", "plusUltraGaugeUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "勝って救ける クリティカルが発生しなかった時、自分のクリティカル率を5%アップ(5ターン)/クリティカル発生時、自分のプルスウルトラゲージを5%アップ",
				"tags": ["criticalHitRateUpSingle", "plusUltraGaugeUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "寝言は寝て死ね 自分に圧倒を付与/クリティカル発生時、自分のパワーを7%アップ(5ターン)",
				"tags": ["overwhelm", "powerUpSingle"]
			},
		},
		{
			"id": "1102011",
			"validationStatus": "valid",
			"epithet": "絶好の機会",
			"name": "爆豪勝己",
			"rarity": "ur",
			"type": "int",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "A・Pショットインフィニティ 敵単体に700%ダメージ/敵単体に中 確率 (35%)で燃焼(3ターン)を付与/自分のクリティカル率を15%アップ(累積)",
				"tags": ["burningSingle", "criticalHitRateUpSingle"]
			},
			"actionSkill1": {
				"name": "A・Pショット",
				"description": "敵単体に400%ダメージ/敵単体に低 確率 (25%)で燃焼(3ターン)を付与/自分のパワーを10%アップ(累積)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["burningSingle", "powerUpSingle"]
			},
			"actionSkill2": {
				"name": "最大火力",
				"description": "自分のクリティカル率を30%アップ(4ターン)/自分のパワーを10%アップ(累積)/自分のプルスウルトラゲージを40%アップ",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["criticalHitRateUpSingle", "powerUpSingle", "plusUltraGaugeUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "速攻バースト 戦闘開始後、自分に高揚(3ターン)を付与、クリティカル率を20%アップ(3ターン)、スピードを20%アップ(3ターン)",
				"tags": ["ecstaticSingle", "criticalHitRateUpSingle", "speedUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "ニトロ増加 自分のクリティカル率がアップしている時、自分のクリティカル時の威力を25%アップ/クリティカルが3回発生するたびに、自分のアクションスキルのクールタイムを1短縮する",
				"tags": ["criticalHitImpactUpSingle", "cooldownTimeReductionSingle"]

			},
		},
		{
			"id": "1102012",
			"validationStatus": "valid",
			"epithet": "勝利の権化",
			"name": "爆豪勝己",
			"rarity": "ur",
			"type": "str",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "フラッシュインパクト 敵単体に700%ダメージ/自分が圧倒の時、このスキルに貫通を付与、クリティカル率30%アップ",
				"tags": ["piercingShot", "criticalHitRateUpSingle"]
			},
			"actionSkill1": {
				"name": "クラッシュバースト",
				"description": "敵全体に300%ダメージ、中 確率 (40%)で暗闇(3ターン)を付与、強化阻害(1ターン)を付与",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["blindAll", "buffBlockAll"]

			},
			"actionSkill2": {
				"name": "爆速ターボ",
				"description": "敵単体に400%ダメージ、強化阻害(2ターン)を付与/このスキルでCHAIN成功時、自分のスキル威力10%アップ(10ターン)/このスキルで2CHAIN以上成功時、自分のプルスウルトラゲージ30%アップ",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["buffBlockSingle", "skillImpactUpSingle", "plusUltraGaugeUpSingle"]

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "大胆不敵 自分に圧倒(2ターン)を付与(最大1回)/3ターン毎に、自分に圧倒(3ターン)を付与/自分が圧倒の時、自分のスキル威力10%アップ(10ターン)、クリティカル率10%アップ(10ターン)",
				"tags": ["overwhelm", "skillImpactUpSingle", "criticalHitRateUpSingle"]

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "高い矜持 自分が圧倒の時、自分のスピード40%アップ、クリティカル抵抗40%アップ",
				"tags": ["speedUpSingle", "criticalResistanceUpSingle"]

			},
		},
		{
			"id": "1102013",
			"validationStatus": "valid",
			"epithet": "祝典のRUN",
			"name": "爆豪勝己",
			"rarity": "ur",
			"type": "int",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "ウイニングインパクト 敵単体に700%ダメージ、中 確率 (60%)で燃焼(3ターン)を付与/敵がパワーダウンだったら、このスキルのスキル威力30%アップ/敵がスピードダウンだったら、このスキルのスキル威力30%アップ/敵がクリティカル率ダウンだったら、このスキルのスキル威力30%アップ/味方全体のクールタイム1短縮",
				"tags": ["burningSingle", "skillImpactUpSingle", "cooldownTimeReductionAll"]

			},
			"actionSkill1": {
				"name": "アッパーブラスト",
				"description": "敵単体に450%ダメージ、一時的な強化2個解除、ディフェンス30%ダウン(3ターン)、強化阻害(2ターン)を付与/このスキルでCHAIN成功時、自分のプルスウルトラゲージ40%アップ",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["removeBuffsSingle", "defenseDownSingle", "buffBlockSingle", "plusUltraGaugeUpSingle"]

			},
			"actionSkill2": {
				"name": "クラッシュバースト",
				"description": "敵全体に300%ダメージ、パワー25%ダウン(3ターン)、ディフェンス25%ダウン(3ターン)、スピード35%ダウン(3ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["powerDownAll", "defenseDownAll", "speedDownAll"]

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "弱点特攻 自分のクリティカル攻撃が2回発生しきった時、敵全体のパワー15%ダウン(3ターン)、スピード15%ダウン(3ターン)、クリティカル率15%ダウン(3ターン)",
				"tags": ["powerDownAll", "speedDownAll", "criticalHitRateDownAll"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "曲がらぬ憧れ 自分に必中を付与、スピード25%アップ(3ターン)(最大1回)/自分のクリティカル攻撃が1回発生しきった時、自分のクリティカル率10%アップ(最大5回)、クリティカル威力10%アップ(最大5回)",
				"tags": ["bullseye", "speedUpSingle", "criticalHitRateUpSingle", "criticalHitImpactUpSingle"]
			},
		},
		{
			"id": "1102014",
			"validationStatus": "valid",
			"epithet": "一首入魂",
			"name": "爆豪勝己",
			"rarity": "ur",
			"type": "dst",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "爆速かるたインパクト 敵単体に600%ダメージ/敵の最大HP10%分ダメージアップ(最大20000)/自分にバリア(1ヒット)を付与/自分のHPが50%未満の時、自分のHP30%回復",
				"tags": ["skillImpactUpSingle", "barrierSingle", "recoverySingle"]

			},
			"actionSkill1": {
				"name": "スタングレネード",
				"description": "敵全体に300%ダメージ/自分にバリア(1ヒット)を付与/自分のHPが50%以上の時、自分以外の味方全体に隠れる(3ターン)を付与、被ダメージ20%回復(3ターン)を付与",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["barrierSingle", "hideAll", "damageTakenRestoreAll"]

			},
			"actionSkill2": {
				"name": "アッパーブラスト",
				"description": "敵単体に375%ダメージ/敵の最大HP5%分ダメージアップ(最大10000)/自分にバリア(2ヒット)を付与",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["barrierSingle"]

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "強靭な精神力 自分にくいしばり(1回)を付与(最大1回)/自分がくいしばりでない時、自分の最大HP35%アップ/自分のHPが20%未満の時、自分に被ダメージ100%回復(1ターン)を付与(最大2回)、くいしばり(1ターン)を付与(最大2回)",
				"tags": ["lastStandSingle", "maxHpUpSingle", "damageTakenRestoreSingle"]

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "冷静な頭脳 自分のHPが50%以上の時、自分のダメージ35%カット/自分が貫通の相手から攻撃を1回受けきった時、味方全体に被ダメージ50%回復(1ターン)を付与",
				"tags": ["damageDownSingle", "damageTakenRestoreAll"]

			},
		},
		{
			"id": "1102015",
			"validationStatus": "valid",
			"epithet": "スチームパンク",
			"name": "爆豪勝己",
			"rarity": "ur",
			"type": "abl",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "スチームインパクト 敵単体に650%ダメージ/自分のニトロが7個未満の時、敵単体に中 確率 (50%)で強化阻害(3ターン)を付与/自分のニトロが7個以上の時、敵単体に強化阻害(3ターン)を付与※この効果は状態異常無効で防げず、解除もできない/自分のニトロが7個以上の時、自分のニトロを3個減少、このスキルのスキル威力60%アップ/このスキルに必中を付与",
				"tags": ["buffBlockSingle", "skillImpactUpSingle", "nitro", "bullseye"]

			},
			"actionSkill1": {
				"name": "クラッシュバースト",
				"description": "敵全体に300%ダメージ/自分のパワー9%アップ(5ターン)/自分のニトロが5個以上の時、自分のスキル威力9%アップ(5ターン)、このスキルに必中を付与/自分のニトロが7個以上の時、自分のスピード9%アップ(5ターン)/自分のニトロが10個未満の時、自分のニトロを1個増加",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["powerUpSingle", "skillImpactUpSingle", "nitro", "bullseye", "speedUpSingle"]
			},
			"actionSkill2": {
				"name": "アッパーブラスト",
				"description": "敵単体に400%ダメージ/味方全体のスキル威力9%アップ(5ターン)/自分のニトロが5個以上の時、味方全体のクリティカル率9%アップ(5ターン)/自分のニトロが7個以上の時、味方全体のクリティカル威力9%アップ(5ターン)/自分のニトロが10個未満の時、自分のニトロを1個増加/自分のニトロが5個以上の時、このスキルのスキル威力45%アップ",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["skillImpactUpAll", "criticalHitRateUpAll", "criticalHitImpactUpAll", "nitro"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "ニトロ生成 自分のニトロを5個増加(最大1回)/自分のニトロ1個毎に、自分のプルスウルトラ効率10%アップ/自分のニトロが3個以上の時、自分のクリティカル率30%アップ/自分のニトロが5個以上の時、自分の最大HP30%アップ/自分のニトロが7個以上の時、自分に圧倒を付与/自分のニトロが10個の時、自分のクリティカル率70%アップ",
				"tags": ["nitro", "plusUltraEffectUpSingle", "criticalHitRateUpSingle", "maxHpUpSingle", "overwhelm"]

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "向き合う強さ 敵がクールタイム短縮を1回受けた時、敵全体のスキル威力30%ダウン(3ターン)/敵がクールタイム短縮を1回受けた時、味方全体にクールタイム1軽減を付与(最大2回)/自分以外の味方がクールタイム延長を1回受けた時、敵全体にクールタイム1増加を付与(最大2回)※アリーナ、サークル祭限定効果/自分以外の味方がクールタイム延長を1回受けた時、味方全体のプルスウルトラゲージ30%アップ",
				"tags": ["skillImpactDownAll", "cooldownTimeDownAll", "cooldownTimeExtensionAll", "plusUltraGaugeUpAll"]

			},
		},
		{
			"id": "1103001",
			"validationStatus": "valid",
			"epithet": "日々の修練",
			"name": "麗日お茶子",
			"rarity": "r",
			"type": "mnd",
			"plusUltra": {
				"name": "無重力キック",
				"description": "敵単体に400%ダメージ/敵単体のパワーを25%ダウン(3ターン)",
				"tags": ["powerDownSingle"]

			},
			"actionSkill1": {
				"name": "気合注入！",
				"description": "味方全体のHPを35%回復",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["recoveryAll"]
			},
			"actionSkill2": {
				"name": "彗星ホームラン",
				"description": "敵単体に250%ダメージ/敵単体のパワーを10%ダウン(3ターン)",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["powerDownSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "かるふわ系女子 WAVE開始後、敵全体のスピードを15%ダウン(3ターン)",
				"tags": ["speedDownAll"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "肉球 WAVE開始後、自分のクリティカル率を20％アップ(3ターン)",
				"tags": ["criticalHitRateUpSingle"]
			},
		},
		{
			"id": "1103002",
			"validationStatus": "valid",
			"epithet": "学校生活",
			"name": "麗日お茶子",
			"rarity": "r",
			"type": "int",
			"plusUltra": {
				"name": "彗星ホームラン",
				"description": "敵単体に400%ダメージ/自分のクリティカル率を15%アップ(3ターン)",
				"tags": ["criticalHitRateUpSingle"]
			},
			"actionSkill1": {
				"name": "無重力キック",
				"description": "敵単体に250%ダメージ/自分に回避(1回)を付与",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["evasionSingle"]
			},
			"actionSkill2": {
				"name": "彗星ホームラン",
				"description": "敵単体に250%ダメージ/敵単体のクリティカル率を20%ダウン(3ターン)",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["criticalHitRateDownSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "不動心 自分のHPが50％以上の時、自分のクリティカル率を20%アップ",
				"tags": ["criticalHitRateUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "秘めた心 WAVE開始後、自分にHP20%自動回復(3ターン)を付与",
				"tags": ["hpRegenerationSingle"]
			},
		},
		{
			"id": "1103003",
			"validationStatus": "valid",
			"epithet": "己のフィールドで",
			"name": "麗日お茶子",
			"rarity": "ur",
			"type": "int",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "無重力岩石落とし 敵単体に650%ダメージ/味方全体のクリティカル率を20%アップ(3ターン)",
				"tags": ["criticalHitRateUpAll"]
			},
			"actionSkill1": {
				"name": "サポートなら超できるから！",
				"description": "味方全体のHPを30%回復/味方全体に回避(1回)を付与/味方全体のディフェンスを10%アップ(3ターン)",
				"coolDown": "Cool Down 7 Turns",
				"tags": ["recoveryAll", "evasionAll", "defenseUpAll"]
			},
			"actionSkill2": {
				"name": "ガンヘッド・マーシャル・アーツ",
				"description": "自分に通常攻撃を無効化した上でカウンターする状態(3ターン)を付与/自分のパワーを45%アップ(3ターン)/自分のプルスウルトラゲージを20%アップ",
				"coolDown": "Cool Down 6 Turns",
				"tags": ["counter", "powerUpSingle", "plusUltraGaugeUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "広がる可能性 味方全体の\"知タイプ\"キャラのパワーを25%アップ",
				"tags": ["powerUpAll"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "ゼログラビティ 自分が回避状態の時、自分のスピードを40%アップ",
				"tags": ["speedUpSingle"]
			},
		},
		{
			"id": "1103004",
			"validationStatus": "valid",
			"epithet": "剛く柔く",
			"name": "麗日お茶子",
			"rarity": "sr",
			"type": "mnd",
			"plusUltra": {
				"name": "彗星ホームラン",
				"description": "敵単体に500%ダメージ/敵単体のパワーを25%ダウン(3ターン)",
				"tags": ["powerDownSingle"]
			},
			"actionSkill1": {
				"name": "全力の応援",
				"description": "味方全体のHPを25%回復/味方全体のパワーを35%アップ(3ターン)",
				"coolDown": "Cool Down 6 Turns",
				"tags": ["recoveryAll", "powerUpAll"]
			},
			"actionSkill2": {
				"name": "無重力キック",
				"description": "敵単体に300%ダメージ/敵単体のスピードを25%ダウン(3ターン)",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["speedDownSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "武闘派ヒロイン 味方全体の\"信タイプ\"キャラのパワーを20%アップ",
				"tags": ["powerUpAll"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "献身 WAVE開始後、味方全体にHP20%自動回復(3ターン)を付与",
				"tags": ["hpRegenerationAll"]
			},
		},
		{
			"id": "1103005",
			"validationStatus": "valid",
			"epithet": "みんなで料理",
			"name": "麗日お茶子",
			"rarity": "sr",
			"type": "int",
			"plusUltra": {
				"name": "無重力キック",
				"description": "敵単体に500%ダメージ/自分のクリティカル率を25%アップ(3ターン)",
				"tags": ["criticalHitRateUpSingle"]
			},
			"actionSkill1": {
				"name": "彗星ホームラン",
				"description": "敵単体に300%ダメージ/このスキルで3CHAIN成功時、自分のクリティカル率を40%アップ(3ターン)",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["criticalHitRateUpSingle"]
			},
			"actionSkill2": {
				"name": "全力の声援",
				"description": "味方単体の状態異常を1つ回復/味方単体のプルスウルトラゲージを35%アップ/味方単体のクリティカル率を25%アップ(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["cancelStatusAilmentsSingle", "plusUltraGaugeUpSingle", "criticalHitRateUpSingle"]

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "麗らか 自分以外の\"雄英高校1年A組\"のクリティカル率を20%アップ",
				"tags": ["criticalHitRateUpAll"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "諦めない心 自分のHPが50％未満の時、自分のクリティカル率を30%アップ",
				"tags": ["criticalHitRateUpSingle"]
			},
		},
		{
			"id": "1103006",
			"validationStatus": "valid",
			"epithet": "みんなを笑顔に",
			"name": "麗日お茶子",
			"rarity": "sr",
			"type": "abl",
			"plusUltra": {
				"name": "彗星ホームラン",
				"description": "敵単体に500%ダメージ/敵がクリティカル率ダウン状態だったら自分のクリティカル率が30%アップ(3ターン)",
				"tags": ["criticalHitRateUpSingle"]
			},
			"actionSkill1": {
				"name": "グラビティブロー",
				"description": "敵単体に300%ダメージ/敵単体のクリティカル率を30%ダウン(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["criticalHitRateDownSingle"]
			},
			"actionSkill2": {
				"name": "秘められた決意",
				"description": "味方全体のHPを25%回復/味方全体のスキル威力を40%アップ(3ターン)",
				"coolDown": "Cool Down 6 Turns",
				"tags": ["recoveryAll", "skillImpactUpAll"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "真っ向勝負 味方全体の\"技タイプ\"キャラのパワーを20%アップ",
				"tags": ["powerUpAll"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "男勝りな根性 自分のHPが50％未満の時、自分のパワーを30%アップ、戦闘中に1度だけ自分にくいしばり(1回)を付与",
				"tags": ["powerUpSingle", "lastStandSingle"]
			},
		},
		{
			"id": "1103007",
			"validationStatus": "valid",
			"epithet": "高める決定力",
			"name": "麗日お茶子",
			"rarity": "sr",
			"type": "int",
			"plusUltra": {
				"name": "グラビティブロー",
				"description": "敵単体に500%ダメージ/自分がスピードアップ状態だったらスキル威力が30%アップ/敵がスピードダウン状態だったらスキル威力が30%アップ",
				"tags": ["skillImpactUpSingle"]
			},
			"actionSkill1": {
				"name": "ワイヤーブロー",
				"description": "敵単体に350%ダメージ/敵がスピードダウン状態だったらスキル威力が40%アップ/このスキルで3CHAIN成功時、自分のプルスウルトラゲージを40%アップ",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["skillImpactUpSingle", "plusUltraGaugeUpSingle"]
			},
			"actionSkill2": {
				"name": "無重力コントロール",
				"description": "味方全体のスピードを35%アップ(3ターン)/敵全体のスピードを15%ダウン(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["speedUpAll", "speedDownAll"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "ほんわか笑顔 戦闘開始後、味方全体の\"知タイプ\"キャラのプルスウルトラゲージを20%アップ",
				"tags": ["plusUltraGaugeUpAll"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "裏表ない性格 自分のHPが50%以上の時、自分のクリティカル率を40％アップ/自分のHPが30%未満の時、戦闘中に1度だけ自分のプルスウルトラゲージを100％アップ",
				"tags": ["criticalHitRateUpSingle", "plusUltraGaugeUpSingle"]
			},
		},
		{
			"id": "1103008",
			"validationStatus": "valid",
			"epithet": "うららかチアガール",
			"name": "麗日お茶子",
			"rarity": "sr",
			"type": "mnd",
			"plusUltra": {
				"name": "無重力キック",
				"description": "敵単体に450%ダメージ/自分以外の味方全体のアクションスキルのクールタイムを1短縮する",
				"tags": ["cooldownTimeReductionAll"]

			},
			"actionSkill1": {
				"name": "元気印",
				"description": "自分のHPが50%以上の時、自分以外の味方全体のパワーを35%アップ(3ターン)、50%未満の時、自分以外の味方全体のパワーを50%アップ(3ターン)/自分以外の味方全体のプルスウルトラゲージを20%アップ",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["powerUpAll", "plusUltraGaugeUpAll"]

			},
			"actionSkill2": {
				"name": "和ませエール",
				"description": "味方全体にバリア(1ヒット)を付与/自分のプルスウルトラゲージを40%アップ",
				"coolDown": "Cool Down 6 Turns",
				"tags": ["barrierAll", "plusUltraGaugeUpSingle"]

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "喜ぶ顔が見たくて 味方全体の\"信タイプ\"キャラのスキル威力を25%アップ",
				"tags": ["skillImpactUpAll"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "人間的成長 自分のHPが50%未満の時、戦闘中に1度だけ自分にバリア(2ヒット)を付与し、自分のプルスウルトラゲージを40%アップ",
				"tags": ["barrierSingle", "plusUltraGaugeUpSingle"]
			},
		},
		{
			"id": "1103009",
			"validationStatus": "valid",
			"epithet": "海と太陽",
			"name": "麗日お茶子",
			"rarity": "ur",
			"type": "mnd",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "グラビティウォーターガン 敵単体に650%ダメージ/敵単体のディフェンスを30%ダウン(3ターン)/味方全体のHPを30%回復",
				"tags": ["defenseDownSingle", "recoveryAll"]
			},
			"actionSkill1": {
				"name": "グラビティブロー",
				"description": "敵単体に350%ダメージ/自分のプルスウルトラゲージを35%アップ/このスキルで2CHAIN以上成功時、味方全体のアクションスキルのクールタイムを1短縮する",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["plusUltraGaugeUpSingle", "cooldownTimeReductionAll"]
			},
			"actionSkill2": {
				"name": "七転八起",
				"description": "味方全体に回避(1回)を付与/味方全体の状態異常を防ぐ(2回)/味方全体の最大HPを30%アップ(3ターン)",
				"coolDown": "Cool Down 6 Turns",
				"tags": ["evasionAll", "statusAilmentNullAll", "maxHpUpAll"]

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "温かな心 自分が状態異常を防ぐ状態の時、味方全体のスピードを25%アップ/戦闘開始後、味方全体にHP10%自動回復(3ターン)を付与",
				"tags": ["speedUpAll", "hpRegenerationAll"]

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "頑張れ！！って感じで好きだ 自分が状態異常を防ぐ状態の時、味方全体のスキル威力を30%アップ/自分が回避状態になるたびに、自分のプルスウルトラゲージを20%アップ",
				"tags": ["skillImpactUpAll", "plusUltraGaugeUpSingle"]

			},
		},
		{
			"id": "1103010",
			"validationStatus": "valid",
			"epithet": "集う英傑",
			"name": "麗日お茶子",
			"rarity": "ur",
			"type": "dst",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "グラビティマジック 敵単体に650%ダメージ/味方全体のアクションスキルのクールタイムを1短縮/味方全体に余裕(3ターン)を付与",
				"tags": ["cooldownTimeReductionAll", "composureAll"]

			},
			"actionSkill1": {
				"name": "彗星ホームラン",
				"description": "敵単体に350%ダメージ/敵単体に低 確率 (20%)でスタン(1ターン)を付与/自分のHPが50%以上の時、クリティカル率を30%アップし、このスキルは必中となる",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["stunSingle", "criticalHitRateUpSingle", "bullseye"]
			},
			"actionSkill2": {
				"name": "グラビティブロー",
				"description": "敵単体に400%ダメージ/味方全体のプルスウルトラゲージを30%アップ/自分のHPが50%以上の時、クリティカル率を30%アップ",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["plusUltraGaugeUpAll", "criticalHitRateUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "私、助けたい！ 自分がHP回復を受けるたびに、自分の状態異常を全て回復/自分が余裕状態の時、味方全体のクリティカル率を30%アップ",
				"tags": ["cancelStatusAilmentsSingle", "composureAll"]

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "渾身のサポート 自分のスキルで2CHAIN以上成功時、味方全体にHP15%自動回復(2ターン)を付与/自分が余裕状態になるたびに、味方全体のディフェンスを20%アップ(2ターン)",
				"tags": ["hpRegenerationAll", "defenseUpAll"]
			},
		},
		{
			"id": "1103011",
			"validationStatus": "valid",
			"epithet": "一人でも多く",
			"name": "麗日お茶子",
			"rarity": "sr",
			"type": "str",
			"plusUltra": {
				"name": "ワイヤーブロー",
				"description": "敵単体に450%ダメージ/自分のアクションスキルのクールタイムを1短縮する/敵がスピードダウン状態だったらスキル威力を20%アップ",
				"tags": ["cooldownTimeReductionSingle", "skillImpactUpSingle"]
			},
			"actionSkill1": {
				"name": "ガンヘッド・マーシャル・アーツ",
				"description": "自分に通常攻撃を無効化した上でカウンターする状態(3ターン)を付与/自分のスキル威力を35%アップ(3ターン)/このスキルでCHAIN成功時、自分のプルスウルトラゲージを25%アップ",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["counter", "skillImpactUpSingle", "plusUltraGaugeUpSingle"]
			},
			"actionSkill2": {
				"name": "ゼロ・サテライツ",
				"description": "敵単体に300%ダメージ/敵単体のスピードを25%ダウン(3ターン)/敵単体のクリティカル率を25%ダウン(3ターン)/敵が\"敵\"だったらスキル威力を30%アップ",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["speedDownSingle", "criticalHitRateDownSingle", "skillImpactUpSingle"]

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "笑顔を守るために 味方全体の\"ヒーロー\"の最大HPを20%アップ",
				"tags": ["maxHpUpAll"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "何かせなかわらんやろ！ 3ターンごとに自分のアクションスキルのクールタイムを1短縮し、味方全体のプルスウルトラゲージを15%アップ(最大3回)",
				"tags": ["cooldownTimeReductionAll", "plusUltraGaugeUpAll"]
			},
		},
		{
			"id": "1103012",
			"validationStatus": "valid",
			"epithet": "祝典のRUN",
			"name": "麗日お茶子",
			"rarity": "ur",
			"type": "str",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "ウイニンググラビティ 敵全体に500%ダメージ、低 確率 (30%)でスタン(2ターン)を付与、一時的な強化を2個解除",
				"tags": ["stunAll", "removeBuffsAll"]

			},
			"actionSkill1": {
				"name": "無重力キック",
				"description": "敵単体に400%ダメージ/自分のクリティカル率を30%アップ(3ターン)/このスキルでCHAIN成功時、自分のプルスウルトラゲージを30%アップ",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["criticalHitRateUpSingle", "plusUltraGaugeUpSingle"]

			},
			"actionSkill2": {
				"name": "彗星ホームラン",
				"description": "敵全体に300%ダメージ、低 確率 (30%)でスタン(1ターン)を付与、一時的な強化を2個解除",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["stunAll", "removeBuffsAll"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "ヒーロー好適！ 味方全体の\"雄英高校生徒\"のスピードを25%アップ/クリティカルが3回発生するたびに、味方全体のHPを15%回復",
				"tags": ["speedUpAll", "recoveryAll"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "強引に行こう 自分のHPが50%未満の時、自分のディフェンスを30%アップ/クリティカルが1回発生するたびに、自分のクリティカル率を10%アップ(最大5回)、プルスウルトラゲージを10%アップ",
				"tags": ["defenseUpSingle", "criticalHitRateUpSingle", "plusUltraGaugeUpSingle"]
			},
		},
		{
			"id": "1103013",
			"validationStatus": "valid",
			"epithet": "新春万福",
			"name": "麗日お茶子",
			"rarity": "ur",
			"type": "int",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "鏡餅スタンピング 敵単体に650%ダメージ、中 確率 (50%)で拘束(2ターン)を付与、中 確率 (60%)で回復阻害(2ターン)を付与/敵全体のアクションスキル威力30%ダウン(3ターン)",
				"tags": ["boundAll", "recoveryBlockSingle", "actionSkillImpactDownAll"]

			},
			"actionSkill1": {
				"name": "無重力キック",
				"description": "敵単体に400%ダメージ、ディフェンス25%ダウン(2ターン)、中 確率 (35%)で回復阻害(2ターン)を付与",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["defenseDownSingle", "recoveryBlockSingle"]

			},
			"actionSkill2": {
				"name": "重力無効化",
				"description": "敵全体のパワー30%ダウン(3ターン)、スピード30%ダウン(3ターン)/自分のプルスウルトラゲージ30%アップ/敵全体のプルスウルトラゲージ20%ダウン※アリーナ、サークル祭限定効果",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["powerDownAll", "speedDownAll", "plusUltraGaugeUpSingle"]

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "無重力飛行 自分に身軽(2ターン)を付与(最大1回)/4ターン毎に、自分に身軽(2ターン)を付与/自分が身軽のまま、2回ターンをまたいだ時、敵全体のディフェンス10%ダウン(2ターン)",
				"tags": ["agile", "defenseDownAll"]

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "行かせてたまるか！ 敵全体のアクションスキル威力25%ダウン(3ターン)(最大1回)/自分のスキルで2CHAIN以上成功時、敵全体のアクションスキル威力10%ダウン(3ターン)/自分のスキルで3CHAIN成功時、ターゲットを無視してランダムな敵単体に低 確率 (30%)でプルスウルトラゲージ上昇量15%ダウン(2ターン)※アリーナ、サークル祭限定効果/2ターン毎に、敵全体のプルスウルトラゲージ10%ダウン※アリーナ、サークル祭限定効果",
				"tags": ["actionSkillImpactDownAll", "plusUltraGaugeUpSingle", "plusUltraGaugeDownAll"]

			},
		},
		{
			"id": "1103014",
			"validationStatus": "invalid",
			"epithet": "共に明日を",
			"name": "麗日お茶子",
			"rarity": "ur",
			"type": "abl",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "彗星回転乱撃 敵単体に650%ダメージ/敵が\"力タイプ\"だったら、敵単体に中 確率 (40%)でスタン(2ターン)を付与/味方全体のクリティカル威力30%アップ(3ターン)/自分以外の味方全体のプルスウルトラゲージ20%アップ",
				"tags": ["stunSingle", "criticalHitRateUpAll", "plusUltraGaugeUpAll"]

			},
			"actionSkill1": {
				"name": "ゼロ・サテライツ",
				"description": "敵単体に375%ダメージ/自分のプルスウルトラ技威力35%アップ(3ターン)、プルスウルトラゲージ20%アップ/敵単体の\"力タイプ\"に低 確率 (15%)でスタン(2ターン)を付与/敵が\"力タイプ\"だったら、このスキルのクリティカル率30%アップ",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["skillImpactUpSingle", "plusUltraGaugeUpSingle", "stunSingle", "criticalHitRateUpSingle"]

			},
			"actionSkill2": {
				"name": "迅速な救助",
				"description": "自分以外の味方単体のクリティカル率25%アップ(3ターン)、クリティカル威力45%アップ(3ターン)、最大HP30%アップ(3ターン)/味方全体にバリア(1ヒット)を付与",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["criticalHitRateUpSingle", "criticalHitRateUpSingle", "maxHpUpSingle", "barrierAll"]

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "必死の呼びかけ 味方全体の\"技タイプ\"のクリティカル率20%アップ/敵全体の\"力タイプ\"のスピード20%ダウン",
				"tags": ["criticalHitRateUpAll", "speedDownAll"]

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "元気の出る応援 2ターン毎に、自分以外の味方全体のクリティカル率20%アップ(1ターン)/3ターン毎に、味方全体の最大HP15%アップ(2ターン)(最大4回)/自分がバリアの時、味方全体にクールタイム1軽減(2ターン)を付与(最大4回)/チームに\"緑谷出久\"がいる時、自分以外の味方全体のクリティカル威力20%アップ、プルスウルトラ技威力30%アップ",
				"tags": ["criticalHitRateUpAll", "maxHpUpAll", "cooldownTimeReductionAll", "criticalHitRateUpAll", "skillImpactUpAll"]
			},
		},
		{
			"id": "1104001",
			"validationStatus": "invalid",
			"epithet": "日々の修練",
			"name": "飯田天哉",
			"rarity": "r",
			"type": "abl",
			"plusUltra": {
				"name": "サマーソルトキック",
				"description": "敵単体に400%ダメージ/自分のスピードを30%アップ(3ターン)",
				"tags": ["speedUpSingle"]

			},
			"actionSkill1": {
				"name": "レシプロバースト",
				"description": "敵単体に250%ダメージ/自分に通常攻撃を2回行う状態(3ターン)を付与",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["doubleAttackSingle"]

			},
			"actionSkill2": {
				"name": "全員駆け足",
				"description": "味方全体のスピードを35%アップ(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["speedUpAll"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "大丈夫！！ 自分以外の\"雄英高校1年A組\"のスピードを20%アップ",
				"tags": ["speedUpSingle"]

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "俊足 WAVE開始後、自分のスピードを20%アップ(3ターン)",
				"tags": ["speedUpSingle"]
			},
		},
		{
			"id": "1104002",
			"validationStatus": "invalid",
			"epithet": "学校生活",
			"name": "飯田天哉",
			"rarity": "r",
			"type": "int",
			"plusUltra": {
				"name": "レシプロバースト",
				"description": "敵単体に400%ダメージ/自分のスピードに応じてスキル威力アップ",
				"tags": ["skillImpactUpSingle"]
			},
			"actionSkill1": {
				"name": "サマーソルトキック",
				"description": "敵単体に250%ダメージ/自分のスピードを40％アップ(3ターン)",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["speedUpSingle"]
			},
			"actionSkill2": {
				"name": "ギアチェンジ",
				"description": "自分のパワーを50%アップ(3ターン)/自分のプルスウルトラゲージを30%アップ",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["powerUpSingle", "plusUltraGaugeUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "生真面目 チームに\"雄英高校教師\"がいれば、自分のスピードを30%アップ",
				"tags": ["speedUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "模範生 自分が通常攻撃を2回行っている時、自分のパワーを25%アップ",
				"tags": ["powerUpSingle"]
			},
		},
		{
			"id": "1104003",
			"validationStatus": "invalid",
			"epithet": "誰よりも速く",
			"name": "飯田天哉",
			"rarity": "sr",
			"type": "abl",
			"plusUltra": {
				"name": "レシプロバースト",
				"description": "敵単体に450%ダメージ/自分のスピードに応じてスキル威力アップ",
				"tags": ["skillImpactUpSingle"]
			},
			"actionSkill1": {
				"name": "サマーソルトキック",
				"description": "敵単体に300%ダメージ/自分のスピードを40%アップ(3ターン)",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["speedUpSingle"]
			},
			"actionSkill2": {
				"name": "トルクオーバー",
				"description": "自分のプルスウルトラゲージを60%アップ/自分に通常攻撃を2回行う状態(5ターン)を付与",
				"coolDown": "Cool Down 7 Turns",
				"tags": ["plusUltraGaugeUpSingle", "doubleAttackSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "ヒーロー一家 WAVE開始後、自分のスピードを30%アップ(3ターン)",
				"tags": ["speedUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "どこにでも駆けつける 自分が通常攻撃を2回行っている時、自分のパワーを30%アップ",
				"tags": ["powerUpSingle"]
			},
		},
		{
			"id": "1104005",
			"validationStatus": "invalid",
			"epithet": "この脚が届く限り",
			"name": "飯田天哉",
			"rarity": "ur",
			"type": "int",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "レシプロエクステンド 敵単体に700%ダメージ/自分のスピードが30%ダウン(3ターン)/自分のスピードがダウンしていない時、自分のアクションスキルのクールタイムを2短縮する",
				"tags": ["speedDownSingle", "cooldownTimeReductionSingle"]
			},
			"actionSkill1": {
				"name": "レシプロバースト",
				"description": "敵単体に350%ダメージ/自分のスピードを40%アップ(3ターン)/敵単体のディフェンスを10%ダウン(3ターン)",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["speedUpSingle", "defenseDownSingle"]
			},
			"actionSkill2": {
				"name": "トルクオーバー",
				"description": "味方全体に通常攻撃を2回行う状態(3ターン)を付与/自分のスピードがアップしている時、自分以外の味方全体のパワーを30%アップ(3ターン)/自分にスピードダウンの完全耐性(3ターン)を付与、通常攻撃の威力を40%アップ(5ターン)",
				"coolDown": "Cool Down 9 Turns",
				"tags": ["doubleAttack", "powerUpAll", "speedDownImmunity", "normalAttackImpactUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "規律順守 戦闘開始後、自分のプルスウルトラゲージを30%アップ/味方全体の\"雄英高校1年A組\"の通常攻撃威力を30%アップ",
				"tags": ["plusUltraGaugeUpSingle", "normalAttackImpactUpAll"]

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "名を背負う 自分のスピードがダウンしていない時、自分のパワーを20%アップ/自分のHPが50％未満の時、戦闘中に1度だけ自分のプルスウルトラゲージを50%アップ",
				"tags": ["powerUpSingle", "plusUltraGaugeUpSingle"]
			},
		},
		{
			"id": "1104006",
			"validationStatus": "invalid",
			"epithet": "みんなで料理",
			"name": "飯田天哉",
			"rarity": "sr",
			"type": "mnd",
			"plusUltra": {
				"name": "サマーソルトキック",
				"description": "敵単体に500%ダメージ/敵単体のスピードを25%ダウン(3ターン)",
				"tags": ["speedDownSingle"]
			},
			"actionSkill1": {
				"name": "韋駄天",
				"description": "味方全体のスピードを40%アップ(3ターン)/自分に高揚(3ターン)を付与",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["speedUpAll", "estaticSingle"]
			},
			"actionSkill2": {
				"name": "ターボチャージャー",
				"description": "味方単体のプルスウルトラゲージを25%アップ/味方単体のスピードを50%アップ(3ターン)/味方単体のアクションスキルのクールタイムを1短縮する",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["plusUltraGaugeUpSingle", "speedUpSingle", "cooldownTimeReductionSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "クラス委員 味方全体の\"雄英高校1年A組\"のスピードを20%アップ",
				"tags": ["speedUpAll"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "マフラー強化 WAVE開始後、自分に通常攻撃を2回行う状態(3ターン)を付与/自分のHPが50％以上の時、自分のスピードを25%アップ",
				"tags": ["doubleAttackSingle", "speedUpSingle"]
			},
		},
		{
			"id": "1104008",
			"validationStatus": "invalid",
			"epithet": "集う英傑",
			"name": "飯田天哉",
			"rarity": "ur",
			"type": "str",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "レシプロエクスブレイド 敵単体に550%ダメージ/自分のスピードに応じてスキル威力が大きくアップ/味方全体のアクションスキルのクールタイムを1短縮する/自分に回避(2回)を付与",
				"tags": ["skillImpactUpSingle", "cooldownTimeReductionAll", "evasionSingle"]
			},
			"actionSkill1": {
				"name": "レシプロスライディング",
				"description": "敵単体に400%ダメージ/味方全体のスピードを20%アップ(3ターン)/自分に回避(1回)を付与",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["speedUpAll", "evasionSingle"]
			},
			"actionSkill2": {
				"name": "サマーソルトキック",
				"description": "敵単体に350%ダメージ/自分のスピードに応じてスキル威力アップ/自分のプルスウルトラゲージを30%アップ/自分に回避(1回)を付与",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["skillImpactUpSingle", "plusUltraGaugeUpSingle", "evasionSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "ロケットスタート 戦闘開始後、自分のスピードを30%アップ(2ターン)、さらに3ターン毎に自分のスピードを30%アップ(3ターン)/自分よりスピードが低い相手から攻撃を3回受けきった後に、自分に回避(2回)を付与(最大3回)",
				"tags": ["speedUpSingle", "evasionSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "正しき心 自分が回避状態の時、自分にかばう状態を付与/自分が回避状態になるたびに、味方全体のパワーを5%アップ(最大6回)、味方全体のプルスウルトラゲージを10%アップ",
				"tags": ["cover", "powerUpAll", "plusUltraGaugeUpAll"]
			},
		},
		{
			"id": "1104009",
			"validationStatus": "invalid",
			"epithet": "晴れ着で勝負",
			"name": "飯田天哉",
			"rarity": "sr",
			"type": "dst",
			"plusUltra": {
				"name": "サマーソルトキック",
				"description": "敵単体に400%ダメージ/自分のスピードに応じてスキル威力アップ/自分のスピードがアップしている時、自分に通常攻撃を2回行う状態(3ターン)を付与/自分が回避状態の時、自分のアクションスキルのクールタイムを1短縮する",
				"tags": ["skillImpactUpSingle", "doubleAttackSingle", "cooldownTimeReductionSingle"]
			},
			"actionSkill1": {
				"name": "レシプロバースト",
				"description": "敵単体に300%ダメージ/自分のスピードに応じてスキル威力アップ/自分のスピードがアップしている時、自分のスキル威力を30%アップ/自分に回避(1回)を付与",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["skillImpactUpSingle", "powerUpSingle", "evasionSingle"]
			},
			"actionSkill2": {
				"name": "フォーチュンショット",
				"description": "敵単体に325%ダメージ/自分のスピードに応じてスキル威力アップ/自分に回避(2回)を付与/このスキルでCHAIN成功時、自分に通常攻撃を2回行う状態(3ターン)を付与",
				"coolDown": "Cool Down 6 Turns",
				"tags": ["skillImpactUpSingle", "doubleAttackSingle", "evasionSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "正々堂々 戦闘開始後、味方全体のスピードを20%アップ(5ターン)/自分が回避状態の時、自分のパワーを15%アップ",
				"tags": ["speedUpAll", "powerUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "ヒーローへの道 自分が通常攻撃を2回行う状態の時、自分のスキル威力を30%アップ/自分のHPが30%未満の時、戦闘中に1度だけ自分のスピードを70%アップ(3ターン)",
				"tags": ["powerUpSingle", "speedUpSingle"]
			},
		},
		{
			"id": "1104010",
			"validationStatus": "invalid",
			"epithet": "君に挑戦する",
			"name": "飯田天哉",
			"rarity": "sr",
			"type": "str",
			"plusUltra": {
				"name": "レシプロスライディング",
				"description": "敵単体に400%ダメージ/自分のスピードに応じてスキル威力アップ/敵単体のクリティカル率を30%ダウン(3ターン)",
				"tags": ["skillImpactUpSingle", "criticalHitRateDownSingle"]
			},
			"actionSkill1": {
				"name": "アクセル全開",
				"description": "自分のスピードを30%アップ(3ターン)/自分に通常攻撃を2回行う状態(3ターン)を付与/味方全体のクリティカル率を25%アップ(3ターン)/味方全体のクリティカル時の威力を30%アップ(3ターン)",
				"coolDown": "Cool Down 6 Turns",
				"tags": ["speedUpSingle", "doubleAttackSingle", "criticalHitRateUpAll", "criticalHitRateUpAll"]
			},
			"actionSkill2": {
				"name": "レシプロバースト",
				"description": "敵単体に300%ダメージ/自分のスピードに応じてスキル威力アップ/敵単体のクリティカル率を35%ダウン(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["skillImpactUpSingle", "criticalHitRateDownSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "責任感 クリティカルが発生するたびに、自分のクリティカル率を10%アップ(3ターン)、自分のスピードを15%アップ(3ターン)",
				"tags": ["criticalHitRateUpSingle", "speedUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "君に挑戦するよ！ 敵全体の\"雄英高校1年A組\"のクリティカル率を15%ダウン/戦闘開始後、自分のクリティカル率を15%アップ(3ターン)",
				"tags": ["criticalHitRateDownAll", "criticalHitRateUpSingle"]
			},
		},
		{
			"id": "1105001",
			"validationStatus": "invalid",
			"epithet": "日々の修練",
			"name": "轟焦凍",
			"rarity": "r",
			"type": "str",
			"plusUltra": {
				"name": "炎舞",
				"description": "敵単体に400%ダメージ/敵単体に低 確率 (30%)で燃焼(3ターン)を付与",
				"tags": ["burningSingle"]
			},
			"actionSkill1": {
				"name": "氷塊",
				"description": "敵全体に225%ダメージ/敵全体に低 確率 (25%)で氷結(1ターン)を付与",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["frozenAll"]

			},
			"actionSkill2": {
				"name": "瞬間零度",
				"description": "自分のパワーを50%アップ(3ターン)/自分が受けるダメージを20%カット(2ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["powerUpSingle", "damageDownSingle"]

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "推薦入学者 WAVE開始後、自分のパワーを20%アップ(3ターン)",
				"tags": ["powerUpSingle"]

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "灼眼 自分のHPが50％未満の時、自分のパワーを30%アップ",
				"tags": ["powerUpSingle"]
			},
		},
		{
			"id": "1105002",
			"validationStatus": "invalid",
			"epithet": "学校生活",
			"name": "轟焦凍",
			"rarity": "r",
			"type": "dst",
			"plusUltra": {
				"name": "氷塊",
				"description": "敵単体に350%ダメージ/敵単体に低 確率 (30%)で氷結(1ターン)を付与/敵単体のスキル威力を25%ダウン(3ターン)",
				"tags": ["frozenSingle", "skillImpactDownSingle"]
			},
			"actionSkill1": {
				"name": "炎舞",
				"description": "敵全体に225%ダメージ/敵全体に低 確率 (25%)で燃焼(3ターン)を付与",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["burningAll"]
			},
			"actionSkill2": {
				"name": "熱量上昇",
				"description": "自分のスキル威力を35%アップ(3ターン)/自分のプルスウルトラゲージを15%アップ",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["skillImpactUpSingle", "plusUltraGaugeUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "冷静と情熱 自分のHPが50％未満の時、自分のスキル威力を40%アップ",
				"tags": ["skillImpactUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "ハンドクラッシャー WAVE開始後、敵単体のパワーを20%ダウン(3ターン)",
				"tags": ["powerDownSingle"]
			},
		},
		{
			"id": "1105003",
			"validationStatus": "invalid",
			"epithet": "葛藤の末に",
			"name": "轟焦凍",
			"rarity": "ur",
			"type": "int",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "膨冷熱波 敵単体に650%ダメージ/敵単体に中 確率 (60%)で氷結(1ターン)を付与/敵単体に中 確率 (60%)で燃焼(3ターン)を付与",
				"tags": ["frozenSingle", "burningSingle"]
			},
			"actionSkill1": {
				"name": "氷塊",
				"description": "敵全体に275%ダメージ/敵全体に中 確率 (40%)で氷結(1ターン)を付与/このスキルでCHAIN成功時、自分のパワーを40%アップ(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["frozenAll", "powerUpSingle"]
			},
			"actionSkill2": {
				"name": "炎舞",
				"description": "敵全体に275%ダメージ/敵全体に中 確率 (40%)で燃焼(3ターン)を付与/自分のプルスウルトラゲージを30%アップ",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["burningAll", "plusUltraGaugeUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "俺だってヒーローに…！！ 自分のHPが50％以上の時、戦闘中に1度だけ自分のプルスウルトラゲージを35%アップ",
				"tags": ["plusUltraGaugeUpSingle"]

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "氷点下 自分のHPが50％未満の時、自分のパワーを40%アップ/HPが30％未満の時、自分が攻撃を受けると敵に氷結(1ターン)を付与する",
				"tags": ["powerUpSingle", "frozenSingle"]
			},
		},
		{
			"id": "1105004",
			"validationStatus": "invalid",
			"epithet": "冴えわたる巧技",
			"name": "轟焦凍",
			"rarity": "sr",
			"type": "dst",
			"plusUltra": {
				"name": "氷塊",
				"description": "敵単体に500%ダメージ/敵単体に中 確率 (60%)で氷結(1ターン)を付与",
				"tags": ["frozenSingle"]
			},
			"actionSkill1": {
				"name": "炎舞",
				"description": "敵全体に250%ダメージ/敵全体に低 確率 (25%)で燃焼(3ターン)を付与",
				"coolDown": "Cool Down 6 Turns",
				"tags": ["burningAll"]
			},
			"actionSkill2": {
				"name": "氷壁展開",
				"description": "自分のパワーを55%アップ(3ターン)/味方全体が受けるダメージを20%カット(2ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["powerUpSingle", "damageDownAll"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "冷静沈着 WAVE開始後、自分のパワーを30%アップ(3ターン)、自分のクリティカル率を25%アップ(3ターン)",
				"tags": ["powerUpSingle", "criticalHitRateUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "氷眼 自分のHPが50％未満の時、自分が受けるダメージを30%カット(2ターン)",
				"tags": ["damageDownSingle"]
			},
		},
		{
			"id": "1105005",
			"validationStatus": "invalid",
			"epithet": "みんなで料理",
			"name": "轟焦凍",
			"rarity": "sr",
			"type": "abl",
			"plusUltra": {
				"name": "炎舞",
				"description": "敵単体に500%ダメージ/敵単体に中 確率 (60%)で燃焼(3ターン)を付与",
				"tags": ["burningSingle"]
			},
			"actionSkill1": {
				"name": "熱波展開",
				"description": "自分のパワーを45%アップ(3ターン)/味方全体が燃焼状態、氷結状態になる確率を下げる(3ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["powerUpSingle"]
			},
			"actionSkill2": {
				"name": "氷塊",
				"description": "敵全体に250%ダメージ/敵全体に中 確率 (40%)で氷結(1ターン)を付与",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["frozenAll"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "プロヒーローの息子 自分のHPが50％以上の時、自分のパワーを30%アップ",
				"tags": ["powerUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "“個性”同時使用 WAVE開始後、自分のパワーを30%アップ(3ターン)、自分のスキル威力を40%アップ(3ターン)",
				"tags": ["powerUpSingle", "skillImpactUpSingle"]
			},
		},
		{
			"id": "1105006",
			"validationStatus": "invalid",
			"epithet": "蓄積されし炎熱",
			"name": "轟焦凍",
			"rarity": "ur",
			"type": "mnd",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "氷柱煉撃 敵単体に650%ダメージ/敵単体に中 確率 (60%)で燃焼(3ターン)を付与/自分のクリティカル率を30%アップ(3ターン)",
				"tags": ["burningSingle", "criticalHitRateUpSingle"]
			},
			"actionSkill1": {
				"name": "炎舞",
				"description": "敵全体に275%ダメージ/敵全体に中 確率 (45%)で燃焼(3ターン)を付与/味方全体が燃焼状態になる確率を下げる(3ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["burningAll"]
			},
			"actionSkill2": {
				"name": "氷熱波",
				"description": "敵単体に400%ダメージ/敵単体に中 確率 (55%)で燃焼(3ターン)を付与/このスキルでCHAIN成功時、燃焼状態にする確率を上げる",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["burningSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "迫る猛火 自分のパワーが3%アップ(毎ターン)(最大30％)/自分のHPが50％以上の時、自分のクリティカル率を20%アップ",
				"tags": ["powerUpSingle", "criticalHitRateUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "内に秘めたる熱情 自分のHPが50％未満の時、自分に高揚(3ターン)を付与、自分のパワーを40%アップ",
				"tags": ["ecstaticSingle", "powerUpSingle"]
			},
		},
		{
			"id": "1105007",
			"validationStatus": "invalid",
			"epithet": "俺の意志で",
			"name": "轟焦凍",
			"rarity": "ur",
			"type": "dst",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "氷縛炎拳 敵単体に700%ダメージ/クリティカル発生時、このスキルのクリティカル威力を40%アップ/敵単体に低 確率 (35%)で燃焼(3ターン)を付与",
				"tags": ["criticalHitRateUpSingle", "burningSingle"]
			},
			"actionSkill1": {
				"name": "氷塊",
				"description": "敵単体に400%ダメージ/このスキルでCHAIN成功時、自分のクリティカル率を30%アップ(3ターン)/敵単体に中 確率 (40%)で氷結(1ターン)を付与",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["criticalHitRateUpSingle", "frozenSingle"]
			},
			"actionSkill2": {
				"name": "点での放出",
				"description": "自分のクリティカル率を30%アップ(3ターン)/自分のプルスウルトラゲージを50%アップ/自分のクリティカル時の威力を20%アップ(3ターン)",
				"coolDown": "Cool Down 6 Turns",
				"tags": ["criticalHitRateUpSingle", "plusUltraGaugeUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "更なる高みへ クリティカル発生時、自分のパワーを20%アップ(3ターン)、スピードを10%アップ(3ターン)",
				"tags": ["powerUpSingle", "speedUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "なりたい俺になる為に 戦闘開始後、自分のプルスウルトラゲージを30%アップ/自分のHPが50%未満の時、クリティカル威力を30%アップ",
				"tags": ["plusUltraGaugeUpSingle", "criticalHitRateUpSingle"]
			},
		},
		{
			"id": "1105008",
			"validationStatus": "invalid",
			"epithet": "ワールドヒーローズ",
			"name": "轟焦凍",
			"rarity": "ur",
			"type": "abl",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "穿天氷壁 敵単体に600%ダメージ/敵単体に高 確率 (80%)で氷結(1ターン)を付与/敵単体に中 確率 (50%)で拘束(2ターン)を付与",
				"tags": ["frozenSingle", "boundSingle"]
			},
			"actionSkill1": {
				"name": "炎舞",
				"description": "敵全体に275%ダメージ/敵全体に中 確率 (45%)で燃焼(4ターン)を付与/味方全体のスキル威力を30%アップ(3ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["burningAll", "skillImpactUpAll"]
			},
			"actionSkill2": {
				"name": "氷塊",
				"description": "敵単体に350%ダメージ/敵単体に中 確率 (40%)で氷結(1ターン)を付与/このスキルでCHAIN成功時、自分にバリア(1ヒット)を付与、味方全体が受けるダメージを30%カット(2ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["frozenSingle", "barrierSingle", "damageDownAll"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "己を燃やせ 自分のHPが50%以上の時、自分に高揚を付与/WAVE開始後、味方全体が燃焼状態になる確率を下げる(3ターン)/WAVE開始後、自分のパワーを40%アップ(3ターン)",
				"tags": ["ecstaticSingle", "burningAll", "powerUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "俺の意志でここに来た チームに\"プロヒーロー\"がいれば、自分のパワーを40%アップ、味方全体のクリティカル率を15%アップ",
				"tags": ["powerUpSingle", "criticalHitRateUpAll"]
			},
		},
		{
			"id": "1105009",
			"validationStatus": "invalid",
			"epithet": "氷炎を統べる天才",
			"name": "轟焦凍",
			"rarity": "ur",
			"type": "str",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "氷炎乱舞 敵単体に650%ダメージ/敵が凍傷状態だったら敵単体のディフェンスを30%ダウン(3ターン)/敵が燃焼状態だったらスキル威力が40%アップ",
				"tags": ["frozenSingle", "burningSingle", "defenseDownSingle", "skillImpactUpSingle"]
			},
			"actionSkill1": {
				"name": "氷塊",
				"description": "敵全体に275%ダメージ/敵全体に低 確率 (35%)で凍傷(3ターン)を付与/自分のプルスウルトラゲージを40%アップ",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["frozenAll", "plusUltraGaugeUpSingle"]
			},
			"actionSkill2": {
				"name": "氷熱波",
				"description": "敵単体に400%ダメージ/敵単体に中 確率 (45%)で燃焼(3ターン)を付与/このスキルで3CHAIN成功時、敵単体に高 確率 (65%)で凍傷(3ターン)を付与",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["burningSingle", "frozenSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "着眼大局 WAVE開始後、敵全体のスピードを15%ダウン(3ターン)/自分のHPが50%以上の時、自分のスキル威力を40%アップ",
				"tags": ["speedDownAll", "skillImpactUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "未来への歩み 自分のHPが50％未満の時、戦闘中に1度だけ自分のアクションスキルのクールタイムを3短縮し、自分のプルスウルトラゲージを50%アップ",
				"tags": ["cooldownTimeReductionSingle", "plusUltraGaugeUpSingle"]
			},
		},
		{
			"id": "1105010",
			"validationStatus": "invalid",
			"epithet": "集う英傑",
			"name": "轟焦凍",
			"rarity": "ur",
			"type": "abl",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "氷炎十文字斬り 敵単体に600%ダメージ/クリティカル時の威力が40%アップ/敵単体のディフェンスを30%ダウン(3ターン)/自分のアクションスキルのクールタイムを2短縮する",
				"tags": ["criticalHitRateUpSingle", "defenseDownSingle", "cooldownTimeReductionSingle"]
			},
			"actionSkill1": {
				"name": "氷霧",
				"description": "敵単体に400%ダメージ/敵単体に高 確率 (70%)で凍傷(3ターン)を付与/このスキルでCHAIN成功時、味方全体のクリティカル率を20%アップ(3ターン)、味方全体にバリア(1ヒット)を付与",
				"coolDown": "Cool Down 6 Turns",
				"tags": ["frozenSingle", "criticalHitRateUpAll", "barrierAll"]
			},
			"actionSkill2": {
				"name": "氷塊",
				"description": "敵全体に275%ダメージ/敵全体に中 確率 (40%)で氷結(1ターン)を付与/このスキルでCHAIN成功時、敵全体のスピードを20%ダウン(3ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["frozenAll", "speedDownAll"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "俺はもっと上へ行く 自分がバリア状態の時、味方全体のクリティカル率を30%アップ/スピードがダウンしている相手から攻撃を3回受けきった後に、自分にバリア(2ヒット)を付与(最大3回)",
				"tags": ["criticalHitRateUpAll", "barrierSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "クール＆ホット クリティカルが発生するたびに、味方全体のクリティカル率を5%アップ(最大10回)、自分のプルスウルトラゲージを10%アップ",
				"tags": ["criticalHitRateUpAll", "plusUltraGaugeUpSingle"]
			},
		},
		{
			"id": "1105011",
			"validationStatus": "invalid",
			"epithet": "最速のカバー",
			"name": "轟焦凍",
			"rarity": "sr",
			"type": "str",
			"plusUltra": {
				"name": "烈火拳",
				"description": "敵単体に450%ダメージ/敵単体に高 確率 (70%)で燃焼(3ターン)を付与/敵単体のプルスウルトラ技の威力を30%ダウン(3ターン)",
				"tags": ["burningSingle", "plusUltraMoveSkillImpactDownSingle"]
			},
			"actionSkill1": {
				"name": "氷霧",
				"description": "敵全体に250%ダメージ/敵全体に中 確率 (35%)で氷結(1ターン)を付与/味方全体が燃焼状態になる確率を下げる(3ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["frozenAll", "burningAll"]
			},
			"actionSkill2": {
				"name": "炎舞",
				"description": "敵全体に250%ダメージ/敵全体に中 確率 (35%)で燃焼(3ターン)を付与/味方全体が氷結状態になる確率を下げる(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["burningAll", "frozenAll"]

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "期待の氷炎 WAVE開始後、自分のスピードを50%アップ(1ターン)/自分の燃焼、氷結状態を付与する確率を上げる(毎ターン)(最大5回)",
				"tags": ["speedUpSingle", "burningAll", "frozenAll"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "優しき心 自分のHPが50%未満の時、敵全体のパワーを30%ダウン(3ターン)/自分のHPが50%以上の時、味方全体のパワーを10%アップ",
				"tags": ["powerDownAll", "powerUpAll"]
			},
		},
		{
			"id": "1105012",
			"validationStatus": "invalid",
			"epithet": "晴れ着で勝負",
			"name": "轟焦凍",
			"rarity": "ur",
			"type": "dst",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "氷結来光 敵単体に700%ダメージ/自分以外の味方全体に高揚(3ターン)を付与/自分に高揚(5ターン)を付与",
				"tags": ["ecstaticAll"]
			},
			"actionSkill1": {
				"name": "氷霧",
				"description": "敵全体に250%ダメージ/敵全体に中 確率 (35%)で凍傷(3ターン)を付与/味方全体が受けるダメージを30%カット(3ターン)/このスキルで3CHAIN成功時、敵全体のスキル威力を20%ダウン(3ターン)",
				"coolDown": "Cool Down 6 Turns",
				"tags": ["frozenAll", "damageDownAll", "skillImpactDownAll"]
			},
			"actionSkill2": {
				"name": "烈火拳",
				"description": "敵単体に400%ダメージ/敵単体のスキル威力を30%ダウン(3ターン)/敵単体に中 確率 (45%)で燃焼(3ターン)を付与/このスキルで3CHAIN成功時、味方全体のプルスウルトラゲージを25%アップ",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["skillImpactDownSingle", "burningSingle", "plusUltraGaugeUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "切り裂く氷 自分のスキルで2CHAIN以上成功時、自分のアクションスキルのクールタイムを1短縮する/自分の最大HPがアップしている時、自分のスキル威力を20%アップ",
				"tags": ["cooldownTimeReductionSingle", "skillImpactUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "焼け付く熱風 自分が高揚状態の時、味方全体のプルスウルトラ技の威力を20%アップ、スピードを20%アップ",
				"tags": ["ecstaticSingle", "plusUltraMoveImpactUpAll", "speedUpAll"]
			},
		},
		{
			"id": "1105013",
			"validationStatus": "invalid",
			"epithet": "七夕の夜",
			"name": "轟焦凍",
			"rarity": "ur",
			"type": "int",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "氷炎星拳 敵単体に600%ダメージ、中 確率 (50%)で燃焼(3ターン)を付与/自分のアクションスキルのクールタイムを1短縮/味方全体にバリア(1ヒット)を付与",
				"tags": ["burningSingle", "cooldownTimeReductionSingle", "barrierAll"]
			},
			"actionSkill1": {
				"name": "烈火拳",
				"description": "敵単体に400%ダメージ、中 確率 (50%)で燃焼(3ターン)を付与/このスキルでCHAIN成功時、味方全体に氷結、凍傷耐性(3ターン)を付与/自分の最大HPがアップしている時、スキル威力を40%アップ",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["burningSingle", "frostbiteResistUpAll", "skillImpactUpSingle"]
			},
			"actionSkill2": {
				"name": "氷霧",
				"description": "敵全体に275%ダメージ、中 確率 (40%)で氷結(1ターン)を付与/味方全体の最大HPを20%アップ(3ターン)/このスキルでCHAIN成功時、味方全体に燃焼耐性(3ターン)を付与",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["frozenAll", "maxHpUpAll", "burnResistUpAll"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "オールマイティー 自分の最大HPがアップしている時、味方全体のアクションスキル威力を30%アップ/自分の凍傷耐性がアップしている時、味方全体のスピードを20%アップ/自分の燃焼耐性がアップしている時、味方全体のディフェンスを20%アップ",
				"tags": ["skillImpactUpAll", "speedUpAll", "defenseUpAll"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "天然気質 味方全体の\"知タイプ\"キャラのクリティカル率を25%アップ",
				"tags": ["criticalHitRateUpAll"]
			},
		},
		{
			"id": "1105014",
			"validationStatus": "invalid",
			"epithet": "祝典のRUN",
			"name": "轟焦凍",
			"rarity": "ur",
			"type": "mnd",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "ウイニング氷炎撃 敵単体に650%ダメージ、高 確率 (70%)で燃焼(4ターン)を付与/味方全体のクールタイム1短縮、バリア(1ヒット)を付与",
				"tags": ["burningSingle", "cooldownTimeReductionAll", "barrierAll"]
			},
			"actionSkill1": {
				"name": "凍結制圧",
				"description": "味方全体のディフェンス25%アップ(3ターン)、最大HP20%アップ(3ターン)、クリティカル抵抗30%アップ(3ターン)、バリア(1ヒット)を付与",
				"coolDown": "Cool Down 6 Turns",
				"tags": ["defenseUpAll", "maxHpUpAll", "criticalResistanceUpAll", "barrierAll"]
			},
			"actionSkill2": {
				"name": "炎舞",
				"description": "敵全体に300%ダメージ、中 確率 (55%)で燃焼(4ターン)を付与/このスキルで2CHAIN以上成功時、味方全体のプルスウルトラゲージ20%アップ/自分がHP自動回復の時、このスキルのスキル威力40%アップ",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["burningAll", "plusUltraGaugeUpAll", "skillImpactUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "燃え上がる意志 味方全体の\"信タイプ\"のディフェンス20%アップ/1ターン毎に、自分のプルスウルトラゲージ10%アップ/自分がバリアのまま、1回ターンをまたいだ時、自分のクールタイム1短縮",
				"tags": ["defenseUpAll", "plusUltraGaugeUpSingle", "cooldownTimeReductionSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "体温維持 自分のスキルでCHAIN成功時、味方全体にHP10%自動回復(2ターン)を付与、一時的な状態異常1個回復/自分がバリアでないまま、2回ターンをまたいだ時、自分の最大HP10%アップ(最大5回)、HP5%自動回復(1ターン)を付与",
				"tags": ["hpRegenerationAll", "cancelStatusAilmentsAll", "maxHpUpSingle"]
			},
		},
		{
			"id": "1106001",
			"validationStatus": "invalid",
			"epithet": "日々の修練",
			"name": "蛙吹梅雨",
			"rarity": "r",
			"type": "abl",
			"plusUltra": {
				"name": "フロッピキック",
				"description": "敵単体に400%ダメージ/自分のクリティカル率を15%アップ(3ターン)",
				"tags": ["criticalHitRateUpSingle"]
			},
			"actionSkill1": {
				"name": "フロッピスイング",
				"description": "敵単体に250%ダメージ/敵単体のパワーを10%ダウン(3ターン)",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["powerDownSingle"]
			},
			"actionSkill2": {
				"name": "ポーカーフェイス",
				"description": "自分のクリティカル率を35%アップ(3ターン)/自分に隠れる(3ターン)を付与",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["criticalHitRateUpSingle", "hideSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "梅雨ちゃんと呼んで 戦闘開始後、自分のプルスウルトラゲージを20%アップ",
				"tags": ["plusUltraGaugeUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "ケロケロ 自分が隠れる状態の時、自分のパワーを25%アップ",
				"tags": ["powerUpSingle"]
			},
		},
		{
			"id": "1106002",
			"validationStatus": "invalid",
			"epithet": "学校生活",
			"name": "蛙吹梅雨",
			"rarity": "r",
			"type": "int",
			"plusUltra": {
				"name": "フロッピスイング",
				"description": "敵単体に400%ダメージ/敵単体のクリティカル率を15%ダウン(3ターン)",
				"tags": ["criticalHitRateDownSingle"]
			},
			"actionSkill1": {
				"name": "粘液噴射",
				"description": "敵単体のスピードを30%ダウン(3ターン)/敵単体のクリティカル率を30%ダウン(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["speedDownSingle", "criticalHitRateDownSingle"]
			},
			"actionSkill2": {
				"name": "跳躍力",
				"description": "自分のスピードを40%アップ(3ターン)/自分に回避(1回)を付与",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["speedUpSingle", "evasionSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "鋭い洞察力 WAVE開始後、敵単体のクリティカル率を20%ダウン(3ターン)",
				"tags": ["criticalHitRateDownSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "優等生 WAVE開始後、自分のクリティカル率を20%アップ(3ターン)",
				"tags": ["criticalHitRateUpSingle"]
			},
		},
		{
			"id": "1106003",
			"validationStatus": "invalid",
			"epithet": "飛躍する少女",
			"name": "蛙吹梅雨",
			"rarity": "sr",
			"type": "dst",
			"plusUltra": {
				"name": "フロッピスイング",
				"description": "敵単体に500%ダメージ/敵単体のディフェンスを15%ダウン(3ターン)",
				"tags": ["defenseDownSingle"]
			},
			"actionSkill1": {
				"name": "保護色",
				"description": "自分に保護色(4ターン)を付与/自分のクリティカル率を35%アップ(4ターン)",
				"coolDown": "Cool Down 6 Turns",
				"tags": ["criticalHitRateUpSingle"]
			},
			"actionSkill2": {
				"name": "フロッピキック",
				"description": "敵単体に300%ダメージ/敵単体のクリティカル率を25%ダウン(3ターン)",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["criticalHitRateDownSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "信頼できる友達 戦闘開始後、自分以外の味方全体のプルスウルトラゲージを20％アップ",
				"tags": ["plusUltraGaugeUpAll"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "水中の逸材 戦闘開始後、自分のプルスウルトラゲージを30％アップ",
				"tags": ["plusUltraGaugeUpSingle"]
			},
		},
		{
			"id": "1106004",
			"validationStatus": "invalid",
			"epithet": "色に紛れて",
			"name": "蛙吹梅雨",
			"rarity": "ur",
			"type": "abl",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "フロッピスパイラル 敵単体に700%ダメージ/敵単体に中 確率 (50%)で混乱(2ターン)を付与/敵単体のスピードを30%ダウン(3ターン)",
				"tags": ["confusionSingle", "speedDownSingle"]
			},
			"actionSkill1": {
				"name": "フロッピキック",
				"description": "敵単体に400%ダメージ/このスキルでCHAIN成功時、敵単体のクリティカル率を35%ダウン(3ターン)、ディフェンスを15%ダウン(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["criticalHitRateDownSingle", "defenseDownSingle"]
			},
			"actionSkill2": {
				"name": "保護色",
				"description": "自分に保護色(3ターン)を付与/味方全体のクリティカル率を30%アップ(3ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["criticalHitRateUpAll"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "精神的支柱 戦闘開始後、味方全体の\"技タイプ\"キャラのプルスウルトラゲージを30％アップ",
				"tags": ["plusUltraGaugeUpAll"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "強靭な脚力 自分が保護色状態の時、自分のクリティカル率を35%アップ",
				"tags": ["criticalHitRateUpSingle"]
			},
		},
		{
			"id": "1106005",
			"validationStatus": "invalid",
			"epithet": "洗練された観察眼",
			"name": "蛙吹梅雨",
			"rarity": "sr",
			"type": "mnd",
			"plusUltra": {
				"name": "フロッピキック",
				"description": "敵単体に500%ダメージ/敵単体のパワーを25%ダウン(3ターン)",
				"tags": ["powerDownSingle"]
			},
			"actionSkill1": {
				"name": "フロッピスピア",
				"description": "敵単体に300%ダメージ/敵単体のスキル威力を25%ダウン(3ターン)",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["skillImpactDownSingle"]
			},
			"actionSkill2": {
				"name": "状況判断力",
				"description": "味方全体の状態異常を1つ回復/自分に隠れる(3ターン)を付与/敵単体のクリティカル率を20%ダウン(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["cancelStatusAilmentsAll", "hideSingle", "criticalHitRateDownSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "カエルの本領 自分が隠れる状態の時、自分のパワーを30%アップ/自分のHPが50％未満の時、戦闘中に1度だけ自分にHP10%自動回復(3ターン)を付与",
				"tags": ["powerUpSingle", "hpRegenerationSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "見事な機転 戦闘開始後、味方全体の\"信タイプ\"キャラのプルスウルトラゲージを20%アップ/自分のHPが50％未満の時、戦闘中に1度だけプルスウルトラゲージを25%アップ",
				"tags": ["plusUltraGaugeUpAll", "plusUltraGaugeUpSingle"]
			},
		},
		{
			"id": "1106006",
			"validationStatus": "invalid",
			"epithet": "浴衣で満喫！",
			"name": "蛙吹梅雨",
			"rarity": "sr",
			"type": "abl",
			"plusUltra": {
				"name": "ウォーターバルーンスプラッシュ",
				"description": "敵単体に450%ダメージ/自分のアクションスキルのクールタイムを1短縮する/味方全体のクリティカル率を20%アップ(3ターン)",
				"tags": ["cooldownTimeReductionSingle", "criticalHitRateUpAll"]

			},
			"actionSkill1": {
				"name": "ウォーターバルーンスプラッシュ",
				"description": "敵単体に300%ダメージ/自分が隠れる状態の時、スキル威力を30%アップ/このスキルで2CHAIN以上成功時、味方全体に回避(1回)を付与",
				"coolDown": "Cool Down 6 Turns",
				"tags": ["powerUpSingle", "evasionAll"]
			},
			"actionSkill2": {
				"name": "冷静な決断",
				"description": "自分に隠れる(3ターン)を付与/このスキルでCHAIN成功時、自分のプルスウルトラゲージを40%アップ/このスキルで2CHAIN以上成功時、味方全体のクリティカル率を20%アップ(3ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["hideSingle", "plusUltraGaugeUpSingle", "criticalHitRateUpAll"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "安定感ある活躍 自分が隠れる状態の時、味方全体のスキル威力を25%アップ/自分のHPが50%未満の時、戦闘中に1度だけ自分にHP15%自動回復(3ターン)を付与",
				"tags": ["skillImpactUpAll", "hpRegenerationSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "躍動感 自分が隠れる状態の時、味方全体のスピードを25%アップ/自分のHPが50%未満の時、戦闘中に1度だけ自分に隠れる(3ターン)を付与",
				"tags": ["speedUpAll", "hideSingle"]
			},
		},
		{
			"id": "1106007",
			"validationStatus": "invalid",
			"epithet": "祝福のギフト",
			"name": "蛙吹梅雨",
			"rarity": "ur",
			"type": "dst",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "フロッピープレゼント 敵単体に650%ダメージ/自分が高揚状態の時、味方全体が受けるダメージを20%カット(3ターン)/味方全体のプルスウルトラ技の威力を30%アップ(3ターン)",
				"tags": ["damageDownAll", "plusUltraMoveImpactUpAll"]
			},
			"actionSkill1": {
				"name": "回避サポート",
				"description": "自分が高揚状態の時、味方全体にHP10%自動回復(2ターン)を付与/味方全体が受けるダメージを20%カット(3ターン)/味方全体のスピードを30%アップ(3ターン)",
				"coolDown": "Cool Down 6 Turns",
				"tags": ["hpRegenerationAll", "damageDownAll", "speedUpAll"]
			},
			"actionSkill2": {
				"name": "フロッピキック",
				"description": "敵単体に400%ダメージ/自分がダメージカット状態の時、味方全体に高揚(4ターン)を付与/敵単体のパワーを20%ダウン(4ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["ecstaticAll", "powerDownSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "フレキシブルな頭脳 WAVE開始後、味方全体に高揚(3ターン)を付与、敵全体のパワーを25%ダウン(3ターン)",
				"tags": ["ecstaticAll", "powerDownAll"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "平常心 自分がダメージカット状態の時、味方全体のスキル威力を30%アップ/自分のHPが50%未満の時、戦闘中に1度だけ自分が受けるダメージを20%カット(3ターン)、自分にHP20%自動回復(3ターン)を付与",
				"tags": ["skillImpactUpAll", "hpRegenerationSingle"]
			},
		},
		{
			"id": "1106008",
			"validationStatus": "invalid",
			"epithet": "集う英傑",
			"name": "蛙吹梅雨",
			"rarity": "ur",
			"type": "int",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "フロッピストライク 敵単体に700%ダメージ/自分のアクションスキルのクールタイムを1短縮/自分が隠れるの時、スキル威力を30%アップ、クリティカル率を40%アップ",
				"tags": ["cooldownTimeReductionSingle", "powerUpSingle", "criticalHitRateUpSingle"]
			},
			"actionSkill1": {
				"name": "フロッピスイング",
				"description": "敵全体に300%ダメージ、パワーを30%ダウン(3ターン)/自分が隠れるの時、スキル威力を30%アップ",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["powerDownAll", "powerUpSingle"]
			},
			"actionSkill2": {
				"name": "フロッピスピア",
				"description": "敵単体に400%ダメージ/自分のプルスウルトラゲージを30%アップ/自分が隠れるの時、スキル威力を30%アップ",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["plusUltraGaugeUpSingle", "powerUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "きわめて優秀 自分のHPが50%以上の時、自分に隠れるを付与/自分のスキルでCHAIN成功時、自分のパワーを15%アップ(最大6回)/自分のスキルで3CHAIN成功時、味方全体の状態異常を防ぐ(1回)(最大3回)",
				"tags": ["hideSingle", "powerUpSingle", "statusAilmentNullAll"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "平静の心 自分が隠れるの時、自分に貫通を付与、自分以外の味方全体のディフェンスを30%アップ/自分が隠れるでない時、自分にHP10%自動回復を付与",
				"tags": ["piercingShot", "defenseUpAll", "hpRegenerationSingle"]
			},
		},
		{
			"id": "1107001",
			"validationStatus": "invalid",
			"epithet": "日々の修練",
			"name": "峰田実",
			"rarity": "r",
			"type": "abl",
			"plusUltra": {
				"name": "グレープウィップ",
				"description": "敵単体に400%ダメージ/敵単体のスピードを25%ダウン(3ターン)",
				"tags": ["speedDownSingle"]
			},
			"actionSkill1": {
				"name": "グレープラッシュ",
				"description": "敵単体に250%ダメージ/敵単体のスピードを10％ダウン(3ターン)",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["speedDownSingle"]
			},
			"actionSkill2": {
				"name": "緊急避難",
				"description": "自分のスピードを40%アップ(3ターン)/自分に隠れる(3ターン)を付与",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["speedUpSingle", "hideSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "妄想力 チームに\"女性\"がいれば自分のパワーを25%アップ",
				"tags": ["powerUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "ぶちまけた弱音 自分のHPが50％未満の時、戦闘中に1度だけ自分のプルスウルトラゲージを30％アップ",
				"tags": ["plusUltraGaugeUpSingle"]
			},
		},
		{
			"id": "1107002",
			"validationStatus": "invalid",
			"epithet": "学校生活",
			"name": "峰田実",
			"rarity": "r",
			"type": "dst",
			"plusUltra": {
				"name": "グレープラッシュ",
				"description": "敵単体に400%ダメージ/敵単体のパワーを25%ダウン(3ターン)",
				"tags": ["powerDownSingle"]
			},
			"actionSkill1": {
				"name": "悪知恵",
				"description": "敵単体のパワーを20%ダウン(3ターン)/敵単体のクリティカル率を40%ダウン(3ターン)",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["powerDownSingle", "criticalHitRateDownSingle"]
			},
			"actionSkill2": {
				"name": "モテるために",
				"description": "自分のプルスウルトラゲージを50%アップ",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["plusUltraGaugeUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "逃げ足 自分のHPが50％未満の時、自分のスピードを30%アップ",
				"tags": ["speedUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "粘着力強化 自分のHPが50％以上の時、自分のクリティカル率を20%アップ",
				"tags": ["criticalHitRateUpSingle"]
			},
		},
		{
			"id": "1107003",
			"validationStatus": "invalid",
			"epithet": "窮地の底力",
			"name": "峰田実",
			"rarity": "sr",
			"type": "int",
			"plusUltra": {
				"name": "グレープラッシュ",
				"description": "敵単体に450%ダメージ/敵単体に中 確率 (45%)で拘束(1ターン)を付与",
				"tags": ["boundSingle"]
			},
			"actionSkill1": {
				"name": "グレープウィップ",
				"description": "敵単体に300%ダメージ/自分に隠れる(3ターン)を付与",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["hideSingle"]
			},
			"actionSkill2": {
				"name": "イヤな視線",
				"description": "敵全体のスピードを20%ダウン(3ターン)/敵が\"女性\"だったら更に20%ダウン(3ターン)、アクションスキル威力を10%ダウン(3ターン)",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["speedDownAll", "powerDownAll"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "かっけえ男になる チームに\"女性\"がいれば自分のパワーを30%アップ",
				"tags": ["powerUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "意外な頭脳派 自分が隠れる状態の時、自分のクリティカル率を25%アップ",
				"tags": ["criticalHitRateUpSingle"]
			},
		},
		{
			"id": "1107004",
			"validationStatus": "invalid",
			"epithet": "みんなで料理",
			"name": "峰田実",
			"rarity": "sr",
			"type": "dst",
			"plusUltra": {
				"name": "グレープウィップ",
				"description": "敵単体に450%ダメージ/敵単体に低 確率 (30%)で拘束(1ターン)を付与/敵単体のパワーを25%ダウン(3ターン)",
				"tags": ["boundSingle", "powerDownSingle"]
			},
			"actionSkill1": {
				"name": "グレープラッシュ",
				"description": "敵単体に300%ダメージ/敵単体のパワーを15%ダウン(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["powerDownSingle"]
			},
			"actionSkill2": {
				"name": "ニヤニヤ",
				"description": "敵単体のパワーを25%ダウン(3ターン)/敵単体のスピードを35%ダウン(3ターン)",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["powerDownSingle", "speedDownSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "止まらぬ煩悩 戦闘開始後、チームに\"女性\"がいれば自分のプルスウルトラゲージを40%アップ",
				"tags": ["plusUltraGaugeUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "女好き チームに\"女性\"がいれば自分のクリティカル率を25%アップ",
				"tags": ["criticalHitRateUpSingle"]
			},
		},
		{
			"id": "1107005",
			"validationStatus": "invalid",
			"epithet": "やるときはやる男",
			"name": "峰田実",
			"rarity": "sr",
			"type": "mnd",
			"plusUltra": {
				"name": "グレープインパクト",
				"description": "敵単体に400%ダメージ/敵単体のパワーを30%ダウン(3ターン)/敵単体に中 確率 (35%)で拘束(1ターン)を付与",
				"tags": ["powerDownSingle", "boundSingle"]
			},
			"actionSkill1": {
				"name": "グレープインパクト",
				"description": "敵単体に300%ダメージ/敵単体のスピードを30%ダウン(3ターン)/敵単体に中 確率 (40%)で拘束(1ターン)を付与",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["speedDownSingle", "boundSingle"]
			},
			"actionSkill2": {
				"name": "近接支援",
				"description": "敵単体のディフェンスを20%ダウン(3ターン)/敵単体のクリティカル率を30%ダウン(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["defenseDownSingle", "criticalHitRateDownSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "超くっつく 味方全体の\"信タイプ\"キャラのクリティカル率を20%アップ",
				"tags": ["criticalHitRateUpAll"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "刹那的な思考 自分のHPが50%未満の時、敵全体のスピードを20%ダウン(3ターン)、戦闘中に1度だけ自分に隠れる(3ターン)を付与",
				"tags": ["speedDownAll", "hideSingle"]
			},
		},
		{
			"id": "1108001",
			"validationStatus": "invalid",
			"epithet": "日々の修練",
			"name": "切島鋭児郎",
			"rarity": "r",
			"type": "mnd",
			"plusUltra": {
				"name": "豪快ブロー",
				"description": "敵単体に400%ダメージ/自分にバリア(1ヒット)を付与",
				"tags": ["barrierSingle"]
			},
			"actionSkill1": {
				"name": "漢気ナックル",
				"description": "敵単体に250%ダメージ/自分のパワーを30%アップ(3ターン)",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["powerUpSingle"]
			},
			"actionSkill2": {
				"name": "俺を見ろォ！！",
				"description": "自分にかばう(2ターン)を付与/自分にHP20%自動回復(3ターン)を付与/自分のパワーを10%アップ",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["coverSingle", "hpRegenerationSingle", "powerUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "硬派 WAVE開始後、自分が受けるダメージを30%カット(2ターン)",
				"tags": ["damageDownSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "硬化の男 自分がかばう状態の時、自分のパワーを25%アップ",
				"tags": ["powerUpSingle"]
			},
		},
		{
			"id": "1108002",
			"validationStatus": "invalid",
			"epithet": "学校生活",
			"name": "切島鋭児郎",
			"rarity": "r",
			"type": "str",
			"plusUltra": {
				"name": "漢気ナックル",
				"description": "敵単体に400%ダメージ/自分が受けるダメージを40%カット(2ターン)",
				"tags": ["damageDownSingle"]
			},
			"actionSkill1": {
				"name": "豪快ブロー",
				"description": "敵単体に250%ダメージ/敵単体のパワーを10%ダウン(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["powerDownSingle"]
			},
			"actionSkill2": {
				"name": "気合",
				"description": "自分のプルスウルトラゲージを50%アップ",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["plusUltraGaugeUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "熱血漢 クリティカル攻撃を受けるたび、自分のパワーを5％アップ(5回まで発動)",
				"tags": ["powerUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "打てば打つほど硬くなる 攻撃を5回受けると、自分が受けるダメージを20%カット(3ターン)",
				"tags": ["damageDownSingle"]
			},
		},
		{
			"id": "1108003",
			"validationStatus": "invalid",
			"epithet": "倒れない強さ",
			"name": "切島鋭児郎",
			"rarity": "ur",
			"type": "str",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "烈怒頑斗裂屠 敵単体に650%ダメージ/自分にバリア(3ヒット)を付与",
				"tags": ["barrierSingle"]
			},
			"actionSkill1": {
				"name": "烈怒交吽咤",
				"description": "自分に通常攻撃を受けた上でカウンターする状態(3ターン)を付与/自分が受けるダメージを50%カット(2ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["counterSingle", "damageDownSingle"]
			},
			"actionSkill2": {
				"name": "漢気ナックル",
				"description": "敵単体に400%ダメージ/自分にかばう(3ターン)を付与/自分が受けるダメージを40%カット(1ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["coverSingle", "damageDownSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "守れるヒーロー 味方全体の\"力タイプ\"キャラのパワーを25%アップ",
				"tags": ["powerUpAll"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "赤の衝動 自分がクリティカル攻撃を受けるたびに、自分のプルスウルトラゲージを15％アップ",
				"tags": ["plusUltraGaugeUpSingle"]
			},
		},
		{
			"id": "1108004",
			"validationStatus": "invalid",
			"epithet": "込めろ漢気",
			"name": "切島鋭児郎",
			"rarity": "sr",
			"type": "mnd",
			"plusUltra": {
				"name": "漢気ナックル",
				"description": "敵単体に500%ダメージ/自分が受けるダメージを50%カット(2ターン)",
				"tags": ["damageDownSingle"]
			},
			"actionSkill1": {
				"name": "豪快ブロー",
				"description": "敵単体に300%ダメージ/敵がクリティカル率ダウン状態だったらスキル威力が50%アップ",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["criticalHitRateDownSingle", "powerUpSingle"]
			},
			"actionSkill2": {
				"name": "俺が守る！",
				"description": "自分にかばう(2ターン)を付与/このスキルでCHAIN成功時、自分が受けるダメージを35%カット(2ターン)/自分以外の味方全体のパワーを10%アップ",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["coverSingle", "damageDownSingle", "powerUpAll"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "仲間思い 味方全体の\"雄英高校1年A組\"のパワーを20％アップ",
				"tags": ["powerUpAll"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "男の背中 WAVE開始後、自分が受けるダメージを30%カット(3ターン)",
				"tags": ["damageDownSingle"]
			},
		},
		{
			"id": "1108005",
			"validationStatus": "invalid",
			"epithet": "みんなで料理",
			"name": "切島鋭児郎",
			"rarity": "sr",
			"type": "str",
			"plusUltra": {
				"name": "豪快ブロー",
				"description": "敵単体に500%ダメージ/敵単体のパワーを25%ダウン(3ターン)",
				"tags": ["powerDownSingle"]
			},
			"actionSkill1": {
				"name": "漢気ナックル",
				"description": "敵単体に300%ダメージ/味方全体が受けるダメージを20%カット(2ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["damageDownAll"]
			},
			"actionSkill2": {
				"name": "もっと硬く！！",
				"description": "自分が受けるダメージを40%カット(2ターン)/自分のプルスウルトラゲージを40%アップ/自分のHPが50%未満の時、自分のディフェンスを15%アップ(3ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["damageDownSingle", "plusUltraGaugeUpSingle", "defenseUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "質実剛健 味方全体の\"力タイプ\"キャラの最大HPを20%アップ",
				"tags": ["maxHpUpAll"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "攻防一体 クリティカル攻撃を受けるたび、自分のパワーを8％アップ(5回まで発動)",
				"tags": ["powerUpSingle"]
			},
		},
		{
			"id": "1108006",
			"validationStatus": "invalid",
			"epithet": "ゴリ押しで圧倒!!",
			"name": "切島鋭児郎",
			"rarity": "sr",
			"type": "dst",
			"plusUltra": {
				"name": "漢気ナックル",
				"description": "敵単体に500%ダメージ/自分にバリア(1ヒット)を付与",
				"tags": ["barrierSingle"]
			},
			"actionSkill1": {
				"name": "頑強ブレイド",
				"description": "敵単体に300%ダメージ/自分が受けるダメージを30%カット(3ターン)/このスキルでCHAIN成功時、自分のパワーを15%アップ(3ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["damageDownSingle", "powerUpSingle"]
			},
			"actionSkill2": {
				"name": "豪快ブロー",
				"description": "敵単体に300%ダメージ/自分にかばう(2ターン)を付与",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["coverSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "砕けても知らねえぞ！！ 自分がかばう状態の時、自分のパワーを30%アップ",
				"tags": ["powerUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "二度と後悔はしたくねぇ！ 自分のHPが50％未満の時、自分のディフェンスを30%アップ",
				"tags": ["defenseUpSingle"]
			},
		},
		{
			"id": "1108007",
			"validationStatus": "invalid",
			"epithet": "ヒーローの漢気",
			"name": "切島鋭児郎",
			"rarity": "ur",
			"type": "abl",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "烈怒頼雄斗安無嶺過武瑠 敵単体に650%ダメージ/自分のディフェンスを20%アップ(3ターン)/自分にくいしばり(1回)を付与",
				"tags": ["defenseUpSingle", "barrierSingle"]
			},
			"actionSkill1": {
				"name": "頑強ブレイド",
				"description": "敵単体に350%ダメージ/自分にかばう(3ターン)を付与/自分にバリア(3ヒット)を付与",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["cover", "barrierSingle"]
			},
			"actionSkill2": {
				"name": "烈怒交吽咤",
				"description": "自分に通常攻撃を受けた上でカウンターする状態(3ターン)を付与/自分にバリア(3ヒット)を付与/自分のスキル威力を40%アップ(3ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["counterSingle", "barrierSingle", "powerUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "情けない自分との決別 自分がクリティカル攻撃を受けるたびに、自分のスキル威力を5%アップ(10回まで発動)/HPが50%未満の時、自分のスキル威力を35%アップ",
				"tags": ["powerUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "耐えろ、守れ、信じろ 味方全体の\"技タイプ\"キャラの最大HPを25%アップ",
				"tags": ["maxHpUpAll"]
			},
		},
		{
			"id": "1108008",
			"validationStatus": "invalid",
			"epithet": "剛毅なガッツ",
			"name": "切島鋭児郎",
			"rarity": "sr",
			"type": "str",
			"plusUltra": {
				"name": "漢気ナックル",
				"description": "敵単体に500%ダメージ/自分にくいしばり(1回)を付与/自分のディフェンスがアップしている時、スキル威力が40%アップ",
				"tags": ["barrierSingle", "defenseUpSingle"]
			},
			"actionSkill1": {
				"name": "烈怒大車輪",
				"description": "敵単体に350%ダメージ/味方全体のディフェンスを10%アップ(3ターン)/自分がバリア状態の時、スキル威力が20%アップ",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["defenseUpAll", "powerUpSingle"]
			},
			"actionSkill2": {
				"name": "豪快ブロー",
				"description": "敵単体に300%ダメージ/自分のディフェンスを25%アップ(3ターン)/自分以外の味方全体の状態異常を1つ回復/自分がバリア状態だったら、自分以外の味方全体のパワーを30%アップ(3ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["defenseUpSingle", "statusAbnormalRecoveryAll", "powerUpAll"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "みんなの盾 自分にバリア(1ヒット)を付与(毎ターン)(最大4回)/自分のHPが50％未満の時、戦闘中に1度だけ自分のディフェンスを30%アップ(3ターン)",
				"tags": ["barrierSingle", "defenseUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "絶対倒されねぇ!!! 自分がバリア状態でなければ、自分のスピードを25%アップ/自分がバリア状態の時、自分にかばうを付与",
				"tags": ["speedUpSingle", "coverSingle"]
			},
		},
		{
			"id": "1108009",
			"validationStatus": "invalid",
			"epithet": "浴衣で満喫！",
			"name": "切島鋭児郎",
			"rarity": "sr",
			"type": "mnd",
			"plusUltra": {
				"name": "漢気祭りアッパー",
				"description": "敵単体に450%ダメージ/自分が受けるダメージを30%カット(2ターン)/自分にくいしばり(1回)を付与",
				"tags": ["damageDownSingle", "barrierSingle"]
			},
			"actionSkill1": {
				"name": "漢気祭りアッパー",
				"description": "敵単体に300%ダメージ/自分が受けるダメージを30%カット(1ターン)/このスキルでCHAIN成功時、味方全体のアクションスキルのクールタイムを1短縮する",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["damageDownSingle", "cooldownTimeReductionAll"]
			},
			"actionSkill2": {
				"name": "烈怒大車輪",
				"description": "敵単体に300%ダメージ/自分が受けるダメージを30%カット(1ターン)/自分のディフェンスを20%アップ(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["damageDownSingle", "defenseUpSingle"]

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "敵に背は見せねぇ！ 自分のHPが50%以上の時、自分のクリティカル率を25%アップ/自分がダメージカット状態になるたびに、自分のクリティカル率を10%アップ",
				"tags": ["criticalHitRateUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "強健な硬体 自分のHPが50%未満の時、戦闘中に1度だけ味方全体が受けるダメージを30%カット(2ターン)",
				"tags": ["damageDownAll"]
			},
		},
		{
			"id": "1108010",
			"validationStatus": "invalid",
			"epithet": "集う英傑",
			"name": "切島鋭児郎",
			"rarity": "ur",
			"type": "mnd",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "豪剣乱舞極 敵単体に650%ダメージ/味方全体が受けるダメージを25%カット(2ターン)/自分がかばう状態の時、味方全体のパワーを20%アップ(3ターン)",
				"tags": ["damageDownAll", "powerUpAll"]
			},
			"actionSkill1": {
				"name": "豪快ブロー",
				"description": "敵単体に400%ダメージ/自分のプルスウルトラゲージを30%アップ",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["plusUltraGaugeUpSingle"]
			},
			"actionSkill2": {
				"name": "烈怒交吽咤",
				"description": "自分に通常攻撃を受けた上でカウンターする状態(2ターン)を付与/自分のディフェンスを40%アップ(3ターン)/自分にかばう(2ターン)を付与",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["counter", "defenseUpSingle", "cover"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "小細工よりゴリ押し 自分のHPが60%以上の時、自分にかばうを付与/自分がかばう状態の時、自分にくいしばりを付与し、受けるダメージを35%カット",
				"tags": ["cover", "barrierSingle", "damageDownSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "割れたそばから硬めてけ！ 自分が攻撃を2ヒット受けるたびに、自分のスキル威力を5%アップ、ディフェンスを5%アップ(最大10回)/自分がかばう状態の時、自分にスタン、恐怖状態の完全耐性を付与",
				"tags": ["powerUpSingle", "defenseUpSingle", "stunImmunity", "fearImmunity"]
			},
		},
		{
			"id": "1108011",
			"validationStatus": "invalid",
			"epithet": "不抜の志",
			"name": "切島鋭児郎",
			"rarity": "sr",
			"type": "int",
			"plusUltra": {
				"name": "烈怒大車輪",
				"description": "敵単体に500%ダメージ/自分のディフェンスが敵より高ければ、スキル威力を30%アップ",
				"tags": ["defenseUpSingle", "powerUpSingle"]

			},
			"actionSkill1": {
				"name": "安無嶺過武瑠駆鈩侑",
				"description": "敵単体に300%ダメージ/自分の最大HPがアップしている時、スキル威力を25%アップ/自分のディフェンスを25%アップ(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["powerUpSingle", "defenseUpSingle"]
			},
			"actionSkill2": {
				"name": "烈怒交吽咤",
				"description": "自分に通常攻撃を受けた上でカウンターする状態(3ターン)を付与/自分の最大HPを20%アップ(3ターン)/自分のパワーを30%アップ(3ターン)/自分にバリア(2ヒット)を付与",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["counter", "maxHpUpSingle", "powerUpSingle", "barrierSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "ゆるぎない覚悟 自分がバリア状態の時、自分にかばうを付与/自分のHPが30%未満の時、戦闘中に1度だけ自分の最大HPを30%アップ",
				"tags": ["cover", "maxHpUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "ガチガチで行くぜ！ 味方全体の\"知タイプ\"キャラのディフェンスを20%アップ/3ターン毎に自分にバリア(2ヒット)を付与(最大3回)",
				"tags": ["defenseUpAll", "barrierSingle"]
			},
		},
		{
			"id": "1108012",
			"validationStatus": "invalid",
			"epithet": "ぶれぬ漢気",
			"name": "切島鋭児郎",
			"rarity": "ur",
			"type": "int",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "烈怒擦震燐斗 敵単体に650%ダメージ、パワー15%ダウン(3ターン)、スピード15%ダウン(3ターン)、クリティカル率15%ダウン(3ターン)/自分にバリア(1ヒット)を付与",
				"tags": ["powerDownSingle", "speedDownSingle", "criticalHitRateDownSingle", "barrierSingle"]
			},
			"actionSkill1": {
				"name": "安無嶺過武瑠駆鈩侑",
				"description": "敵単体に425%ダメージ、パワー25%ダウン(3ターン)、スピード40%ダウン(3ターン)/自分にかばう(3ターン)を付与、バリア(1ヒット)を付与",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["powerDownSingle", "speedDownSingle", "coverSingle", "barrierSingle"]
			},
			"actionSkill2": {
				"name": "烈怒大車輪",
				"description": "敵単体に400%ダメージ、スピード20%ダウン(3ターン)/このスキルで2CHAIN以上成功時、自分の最大HP20%アップ(3ターン)、クリティカル率20%アップ(3ターン)、バリア(1ヒット)を付与",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["speedDownSingle", "maxHpUpSingle", "criticalHitRateUpSingle", "barrierSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "強固なガード 自分がかばうの時、自分のダメージ25%カット、クリティカル率30%アップ/自分が\"力タイプ\"以外から攻撃を3回受けきった時、自分にバリア(1ヒット)を付与(最大5回)、状態異常無効(1回)を付与(最大5回)",
				"tags": ["damageDownSingle", "criticalHitRateUpSingle", "barrierSingle", "statusAbnormalityImmunity"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "漢は素手で 自分がパワーダウンの相手から攻撃を2回受けきった時、敵全体のクリティカル率10%ダウン(3ターン)/自分がスピードダウンの相手から攻撃を2回受けきった時、敵全体のクリティカル率10%ダウン(3ターン)/自分がクリティカル率ダウンの相手から攻撃を3回受けきった時、自分のクールタイム1短縮",
				"tags": ["criticalHitRateDownAll", "cooldownTimeReductionSingle"]
			},
		},
		{
			"id": "1109001",
			"validationStatus": "invalid",
			"epithet": "日々の修練",
			"name": "八百万百",
			"rarity": "r",
			"type": "int",
			"plusUltra": {
				"name": "砲撃",
				"description": "敵単体に400%ダメージ/味方全体のプルスウルトラゲージを10%アップ",
				"tags": ["plusUltraGaugeUpAll"]
			},
			"actionSkill1": {
				"name": "マトリョーシカ",
				"description": "敵全体に225%ダメージ/このスキルで2CHAIN以上成功時、敵全体のスピードを10%ダウン(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["speedDownAll"]
			},
			"actionSkill2": {
				"name": "常に下学上達",
				"description": "味方単体のプルスウルトラゲージを30%アップ",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["plusUltraGaugeUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "向上心 WAVE開始後、自分のスキル威力を40%アップ(3ターン)",
				"tags": ["powerUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "才女 自分のHPが50％未満の時、自分のスキル威力を40%アップ(3ターン)",
				"tags": ["powerUpSingle"]
			},
		},
		{
			"id": "1109002",
			"validationStatus": "invalid",
			"epithet": "学校生活",
			"name": "八百万百",
			"rarity": "r",
			"type": "mnd",
			"plusUltra": {
				"name": "マトリョーシカ",
				"description": "敵単体に400%ダメージ/敵単体に低 確率 (30%)で暗闇(2ターン)を付与",
				"tags": ["statusAbnormalitySingle"]
			},
			"actionSkill1": {
				"name": "砲撃",
				"description": "敵単体に250%ダメージ/自分のプルスウルトラゲージを10%アップ",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["plusUltraGaugeUpSingle"]
			},
			"actionSkill2": {
				"name": "司令塔",
				"description": "味方全体にHP20%自動回復(3ターン)を付与/自分のディフェンスを10%アップ(3ターン)",
				"coolDown": "Cool Down 6 Turns",
				"tags": ["autoRecoveryAll", "defenseUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "的確な分析 WAVE開始後、敵単体のパワーを20%ダウン(3ターン)",
				"tags": ["powerDownSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "文武両道 自分がHP自動回復状態の時、自分のパワーを25%アップ",
				"tags": ["powerUpSingle"]
			},
		},
		{
			"id": "1109003",
			"validationStatus": "invalid",
			"epithet": "常に先を見据えて",
			"name": "八百万百",
			"rarity": "ur",
			"type": "abl",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "マトリョーシカキャノン 敵単体に650%ダメージ/味方全体のプルスウルトラゲージを20%アップ",
				"tags": ["plusUltraGaugeUpAll"]
			},
			"actionSkill1": {
				"name": "ファーストエイド",
				"description": "味方全体の状態異常を2つ回復/味方全体のHPを35%回復/味方全体のプルスウルトラ技の威力を15%アップ(3ターン)",
				"coolDown": "Cool Down 6 Turns",
				"tags": ["statusAbnormalRecoveryAll", "autoRecoveryAll", "powerUpAll"]
			},
			"actionSkill2": {
				"name": "マトリョーシカ",
				"description": "敵全体に275%ダメージ/敵全体のスピードを15%ダウン(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["speedDownAll"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "とっておきのオぺレーション 味方全体の\"技タイプ\"キャラのパワーを25%アップ",
				"tags": ["powerUpAll"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "発育の暴力 味方全体の状態異常を防ぐ(1回)/自分のHPが50％未満の時、戦闘中に1度だけ自分のプルスウルトラゲージを40％アップ",
				"tags": ["statusAbnormalityImmunity", "plusUltraGaugeUpSingle"]
			},
		},
		{
			"id": "1109004",
			"validationStatus": "invalid",
			"epithet": "自在な戦法",
			"name": "八百万百",
			"rarity": "sr",
			"type": "int",
			"plusUltra": {
				"name": "砲撃",
				"description": "敵単体に500%ダメージ/味方全体のパワーを25%アップ(3ターン)",
				"tags": ["powerUpAll"]
			},
			"actionSkill1": {
				"name": "マトリョーシカ",
				"description": "敵全体に250%ダメージ/このスキルでCHAIN成功時、敵全体のパワーを15%ダウン(3ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["powerDownAll"]
			},
			"actionSkill2": {
				"name": "想定内ですわ",
				"description": "自分にかばう(2ターン)を付与/自分のディフェンスを35%アップ(2ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["cover", "defenseUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "頭脳明晰 味方全体の\"知タイプ\"キャラの最大HPを20%アップ",
				"tags": ["maxHpUpAll"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "一意専心 自分がかばう状態の時、自分が受けるダメージを35%カット",
				"tags": ["damageDownSingle"]
			},
		},
		{
			"id": "1109005",
			"validationStatus": "invalid",
			"epithet": "みんなで料理",
			"name": "八百万百",
			"rarity": "sr",
			"type": "mnd",
			"plusUltra": {
				"name": "マトリョーシカ",
				"description": "敵単体に500%ダメージ/敵単体に中 確率 (60%)で暗闇(2ターン)を付与",
				"tags": ["blindSingle"]
			},
			"actionSkill1": {
				"name": "ファーストエイド",
				"description": "味方全体のHPを30%回復/味方全体のプルスウルトラゲージを25%アップ",
				"coolDown": "Cool Down 6 Turns",
				"tags": ["hpRegenerationAll", "plusUltraGaugeUpAll"]

			},
			"actionSkill2": {
				"name": "今できる最善",
				"description": "味方単体にバリア(1ヒット)を付与/味方単体のパワーを35%アップ(3ターン)/自分のHPが80%以上の時、味方単体のクリティカル率を20%アップ(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["barrierSingle", "powerUpSingle", "criticalHitRateUpSingle"]

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "セレブリティ WAVE開始後、自分に余裕(3ターン)を付与、敵単体のスピードを20%ダウン(3ターン)",
				"tags": ["speedDownSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "勝利への道筋 味方全体の\"信タイプ\"キャラの最大HPを20%アップ",
				"tags": ["maxHpUpAll"]
			},
		},
		{
			"id": "1109006",
			"validationStatus": "invalid",
			"epithet": "司令塔の務め",
			"name": "八百万百",
			"rarity": "sr",
			"type": "abl",
			"plusUltra": {
				"name": "砲撃",
				"description": "敵単体に500%ダメージ/敵単体のスピードを20%ダウン(3ターン)、クリティカル率を10%ダウン(3ターン)",
				"tags": ["speedDownSingle", "criticalHitRateDownSingle"]
			},
			"actionSkill1": {
				"name": "投網砲",
				"description": "敵単体に中 確率 (50%)で拘束(1ターン)を付与/敵単体のスピードを25%ダウン(3ターン)/自分のプルスウルトラゲージを35%アップ",
				"coolDown": "Cool Down 5 Turns"

			},
			"actionSkill2": {
				"name": "盤石の指揮",
				"description": "味方全体が受けるダメージを20%カット(2ターン)/敵全体のクリティカル率を30%ダウン(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["damageDownAll", "criticalHitRateDownAll"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "窮地からの組み立て 自分のHPが50%未満の時、戦闘中に1度だけ味方全体にHP20%自動回復(3ターン)を付与",
				"tags": ["hpRegenerationAll"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "座学の先生 自分のHPが50％以上の時、味方全体のスピードを20%アップ",
				"tags": ["speedUpAll"]

			},
		},
		{
			"id": "1109007",
			"validationStatus": "invalid",
			"epithet": "はりきりチアガール",
			"name": "八百万百",
			"rarity": "ur",
			"type": "str",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "フレフレ！エールキャノン 敵単体に650%ダメージ/自分以外の味方全体にくいしばり(1回)を付与/自分以外の味方全体のパワーを20%アップ(3ターン)",
				"tags": ["barrierAll", "powerUpAll"]
			},
			"actionSkill1": {
				"name": "砲撃",
				"description": "敵単体に400%ダメージ/自分のプルスウルトラゲージを30%アップ/自分以外の味方全体のスキル威力を45%アップ(3ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["plusUltraGaugeUpSingle", "powerUpAll"]
			},
			"actionSkill2": {
				"name": "ファーストエイド",
				"description": "味方全体のHPを30%回復/味方全体が受けるダメージを30%カット(2ターン)/自分のプルスウルトラゲージを20%アップ",
				"coolDown": "Cool Down 6 Turns",
				"tags": ["hpRegenerationAll", "damageDownAll", "plusUltraGaugeUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "誠心誠意 味方全体の\"力タイプ\"キャラの最大HPを25%アップ",
				"tags": ["maxHpUpAll"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "培ってきた全てを見せて 戦闘開始後、自分のプルスウルトラゲージを30%アップ/自分のHPが50%未満の時、戦闘中に1度だけ味方全体にHP20%自動回復(3ターン)を付与",
				"tags": ["plusUltraGaugeUpSingle", "hpRegenerationAll"]
			},
		},
		{
			"id": "1109008",
			"validationStatus": "invalid",
			"epithet": "海と太陽",
			"name": "八百万百",
			"rarity": "sr",
			"type": "abl",
			"plusUltra": {
				"name": "スプラッシュスナイプ",
				"description": "敵単体に500%ダメージ/自分のスピードがアップしている時、このスキルのクリティカル率を30%アップ/敵のスピードがダウンしている時、このスキルは必中となる",
				"tags": ["criticalHitRateUpSingle", "bullseye"]
			},
			"actionSkill1": {
				"name": "スプラッシュスナイプ",
				"description": "敵単体に300%ダメージ/敵単体のスピードを20%ダウン(3ターン)/自分のスピードがアップしている時、スキル威力を30%アップ",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["speedDownSingle", "powerUpSingle"]
			},
			"actionSkill2": {
				"name": "先見の明",
				"description": "味方全体のスピードを20%アップ(3ターン)/自分の燃焼状態になる確率を下げる(3ターン)/このスキルでCHAIN成功時、味方全体のプルスウルトラゲージを30%アップ",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["speedUpAll", "burnHitRateDownSingle", "plusUltraGaugeUpAll"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "沢山蓄える 味方全体の\"雄英高校1年A組\"のクリティカル率を10%アップ/自分のHPが50%未満の時、戦闘中に1度だけ味方全体のHPを20%回復",
				"tags": ["criticalHitRateUpAll", "hpRegenerationAll"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "膨大な知識 自分の燃焼状態になる確率が下がっている時、味方全体のクリティカル率を10%アップ、クリティカル威力を20%アップ",
				"tags": [ "criticalHitRateUpAll", "criticalHitImpactUpAll"]
			},
		},
		{
			"id": "1109009",
			"validationStatus": "invalid",
			"epithet": "委ねられた判断",
			"name": "八百万百",
			"rarity": "sr",
			"type": "str",
			"plusUltra": {
				"name": "プレディクトボム",
				"description": "敵単体に500%ダメージ/敵単体に中 確率 (50%)で燃焼(3ターン)を付与/敵が\"知タイプ\"だったら自分のアクションスキルのクールタイムを1短縮する",
				"tags": ["burningSingle", "cooldownTimeReductionSingle"]
			},
			"actionSkill1": {
				"name": "マトリョーシカ",
				"description": "敵全体に250%ダメージ/このスキルでCHAIN成功時、スキル威力を30%アップ/敵全体の\"知タイプ\"キャラのディフェンスを15%ダウン(3ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["powerUpAll", "defenseDownAll"]
			},
			"actionSkill2": {
				"name": "防御壁展開",
				"description": "味方全体が受けるダメージを20%カット(3ターン)/味方全体の\"力タイプ\"キャラのプルスウルトラゲージを30%アップ/自分以外の味方全体の\"力タイプ\"キャラのアクションスキルのクールタイムを1短縮する",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["damageDownAll", "plusUltraGaugeUpAll", "cooldownTimeReductionAll"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "リーダーオペレーション 味方全体の\"力タイプ\"キャラのスキル威力を25%アップ",
				"tags": ["powerUpAll"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "ノブレス・オブリージュ 敵全体の\"知タイプ\"キャラのスキル威力を20%ダウン",
				"tags": ["powerDownAll"]
			},
		},
		{
			"id": "1109010",
			"validationStatus": "invalid",
			"epithet": "祝典のRUN",
			"name": "八百万百",
			"rarity": "ur",
			"type": "dst",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "ウイニングアタック 敵単体に550%ダメージ/自分の最大HPに応じてダメージアップ/味方全体の最大HP30%アップ(3ターン)、クールタイム1短縮",
				"tags": ["maxHpUpAll", "cooldownTimeReductionAll"]
			},
			"actionSkill1": {
				"name": "ファーストエイド",
				"description": "味方全体の最大HP30%アップ(3ターン)、被ダメージ30%回復(3ターン)を付与、くいしばり(2回)を付与",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["maxHpUpAll", "damageTakenRestoreAll", "barrierAll"]
			},
			"actionSkill2": {
				"name": "高度な作戦立案能力",
				"description": "自分以外の味方単体の状態異常全て回復、最大HP35%アップ(3ターン)、パワー35%アップ(3ターン)、クリティカル率35%アップ(3ターン)/自分のプルスウルトラゲージ20%アップ",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["cancelStatusAilmentsAll", "maxHpUpSingle", "powerUpSingle", "criticalHitRateUpSingle", "plusUltraGaugeUpSingle"]

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "迎え撃つ気概 味方が2人戦闘不能になった時、自分の最大HP30%アップ、必中を付与/自分が被ダメージ回復の時、味方全体の拘束・スタン耐性アップ",
				"tags": ["maxHpUpSingle", "bullseye", "bindResistUpAll", "stunResistUpAll"]

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "頼れるお嬢様 自分が必中でない時、自分に隠れるを付与/自分が隠れるの時、味方全体のスピード25%アップ、クリティカル抵抗25%アップ",
				"tags": ["hideSingle", "speedUpAll", "criticalResistanceUpAll"]
			},
		},
		{
			"id": "1110001",
			"validationStatus": "invalid",
			"epithet": "日々の修練",
			"name": "常闇踏陰",
			"rarity": "r",
			"type": "str",
			"plusUltra": {
				"name": "深淵より迫る爪",
				"description": "敵単体に400%ダメージ/敵単体に低 確率 (30%)で出血(3ターン)を付与",
				"tags": ["bleedingSingle"]
			},
			"actionSkill1": {
				"name": "黒き影の輪舞",
				"description": "敵単体に250%ダメージ/自分のパワーを30%アップ(3ターン)",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["powerUpSingle"]
			},
			"actionSkill2": {
				"name": "漆黒の友",
				"description": "自分のスピードを40%アップ(3ターン)/自分に通常攻撃を2回行う状態(3ターン)を付与",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["speedUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "月影 WAVE開始後、自分のクリティカル率を20%アップ(3ターン)",
				"tags": ["criticalHitRateUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "明けの明星 戦闘開始後、自分のプルスウルトラゲージを20％アップ",
				"tags": ["plusUltraGaugeUpSingle"]
			},
		},
		{
			"id": "1110002",
			"validationStatus": "invalid",
			"epithet": "学校生活",
			"name": "常闇踏陰",
			"rarity": "r",
			"type": "abl",
			"plusUltra": {
				"name": "黒き影の輪舞",
				"description": "敵単体に400%ダメージ/自分のクリティカル率を30%アップ(3ターン)",
				"tags": ["criticalHitRateUpSingle"]
			},
			"actionSkill1": {
				"name": "深淵より迫る爪",
				"description": "敵単体に250%ダメージ/自分に通常攻撃を2回行う状態(3ターン)を付与",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["speedUpSingle"]
			},
			"actionSkill2": {
				"name": "常しえの黒",
				"description": "敵単体のスピードを30%ダウン(3ターン)/敵単体のクリティカル率を30%ダウン(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["speedDownSingle", "criticalHitRateDownSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "黒の慟哭 WAVE開始後、敵単体のクリティカル率を20%ダウン(3ターン)",
				"tags": ["criticalHitRateDownSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "影の実力者 自分が通常攻撃を2回行っている時、自分のパワーを30%アップ",
				"tags": ["powerUpSingle"]
			},
		},
		{
			"id": "1110003",
			"validationStatus": "invalid",
			"epithet": "深淵へと至る道",
			"name": "常闇踏陰",
			"rarity": "sr",
			"type": "dst",
			"plusUltra": {
				"name": "黒き影の輪舞",
				"description": "敵単体に500%ダメージ/自分のパワーを40%アップ(3ターン)",
				"tags": ["powerUpSingle"]
			},
			"actionSkill1": {
				"name": "深淵より迫る爪",
				"description": "敵単体に300%ダメージ/敵単体のディフェンスを25%ダウン(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["defenseDownSingle"]
			},
			"actionSkill2": {
				"name": "疾駆する影",
				"description": "自分のスピードを45%アップ(3ターン)/自分に通常攻撃を2回行う状態(4ターン)を付与",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["speedUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "黒き月の宴 WAVE開始後、自分のスピードを30%アップ(3ターン)、自分のクリティカル率を25%アップ(3ターン)",
				"tags": ["speedUpSingle", "criticalHitRateUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "暗夜行路 自分が通常攻撃を2回行っている場合、自分のスピードを35%アップ",
				"tags": ["speedUpSingle"]
			},
		},
		{
			"id": "1110004",
			"validationStatus": "invalid",
			"epithet": "影を纏いし者",
			"name": "常闇踏陰",
			"rarity": "ur",
			"type": "mnd",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "黒の堕天使 敵単体に650%ダメージ/敵単体のクリティカル率を20%ダウン(3ターン)/敵単体のスキル威力を20%ダウン(3ターン)",
				"tags": ["criticalHitRateDownSingle", "powerDownSingle"]
			},
			"actionSkill1": {
				"name": "深淵より迫る爪",
				"description": "敵単体に400%ダメージ/敵単体のディフェンスを25%ダウン(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["defenseDownSingle"]
			},
			"actionSkill2": {
				"name": "深淵の理解者",
				"description": "自分の通常攻撃威力を40%アップ(3ターン)/自分に通常攻撃を2回行う状態(3ターン)を付与/自分のスピードがアップしている時、自分のパワーを15%アップ(3ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["powerUpSingle", "speedUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "宵闇の鎮魂歌 自分が通常攻撃を2回行う状態の時、自分のパワーを15%アップ、自分のスピードを20%アップ",
				"tags": ["powerUpSingle", "speedUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "漆黒を抱く翼 WAVE開始後、自分に通常攻撃を2回行う状態(3ターン)を付与、自分のスピードを10%アップ(3ターン)/自分のスピードがアップしている時、自分のパワーを20%アップ",
				"tags": ["speedUpSingle", "powerUpSingle"]
			},
		},
		{
			"id": "1110006",
			"validationStatus": "invalid",
			"epithet": "覆い尽くす闇",
			"name": "常闇踏陰",
			"rarity": "ur",
			"type": "dst",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "終焉＜ラグナロク＞ 敵単体に700%ダメージ/自分の通常攻撃威力50%アップ(3ターン)/自分が通常攻撃2回の時、このスキルのスキル威力40%アップ、自分のクールタイム1短縮",
				"tags": ["powerUpSingle", "cooldownTimeReductionSingle"]
			},
			"actionSkill1": {
				"name": "黒き鉄槌",
				"description": "敵全体に300%ダメージ/味方全体の通常攻撃威力70%アップ(4ターン)/自分に通常攻撃2回(4ターン)を付与",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["powerUpAll", "powerUpSingle"]
			},
			"actionSkill2": {
				"name": "黒き影の輪舞",
				"description": "敵単体に400%ダメージ/自分が通常攻撃2回の時、このスキルのスキル威力35%アップ、自分のプルスウルトラゲージ30%アップ/このスキルで3CHAIN成功時、自分に貫通(2ターン)を付与",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["powerUpSingle", "plusUltraGaugeUpSingle", "piercingShot"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "冷酷な影 自分が通常攻撃2回の時、自分に高揚を付与、状態異常無効を付与/自分のスキルでCHAIN成功時、自分の通常攻撃威力30%アップ(3ターン)、ダメージ20%カット(2ターン)",
				"tags": ["ecstaticSingle", "statusAilmentNullSingle", "powerUpSingle", "damageDownSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "忍び寄る闇 自分が通常攻撃2回中に、相手に1回攻撃しきった時、自分のパワー5%アップ(最大13回)、スピード7%アップ(最大13回)",
				"tags": ["powerUpSingle", "speedUpSingle"]
			},
			"tags": []
		},
		{
			"id": "1111001",
			"validationStatus": "invalid",
			"epithet": "日々の修練",
			"name": "上鳴電気",
			"rarity": "r",
			"type": "dst",
			"plusUltra": {
				"name": "人間スタンガン",
				"description": "敵単体に450%ダメージ/敵単体に低 確率 (25%)で麻痺(1ターン)を付与/自分に高 確率 (90%)で混乱(2ターン)を付与",
				"tags": ["paralysisSingle", "confusionSingle"]
			},
			"actionSkill1": {
				"name": "高圧放電",
				"description": "敵単体に250%ダメージ/敵単体に低 確率 (20%)で麻痺(1ターン)を付与",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["paralysisSingle"]
			},
			"actionSkill2": {
				"name": "集電",
				"description": "自分のパワーを40%アップ(3ターン)/自分のクリティカル率を30%アップ(3ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["powerUpSingle", "criticalHitRateUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "お調子者 自分のHPが50％以上の時、自分のクリティカル率を20%アップ",
				"tags": ["criticalHitRateUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "チャラ系男子 WAVE開始後、敵単体のスピードを20%ダウン(3ターン)",
				"tags": ["speedDownSingle"]
			},
		},
		{
			"id": "1111002",
			"validationStatus": "invalid",
			"epithet": "学校生活",
			"name": "上鳴電気",
			"rarity": "r",
			"type": "abl",
			"plusUltra": {
				"name": "高圧放電",
				"description": "敵単体に400%ダメージ/敵単体に低 確率 (25%)で麻痺(1ターン)を付与",
				"tags": ["paralysisSingle"]
			},
			"actionSkill1": {
				"name": "人間スタンガン",
				"description": "敵単体に275%ダメージ/敵単体に低 確率 (20%)で麻痺(1ターン)を付与/自分に高 確率 (90%)で混乱(2ターン)を付与",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["paralysisSingle", "confusionSingle"]
			},
			"actionSkill2": {
				"name": "放電",
				"description": "自分のプルスウルトラゲージを50%アップ",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["plusUltraGaugeUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "発電 自分のHPが50％以上の時、自分のパワーを25%アップ",
				"tags": ["powerUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "帯電体質 自分のHPが50％以上の時、自分のスキル威力を30%アップ",
				"tags": ["powerUpSingle"]
			},
		},
		{
			"id": "1111003",
			"validationStatus": "invalid",
			"epithet": "今が勝負の時",
			"name": "上鳴電気",
			"rarity": "sr",
			"type": "dst",
			"plusUltra": {
				"name": "高圧放電",
				"description": "敵単体に500%ダメージ/敵単体に低 確率 (30%)で麻痺(1ターン)を付与/敵単体のスピードを15%ダウン(3ターン)",
				"tags": ["paralysisSingle", "speedDownSingle"]
			},
			"actionSkill1": {
				"name": "人間スタンガン",
				"description": "敵単体に350%ダメージ/敵単体に中 確率 (40%)で麻痺(1ターン)を付与/自分に中 確率 (50%)で混乱(2ターン)を付与",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["paralysisSingle", "confusionSingle"]
			},
			"actionSkill2": {
				"name": "チャージ",
				"description": "自分のスキル威力を50%アップ(3ターン)/自分の状態異常を防ぐ(1回)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["powerUpSingle", "statusAilmentNullSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "これなら俺は…クソ強え！ 自分のHPが80％以上の時、自分のスキル威力を50%アップ",
				"tags": ["powerUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "エレキメーカー 自分のHPが50％未満の時、自分のスキル威力を50%アップ/更にHPが30％未満の時、自分が攻撃を受けると敵に麻痺(1ターン)を付与する",
				"tags": ["powerUpSingle", "paralysisSingle"]
			},
		},
		{
			"id": "1111004",
			"validationStatus": "invalid",
			"epithet": "みんなで料理",
			"name": "上鳴電気",
			"rarity": "sr",
			"type": "str",
			"plusUltra": {
				"name": "人間スタンガン",
				"description": "敵単体に500%ダメージ/敵単体に中 確率 (45%)で麻痺(1ターン)を付与",
				"tags": ["paralysisSingle"]
			},
			"actionSkill1": {
				"name": "高圧放電",
				"description": "敵単体に300%ダメージ/敵単体に中 確率 (40%)で麻痺(1ターン)を付与/このスキルで3CHAIN成功時、敵単体のクリティカル率を20%ダウン(3ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["paralysisSingle", "criticalHitRateDownSingle"]
			},
			"actionSkill2": {
				"name": "電気伝導",
				"description": "自分のパワーを40%アップ(3ターン)/自分のスキル威力を30%アップ(3ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["powerUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "ムードメーカー WAVE開始後、敵単体のクリティカル率を25%ダウン(3ターン)",
				"tags": ["criticalHitRateDownSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "流行りモノ好き 戦闘開始後、自分のプルスウルトラゲージを30％アップ",
				"tags": ["plusUltraGaugeUpSingle"]
			},
		},
		{
			"id": "1111006",
			"validationStatus": "invalid",
			"epithet": "拡散せし稲妻",
			"name": "上鳴電気",
			"rarity": "ur",
			"type": "dst",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "無差別放電130万V 自分のHPが80％以上の時、一時的にスキル威力が40%アップ、80％未満の時、麻痺状態にする確率を上げる/敵全体に600%ダメージ/自分以外の味方全体に130%ダメージ/敵味方全体に中 確率 (60%)で麻痺(1ターン)、低 確率 (15%)で麻痺(2ターン)を付与",
				"tags": ["paralysisAll"]
			},
			"actionSkill1": {
				"name": "人間スタンガン",
				"description": "自分のHPが80%以上の時、一時的にスキル威力が50%アップ、80%未満の時、麻痺状態にする確率を上げる/敵単体に360%ダメージ/敵単体に中 確率 (60%)で麻痺(1ターン)を付与",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["paralysisSingle"]
			},
			"actionSkill2": {
				"name": "迅雷",
				"description": "自分のHPが80%以上の時、自分のプルスウルトラゲージを40%アップ、80%未満の時、自分にHP20%自動回復付与(3ターン)/自分に余裕(3ターン)を付与/味方全体が麻痺状態になる確率を下げる(3ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["plusUltraGaugeUpSingle", "hpRegenerationSingle", "composureSingle", "paralysisHitRateDownAll"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "エレクトリック 5ターン目から、自分のプルスウルトラ技の威力を40%アップ/自分が混乱状態の時、自分のディフェンスを20%ダウン",
				"tags": ["powerUpSingle", "defenseDownSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "余剰電力 HPが30％未満の時、自分が攻撃を受けると敵に麻痺(1ターン)を付与する/5ターン目から、1度だけ自分のプルスウルトラゲージを60%アップ",
				"tags": ["paralysisSingle", "plusUltraGaugeUpSingle"]
			},
		},
		{
			"id": "1111007",
			"validationStatus": "invalid",
			"epithet": "スパーキングボーイ",
			"name": "上鳴電気",
			"rarity": "sr",
			"type": "mnd",
			"plusUltra": {
				"name": "高圧放電",
				"description": "敵単体に500%ダメージ/敵単体に低 確率 (30%)で麻痺(1ターン)を付与/自分のクリティカル率を30%アップ(3ターン)",
				"tags": ["paralysisSingle", "criticalHitRateUpSingle"]
			},
			"actionSkill1": {
				"name": "ターゲットエレクト",
				"description": "敵単体に300%ダメージ/このスキルでCHAIN成功時、自分のクリティカル威力を20%アップ(3ターン)/敵単体に中 確率 (40%)で麻痺(1ターン)を付与",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["paralysisSingle"]
			},
			"actionSkill2": {
				"name": "ジャミング",
				"description": "敵単体のスピードを40%ダウン(3ターン)/敵単体のディフェンスを20%ダウン(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["speedDownSingle", "defenseDownSingle"]

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "充電 自分の麻痺状態を付与する確率を上げる(毎ターン)(最大5回)/クリティカル発生時、自分のクリティカル威力を20%アップ(3ターン)",
				"tags": ["paralysisHitRateUpSingle", "criticalHitRateUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "シビれる男 自分のクリティカル威力を30%アップ/自分のHPが50%未満の時、自分のクリティカル率を20%アップ",
				"tags": ["criticalHitRateUpSingle"]
			},
		},
		{
			"id": "1111008",
			"validationStatus": "invalid",
			"epithet": "集う英傑",
			"name": "上鳴電気",
			"rarity": "ur",
			"type": "mnd",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "ライトニングブレイド 敵単体に700%ダメージ/このスキルに貫通を付与/自分のHPが60%以上の時、このスキルは必中となる/自分に混乱(1ターン)を付与",
				"tags": ["piercingShot", "confusionSingle"]
			},
			"actionSkill1": {
				"name": "人間スタンガン",
				"description": "敵単体に350%ダメージ/敵単体に中 確率 (35%)で麻痺(2ターン)を付与/自分のパワーを30%アップ(5ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["paralysisSingle", "powerUpSingle"]
			},
			"actionSkill2": {
				"name": "電撃吸収",
				"description": "自分のプルスウルトラゲージを50%アップ/2ターンの間、自分が攻撃を受けると敵に中確率で麻痺(2ターン)を付与する/このスキルでCHAIN成功時、自分に与えたダメージの50%を回復する状態(2ターン)を付与",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["plusUltraGaugeUpSingle", "paralysisSingle", "hpRegenerationSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "ワット数上昇 チームに\"女性\"がいれば、自分の最大HPを50%アップ/自分が攻撃を受けると敵に麻痺を付与する状態でない時、自分に高揚(2ターン)を付与",
				"tags": ["maxHpUpSingle", "ecstaticSingle", "paralysisSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "避雷針 自分が攻撃を受けると敵に麻痺を付与する状態の時、自分のパワーを60%アップ、プルスウルトラ技の威力を70%アップ、スピードを50%アップ",
				"tags": ["powerUpSingle", "powerUpSingle", "speedUpSingle"]
			},
		},
		{
			"id": "1111009",
			"validationStatus": "invalid",
			"epithet": "集束する雷電",
			"name": "上鳴電気",
			"rarity": "sr",
			"type": "abl",
			"plusUltra": {
				"name": "ターゲットエレクト",
				"description": "敵単体に500%ダメージ/敵単体に中 確率 (40%)で麻痺(2ターン)を付与/自分のアクションスキルのクールタイムを1短縮する",
				"tags": ["paralysisSingle", "cooldownTimeReductionSingle"]
			},
			"actionSkill1": {
				"name": "サンダーボルト",
				"description": "敵単体に600%ダメージ/自分のパワーがアップしている時、このスキルに貫通を付与し、スキル威力を30%アップ",
				"coolDown": "Cool Down 11 Turns",
				"tags": ["piercingShot", "powerUpSingle"]
			},
			"actionSkill2": {
				"name": "スパーク",
				"description": "自分のプルスウルトラゲージを35%アップ/このスキルでCHAIN成功時、自分のアクションスキルのクールタイムを2短縮する",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["plusUltraGaugeUpSingle", "cooldownTimeReductionSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "ノリ気で行くぜ！ 自分のスキルでCHAIN成功時、自分のアクションスキル威力を10%アップ(最大5回)",
				"tags": ["powerUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "パパッとやっちゃって！ 自分のHPが50%以上の時、自分のパワーを20%アップ/自分のHPが50%未満の時、戦闘中に1度だけ自分のアクションスキルのクールタイムを5短縮する",
				"tags": ["powerUpSingle", "cooldownTimeReductionSingle"]
			},
		},
		{
			"id": "1113001",
			"validationStatus": "invalid",
			"epithet": "日々の修練",
			"name": "耳郎響香",
			"rarity": "r",
			"type": "mnd",
			"plusUltra": {
				"name": "イヤホンジャック",
				"description": "敵単体に400%ダメージ/敵単体に低 確率 (30%)で混乱(2ターン)を付与",
				"tags": ["confusionSingle"]
			},
			"actionSkill1": {
				"name": "ステレオスピーカー",
				"description": "敵全体に225%ダメージ/敵全体に低 確率 (25%)で混乱(2ターン)を付与",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["confusionAll"]
			},
			"actionSkill2": {
				"name": "R&B",
				"description": "味方単体のHPを25%回復/味方単体のクリティカル率を30%アップ(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["hpRegenerationSingle", "criticalHitRateUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "ロック魂 戦闘開始後、自分のプルスウルトラゲージを20％アップ",
				"tags": ["plusUltraGaugeUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "不協和音 WAVE開始後、敵単体のパワーを20%ダウン(3ターン)",
				"tags": ["powerDownSingle"]
			},
		},
		{
			"id": "1113002",
			"validationStatus": "invalid",
			"epithet": "学校生活",
			"name": "耳郎響香",
			"rarity": "r",
			"type": "abl",
			"plusUltra": {
				"name": "ステレオスピーカー",
				"description": "敵単体に400%ダメージ/敵単体のクリティカル率を30%ダウン(3ターン)",
				"tags": ["criticalHitRateDownSingle"]
			},
			"actionSkill1": {
				"name": "イヤホンジャック",
				"description": "敵単体に250%ダメージ/敵単体のスピードを20%ダウン(3ターン)",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["speedDownSingle"]
			},
			"actionSkill2": {
				"name": "爆音",
				"description": "敵単体のクリティカル率を35%ダウン(3ターン)/敵単体のスキル威力を20%ダウン(3ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["criticalHitRateDownSingle", "skillImpactDownSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "クール WAVE開始後、敵単体のクリティカル率を20%ダウン(3ターン)",
				"tags": ["criticalHitRateDownSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "索敵 WAVE開始後、敵単体のスピードを20%ダウン(3ターン)",
				"tags": ["speedDownSingle"]
			},
		},
		{
			"id": "1113003",
			"validationStatus": "invalid",
			"epithet": "唸る音の波",
			"name": "耳郎響香",
			"rarity": "sr",
			"type": "mnd",
			"plusUltra": {
				"name": "ステレオスピーカー",
				"description": "敵単体に450%ダメージ/敵単体に低 確率 (30%)で混乱(2ターン)を付与/敵単体のパワーを25%ダウン(3ターン)",
				"tags": ["confusionSingle", "powerDownSingle"]
			},
			"actionSkill1": {
				"name": "イヤホンジャック",
				"description": "敵単体に300%ダメージ/敵単体に低 確率 (25%)で混乱(2ターン)を付与/敵単体のクリティカル率を35%ダウン(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["confusionSingle", "criticalHitRateDownSingle"]
			},
			"actionSkill2": {
				"name": "インストルメンタル",
				"description": "味方単体のHPを35%回復/味方単体のプルスウルトラゲージを25%アップ/味方単体のスキル威力を20%アップ(3ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["hpRegenerationSingle", "plusUltraGaugeUpSingle", "powerUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "セッション 戦闘開始後、自分以外の味方全体のプルスウルトラゲージを20％アップ",
				"tags": ["plusUltraGaugeUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "流れ込む心音 自分のHPが50％未満の時、戦闘中1度だけ味方全体にHP20%自動回復(3ターン)を付与",
				"tags": ["hpRegenerationSingle"]
			},
		},
		{
			"id": "1113004",
			"validationStatus": "invalid",
			"epithet": "みんなで料理",
			"name": "耳郎響香",
			"rarity": "sr",
			"type": "abl",
			"plusUltra": {
				"name": "イヤホンジャック",
				"description": "敵単体に500%ダメージ/敵単体に中 確率 (50%)で混乱(2ターン)を付与",
				"tags": ["confusionSingle"]
			},
			"actionSkill1": {
				"name": "ステレオスピーカー",
				"description": "敵全体に250%ダメージ/敵全体のスキル威力を15%ダウン(3ターン)/味方全体のプルスウルトラゲージを20%アップ",
				"coolDown": "Cool Down 7 Turns",
				"tags": ["skillImpactDownAll", "plusUltraGaugeUpSingle"]
			},
			"actionSkill2": {
				"name": "立体音響",
				"description": "味方全体のクリティカル率を30%アップ(3ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["criticalHitRateUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "エイトビート 味方全体の\"技タイプ\"キャラの最大HPを20%アップ",
				"tags": ["maxHpUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "大胆な決断力 自分のHPが50％未満の時、自分のスキル威力を50%アップ",
				"tags": ["powerUpSingle"]
			},
		},
		{
			"id": "1113005",
			"validationStatus": "invalid",
			"epithet": "駆使する音響",
			"name": "耳郎響香",
			"rarity": "sr",
			"type": "dst",
			"plusUltra": {
				"name": "ハートビートファズ",
				"description": "敵単体に500%ダメージ/敵単体に中 確率 (35%)で混乱(2ターン)を付与/敵がダメージカット状態だったらスキル威力が30%アップし、混乱状態にする確率を上げる",
				"tags": ["confusionSingle"]
			},
			"actionSkill1": {
				"name": "イヤホンジャック",
				"description": "敵単体に300%ダメージ/敵単体に中 確率 (35%)で混乱(2ターン)を付与/敵がダメージカット状態だったらスキル威力が30%アップし、混乱状態にする確率を上げる",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["confusionSingle"]
			},
			"actionSkill2": {
				"name": "音質強化",
				"description": "味方全体に回避(1回)を付与/味方全体のプルスウルトラゲージを30%アップ/自分のディフェンスを10%アップ(3ターン)",
				"coolDown": "Cool Down 7 Turns",
				"tags": ["evasionSingle", "plusUltraGaugeUpSingle", "defenseUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "音のスペシャリスト 自分のHPが50％未満の時、戦闘中に1度だけ味方全体にHP20%自動回復(3ターン)を付与",
				"tags": ["hpRegenerationSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "音響増幅 戦闘開始後、味方全体の\"破タイプ\"キャラのプルスウルトラゲージを20%アップ",
				"tags": ["plusUltraGaugeUpSingle"]
			},
		},
		{
			"id": "1113006",
			"validationStatus": "invalid",
			"epithet": "奏でる心音",
			"name": "耳郎響香",
			"rarity": "ur",
			"type": "dst",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "ハートビートサラウンド 敵単体に650%ダメージ/敵単体に中 確率 (50%)で混乱(2ターン)を付与/敵のスキル威力がダウンしている時、敵単体のディフェンスを20%ダウン(3ターン)",
				"tags": ["confusionSingle"]
			},
			"actionSkill1": {
				"name": "ハートビートファズ",
				"description": "敵全体に275%ダメージ/敵全体のスキル威力を30%ダウン(3ターン)/HPが50%以上の敵のディフェンスを10%ダウン(3ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["skillImpactDownAll", "defenseDownSingle"]
			},
			"actionSkill2": {
				"name": "ステレオスピーカー",
				"description": "敵全体に250%ダメージ/敵全体に中 確率 (35%)で混乱(2ターン)を付与/このスキルでCHAIN成功時、自分のスキル威力を20%アップ(3ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["confusionAll", "powerUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "表現力 味方全体の\"破タイプ\"キャラのスキル威力を30%アップ",
				"tags": ["powerUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "グルーヴ 自分のプルスウルトラゲージを15%アップ(毎ターン)(最大5回)",
				"tags": ["plusUltraGaugeUpSingle"]
			},
		},
		{
			"id": "1113007",
			"validationStatus": "invalid",
			"epithet": "海と太陽",
			"name": "耳郎響香",
			"rarity": "sr",
			"type": "int",
			"plusUltra": {
				"name": "イヤホンジャック",
				"description": "敵単体に500%ダメージ/敵単体に中 確率 (35%)で混乱(2ターン)を付与",
				"tags": ["confusionSingle"]
			},
			"actionSkill1": {
				"name": "ツインシャワー",
				"description": "敵単体に300%ダメージ/このスキルでCHAIN成功時、自分のプルスウルトラゲージを25%アップ/敵が\"技タイプ\"だったらスキル威力を30%アップ",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["plusUltraGaugeUpSingle", "powerUpSingle"]
			},
			"actionSkill2": {
				"name": "ステレオスピーカー",
				"description": "敵全体に250%ダメージ/敵全体に低 確率 (15%)で混乱(2ターン)を付与/敵に\"技タイプ\"がいたらスキル威力を30%アップ",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["confusionAll", "powerUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "ディスコード 戦闘開始後、敵全体の\"技タイプ\"キャラのスキル威力を20%ダウン(3ターン)/敵全体の\"技タイプ\"キャラが混乱状態になる確率を上げる",
				"tags": ["skillImpactDownAll", "confusionSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "状況探知 戦闘開始後、自分のプルスウルトラゲージを25%アップ/自分のアクションスキルのクールタイムを1短縮する(3ターン毎)(最大2回)",
				"tags": ["plusUltraGaugeUpSingle", "cooldownTimeReductionSingle"]
			},
		},
		{
			"id": "1113008",
			"validationStatus": "invalid",
			"epithet": "集う英傑",
			"name": "耳郎響香",
			"rarity": "ur",
			"type": "int",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "ハートビートウィップ 敵単体に650%ダメージ/敵単体に高 確率 (65%)で混乱(2ターン)を付与/自分のアクションスキルのクールタイムを1短縮する",
				"tags": ["confusionSingle", "cooldownTimeReductionSingle"]
			},
			"actionSkill1": {
				"name": "イヤホンジャック",
				"description": "敵単体に350%ダメージ/敵単体に中 確率 (40%)で混乱(2ターン)を付与/味方全体のスキル威力を30%アップ(3ターン)/自分が隠れる状態でない時、自分以外の味方全体に隠れる(2ターン)を付与/自分が隠れる状態の時、自分以外の味方全体にHP20%自動回復(3ターン)を付与",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["confusionSingle", "powerUpSingle", "hideSingle", "hpRegenerationSingle"]
			},
			"actionSkill2": {
				"name": "ステレオスピーカー",
				"description": "敵全体に275%ダメージ/自分に隠れる(2ターン)を付与/味方全体の最大HPを25%アップ(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["hideSingle", "maxHpUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "ロックじゃないよね 戦闘開始後、味方全体の状態異常を防ぐ(1ターン)/自分が隠れる状態になるたびに、味方全体のプルスウルトラゲージを20%アップ",
				"tags": ["statusAilmentNullAll", "plusUltraGaugeUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "微音キャッチ 自分が攻撃を3回受けきった後に、味方全体の状態異常を1つ回復/自分が隠れる状態でない時、自分のディフェンスを50%アップ",
				"tags": ["statusAilmentNullAll", "defenseUpSingle"]
			},
		},
		{
			"id": "1113010",
			"validationStatus": "invalid",
			"epithet": "祝福のギフト",
			"name": "耳郎響香",
			"rarity": "ur",
			"type": "abl",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "ハートビートノーツ 敵単体に600%ダメージ/味方全体のHP20%回復、パワー20%アップ(3ターン)/自分のクールタイム1短縮/自分のHPが50%以上の時、自分のクールタイム1短縮",
				"tags": ["hpRegenerationSingle", "powerUpSingle", "cooldownTimeReductionSingle"]
			},
			"actionSkill1": {
				"name": "癒やしの旋律",
				"description": "味方全体のHP25%回復、状態異常2個回復、スキル威力35%アップ(3ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["hpRegenerationAll", "cancelStatusAilmentsAll", "skillImpactUpAll"]
			},
			"actionSkill2": {
				"name": "ステレオスピーカー",
				"description": "敵全体に300%ダメージ/味方全体のHP20%回復、パワー20%アップ(3ターン)、被ダメージ20%回復(3ターン)を付与",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["hpRegenerationSingle", "powerUpSingle", "hpRegenerationSingle"]

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "ハスキーセクシーボイス 味方全体の\"雄英高校生徒\"の最大HP40%アップ/自分が攻撃を3回受けた時、味方全体の状態異常1個回復",
				"tags": ["maxHpUpSingle", "statusAilmentNullAll"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "アドリブ 自分が被ダメージ回復の時、味方全体のスキル威力30%アップ/自分のHPが50%未満の時、自分に被ダメージ20%回復を付与",
				"tags": ["powerUpSingle", "hpRegenerationSingle"]
			},
		},
		{
			"id": "1114001",
			"validationStatus": "invalid",
			"epithet": "アシッドダンサー",
			"name": "芦戸三奈",
			"rarity": "sr",
			"type": "abl",
			"plusUltra": {
				"name": "アシッドショット",
				"description": "敵単体に500%ダメージ/敵単体のディフェンスを15%ダウン(3ターン)",
				"tags": ["defenseDownSingle"]
			},
			"actionSkill1": {
				"name": "アシッドショット",
				"description": "敵単体に300%ダメージ/敵単体のディフェンスを15%ダウン(3ターン)/敵単体のスピードを35%ダウン(3ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["defenseDownSingle", "speedDownSingle"]
			},
			"actionSkill2": {
				"name": "アシッドベール",
				"description": "自分にかばう(2ターン)を付与/自分の受けるダメージを45%カット(2ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["cover", "damageDownSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "天真爛漫 戦闘開始後、自分以外の味方全員のプルスウルトラゲージを20%アップ",
				"tags": ["plusUltraGaugeUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "運動神経抜群!! 戦闘開始後、自分に回避(1回)を付与/WAVE開始後、自分のスピードを30％アップ(3ターン)",
				"tags": ["evasionSingle", "speedUpSingle"]
			},
		},
		{
			"id": "1114002",
			"validationStatus": "invalid",
			"epithet": "みなぎるエナジー",
			"name": "芦戸三奈",
			"rarity": "sr",
			"type": "str",
			"plusUltra": {
				"name": "アシッドブレイク",
				"description": "敵単体に500%ダメージ/敵単体のディフェンスを10%ダウン(3ターン)/敵単体の一時的な強化を中 確率 (40%)で2つ解除する",
				"tags": ["defenseDownSingle", "buffRemovalSingle"]
			},
			"actionSkill1": {
				"name": "アシッドブレイク",
				"description": "敵単体に300%ダメージ/敵単体のパワーを30%ダウン(3ターン)/敵単体の一時的な強化を高 確率 (65%)で1つ解除する",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["powerDownSingle", "buffRemovalSingle"]
			},
			"actionSkill2": {
				"name": "滑走準備",
				"description": "自分のスピードを40%アップ(3ターン)/自分のプルスウルトラゲージを25%アップ/味方全体のアクションスキルのクールタイムを1短縮する",
				"coolDown": "Cool Down 6 Turns",
				"tags": ["speedUpSingle", "plusUltraGaugeUpSingle", "cooldownTimeReductionSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "軽やかな身ごなし WAVE開始後、自分のスピードを30%アップ(3ターン)、敵単体のスピードを25%ダウン(3ターン)",
				"tags": ["speedUpSingle", "speedDownSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "立ち向かう勇気 味方が1人戦闘不能になった時、戦闘中に1度だけ自分のアクションスキルのクールタイムを2短縮し、自分のプルスウルトラゲージを60％アップ",
				"tags": ["cooldownTimeReductionSingle", "plusUltraGaugeUpSingle"]
			},
		},
		{
			"id": "1114003",
			"validationStatus": "invalid",
			"epithet": "祝福のギフト",
			"name": "芦戸三奈",
			"rarity": "sr",
			"type": "int",
			"plusUltra": {
				"name": "アシッドショット",
				"description": "敵単体に500%ダメージ/自分のアクションスキルのクールタイムを1短縮する/自分に高揚(3ターン)を付与",
				"tags": ["cooldownTimeReductionSingle", "excitementSingle"]
			},
			"actionSkill1": {
				"name": "アシッドギフト",
				"description": "味方全体のスキル威力を25%アップ(3ターン)/味方全体のプルスウルトラゲージを30%アップ/自分がダメージカット状態の時、味方全体のアクションスキルのクールタイムを1短縮する",
				"coolDown": "Cool Down 6 Turns",
				"tags": ["powerUpSingle", "plusUltraGaugeUpSingle", "cooldownTimeReductionSingle"]
			},
			"actionSkill2": {
				"name": "アシッドショット",
				"description": "敵単体に300%ダメージ/敵単体のディフェンスを20%ダウン(3ターン)/敵のパワーがダウンしている時、自分が受けるダメージを20%カット(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["defenseDownSingle", "damageDownSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "快活ガール 自分のパワーを30%アップ/WAVE開始後、敵単体のパワーを20%ダウン(3ターン)",
				"tags": ["powerUpSingle", "powerDownSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "軽快なステップ 戦闘開始後、自分に回避(2回)を付与/自分のHPが50%未満の時、自分のスキル威力を30%アップ",
				"tags": ["evasionSingle", "powerUpSingle"]
			},
		},
		{
			"id": "1114006",
			"validationStatus": "invalid",
			"epithet": "溶かし壊す酸",
			"name": "芦戸三奈",
			"rarity": "ur",
			"type": "dst",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "アシッドラッシュ 敵単体に600%ダメージ、一時的な強化4個解除、強化阻害(2ターン)を付与",
				"tags": ["removeBuffsSingle", "buffBlockSingle"]
			},
			"actionSkill1": {
				"name": "アシッドショット",
				"description": "敵単体に350%ダメージ、一時的な強化2個解除、中 確率 (50%)で強化阻害(2ターン)を付与",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["removeBuffsSingle", "buffBlockSingle"]
			},
			"actionSkill2": {
				"name": "酸の守り",
				"description": "味方全体のくいしばりのキャラのクリティカル率30%アップ(3ターン)、スキル威力30%アップ(3ターン)/味方全体のHP35%回復、くいしばり(1回)を付与",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["criticalHitRateUpSingle", "powerUpSingle", "hpRegenerationSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "恐怖に負けぬ心 自分のHPが50%以上の時、自分のアクションスキルダメージ30%カット/自分がアクションスキルダメージカットでないまま、1回ターンをまたいだ時、味方全体にHP30%自動回復(3ターン)を付与(最大1回)/自分がアクションスキルダメージカットでないまま、2回ターンをまたいだ時、味方全体にくいしばり(2回)を付与",
				"tags": ["damageDownSingle", "hpRegenerationSingle", "lastStandAll"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "中距離支援 自分のHPが50%以上の時、味方全体のスピード30%アップ/自分がくいしばりのまま、2回ターンをまたいだ時、味方全体のクリティカル率30%アップ(2ターン)、HP15%回復(最大5回)",
				"tags": ["speedUpSingle", "criticalHitRateUpSingle", "hpRegenerationSingle"]

			},
		},
		{
			"id": "1115001",
			"validationStatus": "invalid",
			"epithet": "複製する剛腕",
			"name": "障子目蔵",
			"rarity": "ur",
			"type": "mnd",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "オクトブロー 敵単体に650%ダメージ、低 確率 (20%)でスタン(2ターン)を付与/自分の最大HP30%アップ(3ターン)/このスキルに必中を付与",
				"tags": ["stunSingle", "maxHpUpSingle"]
			},
			"actionSkill1": {
				"name": "オクトスイング",
				"description": "敵単体に425%ダメージ、低 確率 (20%)でスタン(2ターン)を付与/敵が状態異常無効の時、このスキルのスキル威力45%アップ",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["stunSingle"]
			},
			"actionSkill2": {
				"name": "複製乱打",
				"description": "敵全体に250%ダメージ/自分の最大HPに応じてダメージアップ/自分の最大HP30%アップ(3ターン)/このスキルに必中を付与",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["maxHpUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "触手索敵 自分以外の味方全体のスタン・拘束・混乱耐性アップ/自分がスタン・拘束・混乱の時、味方全体のそれぞれの耐性アップ(最大2回)/自分のクリティカル攻撃が1回発生しなかった時、自分のクリティカル率10%アップ(3ターン)/自分のクリティカル攻撃が1回発生しきった時、自分の最大HP10%アップ(最大3回)",
				"tags": ["criticalHitRateUpSingle", "maxHpUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "包容力 1ターン毎に、味方全体のクリティカル率5%アップ(最大6回)/味方全体の\"雄英高校1年A組\"の最大HP20%アップ",
				"tags": ["criticalHitRateUpSingle", "maxHpUpSingle"]
			},
		},
		{
			"id": "1116001",
			"validationStatus": "invalid",
			"epithet": "武の道",
			"name": "尾白猿夫",
			"rarity": "ur",
			"type": "abl",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "尾拳流撃 自分に圧倒(4ターン)を付与/敵単体に650%ダメージ/自分のアクションスキル威力を30%アップ(5ターン)",
				"tags": ["overwhelm", "powerUpSingle"]
			},
			"actionSkill1": {
				"name": "尾空旋舞",
				"description": "敵単体に400%ダメージ/このスキルでCHAIN成功時、味方全体のアクションスキル威力を10%アップ(8ターン)/敵が\"力タイプ\"だったらスキル威力を40%アップ",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["powerUpSingle"]
			},
			"actionSkill2": {
				"name": "尾拳・\"沼田打旋風\"",
				"description": "敵全体に250%ダメージ、ディフェンスを15%ダウン(3ターン)/敵に\"力タイプ\"がいたらスキル威力を40%アップ",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["defenseDownSingle", "powerUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "誠実な武闘派 味方全体の\"技タイプ\"キャラのアクションスキル威力を25%アップ/自分のHPが50%未満の時、戦闘中に1度だけ自分にくいしばり(1回)を付与",
				"tags": ["powerUpSingle", "lastStandSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "強靭な尻尾 毎ターン、自分のスキル威力を5%アップ(5ターン)、受けるダメージを3%カット(5ターン)",
				"tags": ["powerUpSingle", "damageDownSingle"]
			},
		},
		{
			"id": "1117001",
			"validationStatus": "invalid",
			"epithet": "秀でた機動力",
			"name": "瀬呂範太",
			"rarity": "ur",
			"type": "abl",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "テーピングコンボ 敵単体に650%ダメージ/敵のスピードがダウンしている時、このスキルは必中となる/敵単体のパワーを30%ダウン(3ターン)/敵単体のスピードを30%ダウン(3ターン)/敵単体に中 確率 (45%)で拘束(2ターン)を付与",
				"tags": ["powerDownSingle", "speedDownSingle", "confusionSingle"]
			},
			"actionSkill1": {
				"name": "バリケードテープ",
				"description": "敵全体に高 確率 (70%)で拘束(1ターン)を付与/敵全体のスピードを30%ダウン(3ターン)/自分にバリア(1ヒット)を付与",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["confusionSingle", "speedDownSingle", "barrierSingle"]
			},
			"actionSkill2": {
				"name": "バインドキック",
				"description": "敵単体に375%ダメージ/敵のスピードがダウンしている時、このスキルは必中となる/敵単体のパワーを25%ダウン(3ターン)/敵単体のクリティカル率を35%ダウン(3ターン)/敵単体の一時的なスピードアップを全て解除",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["powerDownSingle", "criticalHitRateDownSingle", "removeBuffsSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "地味に優秀なのよね！ WAVE開始後、敵全体のスピードを15%ダウン(3ターン)/自分のスピードがダウンしていない時、自分のスキル威力を20%アップ",
				"tags": ["speedDownSingle", "powerUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "バツグンの滞空力 毎ターン、自分のスピードを10%アップ(2ターン)/自分のスピードがダウンしていない時、自分のディフェンスを20%アップ/味方全体の\"雄英高校1年A組\"が拘束状態になる確率を下げる",
				"tags": ["speedUpSingle", "defenseUpSingle", "confusionSingle"]
			},
		},
		{
			"id": "1121001",
			"validationStatus": "invalid",
			"epithet": "主役を食らう脇役",
			"name": "物間寧人",
			"rarity": "sr",
			"type": "int",
			"plusUltra": {
				"name": "爆速ターボドリル",
				"description": "敵単体に450%ダメージ/敵単体のスキル威力を20%ダウン(3ターン)/敵単体のディフェンスを10%ダウン(3ターン)",
				"tags": ["powerDownSingle", "defenseDownSingle"]
			},
			"actionSkill1": {
				"name": "ビッグポルターガイスト",
				"description": "敵単体に300%ダメージ/敵のパワーがアップしている時、自分のパワーを40%アップ(3ターン)/敵がダメージカット状態の時、自分が受けるダメージを20%カット(2ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["powerUpSingle", "damageDownSingle"]
			},
			"actionSkill2": {
				"name": "爆速ターボドリル",
				"description": "敵単体に300%ダメージ/敵単体のスキル威力を35%ダウン(3ターン)/自分に挑発(2ターン)を付与",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["powerDownSingle", "challengeSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "鋼鉄のメンタル 自分が挑発状態の時、自分が受けるダメージを35%カット/自分が\"雄英高校1年A組\"から攻撃を受けるたびに、敵全体のスキル威力を3%ダウン(2ターン)",
				"tags": ["damageDownSingle", "powerDownSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "ビッグマウス 自分のHPが30%未満の時、敵全体のスキル威力を30%ダウン(3ターン)",
				"tags": ["powerDownSingle"]
			},
		},
		{
			"id": "1121002",
			"validationStatus": "invalid",
			"epithet": "華麗な欺き",
			"name": "物間寧人",
			"rarity": "ur",
			"type": "abl",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "シーフコンボ 敵単体に600%ダメージ、中 確率 (50%)で混乱(2ターン)を付与/敵単体の混乱のキャラのパワー30%ダウン(4ターン)/自分に挑発(1ターン)を付与/味方全体のクールタイム1短縮/このスキルに必中を付与",
				"tags": ["confusionSingle", "powerDownSingle", "aggro", "cooldownTimeReductionSingle"]
			},
			"actionSkill1": {
				"name": "クレバーな思考",
				"description": "敵全体の一時的な強化2個解除、強化阻害(1ターン)を付与、スキル威力30%ダウン(3ターン)、スピード20%ダウン(3ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["removeBuffsSingle", "buffBlockSingle", "powerDownSingle", "speedDownSingle"]
			},
			"actionSkill2": {
				"name": "コピーツインインパクト",
				"description": "敵単体に350%ダメージ、中 確率 (50%)で混乱(2ターン)を付与/敵単体の混乱のキャラのパワー30%ダウン(4ターン)/自分に挑発(1ターン)を付与",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["confusionSingle", "powerDownSingle", "aggro"]

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "腹黒 自分がかばう・挑発でない時、自分に隠れるを付与/自分が隠れるの時、自分のスピード40%アップ、自分以外の味方全体のディフェンス30%アップ",
				"tags": ["cover", "speedUpSingle", "defenseUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "ブラフとハッタリ 自分が挑発の時、自分に回避(2回)を付与、状態異常無効(1回)を付与、敵全体のパワー25%ダウン",
				"tags": ["evasionSingle", "statusAilmentNullSingle", "powerDownSingle"]

			},
		},
		{
			"id": "1122001",
			"validationStatus": "invalid",
			"epithet": "明朗な武道家",
			"name": "拳藤一佳",
			"rarity": "sr",
			"type": "str",
			"plusUltra": {
				"name": "大拳乱打",
				"description": "敵単体に500%ダメージ/クリティカル発生時、このスキルのクリティカル威力を30%アップ",
				"tags": ["criticalHitImpactUpSingle"]

			},
			"actionSkill1": {
				"name": "大拳乱打",
				"description": "敵単体に300%ダメージ/クリティカル発生時、このスキルのクリティカル威力を20%アップ",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["criticalHitImpactUpSingle"]
			},
			"actionSkill2": {
				"name": "大拳扇",
				"description": "敵全体に250%ダメージ/自分のクリティカル率を35%アップ(3ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["criticalHitRateUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "B組の姉貴分 戦闘開始後、味方全体の\"力タイプ\"キャラのプルスウルトラゲージを20%アップ",
				"tags": ["plusUltraGaugeUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "ライバル意識 チームに\"雄英高校1年A組\"がいれば、自分のクリティカル率を25%アップ",
				"tags": ["criticalHitRateUpSingle"]
			},
		},
		{
			"id": "1122002",
			"validationStatus": "invalid",
			"epithet": "力で攻め切る！",
			"name": "拳藤一佳",
			"rarity": "sr",
			"type": "int",
			"plusUltra": {
				"name": "大拳扇",
				"description": "敵単体に500%ダメージ/敵のスキル威力がダウンしている時、スキル威力が40%アップ/敵のディフェンスがダウンしている時、敵単体のパワーを15%ダウン(3ターン)",
				"tags": ["powerDownSingle"]
			},
			"actionSkill1": {
				"name": "圧砕拳",
				"description": "敵単体に300%ダメージ/敵単体のスキル威力を35%ダウン(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["powerDownSingle"]
			},
			"actionSkill2": {
				"name": "大拳乱打",
				"description": "敵単体に350%ダメージ/敵のスキル威力がダウンしている時、スキル威力が50%アップ",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["powerDownSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "委員長の務め チームに\"雄英高校1年A組\"がいれば、自分のスキル威力を35%アップ",
				"tags": ["powerUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "ストッパー役 自分のHPが50％未満の時、自分のスキル威力を50%アップ",
				"tags": ["powerUpSingle"]
			},
		},
		{
			"id": "1123001",
			"validationStatus": "invalid",
			"epithet": "鋼鉄の意志",
			"name": "鉄哲徹鐵",
			"rarity": "sr",
			"type": "str",
			"plusUltra": {
				"name": "俺拳",
				"description": "敵単体に500%ダメージ/自分のパワーを40%アップ(3ターン)",
				"tags": ["powerUpSingle"]
			},
			"actionSkill1": {
				"name": "俺拳",
				"description": "敵単体に300%ダメージ/敵がスピードダウン状態だったらスキル威力が50%アップ",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["powerUpSingle"]
			},
			"actionSkill2": {
				"name": "ダッシュハンマー",
				"description": "敵単体に300%ダメージ/自分のパワーを35%アップ(3ターン)/敵単体のスピードを15%ダウン(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["powerUpSingle", "speedDownSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "ステゴロ 自分のHPが50％以上の時、自分のスキル威力を35%アップ",
				"tags": ["powerUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "小細工無用！ WAVE開始後、自分が燃焼状態、氷結状態になる確率を下げる(3ターン)/WAVE開始後、自分のパワーを30%アップ(3ターン)",
				"tags": ["burningSingle", "frozenSingle", "powerUpSingle"]
			},
		},
		{
			"id": "1136002",
			"validationStatus": "invalid",
			"epithet": "キノコで魅了",
			"name": "小森希乃子",
			"rarity": "ur",
			"type": "str",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "ニョキニョキマジック 敵単体に600%ダメージ、高 確率 (75%)で暗闇(3ターン)を付与、中 確率 (50%)で麻痺(2ターン)を付与、中 確率 (50%)で回復阻害(3ターン)を付与/味方全体にHP20%自動回復(3ターン)を付与",
				"tags": ["blindSingle", "paralysisSingle", "recoveryBlockSingle", "hpRegenerationSingle"]
			},
			"actionSkill1": {
				"name": "にょきにょきキノコちゃん",
				"description": "敵単体に350%ダメージ、中 確率 (50%)で麻痺(2ターン)を付与/味方全体のHP15%回復/このスキルでCHAIN成功時、味方全体にHP15%自動回復(3ターン)を付与",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["paralysisSingle", "hpRegenerationSingle"]
			},
			"actionSkill2": {
				"name": "猛毒ドクキノコちゃん",
				"description": "敵全体に250%ダメージ、中 確率 (50%)で暗闇(3ターン)を付与、低 確率 (25%)で回復阻害(3ターン)を付与、アクションスキル威力20%ダウン(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["blindSingle", "recoveryBlockSingle", "powerDownSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "キノコのエキスパート 3ターン毎に、敵全体のアクションスキル威力20%ダウン(2ターン)、クリティカル率20%ダウン(2ターン)/自分のHPが50%未満の時、自分のクールタイム2短縮(最大1回)",
				"tags": ["powerDownSingle", "criticalHitRateDownSingle", "cooldownTimeReductionSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "クロハナビラタケくん 自分が攻撃を2回受けきった時、ターゲットを無視してランダムな敵単体に中 確率 (50%)で暗闇(2ターン)を付与/自分がHP自動回復の時、敵全体のクリティカル率20%ダウン、クリティカル抵抗10%ダウン",
				"tags": ["blindSingle", "criticalHitRateDownSingle", "criticalResistanceDownSingle"]
			},
		},
		{
			"id": "1141001",
			"validationStatus": "invalid",
			"epithet": "学校生活",
			"name": "通形ミリオ",
			"rarity": "r",
			"type": "str",
			"plusUltra": {
				"name": "ファントムアッパー",
				"description": "敵単体に400%ダメージ/自分に回避(2回)を付与",
				"tags": ["evasionSingle"]
			},
			"actionSkill1": {
				"name": "バニッシングブロー",
				"description": "敵単体に250%ダメージ/敵単体に低 確率 (25%)で混乱(2ターン)を付与",
				"coolDown": "Cool Down 3 Turns",
				"tags": ["confusionSingle"]
			},
			"actionSkill2": {
				"name": "瞬時移動",
				"description": "自分にかばう(2ターン)を付与/自分のスピードを40%アップ(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["cover", "speedUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "神出鬼没 戦闘開始後、自分に回避(1回)を付与/WAVE開始後、自分のクリティカル率を20%アップ(3ターン)",
				"tags": ["evasionSingle", "criticalHitRateUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "ユーモラス 自分のHPが50％未満の時、自分のパワーを25%アップし、戦闘中1度だけ自分に回避(1回)を付与",
				"tags": ["powerUpSingle", "evasionSingle"]
			},
		},
		{
			"id": "1141002",
			"validationStatus": "invalid",
			"epithet": "俺は行ける!!",
			"name": "通形ミリオ",
			"rarity": "ur",
			"type": "mnd",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "ファントム・メナス 敵単体に650%ダメージ/敵単体のパワーを20%ダウン(3ターン)/自分に回避(1回)を付与",
				"tags": ["powerDownSingle", "evasionSingle"]
			},
			"actionSkill1": {
				"name": "ファントムアッパー",
				"description": "敵単体に400%ダメージ/敵単体に低 確率 (25%)で混乱(2ターン)を付与/このスキルでCHAIN成功時、敵単体のパワーを25%ダウン(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["confusionSingle", "powerDownSingle"]
			},
			"actionSkill2": {
				"name": "バニッシングブロー",
				"description": "敵単体に400%ダメージ/自分にかばう(2ターン)を付与/自分に回避(3回)を付与",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["cover", "evasionSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "最もNo.1に近い男 自分のHPが50％未満の時、戦闘中に1度だけ自分に回避(1回)を付与、自分のスキル威力を60％アップ(3ターン)",
				"tags": ["evasionSingle", "powerUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "揺れない心 自分が回避状態の時、自分のクリティカル率を35％アップ",
				"tags": ["criticalHitRateUpSingle"]
			},
		},
		{
			"id": "1141003",
			"validationStatus": "invalid",
			"epithet": "努力の結晶",
			"name": "通形ミリオ",
			"rarity": "sr",
			"type": "str",
			"plusUltra": {
				"name": "バニッシングブロー",
				"description": "敵単体に500%ダメージ/敵単体に中 確率 (40%)で混乱(2ターン)を付与",
				"tags": ["confusionSingle"]
			},
			"actionSkill1": {
				"name": "ファントムキック",
				"description": "敵単体に300%ダメージ/クリティカル発生時、このスキルのクリティカル威力を20%アップ/敵単体のパワーを25%ダウン(3ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": ["powerDownSingle"]
			},
			"actionSkill2": {
				"name": "経験則",
				"description": "自分にかばう(2ターン)を付与/このスキルでCHAIN成功時、自分のクリティカル率を35%アップ(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": ["cover", "criticalHitRateUpSingle"]
			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "経験を力に変えて 自分がかばう状態の時、自分に回避(1回)を付与/クリティカル発生時、自分のパワーを7%アップ(5回まで発動)",
				"tags": ["evasionSingle", "powerUpSingle"]
			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "俺はルミリオンだ！ WAVE開始後、自分に回避(1回)を付与/自分のHPが50％未満の時、自分のクリティカル率を25%アップ",
				"tags": ["evasionSingle", "criticalHitRateUpSingle"]
			},
		},
		{
			"id": "1141004",
			"validationStatus": "invalid",
			"epithet": "溢れるパワー",
			"name": "通形ミリオ",
			"rarity": "sr",
			"type": "abl",
			"plusUltra": {
				"name": "ファントムアッパー",
				"description": "敵単体に450%ダメージ/クリティカル発生時、このスキルのクリティカル威力を40%アップ",
				"tags": [],

			},
			"actionSkill1": {
				"name": "ファントムスマッシュ",
				"description": "敵単体に300%ダメージ/クリティカル発生時、このスキルのクリティカル威力を30%アップ/このスキルで2CHAIN以上成功時、自分のクリティカル率を15%アップ(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"actionSkill2": {
				"name": "状況予測",
				"description": "自分に回避(3回)を付与/自分のアクションスキルの威力を40%アップ(3ターン)/自分の通常攻撃威力を70%アップ(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 7 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "絶やさぬ笑顔 自分のHPが50％以上の時、自分のクリティカル率を40％アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "未来を照らす力 クリティカル発生時、自分のクリティカル率を4％アップ(10回まで発動)",
				"tags": [],

			},
		},
		{
			"id": "1141005",
			"validationStatus": "invalid",
			"epithet": "雄英のトップ",
			"name": "通形ミリオ",
			"rarity": "sr",
			"type": "dst",
			"plusUltra": {
				"name": "ファントムスマッシュ",
				"description": "敵単体に450%ダメージ/敵単体に低 確率 (20%)で混乱(2ターン)を付与/自分が回避状態の時、スキル威力が40%アップし、混乱状態にする確率を上げる",
				"tags": [],

			},
			"actionSkill1": {
				"name": "バニッシングブロー",
				"description": "敵単体に300%ダメージ/敵単体のクリティカル率を40%ダウン(3ターン)/自分が回避状態の時、スキル威力が30%アップ",
				"tags": [],
				"coolDown": "Cool Down 3 Turns"

			},
			"actionSkill2": {
				"name": "ファントムカウンター",
				"description": "自分に通常攻撃を無効化した上でカウンターする状態(2ターン)を付与/自分のクリティカル率を30%アップ(3ターン)/このスキルで2CHAIN以上成功時、自分のスキル威力を20%アップ(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 6 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "折れない精神力 クリティカルが3回発生するたびに、自分に回避(1回)を付与/自分がクリティカルでない攻撃を3回受けきった後に、自分のプルスウルトラゲージを25%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "太陽的存在 味方全体の\"ビッグ3\"のクリティカル率を20%アップ",
				"tags": [],

			},
		},
		{
			"id": "1141006",
			"validationStatus": "invalid",
			"epithet": "明るい未来",
			"name": "通形ミリオ",
			"rarity": "ur",
			"type": "int",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "ファントム・フィスト 敵単体に600%ダメージ、ディフェンス20%ダウン(3ターン)、高 確率 (65%)で混乱(2ターン)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "ファントムスマッシュ",
				"description": "敵単体に375%ダメージ/自分にかばう(2ターン)を付与、回避(2回)を付与",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "ファントムキック",
				"description": "敵単体に375%ダメージ、スピード30%ダウン(3ターン)、中 確率 (40%)で混乱(2ターン)を付与/自分に回避(2回)を付与",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "陽気なお調子者 自分がかばうでない時、自分に隠れるを付与/自分が隠れるの時、自分に必中を付与、スピード40%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "守り抜く意志 自分にくいしばり(1回)を付与(最大1回)/自分のHPが20%未満の時、自分に不屈(3ターン)を付与(最大1回)/自分が不屈の時、自分にかばうを付与、必中を付与/自分がかばうの時、自分のディフェンス30%アップ",
				"tags": [],

			},
		},
		{
			"id": "1142001",
			"validationStatus": "invalid",
			"epithet": "学校生活",
			"name": "天喰環",
			"rarity": "r",
			"type": "dst",
			"plusUltra": {
				"name": "クラーケンブロー",
				"description": "敵単体に400%ダメージ/敵単体に低 確率 (25%)で拘束(1ターン)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "クラムフィスト",
				"description": "敵単体に250%ダメージ/自分が受けるダメージを20％カット(2ターン)",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "特徴自由選択",
				"description": "自分のクリティカル率を25%アップ(3ターン)/自分のスキル威力を35%アップ(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "静かなる実力者 自分のHPが50％以上の時、自分のクリティカル率を20%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "技量ならプロ以上 自分のHPが50％以上の時、自分のスキル威力を30%アップ",
				"tags": [],

			},
		},
		{
			"id": "1142002",
			"validationStatus": "invalid",
			"epithet": "臨機応変に",
			"name": "天喰環",
			"rarity": "sr",
			"type": "mnd",
			"plusUltra": {
				"name": "クラーケンブロー",
				"description": "敵単体に450%ダメージ/敵単体に中 確率 (45%)で拘束(1ターン)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "チキンシュート",
				"description": "敵単体に300%ダメージ/敵単体に中 確率 (35%)で拘束(1ターン)を付与/自分のパワーを40%アップ(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"actionSkill2": {
				"name": "甲殻再現",
				"description": "自分にかばう(2ターン)を付与/自分のディフェンスを35%アップ(2ターン)",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "変幻自在 自分のHPが50％以上の時、自分のクリティカル率を25％アップ/自分のHPが50％未満の時、自分のパワーを30％アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "太陽さえ喰らう者 自分のHPが50％以上の時、自分のスピードを30％アップ/自分のHPが50％未満の時、自分のディフェンスを20％アップ",
				"tags": [],

			},
		},
		{
			"id": "1142003",
			"validationStatus": "invalid",
			"epithet": "変幻自在のリバイバー",
			"name": "天喰環",
			"rarity": "ur",
			"type": "mnd",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "混成大夥キメラクラーケン 敵単体に650%ダメージ/敵単体に高 確率 (70%)で拘束(1ターン)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "チキンシュート",
				"description": "敵単体に400%ダメージ/敵単体のスピードを30%ダウン(3ターン)/自分にかばう(2ターン)を付与/自分のディフェンスを20%アップ(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "クラーケンブロー",
				"description": "敵単体に350%ダメージ/敵単体に中 確率 (40%)で拘束(1ターン)を付与/敵単体のディフェンスを25%ダウン(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "ひた向きな努力 味方全体の\"信タイプ\"キャラのパワーを25％アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "応用の才 自分がかばう状態の時、味方全体のパワーを15％アップ、スピードを25％アップ",
				"tags": [],

			},
		},
		{
			"id": "1143001",
			"validationStatus": "invalid",
			"epithet": "可憐なる渦",
			"name": "波動ねじれ",
			"rarity": "sr",
			"type": "int",
			"plusUltra": {
				"name": "グリングウェイブ",
				"description": "敵単体に500%ダメージ/敵単体のパワーを25%ダウン(3ターン)",
				"tags": [],

			},
			"actionSkill1": {
				"name": "グリングウェイブ",
				"description": "敵単体に300%ダメージ/自分のプルスウルトラゲージを35%アップ",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "エネルギー充填",
				"description": "味方全体のHPを25%回復/自分のプルスウルトラゲージを30%アップ/自分のパワーを25%アップ(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 6 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "ビッグ3の紅一点 味方全体の\"ビッグ3\"の最大HPを20%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "好奇心旺盛 戦闘開始後、自分のプルスウルトラゲージを30％アップ",
				"tags": [],

			},
		},
		{
			"id": "1143002",
			"validationStatus": "invalid",
			"epithet": "渦巻く好奇心",
			"name": "波動ねじれ",
			"rarity": "ur",
			"type": "int",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "ウルトラグリングウェイブ 敵単体に600%ダメージ/自分以外の味方全体のプルスウルトラゲージを20%アップ/自分以外の味方全体にHP20%自動回復(3ターン)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "幻想的な空の舞い",
				"description": "味方単体のHPを25%回復/味方単体のパワーを40%アップ(3ターン)/味方単体の状態異常を1つ回復/味方全体のHPを25%回復",
				"tags": [],
				"coolDown": "Cool Down 6 Turns"

			},
			"actionSkill2": {
				"name": "パワーウェイブ",
				"description": "敵全体に300%ダメージ/敵全体のパワーを25%ダウン(3ターン)/味方全体のプルスウルトラゲージを15%アップ",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "質問攻め 戦闘開始後、味方全体の\"雄英高校生徒\"のプルスウルトラゲージを25%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "ねぇねぇ WAVE開始後、味方全体にHP20%自動回復(3ターン)を付与/自分のHPが50％未満の時、戦闘中に1度だけ自分にくいしばり(1回)を付与",
				"tags": [],

			},
		},
		{
			"id": "1143003",
			"validationStatus": "invalid",
			"epithet": "はじける水面",
			"name": "波動ねじれ",
			"rarity": "ur",
			"type": "mnd",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "レインボーウェイブ 敵全体に500%ダメージ/自分が状態異常無効の時、このスキルのスキル威力40%アップ/味方全体に回避(1回)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "グリングウェイブ",
				"description": "敵全体に275%ダメージ/味方全体のクリティカル抵抗30%アップ(4ターン)、HP8%自動回復(4ターン)を付与",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "パワーウェイブ",
				"description": "敵全体に300%ダメージ/自分が状態異常無効の時、このスキルのスキル威力40%アップ/自分のプルスウルトラゲージ30%アップ",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "不思議！ 味方全体に状態異常無効(2回)を付与(最大1回)/自分がHP自動回復の時、自分のスキル威力40%アップ、スピード30%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "ミスコングランプリ 3ターン毎に、自分に状態異常無効(2回)を付与/自分がHP回復を1回受けきった時、味方全体のディフェンス20%アップ(2ターン)、状態異常1個回復",
				"tags": [],

			},
		},
		{
			"id": "1145001",
			"validationStatus": "invalid",
			"epithet": "日々の修練",
			"name": "心操人使",
			"rarity": "r",
			"type": "int",
			"plusUltra": {
				"name": "洗脳",
				"description": "敵単体に350%ダメージ/敵単体に中 確率 (50%)で混乱(2ターン)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "執念",
				"description": "敵単体のクリティカル率を40%ダウン(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "ヒーローへの憧れ",
				"description": "自分のプルスウルトラゲージを50%アップ",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "初見殺し WAVE開始後、敵単体のクリティカル率を20%ダウン(3ターン)",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "普通科の星 戦闘開始後、チームに\"雄英高校1年A組\"がいれば、自分のプルスウルトラゲージを20%アップ",
				"tags": [],

			},
		},
		{
			"id": "1145002",
			"validationStatus": "invalid",
			"epithet": "言葉を武器に",
			"name": "心操人使",
			"rarity": "ur",
			"type": "int",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "ペルソナコード 敵単体に700%ダメージ/敵単体に高 確率 (80%)で混乱(2ターン)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "操縛布",
				"description": "敵単体に400%ダメージ/敵単体に中 確率 (40%)で拘束(1ターン)を付与/このスキルでCHAIN成功時、敵単体のスキル威力を20%ダウン(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "洗脳",
				"description": "敵単体の一時的な強化を2つ解除する/敵単体のディフェンスを30%ダウン(3ターン)/敵単体のスピードを40%ダウン(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "壁を超えるために 自分のHPが50％未満の時、自分に逆境(3ターン)を付与、戦闘中に1度だけ自分のプルスウルトラゲージを50％アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "凄いなぁヒーロー科 WAVE開始後、自分に高揚(3ターン)を付与、敵単体のクリティカル率を30%ダウン(3ターン)",
				"tags": [],

			},
		},
		{
			"id": "1145003",
			"validationStatus": "invalid",
			"epithet": "躍動する新星",
			"name": "心操人使",
			"rarity": "sr",
			"type": "int",
			"plusUltra": {
				"name": "操縛布",
				"description": "敵単体に500%ダメージ/敵単体に中 確率 (50%)で拘束(1ターン)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "操縛落とし",
				"description": "敵単体に300%ダメージ/敵単体のスピードを30%ダウン(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "洗脳",
				"description": "敵単体に中 確率 (40%)で混乱(2ターン)を付与/敵単体のディフェンスを25%ダウン(3ターン)/敵単体のクリティカル率を15%ダウン(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "貪欲な姿勢 自分が攻撃を受けるたびに、自分のクリティカル率を5%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "現状分析 自分のHPが50％以上の時、自分のクリティカル率を40%アップ",
				"tags": [],

			},
		},
		{
			"id": "1146001",
			"validationStatus": "invalid",
			"epithet": "平和の象徴",
			"name": "オールマイト",
			"rarity": "ur",
			"type": "mnd",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "DETROIT SMASH 敵単体に750%ダメージ/味方全体に高揚(3ターン)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "TEXAS SMASH",
				"description": "敵単体に450%ダメージ/敵が\"敵連合\"だったらスキル威力が40%アップ",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "No.1ヒーロー",
				"description": "自分のプルスウルトラゲージを100%アップ/自分のパワーを15%アップ(3ターン)、ディフェンスを15%アップ(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 7 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "風前の灯 自分のHPが50％以上の時、自分のパワーを40%アップ/自分のパワー、スピードが3%ダウン(毎ターン)(最大30%)",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "義勇の心 自分のHPが50％未満の時、戦闘中に1度だけ自分にくいしばり(1回)を付与、自分のパワーを50%アップ(3ターン)",
				"tags": [],

			},
		},
		{
			"id": "1146002",
			"validationStatus": "invalid",
			"epithet": "受け継ぐ力",
			"name": "オールマイト",
			"rarity": "sr",
			"type": "abl",
			"plusUltra": {
				"name": "SMASH",
				"description": "TEXAS 敵単体に500%ダメージ/敵がクリティカル率ダウン状態だったらスキル威力が40%アップ",
				"tags": [],

			},
			"actionSkill1": {
				"name": "OKLAHOMA SMASH",
				"description": "敵単体に300%ダメージ/敵がスピードダウン状態だったらスキル威力が40%アップ/このスキルで2CHAIN以上成功時、敵単体のクリティカル率を15%ダウン(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"actionSkill2": {
				"name": "CAROLINA SMASH",
				"description": "敵単体に300%ダメージ/敵がパワーダウン状態だったらスキル威力が50%アップ",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "未だ消えぬ残り火 自分のHPが50％以上の時、自分のスキル威力を40%アップ/自分のパワー、スピードが3%ダウン(毎ターン)(最大30%)",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "英姿颯爽 自分のHPが50％未満の時、戦闘中に1度だけ自分のプルスウルトラゲージを40％アップ",
				"tags": [],

			},
		},
		{
			"id": "1146003",
			"validationStatus": "invalid",
			"epithet": "絶望を打ち砕く!!",
			"name": "オールマイト",
			"rarity": "ur",
			"type": "str",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "LOUISIANA SMASH 敵単体に700%ダメージ/敵が\"敵\"だったらスキル威力が20%アップ/味方全体のアクションスキル威力を20%アップ(3ターン)",
				"tags": [],

			},
			"actionSkill1": {
				"name": "TEXAS SMASH",
				"description": "敵単体に400%ダメージ/敵がクリティカル率ダウン状態だったらスキル威力が40%アップ/敵がパワーダウン状態だったらスキル威力が20%アップ",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "OKLAHOMA SMASH",
				"description": "敵単体に400%ダメージ/敵がスピードダウン状態だったらスキル威力が40%アップ/敵がスキル威力ダウン状態だったらスキル威力が20%アップ",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "平和の象徴 WAVE開始後、自分に余裕(3ターン)を付与/戦闘開始後、自分のプルスウルトラゲージを30%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "全力で行くぞ！ 自分のHPが50%未満の時、自分に逆境を付与、戦闘中に1度だけ自分のプルスウルトラゲージを40%アップ",
				"tags": [],

			},
		},
		{
			"id": "1146004",
			"validationStatus": "invalid",
			"epithet": "笑って臨め",
			"name": "オールマイト",
			"rarity": "ur",
			"type": "abl",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "ARIZONA SMASH 敵単体に700%ダメージ/自分のクリティカル率がアップしている時、このスキルに貫通を付与/味方全体のクリティカル威力を30%アップ(3ターン)",
				"tags": [],

			},
			"actionSkill1": {
				"name": "CAROLINA SMASH",
				"description": "敵単体に400%ダメージ/自分のパワーがアップしている時、このスキルに貫通を付与/このスキルでCHAIN成功時、自分のプルスウルトラゲージを35%アップ",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "TEXAS SMASH",
				"description": "敵単体に400%ダメージ/自分のスキル威力がアップしている時、このスキルに貫通を付与/自分のクリティカル威力がアップしている時、スキル威力が30%アップ",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "私が来た！！ 自分のHPが50%以上の時、自分のクリティカル威力を30%アップ/戦闘開始後、味方全体の\"プロヒーロー\"に余裕(3ターン)を付与",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "ナチュラルボーンヒーロー 自分のHPが50%未満の時、自分のパワーを10%アップ、自分のスキル威力を20%アップ、自分のクリティカル率を10%アップ",
				"tags": [],

			},
		},
		{
			"id": "1146005",
			"validationStatus": "invalid",
			"epithet": "教育に励め!!",
			"name": "オールマイト",
			"rarity": "sr",
			"type": "dst",
			"plusUltra": {
				"name": "SMASH",
				"description": "OKLAHOMA 敵単体に500%ダメージ/味方全体のパワーを30%アップ(3ターン)/自分以外の味方全体のアクションスキルのクールタイムを1短縮する",
				"tags": [],

			},
			"actionSkill1": {
				"name": "MICHIGAN SMASH",
				"description": "敵単体に300%ダメージ/自分に高揚(3ターン)を付与",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "TEXAS SMASH",
				"description": "敵単体に300%ダメージ/自分が高揚状態の時、自分のスキル威力を30%アップ/このスキルでCHAIN成功時、自分のディフェンスを30%アップ(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "お節介 味方全体の\"雄英高校生徒\"のパワーを20%アップ/チームに\"雄英高校生徒\"がいれば、自分の最大HPを30%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "きれいごと上等！ 自分が高揚状態の時、味方全体のスキル威力を30%アップ/自分が高揚状態になるたびに、味方全体のプルスウルトラゲージを30%アップ",
				"tags": [],

			},
		},
		{
			"id": "1146006",
			"validationStatus": "invalid",
			"epithet": "集う英傑",
			"name": "オールマイト",
			"rarity": "sr",
			"type": "mnd",
			"plusUltra": {
				"name": "SMASH",
				"description": "CAROLINA 敵単体に500%ダメージ/クリティカル発生時、このスキルのクリティカル威力を40%アップ/自分以外の味方全体のクリティカル率を15%アップ(3ターン)",
				"tags": [],

			},
			"actionSkill1": {
				"name": "バーティカルスラッシュ",
				"description": "敵単体に300%ダメージ/自分のプルスウルトラゲージを30%アップ",
				"tags": [],
				"coolDown": "Cool Down 3 Turns"

			},
			"actionSkill2": {
				"name": "もう大丈夫",
				"description": "自分のクリティカル率を20%アップ(5ターン)/自分のクリティカル威力を40%アップ(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "筋骨隆々 クリティカルが発生しなかった時、自分のクリティカル率を10%アップ(3ターン)/クリティカル発生時、自分のパワーを15%アップ(3ターン)",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "全てを守るために 味方全体の\"ヒーロー\"のクリティカル威力を25%アップ",
				"tags": [],

			},
		},
		{
			"id": "1146008",
			"validationStatus": "invalid",
			"epithet": "希望を拳に",
			"name": "オールマイト",
			"rarity": "ur",
			"type": "dst",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "SANFORD SMASH 敵単体に800%ダメージ/与えたダメージの一定量を自分も受ける/自分にくいしばり(2回)を付与/自分が不屈の時、このスキルのスキル威力35%アップ/自分が不屈でない時、自分のダメージ35%カット(3ターン)/自分に出血(8ターン)を付与※この効果は状態異常無効で防げず、解除もできない",
				"tags": [],

			},
			"actionSkill1": {
				"name": "OKLAHOMA SMASH",
				"description": "敵全体に275%ダメージ、低 確率 (30%)で強化阻害(2ターン)を付与、クリティカル抵抗25%ダウン(3ターン)、一時的な最大HPアップ全て解除",
				"coolDown": "Cool Down 4 Turns",
				"tags": [],

			},
			"actionSkill2": {
				"name": "MICHIGAN SMASH",
				"description": "敵単体に400%ダメージ/自分にくいしばり(2回)を付与/このスキルで2CHAIN以上成功時、自分のクールタイム1短縮、プルスウルトラゲージ40%アップ",
				"coolDown": "Cool Down 5 Turns",
				"tags": [],

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "笑顔で救う 自分が不屈でない時、自分の出血ダメージ50%カット/自分のHPが80%以上の時、自分のスピード30%アップ/1ターン毎に、自分のパワー5%ダウン(最大6回)、ディフェンス5%ダウン(最大6回)/自分のクリティカル攻撃が2回発生しきった時、自分のパワー10%アップ(最大10回)/自分よりディフェンスが高い相手から攻撃を2回受けきった時、自分の被ダメージ35%回復(2ターン)を付与(最大5回)、ディフェンス10%アップ(最大5回)",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "究極の脳筋 自分のHPが30%未満の時、自分に貫通を付与、くいしばり(2回)を付与(最大1回)/自分が不屈の時、自分にかばうを付与、回復阻害を付与、クリティカル率50%アップ、プルスウルトラゲージ100%アップ/自分が出血のまま、8回ターンをまたいだ時、自分に不屈(3ターン)を付与(最大1回)※この効果は強化解除、強化阻害できない",
				"tags": [],

			},
		},
		{
			"id": "1146009",
			"validationStatus": "invalid",
			"epithet": "絶対的なパワー",
			"name": "オールマイト",
			"rarity": "ur",
			"type": "mnd",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "ROCKY SMASH 敵単体に700%ダメージ/自分の象徴が8個未満の時、自分の象徴を1個増加/自分のHPが80%以上の時、このスキルのスキル威力60%アップ",
				"tags": [],

			},
			"actionSkill1": {
				"name": "MICHIGAN SMASH",
				"description": "敵単体に400%ダメージ、パワー35%ダウン(3ターン)/自分にかばう(2ターン)を付与",
				"tags": [],
				"coolDown": "Cool Down 3 Turns"

			},
			"actionSkill2": {
				"name": "人に尽くす力",
				"description": "味方全体の一時的な状態異常3個回復、パワー45%アップ(3ターン)、プルスウルトラゲージ30%アップ/自分の象徴が8個未満の時、自分の象徴を1個増加",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "この国の柱 自分に平静を付与、象徴を8個増加(最大1回)/自分の象徴1個毎に、自分の最大HP8%アップ、ディフェンス4%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "託され託す者 自分のHPが80%未満の時、自分にかばうを付与/自分がかばうの時、味方全体のディフェンス30%アップ/自分がかばうの時、自分のパワー20%ダウン、被ダメージ14%回復を付与/自分がかばうのまま、1回ターンをまたいだ時、自分の象徴を1個減少",
				"tags": [],

			},
		},
		{
			"id": "1147001",
			"validationStatus": "invalid",
			"epithet": "一瞬の隙で",
			"name": "相澤消太",
			"rarity": "ur",
			"type": "mnd",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "捕縛コンボ 敵単体の一時的な強化を全て解除/敵単体に650%ダメージ/敵単体に中 確率 (60%)でスキル封印(2ターン)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "錐揉みキック",
				"description": "敵単体に400%ダメージ/敵単体の一時的な強化を1つ解除する",
				"tags": [],
				"coolDown": "Cool Down 3 Turns"

			},
			"actionSkill2": {
				"name": "捕縛布",
				"description": "敵単体に400%ダメージ/このスキルでCHAIN成功時、中 確率 (55%)でスキル封印(3ターン)を付与",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "一芸だけじゃヒーローは務まらん 味方全体の\"プロヒーロー\"のパワーを30%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "手数勝負 自分のHPが50％以上の時、自分のスピードを40%アップ",
				"tags": [],

			},
		},
		{
			"id": "1147002",
			"validationStatus": "invalid",
			"epithet": "教師の役割",
			"name": "相澤消太",
			"rarity": "sr",
			"type": "int",
			"plusUltra": {
				"name": "錐揉みキック",
				"description": "敵単体の一時的な強化を2つ解除する/敵単体に450%ダメージ/敵単体に中 確率 (50%)でスキル封印(2ターン)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "抹消",
				"description": "敵単体の一時的な強化を2つ解除する/敵単体のスピードを20%ダウン(3ターン)/敵単体のクリティカル率を30%ダウン(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 3 Turns"

			},
			"actionSkill2": {
				"name": "捕縛布",
				"description": "敵単体に300%ダメージ/敵単体に中 確率 (40%)で拘束(1ターン)を付与/敵単体のスキル威力を25%ダウン(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "わかったか問題児 戦闘開始後、チームに\"雄英高校生徒\"がいれば、自分のプルスウルトラゲージを40％アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "前向いていこう 味方全体の\"知タイプ\"キャラのパワーを20％アップ",
				"tags": [],

			},
		},
		{
			"id": "1147003",
			"validationStatus": "invalid",
			"epithet": "虚を突く襲撃",
			"name": "相澤消太",
			"rarity": "ur",
			"type": "dst",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "操縛強打 敵単体の一時的な強化を2つ解除する/敵単体に650%ダメージ/敵がスキル威力ダウン状態だったらスキル威力が40%アップ",
				"tags": [],

			},
			"actionSkill1": {
				"name": "捕縛布",
				"description": "敵単体に400%ダメージ/このスキルで2CHAIN以上成功時、中 確率 (50%)で拘束(1ターン)を付与",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"actionSkill2": {
				"name": "抹消",
				"description": "敵単体の一時的な強化を2つ解除する/敵単体のスピードを35%ダウン(3ターン)/敵単体のスキル威力を35%ダウン(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "弱いところを突く クリティカル発生時、自分のスキル威力を40％アップ(3ターン)/WAVE開始後、敵単体のクリティカル率を25%ダウン(3ターン)",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "合理主義 自分のHPが50％以上の時、クリティカル率を25％アップ/味方全体の\"雄英高校1年A組\"のクリティカル率を15％アップ",
				"tags": [],

			},
		},
		{
			"id": "1147004",
			"validationStatus": "invalid",
			"epithet": "継承する技巧",
			"name": "相澤消太",
			"rarity": "sr",
			"type": "abl",
			"plusUltra": {
				"name": "捕縛布",
				"description": "敵単体に500%ダメージ/敵単体に低 確率 (25%)で拘束(1ターン)を付与/敵が\"力タイプ\"だったら拘束状態にする確率を上げる",
				"tags": [],

			},
			"actionSkill1": {
				"name": "捕縛強襲",
				"description": "敵単体に300%ダメージ/敵単体の一時的な強化を1つ解除する/敵単体のスキル威力を30%ダウン(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"actionSkill2": {
				"name": "合理的手段",
				"description": "味方単体の状態異常を1つ回復/味方単体の状態異常を防ぐ(1回)/味方単体のスキル威力を20%アップ(3ターン)/このスキルでCHAIN成功時、味方単体のプルスウルトラゲージを35%アップ",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "生徒想い 味方全体の\"雄英高校生徒\"のスキル威力を20％アップ/チームに\"雄英高校生徒\"がいれば、自分のスピードを20％アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "時間は有限 戦闘開始後、敵全体のパワーを20%ダウン(3ターン)",
				"tags": [],

			},
		},
		{
			"id": "1147005",
			"validationStatus": "invalid",
			"epithet": "集う英傑",
			"name": "相澤消太",
			"rarity": "ur",
			"type": "abl",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "抹消剣技 敵単体の一時的な強化を全て解除/敵単体に650%ダメージ/敵単体に高 確率 (70%)でスキル封印(3ターン)を付与/敵単体に中 確率 (45%)で出血(3ターン)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "抹消",
				"description": "敵単体の一時的な強化を3個解除する/敵単体のパワーを25%ダウン(3ターン)/敵単体のディフェンスを30%ダウン(3ターン)/敵単体に中 確率 (45%)でスキル封印(3ターン)を付与",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "捕縛強襲",
				"description": "敵単体に425%ダメージ/敵単体に中 確率 (50%)で拘束(2ターン)を付与/自分のプルスウルトラゲージを40%アップ/敵がパワーダウン状態だったらスキル威力を30%アップ",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "用意周到 毎ターン、自分の状態異常を1個回復する/味方全体の\"プロヒーロー\"のスピードを25%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "ロジカルシンキング 貫通状態の相手から攻撃を受けた時、自分に回避(1回)を付与/必中状態の相手から攻撃を受けた時、自分にバリア(1ヒット)を付与/自分のスキルでCHAIN成功時、自分のスキル威力を10%アップ(最大6回)",
				"tags": [],

			},
		},
		{
			"id": "1147006",
			"validationStatus": "invalid",
			"epithet": "討つ為に",
			"name": "相澤消太",
			"rarity": "sr",
			"type": "mnd",
			"plusUltra": {
				"name": "捕縛強襲",
				"description": "敵単体の一時的な強化を2つ解除する/敵単体に450%ダメージ/敵単体に中 確率 (40%)でスキル封印(3ターン)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "操縛蹴り",
				"description": "敵単体の一時的な強化を2つ解除する/敵単体に300%ダメージ/敵単体に中 確率 (40%)でスキル封印(2ターン)を付与",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"actionSkill2": {
				"name": "捕縛布",
				"description": "敵単体の一時的な強化を1つ解除する/敵単体に275%ダメージ/敵単体に低 確率 (20%)で拘束(2ターン)を付与",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "アングラ系ヒーロー 味方全体の\"プロヒーロー\"のクリティカル率を10%アップ/自分のHPが50%未満の時、戦闘中に1度だけ自分にHP20%自動回復(2ターン)を付与",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "メディア嫌い 敵全体の\"ヒーロー\"のクリティカル率を20%ダウン/自分のHPが50%未満になった時、自分のアクションスキルのクールタイムを1短縮する(最大3回)",
				"tags": [],

			},
		},
		{
			"id": "1147008",
			"validationStatus": "invalid",
			"epithet": "屈指の捕縛者",
			"name": "相澤消太",
			"rarity": "ur",
			"type": "str",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "捕縛落打 敵単体の一時的な強化4個解除、600%ダメージ、高 確率 (70%)で拘束(2ターン)を付与/自分に回避(2回)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "抹消鉄拳",
				"description": "敵単体の一時的な強化2個解除、350%ダメージ、中 確率 (40%)でスキル封印(2ターン)を付与/自分に回避(3回)を付与",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"actionSkill2": {
				"name": "抹消",
				"description": "敵全体の一時的な強化2個解除、ディフェンス20%ダウン(3ターン)、スキル威力35%ダウン(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "よどみない決断 自分に混乱完全耐性を付与/自分のHPが30%以上の時、自分にかばうを付与、ディフェンス40%アップ/自分のHPが30%未満の時、敵全体の一時的な強化5個解除(最大1回)、自分に隠れるを付与",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "リベンジ クリティカルが2回発生しきった時、敵全体の一時的な強化1個解除/自分が攻撃を1回受けきった時、敵全体の一時的な強化を低 確率 (30%)で1個解除/自分が隠れるの時、自分のクリティカル率20%アップ、拘束命中率アップ/敵全体の\"敵\"のスピード30%ダウン",
				"tags": [],

			},
		},
		{
			"id": "1148001",
			"validationStatus": "invalid",
			"epithet": "最強の拡声力",
			"name": "プレゼント・マイク",
			"rarity": "sr",
			"type": "dst",
			"plusUltra": {
				"name": "エコーヴォイス",
				"description": "敵単体に500%ダメージ/敵単体に中 確率 (50%)で混乱(2ターン)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "エコーヴォイス",
				"description": "敵全体に250%ダメージ/このスキルで3CHAIN成功時、自分のプルスウルトラゲージを25%アップ",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "エヴィバディセイヘイ!!!",
				"description": "味方全体のパワーを40%アップ(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "マイクパフォーマンス 戦闘中に1度だけ自分以外の味方全体のプルスウルトラゲージを25%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "ハイテンション 自分のHPが50％未満の時、自分に高揚(3ターン)を付与、自分のパワーを30%アップ",
				"tags": [],

			},
		},
		{
			"id": "1148002",
			"validationStatus": "invalid",
			"epithet": "大爆音ヴォイス",
			"name": "プレゼント・マイク",
			"rarity": "ur",
			"type": "mnd",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "スーパーハイパーヴォイス 敵単体に700%ダメージ/自分が高揚状態の時、このスキルは必中となる/自分のアクションスキルのクールタイムを2短縮する",
				"tags": [],

			},
			"actionSkill1": {
				"name": "エコーヴォイス",
				"description": "敵全体に275%ダメージ/敵全体のディフェンスを20%ダウン(3ターン)/自分が高揚状態の時、このスキルは必中となる",
				"tags": [],
				"coolDown": "Cool Down 6 Turns"

			},
			"actionSkill2": {
				"name": "ブリングザビート!!",
				"description": "味方全体のプルスウルトラゲージを30%アップ/敵全体のスピードを30%ダウン(3ターン)/自分に高揚(3ターン)を付与",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "バイブスアゲてけ!! 味方全体の\"信タイプ\"キャラのプルスウルトラ技の威力を25％アップ/自分のプルスウルトラ技の威力を5％アップ(毎ターン)(最大30%)",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "D・J WAVE開始後、自分に高揚(3ターン)を付与、敵全体のプルスウルトラ技の威力を20%ダウン(1回)",
				"tags": [],

			},
		},
		{
			"id": "1148003",
			"validationStatus": "invalid",
			"epithet": "心の叫び",
			"name": "プレゼント・マイク",
			"rarity": "ur",
			"type": "int",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "D・Jパンチ 敵単体に550%ダメージ/敵全体に150%ダメージ/自分のパワーがアップしている時、このスキルは必中となる/敵のスピードがダウンしている時、スキル威力を30%アップ",
				"tags": [],
				"tags": []

			},
			"actionSkill1": {
				"name": "エコーヴォイス",
				"description": "敵全体に250%ダメージ/自分のパワーがアップしている時、このスキルは必中となり、スキル威力を20%アップ/敵全体のスピードを15%ダウン(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "大音響",
				"description": "味方全体のプルスウルトラ技の威力を40%アップ(5ターン)、受けるダメージを20%カット(3ターン)/敵全体の一時的な強化を1つ解除し、中 確率 (35%)で混乱(1ターン)を付与",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "宿るソウル 味方全体の\"プロヒーロー\"のスキル威力を20%アップ/味方全体の\"ヒーロー\"のスピードを10%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "ボイスヒーロー 自分のプルスウルトラ技の威力がアップしている時、自分のパワーを25%アップ/自分のスキルで2CHAIN以上成功時、味方全体のプルスウルトラゲージを10%アップ",
				"tags": [],

			},
		},
		{
			"id": "1152001",
			"validationStatus": "invalid",
			"epithet": "魅惑の香り",
			"name": "ミッドナイト",
			"rarity": "ur",
			"type": "str",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "セブンスウィップ 敵単体に650%ダメージ/敵が\"男性\"だったらクリティカル率を30%アップ、中 確率 (40%)でスタン(2ターン)を付与/敵が\"女性\"だったら低 確率 (20%)でスタン(2ターン)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "ビューティ・スポット",
				"description": "敵単体に350%ダメージ/敵が\"男性\"だったらクリティカル率を30%アップ、中 確率 (40%)でスタン(1ターン)を付与/敵が\"女性\"だったら低 確率 (20%)でスタン(1ターン)を付与/このスキルで2CHAIN以上成功時、自分のプルスウルトラゲージを30%アップ",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "ベルベット・キス",
				"description": "敵全体のスキル威力を35%ダウン(3ターン)/敵が\"男性\"だったら中 確率 (40%)で魅了(3ターン)を付与、中 確率 (40%)でスタン(1ターン)を付与/敵が\"女性\"だったら低 確率 (20%)でスタン(1ターン)を付与",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "静かにしなさい！ 味方全体の\"雄英高校1年A組\"のクリティカル率を25%アップ/チームに\"雄英高校生徒\"がいれば、自分のディフェンスを30%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "捕食者の目 敵全体の\"男性\"のスピードを20%ダウン/自分のHPが50%未満の時、戦闘中に1度だけ自分のプルスウルトラゲージを50%アップ",
				"tags": [],

			},
		},
		{
			"id": "1157001",
			"validationStatus": "invalid",
			"epithet": "以後お見シリおきを！",
			"name": "Mt.レディ",
			"rarity": "ur",
			"type": "str",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "キャニオンカノン 敵単体に700%ダメージ/自分の最大HPを30%アップ(3ターン)/このスキルは必中となる",
				"tags": [],

			},
			"actionSkill1": {
				"name": "グランドクラッシュ",
				"description": "敵全体に275%ダメージ/敵全体のスピードを30%ダウン(3ターン)/自分の最大HPがアップしている時、このスキルは必中となる",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "ギガントナックル",
				"description": "敵全体に275%ダメージ/自分の最大HPがアップしている時、自分のプルスウルトラゲージを30%アップ/自分のクリティカル率を20%アップ(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "ゲンキンな性格 自分のHPが50%以上の時、自分のパワーを40%アップ/自分のHPが50%未満の時、自分に逆境を付与",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "現役美麗注目株 自分が攻撃を2回受けきった後に、自分のパワーを4%アップ(最大5回)/自分のHPが30%未満の時、戦闘中に1度だけ自分にくいしばり(2ターン)を付与し、自分のアクションスキルのクールタイムを2短縮する",
				"tags": [],

			},
		},
		{
			"id": "1161001",
			"validationStatus": "invalid",
			"epithet": "灼熱の闘志",
			"name": "エンデヴァー",
			"rarity": "sr",
			"type": "str",
			"plusUltra": {
				"name": "フレイムナックル",
				"description": "敵単体に500%ダメージ/敵単体に中 確率 (60%)で燃焼(3ターン)を付与/自分のHPが80%以上だとスキル威力が30%アップ",
				"tags": [],

			},
			"actionSkill1": {
				"name": "フレイムバースト",
				"description": "敵全体に250%ダメージ/敵全体に低 確率 (25%)で燃焼(3ターン)を付与/自分のHPが80%以上だと更に威力が40%アップ",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"actionSkill2": {
				"name": "フレイムナックル",
				"description": "敵単体に300%ダメージ/敵単体に中 確率 (55%)で燃焼(3ターン)を付与",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "No.1への執念 自分のHPが50％以上の時、自分のパワーを30%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "超高温 自分のHPが80％以上の時、自分のスキル威力を40%アップ、自分が攻撃を受けると敵に燃焼(3ターン)を付与",
				"tags": [],

			},
		},
		{
			"id": "1161002",
			"validationStatus": "invalid",
			"epithet": "火力を上げろ!!",
			"name": "エンデヴァー",
			"rarity": "ur",
			"type": "str",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "PLUS ULTRAプロミネンスバーン 敵単体に650%ダメージ/敵単体に高 確率 (80%)で燃焼(3ターン)を付与/自分にくいしばり(1回)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "赫灼熱拳ヘルスパイダー",
				"description": "敵全体に275%ダメージ/敵全体に低 確率 (25%)で燃焼(3ターン)を付与/敵全体のスピードを20%ダウン(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 6 Turns"

			},
			"actionSkill2": {
				"name": "フレイムナックル",
				"description": "敵単体に400%ダメージ/敵単体に中 確率 (45%)で燃焼(3ターン)を付与/敵がスピードダウン状態だったらスキル威力が40%アップ",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "再出発 戦闘開始後、自分のプルスウルトラゲージを30％アップ/WAVE開始後、自分のパワーを40%アップ(3ターン)",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "強く在る理由 自分のHPが50％未満の時、自分に逆境(3ターン)を付与、自分のパワーを30%アップ",
				"tags": [],

			},
		},
		{
			"id": "1161003",
			"validationStatus": "invalid",
			"epithet": "燃え盛る轟炎",
			"name": "エンデヴァー",
			"rarity": "sr",
			"type": "mnd",
			"plusUltra": {
				"name": "フレイムバースト",
				"description": "敵単体に500%ダメージ/敵単体に低 確率 (30%)で燃焼(3ターン)を付与/敵単体のクリティカル率を25%ダウン(3ターン)",
				"tags": [],

			},
			"actionSkill1": {
				"name": "プロミネンスバーン",
				"description": "敵単体に300%ダメージ/敵単体に高 確率 (70%)で燃焼(3ターン)を付与/敵がスピードダウン状態だったらスキル威力が50%アップ",
				"tags": [],
				"coolDown": "Cool Down 6 Turns"

			},
			"actionSkill2": {
				"name": "豪炎",
				"description": "敵単体のクリティカル率を35%ダウン(3ターン)、スピードを25%ダウン(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "猛き紅焔 自分のHPが50％以上の時、自分のスキル威力を35%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "勝機を見据えろ！ 味方全体の\"雄英高校1年A組\"のスピードを25%アップ",
				"tags": [],

			},
		},
		{
			"id": "1161004",
			"validationStatus": "invalid",
			"epithet": "頂点たる覚悟",
			"name": "エンデヴァー",
			"rarity": "ur",
			"type": "dst",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "フレイムエンド 敵単体に700%ダメージ/敵単体に業火状態を付与/自分に余裕(2ターン)を付与/敵が燃焼状態の時、スキル威力が40%アップ",
				"tags": [],

			},
			"actionSkill1": {
				"name": "プロミネンスバーン",
				"description": "敵単体に400%ダメージ/自分が余裕状態でない時、敵単体に中 確率 (50%)で燃焼(3ターン)を付与/自分が余裕状態の時、敵単体に中 確率 (50%)で燃焼(6ターン)を付与",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "赫灼熱拳ヘルスパイダー",
				"description": "敵全体に300%ダメージ/自分が余裕状態の時、スキル威力が40%アップ",
				"coolDown": "Cool Down 5 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "剛毅 味方全体の\"破タイプ\"キャラのパワーを25％アップ",

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "No.1の覚悟 戦闘開始後、自分に余裕(3ターン)を付与/毎ターン、自分のパワーを20%アップ(2ターン)(最大3回)",

			},
		},
		{
			"id": "1161005",
			"validationStatus": "invalid",
			"epithet": "猛々しい光焔",
			"name": "エンデヴァー",
			"rarity": "sr",
			"type": "abl",
			"plusUltra": {
				"name": "プロミネンスバーン",
				"description": "敵単体に500%ダメージ/敵単体に中 確率 (40%)で燃焼(3ターン)を付与/敵が燃焼状態だったらスキル威力を40%アップ",
				"tags": [],

			},
			"actionSkill1": {
				"name": "赫灼熱拳ジェットバーン",
				"description": "敵単体に300%ダメージ/敵単体に中 確率 (40%)で燃焼(3ターン)を付与/敵が燃焼状態だったらスキル威力を50%アップ",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "赫灼熱拳ヘルスパイダー",
				"description": "敵単体に300%ダメージ/敵単体に中 確率 (40%)で燃焼(3ターン)を付与/自分以外の味方全体のパワーを40%アップ(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "ストイック WAVE開始後、自分のパワーを40%アップ(3ターン)/自分の燃焼状態を付与する確率を上げる(毎ターン)(最大5回)",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "フレイムヒーロー 味方全体の\"技タイプ\"キャラの最大HPを25%アップ/WAVE開始後、味方全体の氷結、凍傷状態になる確率を下げる(3ターン)",
				"tags": [],

			},
		},
		{
			"id": "1161006",
			"validationStatus": "invalid",
			"epithet": "火炎の誓い",
			"name": "エンデヴァー",
			"rarity": "sr",
			"type": "dst",
			"plusUltra": {
				"name": "イグナイテッドアロー",
				"description": "敵単体に500%ダメージ/敵単体に高 確率 (70%)で燃焼(3ターン)を付与/敵が\"敵\"だったらスキル威力を40%アップ",
				"tags": [],

			},
			"actionSkill1": {
				"name": "フレイムナックル",
				"description": "敵単体に300%ダメージ/このスキルでCHAIN成功時、自分のプルスウルトラゲージを30%アップ/敵が\"敵\"だったらスキル威力を40%アップ",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "赫灼熱拳ヘルスパイダー",
				"description": "敵全体に250%ダメージ/敵全体に中 確率 (40%)で燃焼(3ターン)を付与/敵に\"敵\"がいたらスキル威力を40%アップ",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "渾身の火力 自分のHPが50％以上の時、自分のクリティカル率を40%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "No.1の雄姿 チームに\"轟焦凍\"がいれば、自分のクリティカル時の威力を30%アップ/自分のアクションスキルのクールタイムを1短縮する(3ターン毎)(最大2回)",
				"tags": [],

			},
		},
		{
			"id": "1161007",
			"validationStatus": "invalid",
			"epithet": "穿く灼熱",
			"name": "エンデヴァー",
			"rarity": "ur",
			"type": "abl",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "バーストアロー 敵単体に650%ダメージ、高 確率 (80%)で燃焼(4ターン)を付与/自分のアクションスキル威力30%アップ(4ターン)/敵が燃焼の時、このスキルに貫通を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "フレイムバースト",
				"description": "敵全体に300%ダメージ、クリティカル率30%ダウン(4ターン)、中 確率 (55%)で燃焼(4ターン)を付与/自分のHPが50%以上の時、このスキルに貫通を付与/敵にかばう、挑発のキャラがいたら、このスキルのスキル威力30%アップ",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "赫灼熱拳ヘルスパイダー",
				"description": "敵全体に300%ダメージ/このスキルでCHAIN成功時、自分のプルスウルトラゲージ30%アップ/敵に燃焼のキャラがいたら、このスキルに貫通を付与/敵にかばう、挑発のキャラがいたら、このスキルのスキル威力30%アップ",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "立ち上がる力 自分にスタン完全耐性を付与/自分が敵を1人撃破した時、自分のパワー25%アップ/自分が戦闘不能になった時、味方全体にくいしばり(2回)を付与、逆境(5ターン)を付与",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "戦いの狼火 自分のHPが80%以上の時、自分のスキル威力30%アップ/自分のHPが50%以上の時、味方全体のスピード25%アップ/自分のHPが30%以上の時、自分のパワー30%アップ",
				"tags": [],

			},
		},
		{
			"id": "1162001",
			"validationStatus": "invalid",
			"epithet": "歴戦のスピード",
			"name": "グラントリノ",
			"rarity": "sr",
			"type": "int",
			"plusUltra": {
				"name": "ジェット",
				"description": "敵単体に450%ダメージ/自分のスピードに応じてスキル威力アップ",
				"tags": [],

			},
			"actionSkill1": {
				"name": "ジェット",
				"description": "敵単体に300%ダメージ/自分のスピードに応じてスキル威力アップ",
				"tags": [],
				"coolDown": "Cool Down 3 Turns"

			},
			"actionSkill2": {
				"name": "縦横無尽",
				"description": "自分のクリティカル率を25%アップ(3ターン)/自分のHPが80%以上だと更にスピードを40%アップ/このスキルでCHAIN成功時、自分のスピードを15%アップ(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "熟練のヒーロー 自分のHPが50％以上の時、自分のクリティカル率を25%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "推進力 自分のHPが80％以上の時、自分のスピードを40%アップ",
				"tags": [],

			},
		},
		{
			"id": "1162002",
			"validationStatus": "invalid",
			"epithet": "目にも止まらぬ古豪",
			"name": "グラントリノ",
			"rarity": "sr",
			"type": "abl",
			"plusUltra": {
				"name": "ロケットナックル",
				"description": "敵単体に350%ダメージ/自分のスピードに応じてスキル威力アップ/自分に回避(2回)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "ロケットナックル",
				"description": "敵単体に300%ダメージ/自分のスピードを40%アップ(3ターン)/自分のプルスウルトラゲージを30%アップ",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "高速かく乱",
				"description": "敵単体のスピードを30%ダウン(3ターン)/自分のスピードを40%アップ(3ターン)/自分に回避(2回)を付与",
				"tags": [],
				"coolDown": "Cool Down 6 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "無名の実力者 自分が回避状態の時、自分のパワーを30%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "俺に一発入れてみな 戦闘開始後、自分に回避(3回)を付与/自分のHPが80%以上の時、自分のスピードを30%アップ、自分のスキル威力を30%アップ",
				"tags": [],

			},
		},
		{
			"id": "1162003",
			"validationStatus": "invalid",
			"epithet": "踏みにじるな",
			"name": "グラントリノ",
			"rarity": "sr",
			"type": "dst",
			"plusUltra": {
				"name": "ジェット",
				"description": "敵単体に500%ダメージ/自分が回避状態の時、スキル威力を30%アップ/自分に回避(3回)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "マウンテンジェット",
				"description": "敵単体に300%ダメージ/自分が回避状態の時、スキル威力を30%アップ/自分のスピードがアップしている時、スキル威力を20%アップ",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "緊急回避",
				"description": "自分のパワーを25%アップ(3ターン)/自分のスピードを35%アップ(3ターン)/自分のクリティカル率が20%ダウン(3ターン)/このスキルでCHAIN成功時、自分に回避(1回)を付与(成功時のCHAIN数に応じて回数が最大3回までアップ)",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "おとぼけヒーロー 戦闘開始後、味方全体のスピードを25%アップ(3ターン)、自分のクリティカル率が20%ダウン(3ターン)/クリティカルが発生しなかった時、自分のパワーを5%アップ(最大20回)",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "卓越した技術 自分のクリティカル率がダウンしている時、自分のパワーを30%アップ、スピードを25%アップ/自分が回避状態の時、自分に通常攻撃を2回行う状態を付与",
				"tags": [],

			},
		},
		{
			"id": "1163001",
			"validationStatus": "invalid",
			"epithet": "心身を引き締めろ",
			"name": "ベストジーニスト",
			"rarity": "sr",
			"type": "abl",
			"plusUltra": {
				"name": "矯正拘束",
				"description": "敵単体に400%ダメージ/敵単体のスピードを20%ダウン(3ターン)/敵単体に中 確率 (40%)で拘束(2ターン)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "雁字搦め",
				"description": "敵全体のスピードを25%ダウン(3ターン)/敵全体のアクションスキル威力を15%ダウン(3ターン)/このスキルで2CHAIN以上成功時、拘束状態にする確率を上げる/敵全体に低 確率 (25%)で拘束(1ターン)を付与",
				"tags": [],
				"coolDown": "Cool Down 6 Turns"

			},
			"actionSkill2": {
				"name": "ファイバーカウンター",
				"description": "自分に通常攻撃を受けた上でカウンターする状態(3ターン)を付与/味方全体が受けるダメージを30%カット(2ターン)/自分のクリティカル率を15%アップ(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "エレガントな立ち姿 味方全体の\"プロヒーロー\"が拘束状態になる確率を下げる/自分のHPが50%未満の時、自分のプルスウルトラゲージを20%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "タイトなジーンズで 自分がダメージカット状態の時、自分のクリティカル率を30%アップ/自分が攻撃を3回受けきった後に、自分のアクションスキルのクールタイムを1短縮する",
				"tags": [],

			},
		},
		{
			"id": "1163002",
			"validationStatus": "invalid",
			"epithet": "一縷の希望",
			"name": "ベストジーニスト",
			"rarity": "ur",
			"type": "mnd",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "コレクトシュート 自分に圧倒(3ターン)を付与/敵単体に650%ダメージ/敵単体に高 確率 (75%)で拘束(2ターン)を付与/敵が\"敵\"だったらこのスキルは必中となる",
				"tags": [],

			},
			"actionSkill1": {
				"name": "ハングファイバー",
				"description": "敵単体に400%ダメージ/敵単体に低 確率 (20%)で拘束(2ターン)を付与/敵単体のスピードを35%ダウン(8ターン)/敵が\"破タイプ\"だったらこのスキルは必中となり、拘束状態にする確率を上げる",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "ファイバーカウンター",
				"description": "自分に通常攻撃を無効化した上でカウンターする状態(2ターン)を付与/自分にかばう(1ターン)を付与/自分のスキル威力を25%アップ(8ターン)/自分が受けるダメージを20%カット(8ターン)",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "8年連続受賞の男 味方全体の\"プロヒーロー\"のディフェンスを20%アップ/自分がかばう状態になるたびに、自分のディフェンスを15%アップ(4ターン)",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "ファンからの期待 毎ターン、自分のパワーを5%アップ(5ターン)/2ターン毎に味方全体のスキル威力を10%アップ(5ターン)/自分のHPが30%未満の時、戦闘中に1度だけ自分にくいしばり(1回)を付与",
				"tags": [],

			},
		},
		{
			"id": "1174001",
			"validationStatus": "invalid",
			"epithet": "音速の紙肢",
			"name": "エッジショット",
			"rarity": "ur",
			"type": "mnd",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "忍法千枚通し 敵単体に550%ダメージ/自分のスピードに応じてスキル威力アップ/自分のクリティカル抵抗35%アップ(3ターン)、回避(3回)を付与/自分が身軽の時、このスキルに貫通を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "刺突蹴撃",
				"description": "敵単体に350%ダメージ/自分のスピードに応じてスキル威力アップ/自分のクリティカル抵抗30%アップ(3ターン)/自分が身軽の時、自分に回避(2回)を付与、このスキルに貫通を付与",
				"tags": [],
				"coolDown": "Cool Down 3 Turns"

			},
			"actionSkill2": {
				"name": "疾風穿孔",
				"description": "敵全体に200%ダメージ、クリティカル率35%ダウン(3ターン)/自分のスピードに応じてスキル威力アップ/自分が身軽の時、自分に回避(2回)を付与",
				"tags": [],
				"coolDown": "Cool Down 3 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "忍術使い 自分がクリティカル抵抗アップの時、自分に身軽を付与/自分が回避の時、味方全体のスピード40%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "極めし技 自分が身軽の時、自分のスキル威力40%アップ/自分がクリティカルでない攻撃を3回受けきった時、自分に回避(2回)を付与(最大3回)、敵全体のパワー15%ダウン(3ターン)",
				"tags": [],

			},
		},
		{
			"id": "1176001",
			"validationStatus": "invalid",
			"epithet": "見通す未来",
			"name": "サー・ナイトアイ",
			"rarity": "sr",
			"type": "int",
			"plusUltra": {
				"name": "超質量印",
				"description": "敵単体に450%ダメージ/敵がスピードダウン状態だったらスキル威力が30%アップ",
				"tags": [],

			},
			"actionSkill1": {
				"name": "ヴィジョンカウンター",
				"description": "自分に通常攻撃を無効化した上でカウンターする状態(3ターン)を付与/自分のクリティカル率を30%アップ(3ターン)、自分のスキル威力を25%アップ(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 6 Turns"

			},
			"actionSkill2": {
				"name": "超質量印",
				"description": "敵単体に300%ダメージ/敵単体のクリティカル率を30%ダウン(3ターン)、スピードを15%ダウン(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "予想と分析 自分のHPが50％未満の時、自分に回避(1回)を付与/味方全体の\"プロヒーロー\"のクリティカル威力を25%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "予測を立てて先手を打つ 戦闘開始後、敵全体のスピードを20%ダウン(4ターン)",
				"tags": [],

			},
		},
		{
			"id": "1176002",
			"validationStatus": "invalid",
			"epithet": "強く望む未来",
			"name": "サー・ナイトアイ",
			"rarity": "ur",
			"type": "abl",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "ヴィジョンストライク 敵単体に650%ダメージ/自分に必中(2ターン)を付与/味方全体にバリア(1ヒット)を付与/敵が\"力タイプ\"だったら、このスキルのクリティカル率40%アップ",
				"tags": [],

			},
			"actionSkill1": {
				"name": "超質量印",
				"description": "敵全体に325%ダメージ、スピード30%ダウン(3ターン)、低 確率 (25%)でスタン(2ターン)を付与/味方全体にバリア(1ヒット)を付与",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"actionSkill2": {
				"name": "フォーサイトアタック",
				"description": "敵単体に425%ダメージ、中 確率 (45%)で強化阻害(2ターン)を付与/このスキルでCHAIN成功時、味方全体のクリティカル率30%アップ(3ターン)、状態異常無効(1回)を付与",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "ユーモア第一 味方全体の\"ヒーロー\"のクリティカル率15%アップ/自分のクリティカル攻撃が2回発生しきった時、味方全体の最大HP5%アップ(最大8回)/自分のクリティカル攻撃が5回発生しきった時、味方全体にHP15%自動回復(3ターン)を付与",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "全て見えている 味方全体の\"プロヒーロー\"のクリティカル威力20%アップ/自分のクリティカル攻撃が3回発生しきった時、自分のクールタイム1短縮、状態異常1個回復",
				"tags": [],

			},
		},
		{
			"id": "1179001",
			"validationStatus": "invalid",
			"epithet": "沈ませ屋",
			"name": "ファットガム",
			"rarity": "sr",
			"type": "mnd",
			"plusUltra": {
				"name": "ファットプレス",
				"description": "敵単体に450%ダメージ/敵単体に中 確率 (35%)で拘束(1ターン)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "ファットアタック",
				"description": "敵単体に300%ダメージ/このスキルで2CHAIN以上成功時、拘束状態にする確率を上げる/敵単体に中 確率 (35%)で拘束(1ターン)を付与",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "食いしん坊",
				"description": "自分のHPを35%回復/自分にかばう(2ターン)を付与/自分のディフェンスを10%アップ(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "脂肪吸着 自分がかばう状態の時、自分が受けるダメージを35%カット",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "ええ矛になったわ！！ 自分が攻撃を受けるたびに、自分のパワーを5%アップ(10回まで発動)",
				"tags": [],

			},
		},
		{
			"id": "1180001",
			"validationStatus": "invalid",
			"epithet": "鋭き疾風",
			"name": "ホークス",
			"rarity": "ur",
			"type": "int",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "剛翼乱気流 敵単体に650%ダメージ/自分に回避(1ターン)を付与/敵がスピードダウン状態だったらスキル威力が40%アップ",
				"tags": [],

			},
			"actionSkill1": {
				"name": "剛翼散弾",
				"description": "敵全体に275%ダメージ/味方全体のスピードを25%アップ(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "剛翼剣",
				"description": "敵単体に425%ダメージ/味方単体に通常攻撃を2回行う状態(2ターン)を付与",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "速すぎる男 戦闘開始後、味方全体に回避(1回)を付与/自分のHPが50％以上の時、自分のスピードを25%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "マイペース 自分が回避状態の時、自分のパワーを35%アップ",
				"tags": [],

			},
		},
		{
			"id": "1180002",
			"validationStatus": "invalid",
			"epithet": "速すぎる男",
			"name": "ホークス",
			"rarity": "sr",
			"type": "mnd",
			"plusUltra": {
				"name": "剛翼剣",
				"description": "敵単体に450%ダメージ/自分のスピードに応じてスキル威力アップ",
				"tags": [],

			},
			"actionSkill1": {
				"name": "雨覆羽",
				"description": "味方全体が受けるダメージを30%カット(2ターン)/自分に回避(1回)を付与/味方全体のアクションスキル威力を15%アップ(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"actionSkill2": {
				"name": "剛翼散弾",
				"description": "敵全体に250%ダメージ/味方全体のスピードを25%アップ(3ターン)/味方全体のプルスウルトラ技の威力を15%アップ(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "多芸多才 WAVE開始後、自分に余裕(3ターン)を付与、自分のスピードを30%アップ(3ターン)",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "安寧を願う者 自分以外の味方全体の\"プロヒーロー\"のパワーを25%アップ",
				"tags": [],

			},
		},
		{
			"id": "1180003",
			"validationStatus": "invalid",
			"epithet": "風切る速さで",
			"name": "ホークス",
			"rarity": "sr",
			"type": "dst",
			"plusUltra": {
				"name": "剛翼散弾",
				"description": "敵単体に400%ダメージ/自分のスピードに応じてスキル威力アップ/自分のアクションスキルのクールタイムを2短縮する",
				"tags": [],

			},
			"actionSkill1": {
				"name": "剛翼追撃",
				"description": "敵単体に300%ダメージ/自分に通常攻撃を2回行う状態(4ターン)を付与",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"actionSkill2": {
				"name": "ウィングアシスト",
				"description": "味方単体のプルスウルトラゲージを40%アップ/味方単体のプルスウルトラ技の威力を40%アップ(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "表裏の仮面 味方全体の\"敵連合\"のパワーを25%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "自由にやりたい 自分のHPが50％未満の時、戦闘中に1度だけ味方全体に回避(1回)を付与/戦闘開始後、自分のプルスウルトラゲージを30%アップ",
				"tags": [],

			},
		},
		{
			"id": "1180004",
			"validationStatus": "invalid",
			"epithet": "最速の猛撃",
			"name": "ホークス",
			"rarity": "ur",
			"type": "abl",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "剛翼連斬 敵単体に550%ダメージ/自分のスピードに応じてスキル威力が大きくアップ",
				"tags": [],

			},
			"actionSkill1": {
				"name": "剛翼剣",
				"description": "敵単体に200%ダメージ/自分のスピードに応じてスキル威力アップ",
				"tags": [],
				"coolDown": "Cool Down 3 Turns"

			},
			"actionSkill2": {
				"name": "剛翼追撃",
				"description": "敵単体に400%ダメージ/このスキルで2CHAIN以上成功時、自分のスキル威力を50%アップ(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 3 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "諜報活動 自分の状態異常を防ぐ(2回)/自分のスピードがアップしている時、クリティカル威力を30%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "神速の翼 自分のスピードがアップしている時、自分のスキル威力を45％アップ/自分のスピードがダウンしている時、自分のディフェンスを15%ダウン",
				"tags": [],

			},
		},
		{
			"id": "1180005",
			"validationStatus": "invalid",
			"epithet": "苦渋の選択",
			"name": "ホークス",
			"rarity": "ur",
			"type": "str",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "剛翼重奏 敵単体に750%ダメージ/自分のアクションスキル威力を30%アップ(3ターン)/自分のディフェンスがダウンしている時、自分に貫通(3ターン)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "剛翼散弾",
				"description": "敵全体に325%ダメージ/敵全体のパワーを25%ダウン(3ターン)/自分のディフェンスが10%ダウン(4ターン)",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "剛翼追撃",
				"description": "敵単体に475%ダメージ/自分のプルスウルトラゲージを25%アップ/自分のディフェンスがダウンしている時、スキル威力を50%アップ",
				"tags": [],
				"coolDown": "Cool Down 3 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "飛躍 自分のディフェンスがダウンしている時、自分のアクションスキル威力を60%アップ/自分が攻撃を3回受けきった後に、自分に回避(1回)を付与(最大3回)",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "内なる正義 自分のアクションスキルのクールタイムを1短縮する(3ターン毎)(最大2回)/自分のディフェンスがダウンしている時、自分のパワーを35%アップ",
				"tags": [],

			},
		},
		{
			"id": "1180007",
			"validationStatus": "invalid",
			"epithet": "剛翼と猛炎",
			"name": "ホークス",
			"rarity": "ur",
			"type": "mnd",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "剛翼熱拳 敵単体に500%ダメージ、高 確率 (75%)で燃焼(4ターン)を付与/敵単体のクールタイム1延長※アリーナ、サークル祭限定効果/自分のスピードに応じてスキル威力大幅アップ/敵が燃焼だったら、このスキルに貫通を付与、スキル威力30%アップ",
				"tags": [],

			},
			"actionSkill1": {
				"name": "雨覆羽",
				"description": "味方全体のプルスウルトラ技威力25%アップ(3ターン)、スピード25%アップ(3ターン)/味方全体の\"プロヒーロー\"のプルスウルトラゲージ30%アップ、身軽(3ターン)を付与/このスキルでCHAIN成功時、ターゲットを無視してランダムな敵単体にクールタイム2増加(2ターン)を付与※アリーナ、サークル祭限定効果",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "剛翼散弾",
				"description": "敵全体に250%ダメージ/自分のスピードに応じてスキル威力アップ/このスキルで2CHAIN以上成功時、敵全体の一時的な状態異常無効全て解除、低 確率 (30%)で回復阻害(3ターン)を付与",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "新たなNo.2 味方全体の\"プロヒーロー\"のプルスウルトラ技威力25%アップ、回避(1回)を付与(最大1回)/自分がスピードアップの時、自分のスキル威力25%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "No.1を支える者 自分以外の味方全体の\"プロヒーロー\"の最大HP20%アップ、スピード20%アップ(3ターン)(最大1回)、ダメージ20%カット(3ターン)(最大1回)/自分が燃焼の相手から攻撃を2回受けきった時、ターゲットを無視してランダムな敵単体にクールタイム2増加(3ターン)を付与(最大3回)※アリーナ、サークル祭限定効果",
				"tags": [],

			},
		},
		{
			"id": "1181001",
			"validationStatus": "invalid",
			"epithet": "果てなき悪意",
			"name": "死柄木弔",
			"rarity": "ur",
			"type": "dst",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "真空崩壊 敵単体に700%ダメージ/敵が\"プロヒーロー\"だったらスキル威力が50%アップ",
				"tags": [],

			},
			"actionSkill1": {
				"name": "崩落",
				"description": "敵単体に400%ダメージ/敵が\"プロヒーロー\"だったら中 確率 (45%)で恐怖(2ターン)を付与/敵がパワーダウン状態だったらスキル威力が20%アップ",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "壊死",
				"description": "敵単体に400%ダメージ/敵が\"プロヒーロー\"だったら更にパワーを30%ダウン(3ターン)、ディフェンスを10%ダウン(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "ヴィラン連合リーダー 味方全体の\"敵連合\"のパワーを30%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "混沌の後継者 自分のHPが50％以上の時、自分のスキル威力を50%アップ",
				"tags": [],

			},
		},
		{
			"id": "1181002",
			"validationStatus": "invalid",
			"epithet": "崩壊の始まり",
			"name": "死柄木弔",
			"rarity": "sr",
			"type": "abl",
			"plusUltra": {
				"name": "破砕",
				"description": "敵単体に500%ダメージ/敵単体に中 確率 (50%)で恐怖(2ターン)を付与/敵が\"力タイプ\"だったら恐怖状態にする確率を上げる",
				"tags": [],

			},
			"actionSkill1": {
				"name": "崩落",
				"description": "敵単体に300%ダメージ/敵単体に中 確率 (35%)で恐怖(2ターン)を付与/敵が\"力タイプ\"だったら恐怖状態にする確率を上げる",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"actionSkill2": {
				"name": "ゲームオーバーだ",
				"description": "敵単体のディフェンスを25%ダウン(3ターン)/敵単体のクリティカル率を35%ダウン(3ターン)/このスキルで2CHAIN以上成功時、自分のプルスウルトラゲージを15%アップ",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "恐怖のシンボル 味方全体の\"敵連合\"のクリティカル率を20%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "無尽蔵に噴き出す怒り 自分のHPが50％未満の時、戦闘中に1度だけ自分のプルスウルトラゲージを50%アップ",
				"tags": [],

			},
		},
		{
			"id": "1181003",
			"validationStatus": "invalid",
			"epithet": "覚醒の解放",
			"name": "死柄木弔",
			"rarity": "ur",
			"type": "str",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "崩壊伝播 敵単体に650%ダメージ/敵全体に200%ダメージ/与えたダメージの一定量を自分も受ける/自分にくいしばり(1回)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "壊死",
				"description": "敵単体に400%ダメージ/敵単体のディフェンスを25%ダウン(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "壊覚",
				"description": "自分のプルスウルトラゲージを60%アップ/自分に回避(1ターン)を付与/自分のスピードを15%アップ(5ターン)",
				"tags": [],
				"coolDown": "Cool Down 7 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "最高に気分が悪い 自分のHPが50％未満の時、自分のスキル威力を60%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "ただ壊すだけ WAVE開始後、自分に高揚(3ターン)を付与/自分のHPが50％以上の時、自分のパワーを35%アップ",
				"tags": [],

			},
		},
		{
			"id": "1181004",
			"validationStatus": "invalid",
			"epithet": "全てを手中に",
			"name": "死柄木弔",
			"rarity": "sr",
			"type": "str",
			"plusUltra": {
				"name": "壊死",
				"description": "敵単体に500%ダメージ/敵単体に中 確率 (40%)で恐怖(2ターン)を付与/自分に回避(1回)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "瓦解",
				"description": "敵全体に250%ダメージ/敵全体に低 確率 (20%)で恐怖(2ターン)を付与/このスキルでCHAIN成功時、自分のプルスウルトラゲージを40%アップ",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"actionSkill2": {
				"name": "破壊衝動",
				"description": "自分のクリティカル率を35%アップ(3ターン)/敵全体のスキル威力を25%ダウン(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "プレイヤーであるべき 自分のHPが50%以上の時、自分のクリティカル率を40%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "社会のごみめ クリティカルが発生するたびに、自分の恐怖状態を付与する確率を上げる(最大10回)/戦闘開始後、自分のプルスウルトラゲージを30%アップ",
				"tags": [],

			},
		},
		{
			"id": "1181005",
			"validationStatus": "invalid",
			"epithet": "滅びの手",
			"name": "死柄木弔",
			"rarity": "ur",
			"type": "mnd",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "崩壊伝播“刹那” 敵単体に700%ダメージ、高 確率 (70%)で恐怖(2ターン)を付与/自分が状態異常無効の時、このスキルに貫通を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "破砕",
				"description": "敵単体に375%ダメージ、中 確率 (40%)で恐怖(2ターン)を付与/敵単体のディフェンスを30%ダウン(3ターン)※この効果は状態異常無効で防げず、解除もできない",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "瓦解",
				"description": "敵全体に300%ダメージ、スキル威力を35%ダウン(3ターン)、一時的な強化を1個解除",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "無慈悲 自分にHP10%自動回復(2ターン)を付与(最大1回)/3ターン毎に、自分にHP10%自動回復(2ターン)を付与/自分がHP自動回復の時、自分のパワーを40%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "偶像破壊 自分に状態異常無効(1回)を付与(最大1回)、回避(1回)を付与(最大1回)/3ターン毎に、自分に状態異常無効(1回)を付与、回避(1回)を付与/自分が状態異常無効の時、自分のスキル威力を40%アップ",
				"tags": [],

			},
		},
		{
			"id": "1182001",
			"validationStatus": "invalid",
			"epithet": "闇に侍りて",
			"name": "黒霧",
			"rarity": "sr",
			"type": "int",
			"plusUltra": {
				"name": "ワープゲート",
				"description": "敵単体に450%ダメージ/自分に回避(1ターン)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "ワープゲート",
				"description": "敵単体に300%ダメージ/自分に回避(1回)を付与",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "強制ワープゲート",
				"description": "味方単体のクールタイムを2短縮する/味方単体に回避(1回)を付与/このスキルでCHAIN成功時、敵単体のスピードを30%ダウン(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 6 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "ヴィラン連合参謀 味方全体の\"敵連合\"の最大HPを20%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "転送 自分が回避状態の時、自分のスピードを35%アップ",
				"tags": [],

			},
		},
		{
			"id": "1183001",
			"validationStatus": "invalid",
			"epithet": "正しき社会の為に",
			"name": "ステイン",
			"rarity": "sr",
			"type": "dst",
			"plusUltra": {
				"name": "粛清の刃",
				"description": "敵単体に500%ダメージ/敵単体に低 確率 (30%)で出血(3ターン)を付与/敵単体に低 確率 (30%)で恐怖(2ターン)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "贋物の粛清",
				"description": "敵単体に300%ダメージ/敵単体に低 確率 (20%)で拘束(1ターン)を付与/敵が出血状態だったら拘束状態にする確率を上げる",
				"tags": [],
				"coolDown": "Cool Down 3 Turns"

			},
			"actionSkill2": {
				"name": "全ては正しき社会の為",
				"description": "自分のパワーを50%アップ(3ターン)/自分のクリティカル率を40%アップ(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "ヒーロー殺し クリティカル発生時、自分のパワーを20%アップ(3ターン)",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "歪んだ正義 自分のHPが50％未満の時、自分のクリティカル率を30%アップ",
				"tags": [],

			},
		},
		{
			"id": "1185001",
			"validationStatus": "invalid",
			"epithet": "破滅の業火",
			"name": "荼毘",
			"rarity": "sr",
			"type": "abl",
			"plusUltra": {
				"name": "粛清ノ蒼",
				"description": "敵単体に500%ダメージ/敵単体に高 確率 (80%)で燃焼(3ターン)を付与/自分に高 確率 (90%)で燃焼(3ターン)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "断罪ノ蒼",
				"description": "敵単体に350%ダメージ/敵単体に中 確率 (55%)で燃焼(3ターン)を付与/自分に中 確率 (55%)で燃焼(3ターン)を付与",
				"tags": [],
				"coolDown": "Cool Down 3 Turns"

			},
			"actionSkill2": {
				"name": "俺の薪となれ",
				"description": "自分のプルスウルトラゲージを40%アップ/自分の状態異常を1つ回復/自分のプルスウルトラ技の威力を25%アップ(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "ヒーロー殺しの意志 WAVE開始後、自分のクリティカル率を25%アップ(3ターン)",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "地に堕とせ 自分が燃焼状態の時、自分のパワーを35%アップ",
				"tags": [],

			},
		},
		{
			"id": "1185002",
			"validationStatus": "invalid",
			"epithet": "蒼炎の使い手",
			"name": "荼毘",
			"rarity": "sr",
			"type": "int",
			"plusUltra": {
				"name": "断罪ノ蒼",
				"description": "敵単体に500%ダメージ/敵が\"プロヒーロー\"だったらスキル威力が40%アップ/敵単体に中 確率 (40%)で燃焼(3ターン)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "堕落ノ蒼",
				"description": "敵全体に300%ダメージ/敵全体に中 確率 (45%)で燃焼(3ターン)を付与/自分に高 確率 (75%)で燃焼(3ターン)を付与",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"actionSkill2": {
				"name": "粛清ノ蒼",
				"description": "敵全体に250%ダメージ/敵全体に低 確率 (20%)で燃焼(3ターン)を付与/敵に\"プロヒーロー\"がいたら、燃焼状態にする確率を上げる",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "身を焦がす炎 自分が燃焼状態の時、自分のスキル威力を45％アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "冷酷無比 自分のHPが50％以上の時、自分のスキル威力を30％アップ/自分のHPが50％未満の時、戦闘中に1度だけ自分のアクションスキルのクールタイムを2短縮する",
				"tags": [],

			},
		},
		{
			"id": "1185003",
			"validationStatus": "invalid",
			"epithet": "全てを焼き尽くせ",
			"name": "荼毘",
			"rarity": "ur",
			"type": "dst",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "蒼炎ノ惨禍 敵単体に700%ダメージ/敵単体に高 確率 (70%)で燃焼(3ターン)を付与/自分に高 確率 (90%)で燃焼(3ターン)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "堕落ノ蒼",
				"description": "敵全体に275%ダメージ/敵全体に高 確率 (90%)で業火を付与/敵全体に中 確率 (40%)で燃焼(4ターン)を付与/自分に高 確率 (90%)で燃焼(3ターン)を付与",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "断罪ノ蒼",
				"description": "敵全体に300%ダメージ/敵全体のパワーを15%ダウン(3ターン)/敵全体に中 確率 (50%)で燃焼(4ターン)を付与/自分に高 確率 (90%)で燃焼(3ターン)を付与",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "不遜の双眸 自分が燃焼状態の時、自分のクリティカル率を20%アップ/戦闘開始後、自分のプルスウルトラゲージを30%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "秘密主義 自分が燃焼状態の時、自分のスキル威力を50%アップ/自分の燃焼のダメージを70%軽減",
				"tags": [],

			},
		},
		{
			"id": "1185004",
			"validationStatus": "invalid",
			"epithet": "極まる怨恨",
			"name": "荼毘",
			"rarity": "sr",
			"type": "str",
			"plusUltra": {
				"name": "堕落ノ蒼",
				"description": "敵単体に500%ダメージ/敵が燃焼状態だったら、自分のアクションスキルのクールタイムを1短縮する/自分に高 確率 (90%)で燃焼(3ターン)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "焔螺",
				"description": "敵全体に300%ダメージ/燃焼状態の敵がいたら、このスキルのクリティカル率を40%アップ/敵全体に低 確率 (30%)で燃焼(3ターン)を付与",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"actionSkill2": {
				"name": "粛清ノ蒼",
				"description": "敵単体に325%ダメージ/敵単体に高 確率 (65%)で燃焼(3ターン)を付与/自分に高 確率 (80%)で燃焼(3ターン)を付与",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "皮肉屋 敵味方全体が燃焼状態になる確率を上げる/自分が燃焼状態の時、自分のアクションスキル威力を50%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "悪いのはクズ共だ 戦闘開始後、味方全体の\"敵連合\"のプルスウルトラゲージを25%アップ/自分の燃焼のダメージを30%軽減",
				"tags": [],

			},
		},
		{
			"id": "1185005",
			"validationStatus": "invalid",
			"epithet": "地獄の蒼い炎",
			"name": "荼毘",
			"rarity": "ur",
			"type": "mnd",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "赫灼熱拳プロミネンスバーン 敵全体に500%ダメージ/敵全体に高 確率 (90%)で業火を付与/自分が燃焼状態の時、このスキルに貫通を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "焔螺",
				"description": "敵単体に400%ダメージ/自分のクリティカル率を30%アップ(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 3 Turns"

			},
			"actionSkill2": {
				"name": "堕落ノ蒼",
				"description": "敵全体に300%ダメージ/敵全体に高 確率 (90%)で業火を付与",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "シニカルな笑み 自分のスキル威力を10%アップ(毎ターン)(最大5回)/燃焼状態の相手から攻撃を受けきった後に、自分のプルスウルトラゲージを10%アップ/敵全体に燃焼(3ターン)を付与(毎ターン)/自分に燃焼(1ターン)を付与(毎ターン)※この効果は状態異常無効で防げず、解除もできない",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "大胆な采配 自分が燃焼状態の時、味方全体が氷結、凍傷状態になる確率を下げ、味方全体の燃焼のダメージを20%軽減、敵全体のスピードを30%ダウン",
				"tags": [],

			},
		},
		{
			"id": "1186001",
			"validationStatus": "invalid",
			"epithet": "閃く刃の先",
			"name": "トガヒミコ",
			"rarity": "sr",
			"type": "abl",
			"plusUltra": {
				"name": "刺すね！",
				"description": "敵単体に450%ダメージ/敵単体に中 確率 (60%)で出血(3ターン)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "撃つね！",
				"description": "敵単体に300%ダメージ/敵単体のディフェンスを25%ダウン(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "恋バナ",
				"description": "自分のスピードを50%アップ(3ターン)/自分のクリティカル率を40%アップ(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "猟奇的思考 自分で敵を倒すたび、自分のクリティカル率を10%アップ/自分のHPが50％未満の時、自分のスピードを35%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "鮮血の乙女 クリティカル発生時、自分のスキル威力を35%アップ(3ターン)",
				"tags": [],

			},
		},
		{
			"id": "1186002",
			"validationStatus": "invalid",
			"epithet": "私の標的",
			"name": "トガヒミコ",
			"rarity": "ur",
			"type": "abl",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "ナイフダンス 敵単体に600%ダメージ/敵単体に高 確率 (80%)で出血(3ターン)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "刺すね！",
				"description": "敵単体に400%ダメージ/敵単体に高 確率 (70%)で出血(3ターン)を付与/敵が出血状態だったら、自分のプルスウルトラゲージが20%アップ",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "自分らしく",
				"description": "自分のプルスウルトラゲージを60%アップ/自分のクリティカル率を30%アップ(4ターン)/自分のプルスウルトラ技の威力を20%アップ(4ターン)",
				"tags": [],
				"coolDown": "Cool Down 6 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "生きやすい世の中に 戦闘開始後、自分のプルスウルトラゲージを30％アップ/WAVE開始後、自分のスキル威力を50%アップ(3ターン)",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "血と憧れ 自分のHPが50％未満の時、自分に高揚(3ターン)を付与、自分のスキル威力を50%アップ",
				"tags": [],

			},
		},
		{
			"id": "1186003",
			"validationStatus": "invalid",
			"epithet": "恋の血",
			"name": "トガヒミコ",
			"rarity": "ur",
			"type": "int",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "私もあなたみたいに 敵単体に650%ダメージ/自分のクリティカル率を35%アップ(3ターン)/自分に回避(1回)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "撃つね！",
				"description": "敵単体に350%ダメージ/敵単体のディフェンスを10%ダウン(3ターン)、中 確率 (40%)で出血(3ターン)を付与/このスキルでCHAIN成功時、出血状態にする確率を上げる",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"actionSkill2": {
				"name": "刺すね！",
				"description": "敵単体に400%ダメージ/敵が\"雄英高校1年A組\"だったらスキル威力が50%アップ/敵単体に中 確率 (40%)で出血(3ターン)を付与",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "気に入らないのは壊す 自分のHPが50％未満の時、自分のスキル威力を20%アップ/自分が回避状態の時、自分のスピードを30%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "普通に生きる チームに\"雄英高校1年A組\"がいれば自分のスキル威力を40％アップ/自分のHPが50％以上の時、自分のパワーを20%アップ",
				"tags": [],

			},
		},
		{
			"id": "1186005",
			"validationStatus": "invalid",
			"epithet": "恋して生きて",
			"name": "トガヒミコ",
			"rarity": "ur",
			"type": "mnd",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "切り裂く恋心 敵単体に475%ダメージ、ディフェンス20%ダウン(3ターン)、高 確率 (60%)で出血(5ターン)を付与/敵の最大HP10%分ダメージアップ(最大30000)/敵が出血の時、このスキルのクリティカル率50%アップ、必中を付与、敵単体に中 確率 (70%)で回復阻害(3ターン)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "ナイフカーニバル",
				"description": "敵全体に300%ダメージ、クリティカル率40%ダウン(3ターン)、低 確率 (25%)で回復阻害(3ターン)を付与、中 確率 (40%)で出血(3ターン)を付与/このスキルに必中を付与",
				"tags": [],
				"coolDown": "Cool Down 6 Turns"

			},
			"actionSkill2": {
				"name": "トキメク気持ち",
				"description": "敵単体に375%ダメージ、中 確率 (45%)で回復阻害(3ターン)を付与、高 確率 (65%)で出血(3ターン)を付与/敵の最大HP5%分ダメージアップ(最大15000)/敵が出血の時、このスキルのクリティカル率45%アップ",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "純粋暗殺者 味方全体の\"信タイプ\"のクリティカル威力25%アップ/味方全体の\"敵\"のディフェンス20%アップ/味方が1人戦闘不能になった時、自分に回避(2回)を付与(最大2回)",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "躊躇なき凶行 自分の出血命中率アップ(3ターン)(最大1回)/自分のスキルでCHAIN成功時、自分のクリティカル率30%アップ(3ターン)/自分のスキルで2CHAIN以上成功時、自分のプルスウルトラゲージ15%アップ、敵全体のクリティカル率25%ダウン(3ターン)",
				"tags": [],

			},
		},
		{
			"id": "1187001",
			"validationStatus": "invalid",
			"epithet": "増強する賊心",
			"name": "マスキュラー",
			"rarity": "sr",
			"type": "str",
			"plusUltra": {
				"name": "血を見せろ！",
				"description": "敵単体に450%ダメージ/敵単体に低 確率 (30%)で出血(3ターン)を付与/自分のパワーを40%アップ(3ターン)",
				"tags": [],

			},
			"actionSkill1": {
				"name": "潰れちまえ！",
				"description": "敵単体に300%ダメージ/自分のパワーを45%アップ(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "一杯やらせろよ",
				"description": "自分に挑発(2ターン)を付与/自分が受けるダメージを40%カット(2ターン)",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "バトルマニア 戦闘開始後、自分にバリア(2ヒット)を付与/自分がクリティカル攻撃を受けるたび、自分のクリティカル率を7％アップ(5回まで発動)",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "血狂い 攻撃を受けるたび、自分のパワーを7%アップ(5回まで発動)",
				"tags": [],

			},
		},
		{
			"id": "1190001",
			"validationStatus": "invalid",
			"epithet": "乗り越えたトラウマ",
			"name": "トゥワイス",
			"rarity": "sr",
			"type": "dst",
			"plusUltra": {
				"name": "「二倍」の恐怖",
				"description": "\"個性\"敵単体に300%ダメージ/敵がパワーダウン状態だったらスキル威力が100%アップ/自分にバリア(1ヒット)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "メジャーウィップ",
				"description": "敵単体に300%ダメージ/敵単体のパワーを25%ダウン(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "\"個性\"「二倍」の恐怖",
				"description": "中 確率 (50%)でスキル威力が100%アップ(1ターン)/敵単体に250%ダメージ",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "精密なイメージ 味方全体の\"破タイプ\"キャラの最大HPを20%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "皆殺しの時間 味方全体の\"敵連合\"のスピードを25%アップ",
				"tags": [],

			},
		},
		{
			"id": "1190002",
			"validationStatus": "invalid",
			"epithet": "同志を想う心",
			"name": "トゥワイス",
			"rarity": "ur",
			"type": "abl",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "サッドマンズパレード 敵単体に700%ダメージ/自分が高揚状態の時、自分の最大HPを30%アップ(3ターン)",
				"tags": [],

			},
			"actionSkill1": {
				"name": "メジャーウィップ",
				"description": "敵単体に350%ダメージ/敵単体のディフェンスを20%ダウン(3ターン)/自分に高揚状態を付与(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"actionSkill2": {
				"name": "\"個性\"「二倍」の恐怖",
				"description": "敵単体に400%ダメージ/自分にかばう状態を付与(3ターン)/自分が高揚状態でない時、自分が受けるダメージを30%カット(3ターン)/自分が高揚状態の時、自分が受けるダメージを30%カット(4ターン)",
				"tags": [],
				"coolDown": "Cool Down 6 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "表裏一体 味方全体の\"敵\"キャラの最大HPを25%アップ/自分がかばう状態の時、自分のクリティカル率を30%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "驚異的な“個性” 自分のHPが30%未満になった時、戦闘中に1度だけ自分のパワーを30%アップ、自分のHPを100%回復",
				"tags": [],

			},
		},
		{
			"id": "1190003",
			"validationStatus": "invalid",
			"epithet": "決死の突撃",
			"name": "トゥワイス",
			"rarity": "sr",
			"type": "mnd",
			"plusUltra": {
				"name": "メジャーウィップ",
				"description": "敵単体に500%ダメージ/自分にくいしばり(2回)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "トゥワイスローイング",
				"description": "敵単体に300%ダメージ/自分にバリア(1ヒット)を付与/自分にかばう(1ターン)を付与",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "複製",
				"description": "味方全体の\"敵連合\"のプルスウルトラゲージを30%アップ/自分のHPを30%回復",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "見つけた居場所 自分のHPが30%未満の時、戦闘中に1度だけ自分のプルスウルトラゲージを100%アップ/チームに\"トガヒミコ\"がいれば、味方全体のクリティカル率を15%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "連合の幸せの為に チームに\"死柄木弔\"がいれば、味方全体のパワーを10%アップ/チームに\"荼毘\"がいれば、味方全体のスキル威力を20%アップ",
				"tags": [],

			},
		},
		{
			"id": "1191001",
			"validationStatus": "invalid",
			"epithet": "飄々と欺く",
			"name": "Mr.コンプレス",
			"rarity": "sr",
			"type": "dst",
			"plusUltra": {
				"name": "ステッキマジック",
				"description": "敵単体に500%ダメージ/敵単体に低 確率 (30%)で拘束(2ターン)を付与/自分のアクションスキルのクールタイムを1短縮する",
				"tags": [],

			},
			"actionSkill1": {
				"name": "ステッキマジック",
				"description": "敵単体に350%ダメージ/敵単体に低 確率 (20%)で拘束(1ターン)を付与/自分のクリティカル率を20%アップ(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "リリースイリュージョン",
				"description": "敵全体に300%ダメージ/敵全体のパワーを30%ダウン(3ターン)/自分以外の味方全体に回避(1回)を付与",
				"tags": [],
				"coolDown": "Cool Down 7 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "稀代のマジシャン WAVE開始後、自分のクリティカル率を30%アップ(3ターン)/クリティカル発生時、自分の拘束状態を付与する確率を上げる(最大5回)",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "飄々たる性格 WAVE開始後、自分のスピードを30%アップ(3ターン)/自分のHPが30%未満の時、敵全体のスキル威力を20%ダウン(3ターン)",
				"tags": [],

			},
		},
		{
			"id": "1191002",
			"validationStatus": "invalid",
			"epithet": "一世一代",
			"name": "Mr.コンプレス",
			"rarity": "ur",
			"type": "int",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "ロックマジック 敵単体に600%ダメージ、高 確率 (70%)で拘束(2ターン)を付与/味方全体のアクションスキルのクールタイムを1短縮",
				"tags": [],

			},
			"actionSkill1": {
				"name": "リリースイリュージョン",
				"description": "敵全体に275%ダメージ、ディフェンスを30%ダウン(3ターン)、低 確率 (30%)で拘束(2ターン)を付与",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"actionSkill2": {
				"name": "ストック作成",
				"description": "味方単体に隠れる(2ターン)を付与、HP20%自動回復(2ターン)を付与/味方全体が受けるダメージを30%カット(2ターン)",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "マッドイリュージョニスト 敵全体の\"ヒーロー\"のスピードを20%ダウン/自分のスキルで2CHAIN以上成功時、敵全体のスキル威力を20%ダウン(3ターン)、クリティカル率を20%ダウン(3ターン)",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "タネも仕掛けもございやせん 自分のスキルで2CHAIN以上成功時、味方全体のプルスウルトラゲージを20%アップ、ディフェンスを20%アップ(3ターン)",
				"tags": [],

			},
		},
		{
			"id": "1194001",
			"validationStatus": "invalid",
			"epithet": "悪の支配者",
			"name": "オール・フォー・ワン",
			"rarity": "ur",
			"type": "dst",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "君を殴る 敵単体に700%ダメージ/自分のアクションスキルのクールタイムを5短縮する",
				"tags": [],

			},
			"actionSkill1": {
				"name": "黒爪",
				"description": "敵単体に400%ダメージ/自分以外の味方単体のクールタイムを1短縮/自分のプルスウルトラゲージを20%アップ",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"actionSkill2": {
				"name": "空気砲",
				"description": "敵全体に275%ダメージ/敵全体のスキル威力を30%ダウン(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 6 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "カリスマ 自分のHPが50％以上の時、自分のパワーを35%アップ/自分を除く味方全体の\"敵連合\"のクリティカル率を15％アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "巨悪の権化 自分のHPが50％未満の時、自分のスキル威力を60%アップ",
				"tags": [],

			},
		},
		{
			"id": "1194002",
			"validationStatus": "invalid",
			"epithet": "平和の破壊者",
			"name": "オール・フォー・ワン",
			"rarity": "ur",
			"type": "str",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "圧空乱突爪 敵単体の一時的な強化を全て解除/敵単体に600%ダメージ/敵単体のディフェンスを20%ダウン(3ターン)",
				"tags": [],

			},
			"actionSkill1": {
				"name": "黒爪",
				"description": "敵単体の一時的な強化を2つ解除する/敵単体に375%ダメージ",
				"tags": [],
				"coolDown": "Cool Down 3 Turns"

			},
			"actionSkill2": {
				"name": "“個性”掛け合わせ",
				"description": "自分の最大HPがアップしている時、自分にHP10%自動回復(3ターン)を付与/自分のスピードがアップしている時、自分のプルスウルトラゲージを40%アップ/自分のパワーがアップしている時、味方全体のアクションスキルの威力を25%アップ(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 6 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "全ては君のために 敵全体の\"プロヒーロー\"のパワーを20%ダウン/自分以外の味方全体のアクションスキルのクールタイムを1短縮する(2ターン毎)(最大3回)",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "悪の支配者 味方全体の\"敵\"のスキル威力を30%アップ",
				"tags": [],

			},
		},
		{
			"id": "1195001",
			"validationStatus": "invalid",
			"epithet": "消えぬ本懐",
			"name": "オーバーホール",
			"rarity": "ur",
			"type": "str",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "世界変革の時 敵単体に700%ダメージ/敵が\"ヒーロー\"だったらスキル威力が40%アップ",
				"tags": [],

			},
			"actionSkill1": {
				"name": "強制分解",
				"description": "敵単体に400%ダメージ/敵単体に中 確率 (40%)で恐怖(2ターン)を付与/敵単体のディフェンスを20%ダウン(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 6 Turns"

			},
			"actionSkill2": {
				"name": "地形分解",
				"description": "敵全体に275%ダメージ/敵全体に中 確率 (35%)で出血(3ターン)を付与/敵全体のパワーを10%ダウン(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "潔癖症 自分のHPが80％以上の時、自分のスキル威力を50％アップ/WAVE開始後、味方全体にHP20%自動回復(3ターン)を付与",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "破壊と再生 自分のHPが30％未満の時、戦闘中に1度だけ自分にHP100％自動回復(1ターン)を付与/自分のHPが30％未満の時、戦闘中に1度だけ自分のアクションスキルのクールタイムを3短縮する",
				"tags": [],

			},

		},
		{
			"id": "1208001",
			"validationStatus": "invalid",
			"epithet": "偉業への執念",
			"name": "ジェントル・クリミナル",
			"rarity": "ur",
			"type": "int",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "ジェントリーフルスピード 敵単体に500%ダメージ/自分のスピードに応じてスキル威力が大きくアップ/自分が弾性状態の時、このスキルは必中となる/自分に回避(1回)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "ジェントリーサンドイッチ",
				"description": "敵単体に350%ダメージ/敵単体に低 確率 (30%)で拘束(1ターン)を付与/自分が弾性状態の時、拘束状態にする確率を上げる",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "ジェントリートランポリン",
				"description": "敵単体に350%ダメージ/自分のプルスウルトラゲージを30%アップ",
				"tags": [],
				"coolDown": "Cool Down 3 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "義賊の紳士 戦闘開始後、自分に弾性(2ターン)を付与し、さらに3ターン毎に自分に弾性(3ターン)を付与/自分が弾性状態になるたびに、自分のスピードを10%アップ(最大3回)",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "快傑浪漫 自分が弾性状態の時、自分のスピードを30%アップ/自分が弾性状態になるたびに、自分に回避(1回)を付与(最大3回)",
				"tags": [],

			},

		},
		{
			"id": "1210001",
			"validationStatus": "invalid",
			"epithet": "風を統べる熱血漢",
			"name": "夜嵐イナサ",
			"rarity": "sr",
			"type": "str",
			"plusUltra": {
				"name": "山嵐",
				"description": "敵単体に500%ダメージ/敵が燃焼状態だったらスキル威力が30%アップ/敵単体に中 確率 (40%)で出血(3ターン)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "竜旋風",
				"description": "敵全体に250%ダメージ/敵全体のスピードを25%ダウン(3ターン)/敵全体に低 確率 (15%)で出血(3ターン)を付与",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "熱血",
				"description": "自分のパワーを50%アップ(3ターン)/このスキルでCHAIN成功時、味方全体のスピードを30%アップ(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "西の士傑 戦闘開始後、自分のプルスウルトラゲージを30％アップ/自分のスピードがアップしている時、自分のパワーを20％アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "体育会系 自分のHPが50％未満の時、自分のスキル威力を40%アップ、自分に高揚(3ターン)を付与",
				"tags": [],

			},

		},
		{
			"id": "1210002",
			"validationStatus": "invalid",
			"epithet": "滾る想い",
			"name": "夜嵐イナサ",
			"rarity": "ur",
			"type": "dst",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "荒天嵐舞 敵単体に550%ダメージ/自分のスピードに応じてスキル威力をアップ/敵単体に中 確率 (40%)で出血(3ターン)を付与/味方全体に回避(1回)を付与",
				"tags": [],

			},
			"actionSkill1": {
				"name": "山嵐",
				"description": "敵単体に400%ダメージ/自分のスピードを30%アップ(3ターン)/自分に回避(1回)を付与",
				"tags": [],
				"coolDown": "Cool Down 3 Turns"

			},
			"actionSkill2": {
				"name": "竜旋風",
				"description": "敵全体に250%ダメージ/自分のスピードに応じてスキル威力をアップ/敵全体に低 確率 (20%)で出血(3ターン)を付与",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "豪快 自分のHPが50%以上の時、自分に高揚を付与/自分が高揚の時、自分のスピードを30%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "素直な心 自分が高揚の時、自分のディフェンスを30%アップ、出血を付与する確率を上げる",
				"tags": [],

			},

		},
		{
			"id": "1211001",
			"validationStatus": "invalid",
			"epithet": "責務と矜持",
			"name": "肉倉精児",
			"rarity": "sr",
			"type": "dst",
			"plusUltra": {
				"name": "是非もなし",
				"description": "敵単体に500%ダメージ/敵単体に中 確率 (40%)で肉塊(2ターン)を付与/自分のアクションスキルのクールタイムを1短縮",
				"tags": [],

			},
			"actionSkill1": {
				"name": "情けなし",
				"description": "敵全体に250%ダメージ/敵全体に低 確率 (30%)で肉塊(1ターン)を付与/自分が攻撃を受けると敵に肉塊を付与する時、スキル威力を30%アップ",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"actionSkill2": {
				"name": "肉体変化",
				"description": "3ターンの間、自分が攻撃を受けると敵に中確率で肉塊(2ターン)を付与/このスキルでCHAIN成功時、自分のプルスウルトラゲージを40%アップ/このスキルで2CHAIN以上成功時、味方全体のクリティカル率を20%アップ(3ターン)",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "エゴイスト 敵全体の\"雄英高校生徒\"のスピードを30%ダウン/自分のHPが50%未満の時、戦闘中に1度だけ自分が受けるダメージを30%カット(2ターン)",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "示威である 自分が攻撃を受けると敵に肉塊を付与する時、味方全体のスキル威力を25%アップ、クリティカル率を10%アップ",
				"tags": [],

			},

		},
		{
			"id": "1212001",
			"validationStatus": "invalid",
			"epithet": "艶めくミラージュ",
			"name": "現見ケミィ",
			"rarity": "sr",
			"type": "dst",
			"plusUltra": {
				"name": "マボロシキック",
				"description": "敵単体に500%ダメージ/敵単体に高 確率 (70%)で魅了(3ターン)を付与/敵単体のスキル威力を20%ダウン(3ターン)",
				"tags": [],

			},
			"actionSkill1": {
				"name": "マジ驚嘆",
				"description": "敵全体に中 確率 (40%)で魅了(3ターン)を付与/味方全体のプルスウルトラゲージを30%アップ",
				"tags": [],
				"coolDown": "Cool Down 5 Turns"

			},
			"actionSkill2": {
				"name": "マジ恐悦",
				"description": "敵単体のディフェンスを25%ダウン(3ターン)、スピードを15%ダウン(3ターン)/敵が魅了状態だったら低 確率 (30%)で混乱(2ターン)を付与/敵単体に高 確率 (70%)で魅了(3ターン)を付与",
				"tags": [],
				"coolDown": "Cool Down 6 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "イマドキワード 戦闘開始後、敵全体のスピードを20%ダウン(4ターン)",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "超能天気 自分のHPが50％未満の時、戦闘中に1度だけ味方全体のプルスウルトラゲージを20%アップ、味方全体にHP10%自動回復(3ターン)を付与",
				"tags": [],

			},

		},
		{
			"id": "1221001",
			"validationStatus": "invalid",
			"epithet": "月兎の如く",
			"name": "ミルコ",
			"rarity": "ur",
			"type": "abl",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "月暴風雨＜ルナテンペスト＞ 敵単体に550%ダメージ/自分のスピードに応じてスキル威力アップ/自分の最大HPが敵より低ければ、スキル威力を30%アップ",
				"tags": [],

			},
			"actionSkill1": {
				"name": "月墜蹴＜ルナフォール＞",
				"description": "敵単体に200%ダメージ/自分のスピードに応じてスキル威力アップ/自分の最大HPが敵より低ければ、スキル威力を40%アップ",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "踵月輪＜ルナリング＞",
				"description": "敵単体に200%ダメージ/自分のスピードに応じてスキル威力アップ/自分のHPが20%未満の時、スキル威力を60%アップ",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "勝気なバニー 味方全体の\"プロヒーロー\"のスピードを30%アップ/自分のHPが50%未満の時、戦闘中に1度だけ自分にくいしばり(1回)を付与",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "兎の生存本能 自分のHPが5%未満の時、自分にくいしばり(2回)を付与(最大6回)、自分のパワーを14%アップ(最大7回)、自分のスピードを14%アップ(最大7回)、自分にHP15%自動回復(1ターン)を付与(最大7回)、自分の最大HPが13%ダウン(最大7回)",
				"tags": [],

			},

		},
		{
			"id": "1222001",
			"validationStatus": "invalid",
			"epithet": "生の価値",
			"name": "外典",
			"rarity": "sr",
			"type": "int",
			"plusUltra": {
				"name": "氷原",
				"description": "敵単体に500%ダメージ、中 確率 (50%)で氷結(1ターン)を付与、中 確率 (50%)で凍傷(3ターン)を付与/自分が受けるダメージを20%カット(3ターン)",
				"tags": [],

			},
			"actionSkill1": {
				"name": "氷針",
				"description": "敵全体に275%ダメージ、低 確率 (30%)で氷結(1ターン)を付与/このスキルでCHAIN成功時、スキル威力を30%アップ",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "氷結集",
				"description": "敵全体に低 確率 (30%)で凍傷(2ターン)を付与、スピードを30%ダウン(3ターン)/このスキルでCHAIN成功時、自分のプルスウルトラゲージを30%アップ",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "氷を操る狩人 自分がダメージカットの時、自分の氷結、凍傷を付与する確率を上げる、スキル威力を30%アップ、クリティカル率を15%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "温度調節 自分がダメージカットの時、味方全体が燃焼になる確率を下げる、燃焼のダメージを30%カット/戦闘開始後、自分が受けるダメージを20%カット(3ターン)",
				"tags": [],

			},

		},
		{
			"id": "1227001",
			"validationStatus": "invalid",
			"epithet": "異能解放の先導者",
			"name": "リ・デストロ",
			"rarity": "sr",
			"type": "str",
			"plusUltra": {
				"name": "負荷塊",
				"description": "敵単体に500%ダメージ/自分がクリティカル率ダウン状態だったらスキル威力が40%アップ/自分がスピードダウン状態だったらスキル威力が40%アップ",
				"tags": [],

			},
			"actionSkill1": {
				"name": "重圧陥",
				"description": "敵単体に400%ダメージ/自分のスピードが10%ダウン(3ターン)/自分のクリティカル率が10%ダウン(3ターン)",
				"coolDown": "Cool Down 4 Turns",
				"tags": []

			},
			"actionSkill2": {
				"name": "ストレスアウトプット",
				"description": "自分の状態異常を2つ回復/自分のパワーを45%アップ(3ターン)/自分のディフェンスを15%アップ(3ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": []

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "解放思想 自分を除く味方全体の\"敵\"のパワーを25％アップ",
				"tags": []

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "遺志を継ぐ者 味方が1人戦闘不能になった時、自分のパワーを50％アップ",
				"tags": []

			},

		},
		{
			"id": "1227002",
			"validationStatus": "invalid",
			"epithet": "暴発するストレス",
			"name": "リ・デストロ",
			"rarity": "ur",
			"type": "dst",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "負荷塊！！ 敵単体に650%ダメージ/味方全体の最大HP30%アップ(3ターン)/自分のストレスが5個以上の時、このスキルに必中を付与/自分のストレスが10個以上の時、このスキルに貫通を付与",
				"tags": []

			},
			"actionSkill1": {
				"name": "重圧陥",
				"description": "敵全体に275%ダメージ、パワー30%ダウン(3ターン)/このスキルでCHAIN成功時、自分のプルスウルトラゲージ30%アップ",
				"coolDown": "Cool Down 4 Turns",
				"tags": []


			},
			"actionSkill2": {
				"name": "強靭化",
				"description": "自分の最大HP35%アップ(3ターン)、ダメージ10%カット(3ターン)、くいしばり(3回)を付与",
				"coolDown": "Cool Down 4 Turns",
				"tags": []

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "デストロの栄光再び 自分のダメージ30%カット(3ターン)(最大1回)/自分のストレス1個毎に、自分のパワー5%アップ、最大HP5%アップ/自分が攻撃を2回受けきった時、自分のストレス1個増加(最大10回)",
				"tags": []

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "指導者の素質 自分のストレスが5個未満の時、自分に挑発を付与、くいしばりを付与/自分がダメージカットの時、自分に挑発を付与、クリティカル抵抗40%アップ",
				"tags": []

			},

		},
		{
			"id": "1235001",
			"validationStatus": "invalid",
			"epithet": "必中の狙撃",
			"name": "レディ・ナガン",
			"rarity": "ur",
			"type": "dst",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "ステッピングスナイプ 敵単体に650%ダメージ/自分が必中の時、このスキルに貫通を付与、敵単体の一時的なくいしばりを全て解除/自分の拘束耐性がアップしている時、自分に必中(4ターン)を付与",
				"tags": []

			},
			"actionSkill1": {
				"name": "一発必中",
				"description": "敵単体に425%ダメージ/自分が必中の時、このスキルに貫通を付与/敵単体のパワーを25%ダウン(3ターン)、スピードを40%ダウン(3ターン)/自分のプルスウルトラゲージを25%アップ",
				"coolDown": "Cool Down 5 Turns",
				"tags": []

			},
			"actionSkill2": {
				"name": "スカイショット",
				"description": "敵単体に400%ダメージ/自分が必中の時、このスキルに貫通を付与/自分に拘束耐性(4ターン)を付与/このスキルでCHAIN成功時、自分のアクションスキルのクールタイムを1短縮/このスキルで2CHAIN以上成功時、自分に隠れる(2ターン)を付与",
				"coolDown": "Cool Down 4 Turns",
				"tags": []

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "スナイパーライフル人間 自分に必中(2ターン)を付与/3ターン毎に、自分に必中(1ターン)を付与/自分が必中の時、自分のスキル威力を35%アップ、スピードを30%アップ",
				"tags": []

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "一撃必殺 3ターン毎に、自分に隠れる(2ターン)を付与/自分が隠れるの時、自分のクリティカル率を35%アップ、クリティカル時の威力を25%アップ",
				"tags": []

			},

		},
		{
			"id": "1239001",
			"validationStatus": "invalid",
			"epithet": "跳ね返す力",
			"name": "フレクト・ターン",
			"rarity": "sr",
			"type": "abl",
			"plusUltra": {
				"name": "リフレクトウェーブ",
				"description": "敵単体に500%ダメージ/自分にバリア(3ヒット)を付与、アクションスキルのクールタイムを1短縮",
				"tags": []

			},
			"actionSkill1": {
				"name": "リフレクション",
				"description": "自分に通常攻撃を無効化した上でカウンターする状態(3ターン)を付与、挑発(3ターン)を付与、ダメージを35%カット(3ターン)",
				"coolDown": "Cool Down 5 Turns",
				"tags": []

			},
			"actionSkill2": {
				"name": "リフレクトウェーブ",
				"description": "敵単体に350%ダメージ、低 確率 (20%)でスタン(2ターン)を付与/敵が\"ヒーロー\"だったらスキル威力を40%アップ",
				"coolDown": "Cool Down 5 Turns",
				"tags": []


			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "ヒューマライズの指導者 味方全体の\"敵\"のスキル威力を25%アップ",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "殲滅を望む者 自分が通常攻撃を無効化した上でカウンターする状態の時、自分のスキル威力を50%アップ/自分のHPが30%未満の時、自分にバリア(3ヒット)を付与(最大1回)",
				"tags": [],

			},
		},
		{
			"id": "1244001",
			"validationStatus": "invalid",
			"epithet": "米国最強",
			"name": "スターアンドストライプ",
			"rarity": "ur",
			"type": "str",
			"plusUltra": {
				"name": "Plus Ultra Move Lv.3",
				"description": "ケラウノス 敵単体に650%ダメージ/自分に回避(2回)を付与/敵が\"知タイプ\"だったら、このスキルのスキル威力35%アップ/自分が回避でない時、このスキルのスキル威力35%アップ",
				"tags": [],

			},
			"actionSkill1": {
				"name": "パワーストライク",
				"description": "敵単体に400%ダメージ/自分のスピード25%アップ(3ターン)、回避(1回)を付与",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"actionSkill2": {
				"name": "フィスト・バンプ・トゥ・ジ・アース",
				"description": "敵全体に300%ダメージ、ディフェンス15%ダウン(3ターン)、スピード15%ダウン(3ターン)/敵に\"知タイプ\"がいたら、このスキルのスキル威力35%アップ",
				"tags": [],
				"coolDown": "Cool Down 4 Turns"

			},
			"autoSkill1": {
				"name": "Auto Skill Lv.3",
				"description": "自由なヒーロー 自分が回避でない時、自分の最大HP20%アップ、スピード30%アップ、スキル威力30%アップ/自分が回避の時、自分のパワー3%アップ(最大10回)、味方全体のスピード10%アップ(2ターン)/自分が回避のまま、2回ターンをまたいだ時、自分のクールタイム1短縮",
				"tags": [],

			},
			"autoSkill2": {
				"name": "Auto Skill Lv.3",
				"description": "平和への貢献 自分のHPが50%未満の時、自分に回避(3回)を付与(最大1回)/自分が戦闘不能になった時、敵全体のスピード30%ダウン(3ターン)、ディフェンス20%ダウン(3ターン)",
				"tags": [],
			},
		}
	]
};
