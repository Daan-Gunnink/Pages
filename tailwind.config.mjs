/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	safelist: [
		{
			pattern: /grid-cols-./,
			variants: ['lg', 'md']
		},
		'col-span-full',
		'col-span-1',
		'w-1/2',
		'w-1/3',
		'w-1/4',
		'text-left',
		'text-center',
		'text-right',
		'justify-self-start',
		'justify-self-center',
		'justify-self-end',
		'self-start',
		'self-center',
		'self-end'
	],
	theme: {},
	plugins: [],
}
