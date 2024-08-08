import { CharacterDetailContents } from "../_components/characterDetailContents";
import { Suspense } from "react";
import { Loading } from "@/app/search/_components/Loading";
import { queryCharacter } from "@/app/_lib/query/character";

export default function Page({ params }: { params: { id: string } }) {
	const response = queryCharacter(params.id);
	return response.then((character) => {
		return (
			<Suspense fallback={<Loading />}>
				<CharacterDetailContents character={character} />
			</Suspense>
		);
	})
}