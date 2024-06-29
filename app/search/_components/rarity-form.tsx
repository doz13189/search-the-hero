import { Rarity } from "@/app/_data/_common/schema";
import { Dispatch, FC, SetStateAction } from "react";

export const RarityForm: FC<{ rarity: string ,setRarity: Dispatch<SetStateAction<string>>; }> = ({
	rarity,
	setRarity,
}) => {
	return (
		<div>
			<label htmlFor="countries" className="block mb-1">
				レアリティ
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
				onChange={(event) => setRarity(event.target.value)}
				value={rarity}
			>
				<option value={""}>レアリティを選んでください</option>
				{Rarity.options.map((rarity) => {
					return (
						<option key={rarity} value={rarity}>
							{rarity.toUpperCase()}
						</option>
					);
				})}
			</select>
		</div>
	);
};