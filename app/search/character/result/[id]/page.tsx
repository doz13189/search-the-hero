import { getCharacter } from "@/app/_lib/handler/character";
import { CharacterDetailContents } from "../_components/characterDetailContents";

export default function Page({ params }: { params: { id: string } }) {

	const response = getCharacter(params.id);

	return response.then((value) => {
		const character = value.characters;
		return (
			<CharacterDetailContents character={character} />
		);

	})
}