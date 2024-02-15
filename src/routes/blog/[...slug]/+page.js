import { error } from '@sveltejs/kit';

// src/routes/blog/[slug]/+page.js
export async function load({ url }) {
	
	const post = await import(
		/* @vite-ignore */
		`/src/routes${url.pathname}.md`
	);

	if (post) {
		const { title, date } = post.metadata;
		const content = post.default;

		return {
			content,
			title,
			date
		};
	}
	error(414, "Post not found");

}
