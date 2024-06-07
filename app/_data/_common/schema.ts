import { z } from "zod";

export const Rarity = z.enum([
	"ur",
	"sr",
	"r",
	"n"
]);

export const Type = z.enum([
	"str",
	"abl",
	"int",
	"mnd",
	"dst",
]);

const rawSkillTags = {
	actionSkillDamageDown: { name: "アクションスキルダメージ軽減", isAll: true }, // ok
	actionSkillImpactDown: { name: "アクションスキル威力ダウン", isAll: true }, // ok
	actionSkillImpactDownImmunity: { name: "アクションスキル威力ダウン完全耐性", isAll: true },
	actionSkillImpactUp: { name: "アクションスキル威力アップ", isAll: true }, // ok
	aggro: { name: "挑発", isAll: false }, // ok
	agile: { name: "身軽", isAll: false }, // ok
	barrier: { name: "バリア", isAll: true }, // ok
	bindHitRateDown: { name: "拘束命中率ダウン", isAll: true }, // ok
	bindHitRateUp: { name: "拘束命中率アップ", isAll: true }, // ok
	bindImmunity: { name: "拘束完全耐性", isAll: false }, // ok
	bindResistDown: { name: "拘束耐性ダウン", isAll: true }, // ok
	bindResistUp: { name: "拘束耐性アップ", isAll: true }, // ok
	bleedHitRateDown: { name: "出血命中率ダウン", isAll: true }, // ok
	bleedHitRateUp: { name: "出血命中率アップ", isAll: true }, // ok
	bleedImmunity: { name: "出血完全耐性", isAll: true }, // ok
	bleedResistDown: { name: "出血耐性ダウン", isAll: true }, // ok
	bleedResistUp: { name: "出血耐性アップ", isAll: true }, // ok
	bleeding: { name: "出血", isAll: true },
	bleedingDamageDown: { name: "出血ダメージ軽減", isAll: true }, // ok
	blind: { name: "暗闇", isAll: true }, //ok
	blindHitRateDown: { name: "暗闇命中率ダウン", isAll: true }, // ok
	blindHitRateUp: { name: "暗闇命中率アップ", isAll: true }, // ok
	blindImmunity: { name: "暗闇完全耐性", isAll: false }, // ok
	blindResistDown: { name: "暗闇耐性ダウン", isAll: true }, // ok
	blindResistUp: { name: "暗闇耐性アップ", isAll: true }, // ok
	bound: { name: "拘束", isAll: true }, // ok
	buffBlock: { name: "強化阻害", isAll: true }, // ok
	buffBlockImmunity: { name: "強化阻害完全耐性", isAll: false }, // ok
	buffBlockResistDown: { name: "強化阻害耐性ダウン", isAll: true }, // ok
	buffBlockResistUp: { name: "強化阻害耐性アップ", isAll: true }, // ok
	bullseye: { name: "必中", isAll: false }, //ok
	burnHitRateDown: { name: "燃焼命中率ダウン", isAll: true },
	burnHitRateUp: { name: "燃焼命中率アップ", isAll: true },
	burnImmunity: { name: "燃焼完全耐性", isAll: false },
	burnResistDown: { name: "燃焼耐性ダウン", isAll: true },
	burnResistUp: { name: "燃焼耐性アップ", isAll: true },
	burning: { name: "燃焼", isAll: true },
	burningDamageDown: { name: "燃焼ダメージ軽減", isAll: true },
	camouflage: { name: "保護色", isAll: false },
	charmHitRateDown: { name: "魅了命中率ダウン", isAll: true },
	charmHitRateUp: { name: "魅了命中率アップ", isAll: true },
	charmImmunity: { name: "魅了完全耐性", isAll: false },
	charmResistDown: { name: "魅了耐性ダウン", isAll: true },
	charmResistUp: { name: "魅了耐性アップ", isAll: true },
	charmed: { name: "魅了", isAll: true },
	composure: { name: "余裕", isAll: true },
	confusion: { name: "混乱", isAll: true },
	confusionHitRateDown: { name: "混乱命中率ダウン", isAll: true },
	confusionHitRateUp: { name: "混乱命中率アップ", isAll: true },
	confusionImmunity: { name: "混乱完全耐性", isAll: false },
	confusionResistDown: { name: "混乱耐性ダウン", isAll: true },
	confusionResistUp: { name: "混乱耐性アップ", isAll: true },
	cooldownTimeDown: { name: "クールタイム軽減", isAll: true },
	cooldownTimeExtension: { name: "クールタイム延長", isAll: true },
	cooldownTimeReduction: { name: "クールタイム短縮", isAll: true },
	cooldownTimeUp: { name: "クールタイム増加", isAll: true },
	counter: { name: "カウンター", isAll: false },
	cover: { name: "かばう", isAll: false },
	critHitRateDownImmunity: { name: "クリティカル率ダウン完全耐性", isAll: false },
	critHitRateDownResistDown: { name: "クリティカル率ダウン耐性ダウン", isAll: true },
	critHitRateDownResistUp: { name: "クリティカル率ダウン耐性アップ", isAll: true },
	criticalDamageDown: { name: "クリティカルダメージ軽減", isAll: true },
	criticalHitImpactUp: { name: "クリティカル威力アップ", isAll: true },
	criticalHitRateDown: { name: "クリティカル率ダウン", isAll: true },
	criticalHitRateUp: { name: "クリティカル率アップ", isAll: true },
	criticalResistanceDown: { name: "クリティカル抵抗ダウン", isAll: true },
	criticalResistanceDownImmunity: { name: "クリティカル抵抗ダウン完全耐性", isAll: false },
	criticalResistanceUp: { name: "クリティカル抵抗アップ", isAll: true },
	criticalSkillImpactDown: { name: "クリティカル威力ダウン", isAll: true },
	criticalSkillImpactDownImmunity: { name: "クリティカル威力ダウン完全耐性", isAll: false },
	damageDown: { name: "ダメージカット", isAll: true },
	damageTakenRestore: { name: "被ダメージ回復", isAll: true },
	dealtDamageRestore: { name: "与ダメージ回復", isAll: true },
	defenseDown: { name: "ディフェンスダウン", isAll: true },
	defenseDownImmunity: { name: "ディフェンスダウン完全耐性", isAll: false },
	defenseDownResistDown: { name: "ディフェンスダウン耐性ダウン", isAll: true },
	defenseDownResistUp: { name: "ディフェンスダウン耐性アップ", isAll: true },
	defenseUp: { name: "ディフェンスアップ", isAll: true },
	doubleAttack: { name: "2回攻撃", isAll: true },
	ecstatic: { name: "高揚", isAll: true },
	elasticity: { name: "弾性", isAll: false },
	evasion: { name: "回避", isAll: true },
	faJin: { name: "発勁", isAll: false },
	fatigue: { name: "疲労", isAll: false },
	fear: { name: "恐怖", isAll: false },
	fearHitRateDown: { name: "恐怖命中率ダウン", isAll: true },
	fearHitRateUp: { name: "恐怖命中率アップ", isAll: true },
	fearImmunity: { name: "恐怖完全耐性", isAll: false },
	fearResistDown: { name: "恐怖耐性ダウン", isAll: true },
	fearResistUp: { name: "恐怖耐性アップ", isAll: true },
	freezeHitRateDown: { name: "氷結命中率ダウン", isAll: true },
	freezeHitRateUp: { name: "氷結命中率アップ", isAll: true },
	freezeImmunity: { name: "氷結完全耐性", isAll: false },
	freezeResistDown: { name: "氷結耐性ダウン", isAll: true },
	freezeResistUp: { name: "氷結耐性アップ", isAll: true },
	frostbite: { name: "凍傷", isAll: false },
	frostbiteHitRateDown: { name: "凍傷命中率ダウン", isAll: true },
	frostbiteHitRateUp: { name: "凍傷命中率アップ", isAll: true },
	frostbiteImmunity: { name: "凍傷完全耐性", isAll: false },
	frostbiteResistDown: { name: "凍傷耐性ダウン", isAll: true },
	frostbiteResistUp: { name: "凍傷耐性アップ", isAll: true },
	frozen: { name: "氷結", isAll: true },
	hellfire: { name: "業火", isAll: true },
	hellfireHitRateDown: { name: "業火命中率ダウン", isAll: true },
	hellfireHitRateUp: { name: "業火命中率アップ", isAll: true },
	hellfireResistUp: { name: "業火耐性アップ", isAll: true },
	hide: { name: "隠れる", isAll: true },
	hitRateDown: { name: "命中率ダウン", isAll: true },
	hitRateUp: { name: "命中率アップ", isAll: true },
	hpRegeneration: { name: "HP自動回復", isAll: true },
	lastStand: { name: "くいしばり", isAll: true },
	maxHpDown: { name: "最大HPダウン", isAll: true },
	maxHpDownImmunity: { name: "最大HPダウン完全耐性", isAll: false },
	maxHpDownResistDown: { name: "最大HPダウン耐性ダウン", isAll: true },
	maxHpDownResistUp: { name: "最大HPダウン耐性アップ", isAll: true },
	maxHpUp: { name: "最大HPアップ", isAll: true },
	meatLump: { name: "肉塊", isAll: true },
	meatLumpImmunity: { name: "肉塊完全耐性", isAll: false },
	meatLumpResistDown: { name: "肉塊耐性ダウン", isAll: true },
	meatLumpResistUp: { name: "肉塊耐性アップ", isAll: true },
	multiUseSkills: { name: "連撃", isAll: false },
	nitro: { name: "ニトロ", isAll: false },
	normalAttackDamageDown: { name: "通常攻撃ダメージ軽減", isAll: true },
	normalAttackImpactUp: { name: "通常攻撃威力アップ", isAll: true },
	overwhelm: { name: "圧倒", isAll: false },
	paralysis: { name: "麻痺", isAll: true },
	paralysisHitRateDown: { name: "麻痺命中率ダウン", isAll: true },
	paralysisHitRateUp: { name: "麻痺命中率アップ", isAll: true },
	paralysisImmunity: { name: "麻痺完全耐性", isAll: false },
	paralysisResistDown: { name: "麻痺耐性ダウン", isAll: true },
	paralysisResistUp: { name: "麻痺耐性アップ", isAll: true },
	persistence: { name: "不屈", isAll: false },
	phaseDamageDown: { name: "フェーズダメージカット", isAll: false },
	piercingShot: { name: "貫通", isAll: false },
	plusUltraEffectUp: { name: "プルスウルトラ効率アップ", isAll: true },
	plusUltraGaugeChargingUp: { name: "プルスウルトラゲージ上昇量アップ", isAll: true },
	plusUltraGaugeDown: { name: "プルスウルトラゲージ減少", isAll: true },
	plusUltraGaugeDownImmunity: { name: "プルスウルトラゲージ減少完全耐性", isAll: false },
	plusUltraGaugeUp: { name: "プルスウルトラゲージ増加", isAll: true },
	plusUltraMoveDamageDown: { name: "プルスウルトラ技ダメージ軽減", isAll: true },
	plusUltraMoveImpactUp: { name: "プルスウルトラ技威力アップ", isAll: true },
	plusUltraMoveSkillImpactDown: { name: "プルスウルトラ技威力ダウン", isAll: true },
	plusUltraMoveSkillImpactDownImmunity: { name: "プルスウルトラ技威力ダウン完全耐性", isAll: false },
	powerDown: { name: "パワーダウン", isAll: true },
	powerDownImmunity: { name: "パワーダウン完全耐性", isAll: true },
	powerDownResistDown: { name: "パワーダウン耐性ダウン", isAll: true },
	powerDownResistUp: { name: "パワーダウン耐性アップ", isAll: true },
	powerUp: { name: "パワーアップ", isAll: true },
	puGaugeDownResistDown: { name: "プルスウルトラゲージダウン耐性ダウン", isAll: true },
	puGaugeDownResistUp: { name: "プルスウルトラゲージ減少耐性アップ", isAll: true },
	puGaugeFillRateDown: { name: "プルスウルトラゲージ上昇率ダウン", isAll: true },
	recovery: { name: "回復", isAll: true },
	recoveryBlock: { name: "回復阻害", isAll: true },
	recoveryBlockImmunity: { name: "回復阻害完全耐性", isAll: false },
	reduceBurningAndBleeding: { name: "燃焼・出血ダメージ軽減", isAll: true },
	cancelStatusAilments: { name: "状態異常解除", isAll: true }, // 状態異常回復に使用する
	removeBuffs: { name: "状態変化解除", isAll: true }, // 一時的な強化解除 & 一時的な状態異常無効全て解除に使用する
	// removeStatusChanges: { name: "状態変化解除", isAll: true },
	resilience: { name: "逆境", isAll: true },
	sharpEye: { name: "見切り", isAll: false },
	skillDamageDown: { name: "スキルダメージ軽減", isAll: true },
	skillImpactDown: { name: "スキル威力ダウン", isAll: true },
	skillImpactDownImmunity: { name: "スキル威力ダウン完全耐性", isAll: false },
	skillImpactDownResistDown: { name: "スキル威力ダウン耐性ダウン", isAll: true },
	skillImpactDownResistUp: { name: "スキル威力ダウン耐性アップ", isAll: true },
	skillImpactUp: { name: "スキル威力アップ", isAll: true },
	skillsSealed: { name: "スキル封印", isAll: false },
	skillsSealedImmunity: { name: "スキル封印完全耐性", isAll: false },
	skillsSealedResistDown: { name: "スキル封印耐性ダウン", isAll: true },
	skillsSealedResistUp: { name: "スキル封印耐性アップ", isAll: true },
	speedDown: { name: "スピードダウン", isAll: true },
	speedDownImmunity: { name: "スピードダウン完全耐性", isAll: false },
	speedDownResistDown: { name: "スピードダウン耐性ダウン", isAll: true },
	speedDownResistUp: { name: "スピードダウン耐性アップ", isAll: true },
	speedUp: { name: "スピードアップ", isAll: true },
	statusAilmentCounter: { name: "状態異常カウンター", isAll: false },
	statusAilmentNull: { name: "状態異常無効", isAll: true },
	stress: { name: "ストレス", isAll: false },
	stun: { name: "スタン", isAll: true },
	stunHitRateUp: { name: "スタン命中率アップ", isAll: true },
	stunImmunity: { name: "スタン完全耐性", isAll: false },
	stunResistUp: { name: "スタン耐性アップ", isAll: true },
	symbol: { name: "象徴", isAll: false },
	tranquility: { name: "平静", isAll: false }
} as const

