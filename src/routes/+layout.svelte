<script lang="ts">
	import '../app.scss';
	import 'iconify-icon';
	let { children } = $props();
</script>

<nav>
	<h1 class="logo">Mrinmoy Haloi</h1>
</nav>

{@render children()}

<footer>
	<p class="p-4 text-center">
		<span>Crafted by</span> <span><b class="text-white">Mrinmoy Haloi</b> 2026</span>
	</p>
	<a href="#home" class="text-white hover:text-blue-500" aria-label="Back to top link"
		><iconify-icon icon="fa6-solid:arrow-up"></iconify-icon>
	</a>
</footer>

<style lang="scss">
	nav {
		position: fixed;
		padding: 1rem 0;
		z-index: 1;
		width: 85%;
		left: 0;
		right: 0;
		margin-inline: auto;
		@media (width > 500px) {
			width: 95%;
		}
		h1 {
			display: inline-block;
			font-size: 1.5rem;
			font-weight: 600;
			padding: 0.2rem 0.8rem;
			border-radius: 50rem;
			corner-shape: squircle;
			backdrop-filter: blur(7px);
			background-color: rgb(0, 115, 115, 0.6);
			cursor: pointer;
			user-select: none;
			outline: none;
			box-shadow: 0 5px 25px 10px rgba(0, 59, 59, 0.1);
			@media (width < 500px) {
				font-size: 1.2rem;
			}
		}
	}
	footer {
		position: relative;
		display: grid;
		place-items: center;
		padding: 1rem;
		outline: 1px solid #155e75;
		background: radial-gradient(circle, #092e3a 0%, #0b111f 40%);
		a {
			color: #d5d5d5;
			position: absolute;
			right: 3%;
			display: flex;
			align-items: center;
			gap: 0.5rem;
			@media (width < 500px) {
				right: 5%;
			}
			&:hover {
				color: hsl(180, 100%, 35%);
			}
		}
		p {
			width: fit-content;
			font-weight: 500;
			padding: 0;
			color: #d5d5d5;
			@media (width < 500px) {
				display: grid;
				line-height: 2rem;
			}
		}
	}
</style>
