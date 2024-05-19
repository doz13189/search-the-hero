"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

export const Menu: FC = ({
}) => {
	const pathname = usePathname();
	const isHeroPage = pathname.includes("/search/hero")
	return (
		<div className="flex">
			<div className="flex-1">
				<Link
					href="/search/hero"
					className={`
					m-1
					p-2
					flex
					justify-center
					border-2
					border-grey
					rounded-lg
					${isHeroPage ? "bg-orange" : "bg-soft-orange text-grey"}
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
					${isHeroPage ? "bg-soft-orange text-grey" : "bg-orange"}
					`}
				>
					メモリー検索
				</Link>
			</div>
		</div>
	);
};
