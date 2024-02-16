<script>
	export let date;

	const publishedDate = new Date(date).toLocaleDateString('en-GB');
</script>

<p>Published: {publishedDate}</p>
