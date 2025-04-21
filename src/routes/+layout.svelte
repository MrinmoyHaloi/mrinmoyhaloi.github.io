<script lang="ts">
	import '../app.scss';
	let { children } = $props();
</script>

{@render children()}

<footer>
	<p class="p-4 text-center">Mrinmoy Haloi 2025</p>
</footer>

<style lang="scss">
footer {
	display: grid;
	place-items: center;
	padding: 1rem;
	outline: 1px solid #155e75;
	p {
		width: fit-content;
		font-size: 1rem;
		font-weight: 500;
		padding: 0;
		cursor: default;
	}
}
</style>
