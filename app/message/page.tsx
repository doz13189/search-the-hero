// import { SendByApi } from "./_components/send-by-api";
import Link from "next/link";
import { FC } from "react";
import { z } from "zod";
import { MessageSchema } from "../_data/message/schema";
import { getMessage } from "../_lib/handler/message";
import { SendByServerActions } from "./_components/send-by-server-actions";

const MessageDetail: FC<{ message: z.infer<typeof MessageSchema> }> = ({
	message,
}) => {
	return (
		<div>
			<div>{message.created}</div>
			<div>{message.name}</div>
			<div>{message.message}</div>
		</div>
	);
};

const Messages: FC = () => {
	const response = getMessage();
	return response
		.then((value) => {
			const messages = value.messages;
			if (!messages) {
				return <>No Data</>;
			}

			if (messages.length === 0) {
				return <>No Data</>;
			}

			return messages.map((message) => <MessageDetail message={message} />);
		})
		.catch((err) => {
			console.error(err);
			return <>No Data</>;
		});
};

export default async function Message() {
	return (
		<main className="py-1 px-3">
			<div className="mb-3">
				{/* <SendByApi /> */}
				<SendByServerActions />
			</div>

			<Messages />

			<div className="fixed bottom-3 left-1">
				<Link
					href={"/search/hero"}
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
