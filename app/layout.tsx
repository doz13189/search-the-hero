import type { Metadata } from "next";
import { RocknRoll_One } from "next/font/google";
import "./globals.css";

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
	return (
		<html lang="ja">
			<body className={font.className}>
				<div className="container mx-auto">
					<div className="
						m-1
						p-2
						flex
						justify-center
						bg-orange
						border-2
						border-grey
						rounded-lg
						"
					>
						<span>Search The Hero</span>
					</div>
					{children}
				</div>
			</body>
		</html>
	);
}
