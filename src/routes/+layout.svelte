<script lang="ts">
	import '../app.scss';
	let { children } = $props();
</script>

{@render children()}

<footer>
	<p class="text-center p-4">Made by myself, Mrinmoy Haloi 2024</p>
</footer>

<style lang="scss">
footer {
	p {
		font-size: 1rem;
	}
}
</style>