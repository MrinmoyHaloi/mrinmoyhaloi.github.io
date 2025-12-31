<script lang="ts">
	import '../app.scss';
	import 'iconify-icon';
	let { children } = $props();
</script>

{@render children()}

<footer>
	<p class="p-4 text-center">Crafted by <b class="text-white">Mrinmoy Haloi</b> 2026</p>
	<a href="#home" class="text-white hover:text-blue-500"
		>Back to top <iconify-icon icon="fa6-solid:arrow-up"></iconify-icon> </a>
</footer>

<style lang="scss">
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
			right: 1%;
			display: flex;
			align-items: center;
			gap: 0.5rem;
			&:hover {
				color: hsl(180, 100%, 35%);
			}
		}
		p {
			width: fit-content;
			font-weight: 500;
			padding: 0;
			color: #d5d5d5;
		}
	}
</style>
