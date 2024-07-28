/** @type {import('tailwindcss').Config} */
const flowbite = require('flowbite-react/tailwind');
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
	darkMode: 'selector',
	theme: {
		extend: {
			colors: {
				primary: {
					900: '#4f8aff',
					800: '#6197ff',
					700: '#72a3ff',
					600: '#83afff',
					500: '#95bbff',
					400: '#a6c7ff',
					300: '#b8d2ff',
					200: '#c9deff',
					100: '#dbe9ff',
					50: '#edf4ff',
				},
				secondry: {
					900: '#377eb3',
					800: '#4d8bbb',
					700: '#6297c3',
					600: '#75a4cb',
					500: '#89b1d2',
					400: '##9cbeda',
					300: '##b0cbe2',
					200: '##c3d8e9',
					100: '##d7e5f0',
					50: '##ebf2f8',
				},
				shades: {
					primary: {
						900: '#4f8aff',
						800: '#4477de',
						700: '#3865be',
						600: '#2e539e',
						500: '#234280',
						400: '#193263',
						300: '#102248',
						200: '#07142e',
						100: '#020716',
						50: '#000103',
					},
					secondry: {
						900: '#377eb3',
						800: '#2e6d9b',
						700: '#265c84',
						600: '#1e4c6e',
						500: '#163c58',
						400: '#0f2d43',
						300: '#081f2f',
						200: '#03111d',
						100: '#01050c',
						50: '#000101',
					},
				},
			},
			screens: {
				sm: '375px',
				md: '768px',
				lg: '976px',
				xl: '1440px',
			},
			container: {
				center: true,
				padding: {
					default: '1rem',
					sm: '.2rem',
					lg: '2rem',
					xl: '2.5rem',
				},
			},
			spacing: {
				pageYpadding: '2rem',
				customPH: '72px',
			},
		},
	},
	plugins: [flowbite.plugin()],
};
