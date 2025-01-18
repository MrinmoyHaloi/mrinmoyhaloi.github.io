<script lang="ts">
	import '../app.scss';
	let { children } = $props();
</script>

{@render children()}

<footer>
	<p class="text-center p-4">Mrinmoy Haloi 2025</p>
</footer>

<style lang="scss">
footer {
	display: grid;
	place-items: center;
	padding: 1rem;
	p {
		width: fit-content;
		font-size: 1rem;
		font-weight: 500;
		color: hsl(180, 78%, 43%);
		padding: 0;
		cursor: default;
		&:hover {
			color: hsl(180, 78%, 63%);
		}
	}
}
</style>