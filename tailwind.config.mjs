/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	safelist: [
		{
			pattern: /grid-cols-./,
			variants: ['lg', 'md']
		},
	  ],
	theme: {},
	plugins: [],
}
