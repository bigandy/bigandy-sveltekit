import netlify from '@sveltejs/adapter-netlify';

// import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: netlify({ edge: true }),
		alias: {
			$lib: './src/lib',
			$components: './src/components',
			$styles: './src/styles',
			$utils: './src/utils'
		}
	},

	extensions: ['.svelte', '.md'],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.md']
		})
	]
};

export default config;
