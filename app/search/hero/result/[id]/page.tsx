// import { Suspense } from "react";

import { z } from "zod";
import { Tags } from "../../../_components/tags";
import { HeroSchema } from "@/app/_data/hero/schema";
import { getHero } from "@/app/_lib/handler/hero";

type H = z.infer<typeof HeroSchema>

const typeLabel = (type: H["type"]) => {
	switch (type) {
		case "str":
			return "力";
		case "abl":
			return "技";
		case "int":
			return "知";
		case "mnd":
			return "信";
		case "dst":
			return "破";
		default:
			const _: never = type;
	}

}

export default function Page({ params }: { params: { id: string } }) {

	const response = getHero(params.id);

	return response.then((value) => {
		const hero = value.heroes;
		return (
			<div className="min-h-screen container mx-auto py-1 px-3">
				<div className="py-1">
					<p className="text-xs">{typeLabel(hero.type)}タイプ</p>
				</div>

				<div className="py-1">{`[${hero.rarity}] ${hero.epithet} ${hero.name}`}</div>

				<div className="py-1">
					<Tags tags={[...hero.plusUltra.tags, ...hero.actionSkill1.tags, ...hero.actionSkill2.tags, ...hero.autoSkill1.tags, ...hero.autoSkill2.tags]} />
				</div>

				<div className="py-2">
					<p className="text-orange text-xs">Puls Ultra</p>
					<div className="
							mt-1
							p-1
							text-xs
							bg-light-gray
							rounded-lg
						">{hero.plusUltra.description}</div>
				</div>

				<div className="py-2">
					<p className="text-orange text-xs">Action Skill1</p>
					<div className="
							mt-1
							p-1
							text-xs
							bg-light-gray
							rounded-lg
						">{hero.actionSkill1.description}</div>
				</div>

				<div className="py-2">
					<p className="text-orange text-xs">Action Skill2</p>
					<div className="
							mt-1
							p-1
							text-xs
							bg-light-gray
							rounded-lg
						">{hero.actionSkill2.description}</div>
				</div>

				<div className="py-2">
					<p className="text-orange text-xs">Auto Skill1</p>
					<div className="
							mt-1
							p-1
							text-xs
							bg-light-gray
							rounded-lg
						">{hero.autoSkill1.description}</div>
				</div>

				<div className="py-2">
					<p className="text-orange text-xs">Auto Skill2</p>
					<div className="
							mt-1
							p-1
							text-xs
							bg-light-gray
							rounded-lg
						">{hero.autoSkill2.description}</div>
				</div>
			</div>
		);

	})
}