type SkillKeyTagsType<T extends Record<string, { name: string; isAll: boolean }>> = {
	[K in keyof T]: T[K]['isAll'] extends true ?
	`${string & K}Single` | `${string & K}All` :
	K
}[keyof T];

type SkillNameTagsType<T extends Record<string, { name: string; isAll: boolean }>> = {
	[K in keyof T]: T[K]['isAll'] extends true
	? `${T[K]['name']}(単体)` | `${T[K]['name']}(全体)`
	: T[K]['name'];
}[keyof T];

type ProcessedResult<T extends Record<string, { name: string; isAll: boolean }>> = {
	[K in SkillKeyTagsType<T>]: SkillNameTagsType<T>;
  };

const generateSkillTags = <T extends Record<string, { name: string; isAll: boolean }>>(obj: T): ProcessedResult<T>  => {
	const result = {} as ProcessedResult<T>;
	(Object.keys(obj) as (keyof T)[]).forEach((key) => {
	  const value = obj[key].name as SkillNameTagsType<T>;
	  if (obj[key].isAll) {
		const capitalizedKey = `${(key as string).charAt(0)}${(key as string).slice(1)}`;
		const singleKey = `${capitalizedKey}Single` as SkillKeyTagsType<T>;
		const allKey = `${capitalizedKey}All` as SkillKeyTagsType<T>;
		result[singleKey] = `${value}(単体)`;
		result[allKey] = `${value}(全体)`;
	  } else {
		result[key as SkillKeyTagsType<T>] = value;
	  }
	});
	return result;
  }

export type SkillKeyTags = SkillKeyTagsType<typeof rawSkillTags>;
export type SkillNameTags = SkillNameTagsType<typeof rawSkillTags>;
export const skillTags = generateSkillTags(rawSkillTags);
export const getTagLabel = (tag: SkillKeyTags) => {
	return skillTags[tag];
};
