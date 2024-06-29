"use client";

import { Skills } from "@/app/_data/_common/schema";
import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

export const SkillForm: FC<{ skills: string[] ,setSkills:  Dispatch<SetStateAction<string[]>>; }> = ({
	skills,
	setSkills,
}) => {

	const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const options = event.target.options;
		const values: string[] = [];

		for (let i = 0; i < options.length; i++) {
			if (options[i].selected) {
				values.push(options[i].value);
			}
		}

		setSkills(values);
	};

	return (
		<form>
		<label htmlFor="countries_multiple" className="block mb-1">
			スキル効果
		</label>
		<select
			multiple
			id="countries_multiple"
			className="
				block
				p-2.5
				bg-gray
				border-2
				border-grey
				rounded-lg
				w-full
			"
			onChange={handleSelectChange}
			value={skills}
		>
			<option value={""}>スキル効果を選んでください</option>
			{Skills.options.sort().map((tag) => {
				return (
					<option key={tag} value={tag}>
						{tag}
					</option>
				);
			})}
		</select>
	</form>
	);
};