"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

export const Menu: FC = ({
}) => {
	const pathname = usePathname();
	const isCharacterPage =  pathname === "/search/character"
	return (
		<div className="flex">
		<div className="flex-1">
			<div
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
				<Link href="/search/character">プレイキャラ検索</Link>
			</div>
		</div>
		<div className="flex-1">
			<div
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
				<Link href="/search/memory">メモリー検索</Link>
			</div>
		</div>
	</div>
	);
};
