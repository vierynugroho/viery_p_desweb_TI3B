/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			// Kustomisasi Tailwind
			colors: {
				mycolor: {
					DEFAULT: '#7b99b9',
					dark: '#517dad',
				},
			},
		},
	},
	plugins: [],
};
