import { getMemory } from "@/app/_lib/handler/memory";
import { Skills } from "@/app/search/_components/skills";

export default function Page({ params }: { params: { id: string } }) {
	const response = getMemory(params.id);

	return response.then((value) => {
		const memory = value.memories;
		return (
			<div className="min-h-screen container mx-auto py-1 px-3">
				<div className="py-1">{`[${memory.rarity.toUpperCase()}] ${memory.name}`}</div>
				<div className="py-1">
					<Skills skills={memory.skills} />
				</div>
				<div className="py-2">
					<p className="text-orange text-xs">スキルDX Lv.1</p>

					<div className="
							mt-1
							p-1
							text-xs
							bg-light-gray
							rounded-lg
						">{memory.description.skilldxlv1}</div>

				</div>
			</div>
		);
	})
}