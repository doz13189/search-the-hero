"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchComponent() {
	const [word, setWord] = useState("");
	const router = useRouter();

	return (
		<div>
			<label
				htmlFor="search"
				className="mb-2 text-sm font-medium text-gray-900 sr-only text-white"
			>
				Search
			</label>
			<div className="relative">
				<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
					<svg
						className="w-4 h-4 text-gray-500 text-gray-400"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 20 20"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
						/>
					</svg>
				</div>
				<input
					type="search"
					id="search"
					className="
						block
						w-full
						p-4
						ps-10
						text-sm
						text-gray-900
						bg-light-gray
						border-2
						border-grey
						rounded-lg
					"
					placeholder="Search"
					value={word}
					onChange={(event) => setWord(event.target.value)}
					required
				/>
				<button
					type="submit"
					className="
						px-4
						py-2
						end-2.5
						bottom-2.5
						absolute
						text-sm
						bg-orange
						border-2
						border-grey
						rounded-lg
					"
					onClick={() => router.push(`/search/${word}`)}
				>
					Search
				</button>
			</div>
		</div>
	);
}
