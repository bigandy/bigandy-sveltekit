import { json } from '@sveltejs/kit';

const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/content/blog/**/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.replace('/src/content', '').replace('.md', '');

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};

export const GET = async () => {
	const allPosts = await fetchMarkdownPosts();

	const pastPosts = allPosts.filter((post) => {
		const now = new Date();
		return new Date(post.meta.date) <= now;
	});

	const sortedPosts = pastPosts.sort((a, b) => {
		return Number(new Date(b.meta.date)) - Number(new Date(a.meta.date));
	});

	return json(sortedPosts);
};
