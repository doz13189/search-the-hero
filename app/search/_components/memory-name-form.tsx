"use client";

import { Dispatch, FC, SetStateAction } from "react";

export const MemoryNameForm: FC<{ name: string , setName: Dispatch<SetStateAction<string>> }> = ({
	name,
	setName
}) => {

	return (
			<div>
		<label htmlFor="memory_name" className="block mb-1">
			メモリー名
		</label>
		<input
			type="text"
			id="memory_name"
			className="
				block
				p-2.5
				bg-gray
				border-2
				border-grey
				rounded-lg
				w-full
			"
			onChange={(event) => setName(event.target.value)}
			value={name}
		/>
		</div>

	);
};