// import { SendByApi } from "./_components/send-by-api";
import Link from "next/link";
import { SendByServerActions } from "./_components/send-by-server-actions";

export default async function Message() {
	return (
		<main className="py-1 px-3">
			<div className="mb-3">
				{"message"}
				{/* <SendByApi /> */}
				<SendByServerActions />
			</div>

			<div className="fixed bottom-3 left-1">
				<Link
					href={"/search"}
					className="
						my-1
						mx-1
						px-4
						py-1
						text-sm
						bg-yellow
						border-2
						border-grey
						rounded-lg
					"
				>
					Back
				</Link>
			</div>
		</main>
	);
}
