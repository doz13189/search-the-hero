"use client";

import { Tags } from "@/app/_data/_common/schema";
import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

export const TagForm: FC<{ tags: string[] ,setTags:  Dispatch<SetStateAction<string[]>>; }> = ({
	tags,
	setTags,
}) => {

	const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const options = event.target.options;
		const values: string[] = [];

		for (let i = 0; i < options.length; i++) {
			if (options[i].selected) {
				values.push(options[i].value);
			}
		}

		setTags(values);
	};

	return (
		<form>
		<label htmlFor="countries_multiple" className="block mb-1">
			所属
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
			value={tags}
		>
			<option value={""}>スキル効果を選んでください</option>
			{Tags.options.sort().map((tag) => {
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