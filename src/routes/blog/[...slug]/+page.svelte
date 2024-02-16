<!-- src/routes/[slug]/+page.svelte -->
<script>
	import Published from '$components/Published.svelte';

	export let data;

	const { date, title } = data;
</script>

<article>
	<h1>{title}</h1>
	<Published {date} />
	<svelte:component this={data.content} />
</article>
