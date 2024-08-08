import { MemorySchema } from "@/app/_data/memory/schema";
import { FC } from "react";
import { z } from "zod";
import { NoData } from "@/app/search/_components/no-data";
import Link from "next/link";
import { Skills } from "@/app/search/_components/skills";
import Image from "next/image";
import { getImageNameByRarity } from "@/app/search/_lib/utils";
import { AllPage, BackPage, NextPage } from "@/app/search/_components/paging";
import { queryMemories } from "@/app/_lib/query/memories";

export const Memory: FC<{ memory: z.infer<typeof MemorySchema> }> = ({
	memory,
}) => {
	return (
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
			<Skills skills={[...memory.skills]} />
		</Link>
	);
};

export const Memories: FC<{
	args: {
		searchParams: { rarity: string; skills: string, name: string, offset: string, limit: string };
	};
}> = ({ args }) => {
	const argRarity = args.searchParams?.rarity;
	const argSkills = args.searchParams?.skills;
	const argName = args.searchParams?.name;

	const argOffset = args.searchParams?.offset || "0";
	const argLimit = args.searchParams?.limit || "10";

	const response = queryMemories({
		rarity: argRarity, 
		skills: argSkills,
		name: argName,
		offset: argOffset,
		limit: argLimit
	});

	return response
		.then((value) => {
			const result = value.result;
			const memories = value.memories;
			if (!memories) {
				return <NoData />;
			}

			if (memories.length === 0) {
				return <NoData />;
			}

			return (
				<>
					<div className="flex my-3">
						<div className="mr-2">
							<p className="text-xs">
								{`検索結果: ${result.total} 件`}
							</p>
						</div>
						<div className="mr-2">
							<p className="text-xs">
								{`表示件数: ${result.offset + 1}-${result.offset + result.limit >= result.total ? result.total : result.offset + result.limit} 件`}
							</p>
						</div>
					</div>

					{memories.map((memory) =>
						<div key={memory.id} className="p-2 mb-1 bg-very-light-gray rounded-md">
							<Memory key={memory.id} memory={memory} />
						</div>)}

					<div className="flex my-3">
						<div className="flex-1">
							<BackPage pathname="memory" total={result.total} rarity={argRarity} skills={argSkills?.split(",")} name={argName}  offset={argOffset} limit={argLimit} />
						</div>
						<div className="flex-1">
							<NextPage pathname="memory" total={result.total} rarity={argRarity} skills={argSkills?.split(",")} name={argName} offset={argOffset} limit={argLimit} />
						</div>
						<div className="flex-1">
							<AllPage pathname="memory" total={result.total} rarity={argRarity} skills={argSkills?.split(",")} name={argName} offset={argOffset} limit={argLimit} />
						</div>
					</div>
				</>
			)
		})
		.catch((err) => {
			console.error(err);
			return <NoData />;
		});
};
