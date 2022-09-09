<!-- +layout.svelte -->
<script>
	import Header from '$components/Header/index.svelte';
	import '$styles/style.scss';
</script>

<Header />

<main>
	<slot />
</main>

<footer>&copy; Andrew JD Hudson</footer>
