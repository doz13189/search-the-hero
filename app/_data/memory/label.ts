import { z } from "zod";
import { Tags } from "../_common/schema";

const TagsLabel: { [key in z.infer<typeof Tags>]: string } = {
	singleBuffPowerUP: "単体パワーアップ",
	allBuffPowerUP: "全体パワーアップ",
	singleBuffDefenseUP: "単体デフェンスアップ",
	allBuffDefenseUP: "全体デフェンスアップ",
	singleBuffSpeedUP: "単体スピードアップ",
	allBuffSpeedUP: "全体スピードアップ",
	singleBuffMaxHpUP: "単体HPアップ",
	allBuffMaxHpUP: "全体HPアップ",
	singleBuffCriticalUp: "単体クリティカル率アップ",
	AllBuffSkillImpactUp: "全体スキル威力アップ",
	AllBuffPlusUltraGaugeUp: "全体PUゲージアップ",
};

export const getTagLabel = (tag: z.infer<typeof Tags>) => {
	return TagsLabel[tag];
};
