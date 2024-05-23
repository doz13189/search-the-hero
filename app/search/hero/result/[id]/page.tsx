// import { Suspense } from "react";

import { z } from "zod";
import { Tags } from "../_components/tags";
import { HeroSchema } from "@/app/_data/hero/schema";

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
	const response = fetch(
		`${process.env.API_URL}/api/m?id=${params.id}`,
		{
			next: { revalidate: 10 },
		},
	);

	return response.then((value) => {
		if (value.ok) {
			const data = value.json();
			return data.then((data) => {
				return (
					<div className="min-h-screen container mx-auto py-1 px-3">
						<div className="py-1">{`[${data.heroes.rarity}] ${data.heroes.epithet} ${data.heroes.name}`}</div>
						<div className="py-1">
							<Tags memory={data.heroes} />
						</div>

						<div className="py-2">
							<p className="text-orange text-xs">Puls Ultra</p>
							<div className="
							mt-1
							p-1
							text-xs
							bg-light-gray
							rounded-lg
						">{createSkillDescription(data.heroes.plusUltra)}</div>
						</div>

						<div className="py-2">
							<p className="text-orange text-xs">Action Skill1</p>
							<div className="
							mt-1
							p-1
							text-xs
							bg-light-gray
							rounded-lg
						">{createSkillDescription(data.heroes.actionSkill1)}</div>
						</div>

						<div className="py-2">
							<p className="text-orange text-xs">Action Skill2</p>
							<div className="
							mt-1
							p-1
							text-xs
							bg-light-gray
							rounded-lg
						">{createSkillDescription(data.heroes.actionSkill2)}</div>
						</div>

						<div className="py-2">
							<p className="text-orange text-xs">Auto Skill1</p>
							<div className="
							mt-1
							p-1
							text-xs
							bg-light-gray
							rounded-lg
						">{createSkillDescription(data.heroes.autoSkill1)}</div>
						</div>

						<div className="py-2">
							<p className="text-orange text-xs">Auto Skill2</p>
							<div className="
							mt-1
							p-1
							text-xs
							bg-light-gray
							rounded-lg
						">{createSkillDescription(data.heroes.autoSkill2)}</div>
						</div>
					</div>
				);
			});
		} else {
			return <div>Not found</div>;
		}
	})
}