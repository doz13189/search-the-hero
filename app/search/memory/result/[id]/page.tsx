import { MemoryDetailContents } from "../_components/memoryDetailContents";
import { Suspense } from "react";
import { Loading } from "@/app/search/_components/Loading";
import { queryMemory } from "@/app/_lib/query/memory";
import { memories } from "@/app/_data/memory/object";

export async function generateStaticParams() {
	return memories.memories.map((memory) => ({
		params: {
			id: memory.id,
		},
	}));
  }

export default function Page({ params }: { params: { id: string } }) {
	const response = queryMemory(params.id);
	return response.then((memory) => {
		return (
			<Suspense fallback={<Loading />}>
				<MemoryDetailContents memory={memory} />
			</Suspense>
		);
	})
}