import { Type } from "@/app/_data/_common/schema";
import { Dispatch, FC, SetStateAction } from "react";
import { getTypeLabel } from "../_lib/utils";

export const TypeForm: FC<{ type: string ,setType: Dispatch<SetStateAction<string>>; }> = ({
	type,
	setType,
}) => {
	return (
		<div>
			<label htmlFor="countries" className="block mb-1">
				タイプ
			</label>
			<select
				id="countries"
				className="
			block
			bg-gray
			border-2
			border-grey
			rounded-lg
			w-full
			p-2.5
			"
				onChange={(event) => setType(event.target.value)}
				value={type}
			>
				<option value={""}>タイプを選んでください</option>
				{Type.options.map((type) => {
					return (
						<option key={type} value={type}>
							{getTypeLabel(type)}
						</option>
					);
				})}
			</select>
		</div>
	);
};