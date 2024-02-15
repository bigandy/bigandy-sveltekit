<!-- src/routes/blog/+page.svelte -->
<script>

	import Published from '$components/Published.svelte';
	
	export let data;

	
</script>

<h1>Blog</h1>

<ul>
	{#each data.posts as post}
		<li>
			<h2>
				<a href={post.path}>
					{post.meta.title}
				</a>
			</h2>
			<Published date={post.meta.date} />
			<hr />
		</li>
	{/each}
</ul>
