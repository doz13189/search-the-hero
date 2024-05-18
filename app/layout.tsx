import type { Metadata } from "next";
import { RocknRoll_One } from "next/font/google";
import "./globals.css";
import { Menu } from "./search/_components/menu";

const font = RocknRoll_One({
	weight: ["400"],
	subsets: ["cyrillic"],
});

export const metadata: Metadata = {
	title: "My Hero Academia",
	description: "ULTRA IMPACT",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// FIXME: おそらくキャッシュの問題でプレイキャラ検索/メモリ検索の切り替え時に色が変わらない
	// const headersList = headers();
	// const currentUrl = headersList.get("x-url")
	// const isCharacterSearchPage = currentUrl?.includes("search/character")

	return (
		<html lang="ja">
			<body className={font.className}>
				<div className="container mx-auto">
					{/*
					<div
						className="
						my-1
						py-2
						flex
						justify-center
						text-orange
						bg-light-gray
						border-t-2
						border-b-2
						border-grey
						"
					>
						<Link href="/search">Search the hero</Link>
					</div>
					*/}

					<Menu />

					{children}
				</div>
			</body>
		</html>
	);
}
