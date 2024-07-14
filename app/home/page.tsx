import { NewCharacter } from "./_components/new-character";
import { NewMemory } from "./_components/new-memory";

export default function Page() {
	return (
		<div className="min-h-screen container mx-auto py-1 px-3">

			<div className="py-2">
				<p className="text-orange">お知らせ</p>
				<div className="
					mt-1
					p-1
					bg-very-light-gray
					rounded-lg
				">
					<p className="text-xs">{`2024/07/15`}</p>
					<p className="text-xs">{`以下のデータ追加に伴うアップデートを実施しました。`}</p>
					{["1185006"].map((id) => (
						<div key={id} className="m-2">
							<NewCharacter key={id} id={id} />
						</div>
					))}
					{["2400140", "2300191", "2300190"].map((id) => (
						<div key={id} className="m-2">
							<NewMemory key={id} id={id} />
						</div>
					))}
				</div>
			</div>

			<div className="py-2">
				<p className="text-orange">このサービスについて</p>

				<div className="
					text-xs
					mt-1
					p-1
					bg-very-light-gray
					rounded-lg
				">{"僕のヒーローアカデミア ULTRA IMPACT(ヒロトラ)のプレイキャラ/メモリーを検索することができる非公式サービスです。また、リーク情報は扱いません。"}
				</div>
			</div>
		</div>

	);
}