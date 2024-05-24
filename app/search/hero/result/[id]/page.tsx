// import { Suspense } from "react";

import { z } from "zod";
import { Tags } from "../../../_components/tags";
import { HeroSchema } from "@/app/_data/hero/schema";
import { getHero } from "@/app/_lib/handler/hero";

type H = z.infer<typeof HeroSchema>
const createSkillDescription = (skill: H["plusUltra"] | H["actionSkill1"] | H["actionSkill2"] | H["autoSkill1"] | H["autoSkill2"]) => {
	let description = skill.description;
	for (const keys of skill.levels[4].skill) {
		for (const key in keys) {
			// @ts-ignore: fixme
			description = description.replace(`@${key}`, `${keys[key]}`)
		}
	}
	return description;
}


export default function Page({ params }: { params: { id: string } }) {

	const response = getHero(params.id);

	return response.then((value) => {
		const hero = value.heroes;
		return (
			<div className="min-h-screen container mx-auto py-1 px-3">
				<div className="py-1">{`[${hero.rarity}] ${hero.epithet} ${hero.name}`}</div>
				<div className="py-1">
					<Tags tags={hero.tags} />
				</div>

				<div className="py-2">
					<p className="text-orange text-xs">Puls Ultra</p>
					<div className="
							mt-1
							p-1
							text-xs
							bg-light-gray
							rounded-lg
						">{createSkillDescription(hero.plusUltra)}</div>
				</div>

				<div className="py-2">
					<p className="text-orange text-xs">Action Skill1</p>
					<div className="
							mt-1
							p-1
							text-xs
							bg-light-gray
							rounded-lg
						">{createSkillDescription(hero.actionSkill1)}</div>
				</div>

				<div className="py-2">
					<p className="text-orange text-xs">Action Skill2</p>
					<div className="
							mt-1
							p-1
							text-xs
							bg-light-gray
							rounded-lg
						">{createSkillDescription(hero.actionSkill2)}</div>
				</div>

				<div className="py-2">
					<p className="text-orange text-xs">Auto Skill1</p>
					<div className="
							mt-1
							p-1
							text-xs
							bg-light-gray
							rounded-lg
						">{createSkillDescription(hero.autoSkill1)}</div>
				</div>

				<div className="py-2">
					<p className="text-orange text-xs">Auto Skill2</p>
					<div className="
							mt-1
							p-1
							text-xs
							bg-light-gray
							rounded-lg
						">{createSkillDescription(hero.autoSkill2)}</div>
				</div>
			</div>
		);

	})
}