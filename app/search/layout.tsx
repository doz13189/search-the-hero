export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<div
				className="
						mx-1
						px-2
						"
			>
				<p className="text-red-500 text-xs">
					今はまだ...全てのメモリーのデータは入っていません
				</p>
			</div>

			{children}
		</div>
	);
}
