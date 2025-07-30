/** @type {import('tailwindcss').Config} */

import { fontFamily } from 'tailwindcss/defaultTheme';
module.exports = {
    darkMode: ["class"],
    content: [
		'./pages/**/*.{js,ts,jsx,tsx,html}',
    	'./components/**/*.{js,ts,jsx,tsx,html}',
    	'./app/**/*.{js,ts,jsx,tsx,html}',
		'./src/**/*.{js,ts,jsx,tsx,html}',
	],
	prefix: "",
  	theme: {
	container:{
	 center: true,
	 padding: "15px",
		},
		screens: {
		  sm: '640px',
		  md: '768px',
		  lg: '960px',
		  xl: '1200px',
		},
		fontFamily:{
			primary: ['var(--font-jetbrainsMono)', ...fontFamily.mono],

		},
  		extend: {

			colors: {
			primary: "#000000",
			accent: {
				DEFAULT: "#00ff99",
				hover: "#00e187",
			}
		},


  		
  		keyframes: {

		},

		Animation: {

		},
  	},
  },
  plugins: [require("tailwindcss-animate")],
};

