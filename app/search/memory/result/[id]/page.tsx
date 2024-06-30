import { getMemory } from "@/app/_lib/handler/memory";
import { MemoryDetailContents } from "../_components/memoryDetailContents";

export default function Page({ params }: { params: { id: string } }) {
	const response = getMemory(params.id);

	return response.then((value) => {
		const memory = value.memories;
		return (
			<MemoryDetailContents memory={memory} />
		);
	})
}