"use client";

import { writeMessage } from "../actions";
import { useFormState } from "react-dom";

const initialState = {
	message: "",
};


export const SendByServerActions = () => {
	const [state, formAction] = useFormState(writeMessage, initialState);

	return (
		<form action={formAction}>
			<label htmlFor="message">Enter Task</label>
			<input type="text" id="message" name="message" required />
			<button type="submit" >
				Add
			</button>
			<p aria-live="polite" className="sr-only" role="status">
				{state?.message}
			</p>
		</form>
	);
};
