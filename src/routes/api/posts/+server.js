import { fetchMarkdownPosts } from '$utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allPosts = await fetchMarkdownPosts();

	const pastPosts = allPosts.filter(post => {
		const now = new Date();
		return new Date(post.meta.date) <= now;
	})

	const removeDraftPostsInProduction = pastPosts.filter(post => {
		return import.meta.env.DEV || !post.meta.draft;
	})

	const sortedPosts = removeDraftPostsInProduction.sort((a, b) => {
		return Number(new Date(b.meta.date)) - Number(new Date(a.meta.date));
	});

	return json(sortedPosts);
};
