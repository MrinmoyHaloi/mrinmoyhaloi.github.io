<script lang="ts">
	import Icon from '@iconify/svelte';
	
	let { languages, tools } = $props();
</script>

<div class="skills mx-auto sm:w-10/12 lg:w-full">
	<h2>Skills</h2>
	<h3>Languages and Frameworks</h3>
	<ul class="mb-8">
		{#each languages as lang}
			<li class="skill">
				<Icon icon={lang.icon} />
				{lang.name}
			</li>
		{/each}
	</ul>
	<h3>Tools</h3>
	<ul>
		{#each tools as tool}
			{#if tool.name === 'Linux'}
					<li class="popover">
						<Icon icon={tool.icon} />
						{tool.name}
						<div class="popover-content">
							<p>I use Fedora BTW!</p>
						</div>
					</li>
			{:else}
				<li>
					<Icon icon={tool.icon} />
					{tool.name}
				</li>
			{/if}
		{/each}
	</ul>
</div>

<style lang="scss">
	.skills {
		h3 {
			font-size: 1.2rem;
			margin-block: 1rem;
		}
		ul {
			display: flex;
			flex-wrap: wrap;
			gap: 1rem;
			.popover {
				position: relative;
				&:hover .popover-content {
					opacity: 1;
					visibility: visible;
				}
				.popover-content {
					display: flex;
					align-items: center;
					gap: 0.5rem;
					position: absolute;
					top: 0;
					left: 50%;
					transform: translateX(-50%) translateY(-120%);
					width: max-content;
					padding: 0 0.7rem;
					background-color: #12242e;
					outline: #4684a5 solid 2px;
					color: hsl(0, 0%, 100%);
					border-radius: 0.7rem;
					opacity: 0;
					visibility: hidden;
					transition: all 0.3s;
					p {
						font-size: 1rem;
						font-weight: 500;
					}
				}
			}
			li {
				display: flex;
				align-items: center;
				gap: 0.3em;
				list-style-type: none;
				padding: 0.2rem 0.7rem;
				font-weight: 500;
				color: black;
				background-color: white;
				border-radius: 50rem;
				transition: background-color 0.3s;
				cursor: pointer;
				@media screen and (width < 768px) {
					font-size: 0.9rem;
					padding: 0.1rem 0.5rem;
				}
				&:hover {
					background-color: rgb(188, 188, 188);
				}
				:global(svg) {
					width: 1.2em;
					height: 1.2em;
				}
			}
		}
	}
</style>
