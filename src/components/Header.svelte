<header>
	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/blog">Blog</a>
	</nav>
</header>

<style lang="scss">
	header {
		background: lightskyblue;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0;
	}

	a {
		display: inline-block;
		text-decoration: none;
		color: inherit;
		margin-inline-end: 1rem;
		padding: 1rem;

		&:hover {
			background: red;
			color: white;
		}
	}
</style>
