// import Link from "next/link";
import SearchComponent from "./_components/search";

export default async function Search(args: {
	searchParams: { rarity: string; tags: string };
}) {
	return (
		<div className="py-1 px-3">
			<div className="mb-3">
				<SearchComponent args={args} />
			</div>

			{/*
			<div className="fixed bottom-3 left-1">
				<Link
					href={"/message"}
					className="
						my-1
						mx-1
						px-4
						py-1
						text-sm
						bg-yellow
						border-2
						border-grey
						rounded-lg
					"
				>
					Question
				</Link>
			</div>
			*/}
		</div>
	);
}
