import { getMemory } from "@/app/_lib/handler/memory";
import { Loading } from "@/app/search/_components/Loading";
import { getImageNameByRarity } from "@/app/search/_lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC, Suspense } from "react";

export const NewMemory: FC<{ id: string }> = ({
	id
}) => {
	const response = getMemory(id);

	return response.then((value) => {
		const memory = value.memories;
		
		return (
			<Suspense fallback={<Loading />}>
				<Link href={`/search/memory/result/${memory.id}`}>
					<div className="flex">
						<div className="relative w-12 h-12">
							<Image
								src={`/bg/chara_bg_10${getImageNameByRarity(memory.rarity)}.webp`}
								width={50}
								height={50}
								alt="memory icon"
								className="absolute top-0 left-0"
							/>
							<Image
								src={`/memory-icon/icon_m_${memory.id}.webp`}
								width={50}
								height={50}
								alt="memory icon"
								className="absolute top-0 left-0"
							/>
							<Image
								src={`/frame/chara_frame_10${getImageNameByRarity(memory.rarity)}.webp`}
								width={50}
								height={50}
								alt="memory icon"
								className="absolute top-0 left-0"
							/>
							<Image
								src={`/rarity/card_rarity_0${getImageNameByRarity(memory.rarity)}.webp`}
								width={20}
								height={20}
								alt="memory icon"
								className="absolute top-0 left-0"
							/>
						</div>
						<div className="content-center mx-3">{`${memory.name}`}</div>
					</div>
				</Link>
			</Suspense>
		);
	})
};