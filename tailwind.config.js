/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {

		fontFamily: {
			display: ["Poppins", "sans-serif"],
		},
		extend: {
			lineHeight: {
				'leading-2': '.25rem'
			}
		},
	},
	plugins: [],
}

