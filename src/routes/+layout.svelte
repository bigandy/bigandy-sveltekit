<!-- +layout.svelte -->
<script>
	import "@fontsource/inter/900.css"; 
	import "@fontsource/inter/700.css"; 
	import "@fontsource/inter"; // this is the 400 weight 
	import Header from '$components/Header.svelte';
	import '$styles/style.scss';

	const { children } = $props();
</script>

<Header />

<main>
	{@render children()}
</main>

<footer>&copy; Andrew JD Hudson</footer>
