import { Name } from "@/app/_data/_common/schema";
import { Dispatch, FC, SetStateAction } from "react";

export const NameForm: FC<{ name: string ,setName: Dispatch<SetStateAction<string>>; }> = ({
	name,
	setName,
}) => {
	return (
		<div>
			<label htmlFor="countries" className="block mb-1">
				キャラクター名
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
				onChange={(event) => setName(event.target.value)}
				value={name}
			>
				<option value={""}>キャラクター名を選んでください</option>
				{Name.options.map((name) => {
					return (
						<option key={name} value={name}>
							{name}
						</option>
					);
				})}
			</select>
		</div>
	);
};