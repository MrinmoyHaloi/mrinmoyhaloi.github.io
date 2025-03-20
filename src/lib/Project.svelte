<script lang="ts">
	import Icon from '@iconify/svelte';

	let { name, description, skills, link, image } = $props();
</script>

<div class="project">
	<img src={image} alt="" class="" />
	<div class="project-details">
		<div>
			<h3>{name}</h3>
			<p>{description}</p>
			<div class="skills">
				<ul>
					{#each skills as skill}
						<li>
							<Icon icon={skill.icon} />
							{skill.name}
						</li>
					{/each}
				</ul>
			</div>
		</div>
		<a href="{link}" class="project-btn"
			><Icon icon="lucide:external-link" />View project</a>
	</div>
</div>

<style lang="scss">
	.project {
		position: relative;
		overflow: hidden;
		background-color: #000;
		border-radius: 0.5rem;
		box-shadow: 0 0 0.2rem rgba(0, 230, 230, 0.545) inset;
		transition: all 0.1s;
		&:hover {
			box-shadow: 0 0 5rem rgba(0, 230, 230, 0.345) inset;
			img {
				transform: scale(1.03);
			}
			.project-details {
				.project-btn {
					opacity: 100%;
					transform: translateY(0);
				}
			}
		}
		img {
			transition: all 0.3s;
			mask-image: linear-gradient(to top, transparent 15%, #000 100%);
			@media screen and (width < 768px) {
				height: 100%;
				object-fit: cover;
				object-position: 0%;
			}
		}
		.project-details {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			padding: 1rem 1.5rem;
			transition: all 0.3s;
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			@media screen and (width < 768px) {
				flex-direction: column;
				align-items: flex-start;
				gap: 1rem;
				.project-btn {
					opacity: 100% !important;
					transform: translateY(0) !important;
				}
			}
			// background-color: rebeccapurple;
			h3 {
				font-size: 1.7rem;
				font-weight: 600;
			}

			p {
				width: 30rem;
				font-size: 1.1rem;
				line-height: normal;
				color: hsl(0, 0%, 63%);
			}
			@media screen and (width < 768px) {
				h3 {
					font-size: 1.3rem;
				}
				p {
					width: 100%;
					font-size: 1rem;
				}
			}
			.skills {
				margin-top: 1rem;
				ul {
					display: flex;
					flex-wrap: wrap;
					gap: 1rem;
					li {
						@media screen and (width < 768px) {
							font-size: 0.9rem;
							padding: 0.1rem 0.5rem;
						}
						display: flex;
						align-items: center;
						gap: 0.3em;
						list-style-type: none;
						padding: 0.2rem 0.7rem;
						font-weight: 500;
						color: white;
						background-color: rgb(27, 27, 27);
						border-radius: 50rem;
						outline: 1px solid hsl(0, 0%, 24%);
						transition: all 0.3s;
						cursor: pointer;
						&:hover {
							background-color: rgb(48, 48, 48);
						}
						:global(svg) {
							width: 1.2em;
							height: 1.2em;
						}
					}
				}
			}
			.project-btn {
				min-width: max-content;
				display: flex;
				gap: 0.4em;
				align-items: center;
				background-color: whitesmoke;
				color: black;
				outline: 1px solid hsl(0, 0%, 24%);
				padding: 0.3rem 0.5rem;
				border-radius: 0.5rem;
				font-weight: 500;
				transition: all 0.3s;
				opacity: 0;
				transform: translateY(0.5rem);
			}
		}
	}
</style>
