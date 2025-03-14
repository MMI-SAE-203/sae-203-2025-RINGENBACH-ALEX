/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./src/css/Base.css', // Ajoutez ce chemin pour inclure votre fichier CSS personnalisé
	],
	theme: {
		extend: {
			// Ajoutez ici vos styles personnalisés si nécessaire
			colors: {
				'custom-green': '#10B981',
				'custom-orange': '#F97316',
			},
			fontSize: {
				'6xl': '4rem',
				'8xl': '6rem',
			},
			spacing: {
				'100': '25rem',
			},
		},
	},
	plugins: [],
}
