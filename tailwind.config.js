/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'selector',
	theme: {
		extend: {
			colors: {
				primary: {
					900: '#17153B',
					100: '#293548',
				},
				navy: '#2E236C',
				lightNavy: '#433D8B',
				purple: '#C8ACD6',
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
			},
		},
	},
	plugins: [],
};
