import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";
import { RocknRoll_One } from "next/font/google";
import "./globals.css";
import { Menu } from "./search/_components/menu";
import Head from 'next/head';

const font = RocknRoll_One({
	weight: ["400"],
	subsets: ["cyrillic"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const serviceTitle = "Search the hero";
	const serviceDescription = "僕のヒーローアカデミア ULTRA IMPACT(ヒロトラ)のプレイキャラ/メモリーを検索することができる非公式サービスです。また、リーク情報は扱いません。";
	const serviceImageUrl = "https://search-the-hero.vercel.app/_next/image?url=%2Fmemory-image%2Fmemory_l_2400152.webp&w=1920&q=75";
	const serviceUrl = "https://search-the-hero.vercel.app";

	return (
		<html lang="ja">
			<Head>
				<title>{serviceTitle}</title>
				<meta name="description" content={serviceDescription} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content={serviceUrl} />
				<meta property="og:title" content={serviceTitle} />
				<meta property="og:description" content={serviceDescription} />
				<meta property="og:image" content={serviceImageUrl} />
				<meta property="og:image:width" content={"800"} />
				<meta property="og:image:height" content={"600"} />
				<meta property="og:image:alt" content={"Og Image Alt"} />
				<meta name="twitter:card" content={"summary"} />
				<meta name="twitter:title" content={serviceTitle} />
				<meta name="twitter:description" content={serviceDescription} />
				<meta name="twitter:image" content={serviceImageUrl} />
				<meta name="twitter:image:alt" content={"Twitter Image Alt"} />
			</Head>
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
						bg-very-light-gray
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
					<Analytics />
				</div>
			</body>
		</html>
	);
}
