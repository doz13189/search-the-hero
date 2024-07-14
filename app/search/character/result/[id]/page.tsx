import { getCharacter } from "@/app/_lib/handler/character";
import { CharacterDetailContents } from "../_components/characterDetailContents";
import { Suspense } from "react";
import { Loading } from "@/app/search/_components/Loading";

export default function Page({ params }: { params: { id: string } }) {

	const response = getCharacter(params.id);

	return response.then((value) => {
		const character = value.characters;
		return (
			<Suspense fallback={<Loading />}>
				<CharacterDetailContents character={character} />
			</Suspense>
		);
	})
}