import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		// Static adapter: prerenders the whole site to plain HTML/CSS/JS for GitHub Pages.
		// See https://svelte.dev/docs/kit/adapter-static for more information.
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})
		// Deploying as a GitHub *user* page (mbriones98.github.io) means the site is served
		// from the domain root, so no `paths.base` is required.
	}
};

export default config;
