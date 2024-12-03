<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<main class="relative">
	<section class="landing-section">
		<div class="section">
			<div class="title-box">
				<h1>
					<span>Front-End dev.</span>
					<br />
					<span style="margin-right: 2rem;">Based in</span>
					<span class="address">Assam, India</span>
					<div class="bottom-box pb-6">
						<div class="flex gap-6">
							<span class="underline underline-offset-2">Mrinmoy Haloi</span>
							<div class="flex items-center gap-3 hover:*:text-slate-300">
								<a href="https://github.com/mrinmoyhaloi" target="_blank">
									<Icon icon="fa-brands:github" width="24" height="24" />
								</a>
								<a href="https://www.linkedin.com/in/mrinmoy-haloi" target="_blank">
									<Icon icon="fa-brands:linkedin" width="24" height="24" />
								</a>
							</div>
						</div>
					</div>
				</h1>
			</div>
			<div class="bottom-box pb-6">
				<a href="#about" class="arrow-down ms-auto"
					><Icon icon="fa6-solid:arrow-down" width="28" height="28" /></a>
			</div>
		</div>
	</section>
	<section class="about-section" id="about">
		<div class="section">
			<div class="m-auto flex gap-16 *:flex-1">
				<div class="about-text">
					<h2>Myself,</h2>
					<p>
						I'm <span class="name">Mrinmoy Haloi</span>, a Front End Developer from Assam, India
						with 4 years of programming experience.
					</p>
					<p>I specialize in creating user-friendly and performant interfaces with Svelte.</p>
					<div class="w-24">
						<div
							class="css-awsm flex w-14 flex-col
						border-2 border-white p-1 font-medium">
							<span>CSS</span>
							<span>IS</span>
							<span>AWESOME</span>
						</div>
					</div>
				</div>
				<div class="skills">
					<h2>Skills</h2>
					<ul>
						<li><Icon icon="skill-icons:html" width="1.2em" height="1.2em" />HTML</li>
						<li><Icon icon="skill-icons:css" width="1.2em" height="1.2em" />CSS</li>
						<li><Icon icon="skill-icons:javascript" width="1.2em" height="1.2em" />JavaScript</li>
						<li><Icon icon="skill-icons:python-dark" width="1.2em" height="1.2em" />Python</li>
						<li><Icon icon="skill-icons:svelte" width="1.2em" height="1.2em" />Svelte</li>
						<li><Icon icon="skill-icons:sass" width="1.2em" height="1.2em" />SCSS</li>
						<li><Icon icon="skill-icons:git" width="1.2em" height="1.2em" />Git</li>
						<li><Icon icon="skill-icons:github-dark" width="1.2em" height="1.2em" />GitHub</li>
						<li><Icon icon="skill-icons:linux-dark" width="1.2em" height="1.2em" />Linux</li>
						<li><Icon icon="skill-icons:vscode-dark" width="1.2em" height="1.2em" />VSCode</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	<section class="projects-section">
		<div class="section">
			<h2 class="text-center">Projects</h2>
			<div class="projects">
				<div class="project">
					<a href="https://github.com/SwirlLang/Swirl">
						<img src="swirl.png" alt="" class="" />
						<div class="container">
							<h3>Swirl</h3>
							<p>The Swirl programming language webpage</p>
							<div class="skills">
								<ul>
									<li>
										<Icon icon="skill-icons:svelte" width="1.2em" height="1.2em" />Svelte
									</li>
									<li><Icon icon="skill-icons:sass" width="1.2em" height="1.2em" />SCSS</li>
									<li>
										<Icon icon="skill-icons:bootstrap" width="1.2em" height="1.2em" />Bootstrap
									</li>
									<li>
										<Icon icon="skill-icons:javascript" width="1.2em" height="1.2em" />JavaScript
									</li>
								</ul>
							</div>
						</div>
					</a>
				</div>
				<div class="project">
					<a href="https://github.com/MrinmoyHaloi/FocusWave">
						<img src="focuswave.png" alt="" class="" />
						<div class="container">
							<h3>FocusWave</h3>
							<p>
								A customizable Pomodoro timer designed to boost your productivity with a relaxing
								twist.
							</p>
							<div class="skills">
								<ul>
									<li><Icon icon="skill-icons:svelte" width="1.2em" height="1.2em" />Svelte</li>
									<li><Icon icon="skill-icons:sass" width="1.2em" height="1.2em" />SCSS</li>
									<li>
										<Icon icon="skill-icons:tailwindcss-dark" width="1.2em" height="1.2em" />Tailwind
									</li>
									<li>
										<Icon icon="skill-icons:javascript" width="1.2em" height="1.2em" />JavaScript
									</li>
								</ul>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	</section>
