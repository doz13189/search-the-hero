import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			textColor: {
				"orange": "#F8784A",
				"grey": "rgba(0, 0, 0, 0.6)",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			backgroundColor: {
				"yellow": "#FAC00F",
				"orange": "#F8784A",
				"soft-orange": "#FFA07A",
				"grey": "rgba(0, 0, 0, 0.6)",
				"light-gray": "rgba(0, 0, 0, 0.1)",
				"very-light-gray": "rgba(0, 0, 0, 0.05)",
			},
			borderColor: {
				"grey": "rgba(0, 0, 0, 0.6)",
			},
		},
	},
	plugins: [],
};
export default config;
