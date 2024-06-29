import { typeLabel } from "../_utils/label";
import { getCharacter } from "@/app/_lib/handler/character";
import { Skills } from "@/app/search/_components/skills";

export default function Page({ params }: { params: { id: string } }) {

	const response = getCharacter(params.id);

	return response.then((value) => {
		const character = value.characters;
		return (
			<div className="min-h-screen container mx-auto py-1 px-3">

				<div className="py-1">{`[${character.rarity.toUpperCase()}/${typeLabel(character.type)}タイプ] ${character.epithet} ${character.name}`}</div>

				<div className="py-1">
					<Skills skills={character.skills} />
				</div>

				<div className="py-2">
					<p className="text-orange text-xs">
						{`プルスウルトラ技（${character.skill.dxleveltwo.plusUltra.name}）`}
					</p>
					<div className="
							mt-1
							p-1
							text-xs
							bg-light-gray
							rounded-lg
						"
						dangerouslySetInnerHTML={{ __html: character.skill.dxleveltwo.plusUltra.description }}
					/>
				</div>

				<div className="py-2">
					<p className="text-orange text-xs">
						{`アクションスキル（${character.skill.dxleveltwo.actionSkill1.name}）`}
					</p>
					<div className="py-1">
						<p className="text-xs">{`クールタイム ${character.skill.dxleveltwo.actionSkill1.coolTime} ターン`}</p>
					</div>
					<div className="
							mt-1
							p-1
							text-xs
							bg-light-gray
							rounded-lg
						"
						dangerouslySetInnerHTML={{ __html: character.skill.dxleveltwo.actionSkill1.description }}
					/>
				</div>

				<div className="py-2">
					<p className="text-orange text-xs">
						{`アクションスキル（${character.skill.dxleveltwo.actionSkill2.name}）`}
					</p>
					<div className="py-1">
						<p className="text-xs">{`クールタイム ${character.skill.dxleveltwo.actionSkill2.coolTime} ターン`}</p>
					</div>
					<div className="
							mt-1
							p-1
							text-xs
							bg-light-gray
							rounded-lg
						"
						dangerouslySetInnerHTML={{ __html: character.skill.dxleveltwo.actionSkill2.description }}
					/>
				</div>

				<div className="py-2">
					<p className="text-orange text-xs">
						{`オートスキル（${character.skill.dxleveltwo.autoSkill1.name}）`}
					</p>
					<div className="
							mt-1
							p-1
							text-xs
							bg-light-gray
							rounded-lg
						"
						dangerouslySetInnerHTML={{ __html: character.skill.dxleveltwo.autoSkill1.description }}
					/>
				</div>

				<div className="py-2">
					<p className="text-orange text-xs">
						{`オートスキル（${character.skill.dxleveltwo.autoSkill2.name}）`}
					</p>
					<div className="
							mt-1
							p-1
							text-xs
							bg-light-gray
							rounded-lg
						"
						dangerouslySetInnerHTML={{ __html: character.skill.dxleveltwo.autoSkill2.description }}
					/>
				</div>

				<div className="py-2">
					<p className="text-orange text-xs">
						{`専用EXオートスキル`}
					</p>
					<div className="
							mt-1
							p-1
							text-xs
							bg-light-gray
							rounded-lg
						"
					>
						{character.uniqueSkills.map((skill, index) => {
							return (
								<p className="m-1">・{skill}</p>
							)
						})}
					</div>
				</div>

				<div className="py-2">
					<p className="text-orange text-xs">
						{`スタッツ`}
					</p>
					<div className="
							mt-1
							p-1
							text-xs
							bg-light-gray
							rounded-lg
						"
					>
						<p className="m-1">HP {character.stats[character.stats.length - 1].hp}</p>
						<p className="m-1">パワー {character.stats[character.stats.length - 1].power}</p>
						<p className="m-1">スピード {character.stats[character.stats.length - 1].speed}</p>
						<p className="m-1">デフェンス {character.stats[character.stats.length - 1].defense}</p>
						<p className="m-1">クリティカル {character.stats[character.stats.length - 1].critical}</p>
					</div>
				</div>
			</div>
		);

	})
}