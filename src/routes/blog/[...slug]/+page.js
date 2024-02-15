import { error } from '@sveltejs/kit';

// src/routes/blog/[slug]/+page.js
export async function load({ url }) {
	
	const fileName = url.pathname.replace('/blog', '');

	const post = await import(
		/* @vite-ignore */
		`../${fileName}.md`
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
