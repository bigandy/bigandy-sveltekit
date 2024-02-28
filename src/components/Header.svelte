<header>
	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/blog">Blog</a>
	</nav>
</header>

<style>
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
		text-align: center;
		text-decoration: none;
		color: inherit;
		padding: 1rem;

		&:hover {
			background: hotpink;
			color: white;
		}
	}
</style>
