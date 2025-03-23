<script>
	let { text, href, className = '' } = $props();
</script>

<a {href} class={className}>{text}</a>

<style lang="scss">
	a {
		display: flex;
		gap: 0.4em;
		align-items: center;
		outline: 1px solid hsl(0, 0%, 24%);
		padding: 0.5rem 1rem;
		border-radius: 0.3rem;
		font-weight: 400;
		font-size: 1rem;
		@media screen and (width < 768px) {
			font-size: 0.9rem !important;
		}
	}
</style>
