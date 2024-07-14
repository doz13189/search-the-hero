import { getMemory } from "@/app/_lib/handler/memory";
import { MemoryDetailContents } from "../_components/memoryDetailContents";
import { Suspense } from "react";
import { Loading } from "@/app/search/_components/Loading";

export default function Page({ params }: { params: { id: string } }) {
	const response = getMemory(params.id);

	return response.then((value) => {
		const memory = value.memories;
		return (
			<Suspense fallback={<Loading />}>
				<MemoryDetailContents memory={memory} />
			</Suspense>
		);
	})
}