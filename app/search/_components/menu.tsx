"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

export const Menu: FC = ({
}) => {
	const pathname = usePathname();
	const isCharacterPage = pathname.includes("/search/character")
	return (
		<div className="flex">
			<div className="flex-1">
				<Link
					href="/search/character"
					className={`
					m-1
					p-2
					flex
					justify-center
					border-2
					border-grey
					rounded-lg
					${isCharacterPage ? "bg-orange" : "bg-soft-orange text-grey"}
				`}
				>
					プレイキャラ検索
				</Link>
			</div>
			<div className="flex-1">
				<Link
					href="/search/memory"
					className={`
					m-1
					p-2
					flex
					justify-center
					border-2
					border-grey
					rounded-lg
					${isCharacterPage ? "bg-soft-orange text-grey" : "bg-orange"}
					`}
				>
					メモリー検索
				</Link>
			</div>
		</div>
	);
};
