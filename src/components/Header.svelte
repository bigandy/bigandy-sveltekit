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

		padding: 0;
	}

	nav {
		justify-content: space-around;
		display: flex;
		flex-wrap: wrap;
	}

	a {
		flex: 1;
		// background: red;
		text-align: center;
		// display: inline-block;
		text-decoration: none;
		color: inherit;
		padding: 1rem;

		&:hover {
			background: hotpink;
			color: white;
		}
	}
</style>
