<script lang="ts">
	import Icon from '@iconify/svelte';

	let { name, description, skills, github, link, image, reverse } = $props();
</script>

<div class="project flex flex-col gap-10 lg:flex-row {reverse ? 'lg:flex-row-reverse' : ''}">
	<div class="project-image flex-[0.6]">
		<img src={image} alt="" class="" />
		<div class="skills">
			<ul>
				{#each skills as skill}
					<li class="pill-hover">
						<Icon icon={skill.icon}/>
						{skill.name}
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="project-details flex-[0.4]">
		<div>
			<h3>{name}</h3>
			<p class="text-zinc-300">{description}</p>
		</div>
		<div class="links">
			<a href={github} class="btn project-btn" target="_blank"><Icon icon="lucide:github" />Code</a>
			<a href={link} class="btn demo-btn" target="_blank"
				><Icon icon="lucide:external-link" />Live Demo</a>
		</div>
	</div>
</div>

<style lang="scss">
	.project {
		opacity: 0;
		.project-image {
			position: relative;
			transition: all 0.3s;
			border-radius: 1rem;
			overflow: clip;
			outline: 2px solid rgb(0, 115, 115, 0.3);
			img {
				aspect-ratio: 16/9;
				object-fit: cover;
				height: 100%;
				object-position: left;
				transition: all 0.3s;
			}
			.skills {
				position: absolute;
				bottom: 0;
				transition: all 0.3s;
				padding: 0.8rem;
				padding-top: 2rem;
				width: 100%;
				background: linear-gradient(0deg, rgb(0, 115, 115) 0%, rgba(0, 230, 230, 0) 100%);
				ul {
					display: flex;
					flex-wrap: wrap;
					gap: 1rem;
					li {
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
						transition: background-color 0.3s;
						font-size: 0.9rem;
						cursor: pointer;
						@media screen and (width < 768px) {
							font-size: 0.9rem;
							padding: 0.1rem 0.5rem;
						}
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
			&:hover {
				img {
					transform: scale(1.04);
				}
			}
		}
		.project-details {
			display: grid;
			align-items: center;
			align-content: center;
			gap: 1rem;
			h3 {
				font-size: 2.5rem;
				@media screen and (width < 768px) {
					font-size: 2rem;	
					
				}
				font-weight: 700;
			}
			p {
				font-size: 1.1rem;
				line-height: 1.8;
			}
			.links {
				display: flex;
				gap: 1rem;
				.btn {
					width: fit-content;
					display: flex;
					gap: 0.4em;
					align-items: center;
					padding: 0.3rem 0.7rem;
					border-radius: 0.3rem;
					font-weight: 500;
					transition: background-color 0.3s;
					&.demo-btn {
						background-color: whitesmoke;
						color: black;
						&:hover {
							background-color: rgb(170, 170, 170);
						}
					}
					&.project-btn {
						background-color: rgb(38, 38, 38);
						color: white;
						&:hover {
							background-color: rgb(61, 61, 61);
						}
					}
				}
			}
		}
	}
</style>
