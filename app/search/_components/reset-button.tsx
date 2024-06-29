"use client";

import { FC, SetStateAction } from "react";

export const ResetButton: FC<{ setRarity: (value: SetStateAction<string>) => void, setSkills: (value: SetStateAction<string[]>) => void }> = ({
	setRarity,
	setSkills
}) => {
	return (
		<button
			type="submit"
			className="
		my-1
		mx-1
		px-4
		py-1
		w-32
		text-sm
		bg-yellow
		border-2
		border-grey
		rounded-lg	
	"
			onClick={() => {
				setRarity("");
				setSkills([]);
			}}
		>
			リセット
		</button>
	);
};
