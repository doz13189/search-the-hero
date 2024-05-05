import { SendByApi } from "./_components/send-by-api";
import { SendByServerActions } from "./_components/send-by-server-actions";

export default async function Message() {
	return (
		<main className="py-1 px-3">
			<div className="mb-3">
				{"message"}
				<SendByApi />
				<SendByServerActions />
			</div>
		</main>
	);
}
