import { error } from '@sveltejs/kit';

// src/routes/blog/[slug]/+page.js
export async function load({ url }) {
	const sections = url.pathname.split('/').filter(Boolean);
	let post;

	if (sections.length === 4) {
		post = await import(
			`../../../content/blog/${sections.at(-3)}/${sections.at(-2)}/${sections.at(-1)}.md`
		);
	} else if (sections.length === 3) {
		post = await import(`../../../content/blog/${sections.at(-2)}/${sections.at(-1)}.md`);
	} else {
		post = await import(`../../../content/blog/${sections.at(-1)}.md`);
	}

	if (post) {
		const { title, date } = post.metadata;
		const content = post.default;

		return {
			content,
			title,
			date
		};
	}
	error(414, 'Post not found');
}
