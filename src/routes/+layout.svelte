<script>
	import '../app.scss';
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

{@render children?.()}

<footer>
	<p>Made by myself, Mrinmoy Haloi 2024</p>
</footer>
