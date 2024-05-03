import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			backgroundColor: {
				"orange": "#F8784A",
				"grey": "rgba(0, 0, 0, 0.6)",
				"light-gray": "rgba(0, 0, 0, 0.1)",
			},
			borderColor: {
				"grey": "rgba(0, 0, 0, 0.6)",
			},
		},
	},
	plugins: [],
};
export default config;
