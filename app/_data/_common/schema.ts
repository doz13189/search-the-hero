import { z } from "zod";

export const Rarity = z.enum([
	"UR",
	"SR",
	"R",
	"N"
]);

const rawSkillTags = {
	actionSkillDamageDown: { name: "アクションスキルダメージ軽減", isAll: true },
	actionSkillImpactDown: { name: "アクションスキル威力ダウン", isAll: true },
	actionSkillImpactDownImmunity: { name: "アクションスキル威力ダウン完全耐性", isAll: true },
	actionSkillImpactUp: { name: "アクションスキル威力アップ", isAll: true },
	aggro: { name: "挑発", isAll: false },
	agile: { name: "身軽", isAll: false },
	barrier: { name: "バリア", isAll: false },
	bindHitRateDown: { name: "拘束命中率ダウン", isAll: false },
	bindHitRateUp: { name: "拘束命中率アップ", isAll: false },
	bindImmunity: { name: "拘束完全耐性", isAll: false },
	bindResistDown: { name: "拘束耐性ダウン", isAll: false },
	bindResistUp: { name: "拘束耐性アップ", isAll: false },
	bleedHitRateDown: { name: "出血命中率ダウン", isAll: false },
	bleedHitRateUp: { name: "出血命中率アップ", isAll: false },
	bleedImmunity: { name: "出血完全耐性", isAll: false },
	bleedResistDown: { name: "出血耐性ダウン", isAll: false },
	bleedResistUp: { name: "出血耐性アップ", isAll: false },
	bleeding: { name: "出血", isAll: false },
	bleedingDamageDown: { name: "出血ダメージ軽減", isAll: false },
	blind: { name: "暗闇", isAll: false },
	blindHitRateDown: { name: "暗闇命中率ダウン", isAll: false },
	blindHitRateUp: { name: "暗闇命中率アップ", isAll: false },
	blindImmunity: { name: "暗闇完全耐性", isAll: false },
	blindResistDown: { name: "暗闇耐性ダウン", isAll: false },
	blindResistUp: { name: "暗闇耐性アップ", isAll: false },
	bound: { name: "拘束", isAll: false },
	buffBlock: { name: "強化阻害", isAll: false },
	buffBlockImmunity: { name: "強化阻害完全耐性", isAll: false },
	buffBlockResistDown: { name: "強化阻害耐性ダウン", isAll: false },
	buffBlockResistUp: { name: "強化阻害耐性アップ", isAll: false },
	bullseye: { name: "必中", isAll: false },
	burnHitRateDown: { name: "燃焼命中率ダウン", isAll: false },
	burnHitRateUp: { name: "燃焼命中率アップ", isAll: false },
	burnImmunity: { name: "燃焼完全耐性", isAll: false },
	burnResistDown: { name: "燃焼耐性ダウン", isAll: false },
	burnResistUp: { name: "燃焼耐性アップ", isAll: false },
	burning: { name: "燃焼", isAll: true },
	burningDamageDown: { name: "燃焼ダメージ軽減", isAll: false },
	camouflage: { name: "保護色", isAll: false },
	cancelStatusAilments: { name: "状態異常解除", isAll: false },
	charmHitRateDown: { name: "魅了命中率ダウン", isAll: false },
	charmHitRateUp: { name: "魅了命中率アップ", isAll: false },
	charmImmunity: { name: "魅了完全耐性", isAll: false },
	charmResistDown: { name: "魅了耐性ダウン", isAll: false },
	charmResistUp: { name: "魅了耐性アップ", isAll: false },
	charmed: { name: "魅了", isAll: false },
	composure: { name: "余裕", isAll: false },
	confusion: { name: "混乱", isAll: false },
	confusionHitRateDown: { name: "混乱命中率ダウン", isAll: false },
	confusionHitRateUp: { name: "混乱命中率アップ", isAll: false },
	confusionImmunity: { name: "混乱完全耐性", isAll: false },
	confusionResistDown: { name: "混乱耐性ダウン", isAll: false },
	confusionResistUp: { name: "混乱耐性アップ", isAll: false },
	cooldownTimeDown: { name: "クールタイム軽減", isAll: false },
	cooldownTimeExtension: { name: "クールタイム延長", isAll: false },
	cooldownTimeReduction: { name: "クールタイム短縮", isAll: false },
	cooldownTimeUp: { name: "クールタイム増加", isAll: false },
	counter: { name: "カウンター", isAll: false },
	cover: { name: "かばう", isAll: false },
	critHitRateDownImmunity: { name: "クリティカル率ダウン完全耐性", isAll: false },
	critHitRateDownResistDown: { name: "クリティカル率ダウン耐性ダウン", isAll: false },
	critHitRateDownResistUp: { name: "クリティカル率ダウン耐性アップ", isAll: false },
	criticalDamageDown: { name: "クリティカルダメージ軽減", isAll: false },
	criticalHitImpactUp: { name: "クリティカル威力アップ", isAll: false },
	criticalHitRateDown: { name: "クリティカル率ダウン", isAll: true },
	criticalHitRateUp: { name: "クリティカル率アップ", isAll: true },
	criticalResistanceDown: { name: "クリティカル抵抗ダウン", isAll: false },
	criticalResistanceDownImmunity: { name: "クリティカル抵抗ダウン完全耐性", isAll: false },
	criticalResistanceUp: { name: "クリティカル抵抗アップ", isAll: false },
	criticalSkillImpactDown: { name: "クリティカル威力ダウン", isAll: false },
	criticalSkillImpactDownImmunity: { name: "クリティカル威力ダウン完全耐性", isAll: false },
	damageDown: { name: "ダメージカット", isAll: false },
	damageTakenRestore: { name: "被ダメージ回復", isAll: false },
	dealtDamageRestore: { name: "与ダメージ回復", isAll: false },
	defenseDown: { name: "ディフェンスダウン", isAll: true },
	defenseDownImmunity: { name: "ディフェンスダウン完全耐性", isAll: false },
	defenseDownResistDown: { name: "ディフェンスダウン耐性ダウン", isAll: false },
	defenseDownResistUp: { name: "ディフェンスダウン耐性アップ", isAll: false },
	defenseUp: { name: "ディフェンスアップ", isAll: true },
	doubleAttack: { name: "2回攻撃", isAll: false },
	ecstatic: { name: "高揚", isAll: false },
	elasticity: { name: "弾性", isAll: false },
	evasion: { name: "回避", isAll: false },
	faJin: { name: "発勁", isAll: false },
	fatigue: { name: "疲労", isAll: false },
	fear: { name: "恐怖", isAll: false },
	fearHitRateDown: { name: "恐怖命中率ダウン", isAll: false },
	fearHitRateUp: { name: "恐怖命中率アップ", isAll: false },
	fearImmunity: { name: "恐怖完全耐性", isAll: false },
	fearResistDown: { name: "恐怖耐性ダウン", isAll: false },
	fearResistUp: { name: "恐怖耐性アップ", isAll: false },
	freezeHitRateDown: { name: "氷結命中率ダウン", isAll: false },
	freezeHitRateUp: { name: "氷結命中率アップ", isAll: false },
	freezeImmunity: { name: "氷結完全耐性", isAll: false },
	freezeResistDown: { name: "氷結耐性ダウン", isAll: false },
	freezeResistUp: { name: "氷結耐性アップ", isAll: false },
	frostbite: { name: "凍傷", isAll: false },
	frostbiteHitRateDown: { name: "凍傷命中率ダウン", isAll: false },
	frostbiteHitRateUp: { name: "凍傷命中率アップ", isAll: false },
	frostbiteImmunity: { name: "凍傷完全耐性", isAll: false },
	frostbiteResistDown: { name: "凍傷耐性ダウン", isAll: false },
	frostbiteResistUp: { name: "凍傷耐性アップ", isAll: false },
	frozen: { name: "氷結", isAll: false },
	hellfire: { name: "業火", isAll: false },
	hellfireHitRateDown: { name: "業火命中率ダウン", isAll: false },
	hellfireHitRateUp: { name: "業火命中率アップ", isAll: false },
	hellfireResistUp: { name: "業火耐性アップ", isAll: false },
	hide: { name: "隠れる", isAll: false },
	hitRateDown: { name: "命中率ダウン", isAll: false },
	hitRateUp: { name: "命中率アップ", isAll: false },
	hpRegeneration: { name: "HP自動回復", isAll: false },
	lastStand: { name: "くいしばり", isAll: false },
	maxHpDown: { name: "最大HPダウン", isAll: true },
	maxHpDownImmunity: { name: "最大HPダウン完全耐性", isAll: false },
	maxHpDownResistDown: { name: "最大HPダウン耐性ダウン", isAll: false },
	maxHpDownResistUp: { name: "最大HPダウン耐性アップ", isAll: false },
	maxHpUp: { name: "最大HPアップ", isAll: true },
	meatLump: { name: "肉塊", isAll: false },
	meatLumpImmunity: { name: "肉塊完全耐性", isAll: false },
	meatLumpResistDown: { name: "肉塊耐性ダウン", isAll: false },
	meatLumpResistUp: { name: "肉塊耐性アップ", isAll: false },
	multiUseSkills: { name: "連撃", isAll: false },
	nitro: { name: "ニトロ", isAll: false },
	normalAttackDamageDown: { name: "通常攻撃ダメージ軽減", isAll: false },
	normalAttackImpactUp: { name: "通常攻撃威力アップ", isAll: false },
	overwhelm: { name: "圧倒", isAll: false },
	paralysis: { name: "麻痺", isAll: false },
	paralysisHitRateDown: { name: "麻痺命中率ダウン", isAll: false },
	paralysisHitRateUp: { name: "麻痺命中率アップ", isAll: false },
	paralysisImmunity: { name: "麻痺完全耐性", isAll: false },
	paralysisResistDown: { name: "麻痺耐性ダウン", isAll: false },
	paralysisResistUp: { name: "麻痺耐性アップ", isAll: false },
	persistence: { name: "不屈", isAll: false },
	phaseDamageDown: { name: "フェーズダメージカット", isAll: false },
	piercingShot: { name: "貫通", isAll: false },
	plusUltraEffectUp: { name: "プルスウルトラ効率アップ", isAll: false },
	plusUltraGaugeChargingUp: { name: "プルスウルトラゲージ上昇量アップ", isAll: false },
	plusUltraGaugeDown: { name: "プルスウルトラゲージ減少", isAll: false },
	plusUltraGaugeDownImmunity: { name: "プルスウルトラゲージ減少完全耐性", isAll: false },
	plusUltraGaugeUp: { name: "プルスウルトラゲージ増加", isAll: false },
	plusUltraMoveDamageDown: { name: "プルスウルトラ技ダメージ軽減", isAll: false },
	plusUltraMoveImpactUp: { name: "プルスウルトラ技威力アップ", isAll: false },
	plusUltraMoveSkillImpactDown: { name: "プルスウルトラ技威力ダウン", isAll: false },
	plusUltraMoveSkillImpactDownImmunity: { name: "プルスウルトラ技威力ダウン完全耐性", isAll: false },
	powerDown: { name: "パワーダウン", isAll: true },
	powerDownImmunity: { name: "パワーダウン完全耐性", isAll: true },
	powerDownResistDown: { name: "パワーダウン耐性ダウン", isAll: true },
	powerDownResistUp: { name: "パワーダウン耐性アップ", isAll: true },
	powerUp: { name: "パワーアップ", isAll: true },
	puGaugeDownResistDown: { name: "プルスウルトラゲージダウン耐性ダウン", isAll: false },
	puGaugeDownResistUp: { name: "プルスウルトラゲージ減少耐性アップ", isAll: false },
	puGaugeFillRateDown: { name: "プルスウルトラゲージ上昇率ダウン", isAll: false },
	recovery: { name: "回復", isAll: false },
	recoveryBlock: { name: "回復阻害", isAll: false },
	recoveryBlockImmunity: { name: "回復阻害完全耐性", isAll: false },
	reduceBurningAndBleeding: { name: "燃焼・出血ダメージ軽減", isAll: false },
	removeBuffs: { name: "状態変化解除", isAll: false },
	removeStatusChanges: { name: "状態変化解除", isAll: false },
	resilience: { name: "逆境", isAll: false },
	sharpEye: { name: "見切り", isAll: false },
	skillDamageDown: { name: "スキルダメージ軽減", isAll: false },
	skillImpactDown: { name: "スキル威力ダウン", isAll: true },
	skillImpactDownImmunity: { name: "スキル威力ダウン完全耐性", isAll: false },
	skillImpactDownResistDown: { name: "スキル威力ダウン耐性ダウン", isAll: false },
	skillImpactDownResistUp: { name: "スキル威力ダウン耐性アップ", isAll: false },
	skillImpactUp: { name: "スキル威力アップ", isAll: true },
	skillsSealed: { name: "スキル封印", isAll: false },
	skillsSealedImmunity: { name: "スキル封印完全耐性", isAll: false },
	skillsSealedResistDown: { name: "スキル封印耐性ダウン", isAll: false },
	skillsSealedResistUp: { name: "スキル封印耐性アップ", isAll: false },
	speedDown: { name: "スピードダウン", isAll: true },
	speedDownImmunity: { name: "スピードダウン完全耐性", isAll: true },
	speedDownResistDown: { name: "スピードダウン耐性ダウン", isAll: true },
	speedDownResistUp: { name: "スピードダウン耐性アップ", isAll: true },
	speedUp: { name: "スピードアップ", isAll: true },
	statusAilmentCounter: { name: "状態異常カウンター", isAll: false },
	statusAilmentNull: { name: "状態異常無効", isAll: false },
	stress: { name: "ストレス", isAll: false },
	stun: { name: "スタン", isAll: false },
	stunHitRateUp: { name: "スタン命中率アップ", isAll: false },
	stunImmunity: { name: "スタン完全耐性", isAll: false },
	stunResistUp: { name: "スタン耐性アップ", isAll: false },
	symbol: { name: "象徴", isAll: false },
	tranquility: { name: "平静", isAll: false }
} as const

type SkillKeyTagsType<T extends Record<string, { name: string; isAll: boolean }>> = {
	[K in keyof T]: T[K]['isAll'] extends true ?
	`single${Capitalize<string & K>}` | `all${Capitalize<string & K>}` :
	K
}[keyof T];

type SkillNameTagsType<T extends Record<string, { name: string; isAll: boolean }>> = {
	[K in keyof T]: T[K]['isAll'] extends true
	? `単体${T[K]['name']}` | `全体${T[K]['name']}`
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
		const capitalizedKey = `${(key as string).charAt(0).toUpperCase()}${(key as string).slice(1)}`;
		const singleKey = `single${capitalizedKey}` as SkillKeyTagsType<T>;
		const allKey = `all${capitalizedKey}` as SkillKeyTagsType<T>;
		result[singleKey] = `単体${value}`;
		result[allKey] = `全体${value}`;
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
