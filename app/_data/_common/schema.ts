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
	burnHitRateDown: { name: "燃焼命中率ダウン", isAll: true }, //ok
	burnHitRateUp: { name: "燃焼命中率アップ", isAll: true }, //ok
	burnImmunity: { name: "燃焼完全耐性", isAll: true }, //ok
	burnResistDown: { name: "燃焼耐性ダウン", isAll: true }, //ok
	burnResistUp: { name: "燃焼耐性アップ", isAll: true }, //ok
	burning: { name: "燃焼", isAll: true }, //ok
	burningDamageDown: { name: "燃焼ダメージ軽減", isAll: true }, //ok
	camouflage: { name: "保護色", isAll: false }, // ok
	charmHitRateDown: { name: "魅了命中率ダウン", isAll: true }, // ok
	charmHitRateUp: { name: "魅了命中率アップ", isAll: true }, // ok
	charmImmunity: { name: "魅了完全耐性", isAll: false }, // ok
	charmResistDown: { name: "魅了耐性ダウン", isAll: true }, // ok
	charmResistUp: { name: "魅了耐性アップ", isAll: true }, // ok
	charmed: { name: "魅了", isAll: true }, // ok
	composure: { name: "余裕", isAll: true }, // ok
	confusion: { name: "混乱", isAll: true }, // ok
	confusionHitRateDown: { name: "混乱命中率ダウン", isAll: true }, // ok
	confusionHitRateUp: { name: "混乱命中率アップ", isAll: true }, // ok
	confusionImmunity: { name: "混乱完全耐性", isAll: false }, // ok
	confusionResistDown: { name: "混乱耐性ダウン", isAll: true }, // ok
	confusionResistUp: { name: "混乱耐性アップ", isAll: true }, // ok
	cooldownTimeDown: { name: "クールタイム軽減", isAll: true }, // ok
	cooldownTimeExtension: { name: "クールタイム延長", isAll: true }, // ok
	cooldownTimeReduction: { name: "クールタイム短縮", isAll: true }, // ok
	cooldownTimeUp: { name: "クールタイム増加", isAll: true }, // ok
	counter: { name: "カウンター", isAll: false }, //ok
	cover: { name: "かばう", isAll: false }, //ok
	critHitRateDownImmunity: { name: "クリティカル率ダウン完全耐性", isAll: false },
	critHitRateDownResistDown: { name: "クリティカル率ダウン耐性ダウン", isAll: true },
	critHitRateDownResistUp: { name: "クリティカル率ダウン耐性アップ", isAll: true },
	criticalDamageDown: { name: "クリティカルダメージ軽減", isAll: true },
	criticalHitImpactUp: { name: "クリティカル威力アップ", isAll: true },
	criticalHitRateDown: { name: "クリティカル率ダウン", isAll: true },
	criticalHitRateUp: { name: "クリティカル率アップ", isAll: true },
	criticalResistanceDown: { name: "クリティカル抵抗ダウン", isAll: true }, // ok
	criticalResistanceDownImmunity: { name: "クリティカル抵抗ダウン完全耐性", isAll: false }, // ok
	criticalResistanceUp: { name: "クリティカル抵抗アップ", isAll: true }, // ok
	criticalSkillImpactDown: { name: "クリティカル威力ダウン", isAll: true }, // ok
	criticalSkillImpactDownImmunity: { name: "クリティカル威力ダウン完全耐性", isAll: false }, // ok
	damageDown: { name: "ダメージカット", isAll: true }, // ok
	damageTakenRestore: { name: "被ダメージ回復", isAll: true }, // ok
	dealtDamageRestore: { name: "与ダメージ回復", isAll: true }, // ok
	defenseDown: { name: "ディフェンスダウン", isAll: true },
	defenseDownImmunity: { name: "ディフェンスダウン完全耐性", isAll: false },
	defenseDownResistDown: { name: "ディフェンスダウン耐性ダウン", isAll: true },
	defenseDownResistUp: { name: "ディフェンスダウン耐性アップ", isAll: true },
	defenseUp: { name: "ディフェンスアップ", isAll: true },
	doubleAttack: { name: "2回攻撃", isAll: true }, // ok
	ecstatic: { name: "高揚", isAll: true }, // ok
	elasticity: { name: "弾性", isAll: false }, // ok
	evasion: { name: "回避", isAll: true }, // ok
	faJin: { name: "発勁", isAll: false }, // ok
	fatigue: { name: "疲労", isAll: false }, // ok
	fear: { name: "恐怖", isAll: false }, // ok
	fearHitRateDown: { name: "恐怖命中率ダウン", isAll: true }, // ok
	fearHitRateUp: { name: "恐怖命中率アップ", isAll: true }, // ok
	fearImmunity: { name: "恐怖完全耐性", isAll: false }, // ok
	fearResistDown: { name: "恐怖耐性ダウン", isAll: true }, // ok
	fearResistUp: { name: "恐怖耐性アップ", isAll: true }, // ok
	freezeHitRateDown: { name: "氷結命中率ダウン", isAll: true }, // ok
	freezeHitRateUp: { name: "氷結命中率アップ", isAll: true }, // ok
	freezeImmunity: { name: "氷結完全耐性", isAll: false }, // ok
	freezeResistDown: { name: "氷結耐性ダウン", isAll: true }, // ok
	freezeResistUp: { name: "氷結耐性アップ", isAll: true }, // ok
	frostbite: { name: "凍傷", isAll: true }, // ok
	frostbiteHitRateDown: { name: "凍傷命中率ダウン", isAll: true }, // ok
	frostbiteHitRateUp: { name: "凍傷命中率アップ", isAll: true }, // ok
	frostbiteImmunity: { name: "凍傷完全耐性", isAll: false }, // ok
	frostbiteResistDown: { name: "凍傷耐性ダウン", isAll: true }, // ok
	frostbiteResistUp: { name: "凍傷耐性アップ", isAll: true }, // ok
	frozen: { name: "氷結", isAll: true },  // ok
	hellfire: { name: "業火", isAll: true },  // ok
	hellfireHitRateDown: { name: "業火命中率ダウン", isAll: true },  // ok
	hellfireHitRateUp: { name: "業火命中率アップ", isAll: true },  // ok
	hellfireResistUp: { name: "業火耐性アップ", isAll: true },  // ok
	hide: { name: "隠れる", isAll: true },  // ok
	hitRateDown: { name: "命中率ダウン", isAll: true },  // ok
	hitRateUp: { name: "命中率アップ", isAll: true }, // ok
	hpRegeneration: { name: "HP自動回復", isAll: true }, // ok
	lastStand: { name: "くいしばり", isAll: true }, // ok
	maxHpDown: { name: "最大HPダウン", isAll: true }, // ok
	maxHpDownImmunity: { name: "最大HPダウン完全耐性", isAll: false }, // ok
	maxHpDownResistDown: { name: "最大HPダウン耐性ダウン", isAll: true }, // ok
	maxHpDownResistUp: { name: "最大HPダウン耐性アップ", isAll: true }, // ok
	maxHpUp: { name: "最大HPアップ", isAll: true }, // ok
	meatLump: { name: "肉塊", isAll: true }, // ok
	meatLumpImmunity: { name: "肉塊完全耐性", isAll: false },  // ok
	meatLumpResistDown: { name: "肉塊耐性ダウン", isAll: true }, // ok
	meatLumpResistUp: { name: "肉塊耐性アップ", isAll: true }, // ok
	multiUseSkills: { name: "連撃", isAll: false }, // ok
	nitro: { name: "ニトロ", isAll: false }, // ok
	normalAttackDamageDown: { name: "通常攻撃ダメージ軽減", isAll: true }, // ok
	normalAttackImpactUp: { name: "通常攻撃威力アップ", isAll: true }, // ok
	overwhelm: { name: "圧倒", isAll: false }, // ok
	paralysis: { name: "麻痺", isAll: true }, // ok
	paralysisHitRateDown: { name: "麻痺命中率ダウン", isAll: true }, // ok
	paralysisHitRateUp: { name: "麻痺命中率アップ", isAll: true }, // ok
	paralysisImmunity: { name: "麻痺完全耐性", isAll: false }, // ok
	paralysisResistDown: { name: "麻痺耐性ダウン", isAll: true }, // ok
	paralysisResistUp: { name: "麻痺耐性アップ", isAll: true }, // ok
	persistence: { name: "不屈", isAll: false }, // ok
	phaseDamageDown: { name: "フェーズダメージカット", isAll: false }, // ok
	piercingShot: { name: "貫通", isAll: false }, // ok
	plusUltraEffectUp: { name: "プルスウルトラ効率アップ", isAll: true }, // ok
	plusUltraGaugeChargingUp: { name: "プルスウルトラゲージ上昇量アップ", isAll: true }, // ok
	plusUltraGaugeChargingDown: { name: "プルスウルトラゲージ上昇量ダウン", isAll: true }, // ok
	plusUltraGaugeDown: { name: "プルスウルトラゲージ減少", isAll: true }, // ok
	plusUltraGaugeDownImmunity: { name: "プルスウルトラゲージ減少完全耐性", isAll: false }, // ok
	plusUltraMoveDamageDown: { name: "プルスウルトラ技ダメージ軽減", isAll: true }, // ok
	plusUltraMoveImpactUp: { name: "プルスウルトラ技威力アップ", isAll: true }, // ok
	plusUltraMoveSkillImpactDown: { name: "プルスウルトラ技威力ダウン", isAll: true }, // ok
	plusUltraMoveSkillImpactDownImmunity: { name: "プルスウルトラ技威力ダウン完全耐性", isAll: false }, // ok
	powerDown: { name: "パワーダウン", isAll: true },
	powerDownImmunity: { name: "パワーダウン完全耐性", isAll: true },
	powerDownResistDown: { name: "パワーダウン耐性ダウン", isAll: true },
	powerDownResistUp: { name: "パワーダウン耐性アップ", isAll: true },
	powerUp: { name: "パワーアップ", isAll: true },
	plusUltraGaugeUp: { name: "プルスウルトラゲージ増加", isAll: true },
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