</main>

<style lang="scss">
	.landing-section {
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			width: 100%;
			background: radial-gradient(circle at 10% -10%, rgba(0, 230, 230, 0.545) 0%, transparent 40%);
			z-index: -1;
		}
		&::after {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			width: 100%;
			height: 100%;
			background: radial-gradient(
				circle at 110% 100%,
				rgba(0, 230, 230, 0.545) 0%,
				transparent 40%
			);
			z-index: -1;
		}
		// background-color: rebeccapurple;
		height: 100dvh;
		width: 100%;
		position: relative;
		.section {
			height: 100%;
			display: flex;
			flex-direction: column;
			width: 80%;
			margin: auto;
			.title-box {
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				h1 {
					font-size: 8rem;
					font-weight: 400;
					span.address {
						font-size: 2.5rem;
						display: inline-block;
						width: min-content;
						font-weight: 300;
						color: hsl(180, 100%, 45%);
					}
				}
			}

			.bottom-box {
				display: flex;
				justify-content: space-between;
				font-size: 1.3rem;
				font-weight: 500;
				.arrow-down {
					font-size: 2.2rem;
					color: hsl(0, 0%, 100%);
					text-decoration: none;
					transition: all 0.3s ease-in-out;
					&:hover {
						color: hsl(180, 100%, 35%);
						transform: translateY(0.2rem);
					}
				}
			}
		}
	}
	.about-section {
		height: 100vh;
		width: 100%;
		position: relative;
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			width: 100%;
			background: radial-gradient(circle at 110% 0%, rgba(0, 230, 230, 0.545) 0%, transparent 40%);
			z-index: -1;
		}
		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			width: 100%;
			background: radial-gradient(
				circle at -10% 100%,
				rgba(0, 230, 230, 0.545) 0%,
				transparent 40%
			);
			z-index: -1;
		}
		.section {
			height: 100%;
			width: 80%;
			margin: auto;
			display: flex;
			.about-text {
				p {
					margin-block: 1rem;
					.name {
						font-weight: 700;
						color: hsl(180, 78%, 63%);
					}
				}
				.css-awsm {
					transition: width 0.4s;
					&:hover {
						width: 100%;
					}
				}
				.btn {
					margin-top: 2rem;
					display: inline-block;
					border: 2px solid hsl(180, 100%, 45%);
					border-radius: 0.5rem;
					padding: 1rem 2rem;
					color: white;
					font-weight: 500;
					text-decoration: none;
					cursor: pointer;
				}
			}
		}
		.skills {
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
					color: black;
					background-color: white;
					border-radius: 50rem;
					transition: all 0.3s;
					cursor: pointer;
					&:hover {
						background-color: rgb(188, 188, 188);
					}
				}
			}
		}
	}
	.projects-section {
		min-height: 100vh;
		width: 100%;
		position: relative;
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100vh;
			width: 100%;
			background: radial-gradient(circle at -10% 0%, rgba(0, 230, 230, 0.545) 0%, transparent 40%);
			z-index: -1;
		}
		.section {
			height: 100%;
			width: 80%;
			margin: auto;
		}
		.projects {
			margin-top: 2rem;
			display: grid;
			gap: 2rem;
			justify-content: center;
			grid-auto-columns: minmax(15rem, 50rem);
			.project {
				position: relative;
				overflow: hidden;
				background-color: #000;
				border-radius: 0.5rem;
				box-shadow: 0 0 0.5rem rgba(0, 230, 230, 0.545) inset;
				transition: all 0.3s;
				&:hover {
					transform: translateY(-0.5rem);
					box-shadow: 0 0 1.3rem rgba(0, 230, 230, 0.545) inset;
					img {
						transform: scale(1.03);
					}
					& + .project {
						transform: translateY(0.5rem);
					}
				}
				a {
					img {
						transition: all 0.3s;
						width: 100%;
						mask-image: linear-gradient(to top, transparent 10%, #000 100%);
					}
					.container {
						position: absolute;
						bottom: 0;
						left: 0;
						padding: 1rem 1.5rem;
						width: 70%;
						// background-color: rebeccapurple;
						h3 {
							font-size: 1.5rem;
							font-weight: 500;
						}
						p {
							font-size: 1.2rem;
							line-height: normal;
							color: hsl(0, 0%, 63%);
							// transform: translateY(100%);
						}
						.skills {
							margin-top: 1rem;
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
									transition: all 0.3s;
									&:hover {
										background-color: rgb(48, 48, 48);
									}
								}
							}
						}
					}
				}
			}
		}
	}

	section {
		margin-inline: auto;
		padding-block: 2rem;
		width: 80%;
		// border: 2px dashed red;
	}
</style>
