import { MemorySchema } from "@/app/_data/memory/schema";
import { FC } from "react";
import { z } from "zod";
import { getMemories } from "../../../../_lib/handler/memories";
import { NoData } from "@/app/search/_components/no-data";
import Link from "next/link";
import { Skills } from "@/app/search/_components/skills";
import Image from "next/image";
import { getImageNameByRarity } from "@/app/search/_lib/utils";

export const Memory: FC<{ memory: z.infer<typeof MemorySchema> }> = ({
	memory,
}) => {
	return (
		<Link href={`/search/memory/result/${memory.id}`}>
			<div className="flex my-1">
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
						width={15}
						height={15}
						alt="memory icon"
						className="absolute top-0 left-0"
					/>
				</div>
				<div className="content-center mx-3">{`${memory.name}`}</div>
			</div>
			<Skills skills={[...memory.skills]} />
		</Link>
	);
};

export const Memories: FC<{
	args: {
		searchParams: { rarity: string; skills: string };
	};
}> = ({ args }) => {
	const argRarity = args.searchParams?.rarity;
	const argSkills = args.searchParams?.skills;

	const response = getMemories(argRarity, argSkills);
	return response
		.then((value) => {
			const memories = value.memories;
			if (!memories) {
				return <NoData />;
			}

			if (memories.length === 0) {
				return <NoData />;
			}

			return memories.map((memory) => <div className="mb-3"><Memory memory={memory} /></div>);
		})
		.catch((err) => {
			console.error(err);
			return <NoData />;
		});
};
