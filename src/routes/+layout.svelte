<!-- +layout.svelte -->
<script>
	import Header from '$components/Header.svelte';
	import '$styles/style.scss';
</script>

<Header />

<main>
	<slot />
</main>

<footer>&copy; Andrew JD Hudson</footer>
