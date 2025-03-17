<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<main class="relative">
	<section class="landing-section">
		<div class="section">
			<div class="title-box">
				<h1 class="text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem]">
					<span>Front-End dev.</span>
					<br />
					<span style="margin-right: 2rem;">Based in</span>
					<span class="address text-[2rem] md:text-[2.3rem] lg:text-[2.5rem]">Assam, India</span>
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
			<div class="m-auto flex flex-col gap-16 *:flex-1 lg:flex-row">
				<div class="about-text mx-auto sm:w-10/12 lg:w-full">
					<h2>Myself,</h2>
					<p class="text-[1.5rem] leading-9 md:text-[1.7rem]">
						I'm <span class="name">Mrinmoy Haloi</span>, a Front End Developer from Assam, India
						with 4 years of programming experience.
					</p>
					<p class="text-[1.5rem] leading-9 md:text-[1.7rem]">
						I specialize in creating user-friendly and performant interfaces with Svelte.
					</p>
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
				<div class="skills mx-auto sm:w-10/12 lg:w-full">
					<h2>Skills</h2>
					<h3>Languages and Frameworks</h3>
					<ul>
						<li><Icon icon="skill-icons:html" />HTML</li>
						<li><Icon icon="vscode-icons:file-type-css" />CSS</li>
						<li><Icon icon="skill-icons:javascript" />JavaScript</li>
						<li><Icon icon="skill-icons:svelte" />Svelte</li>
						<li><Icon icon="skill-icons:sass" />SCSS</li>
						<li>
							<Icon icon="skill-icons:tailwindcss-dark" />Tailwind
						</li>
						<li><Icon icon="skill-icons:bootstrap" />Bootstrap</li>
						<li><Icon icon="skill-icons:python-dark" />Python</li>
					</ul>
					<h3>Tools</h3>
					<ul>
						<li><Icon icon="skill-icons:git" />Git</li>
						<li><Icon icon="skill-icons:github-dark" />GitHub</li>
						<div class="popover">
							<li><Icon icon="skill-icons:linux-dark" />Linux</li>
							<div class="popover-content">
								<p>I use Fedora BTW!</p>
							</div>
						</div>
						<li><Icon icon="skill-icons:vscode-dark" />VSCode</li>
						<li><Icon icon="skill-icons:npm-dark" />NPM</li>
						<li><Icon icon="skill-icons:bun-dark" />Bun</li>
						<li><Icon icon="skill-icons:vite-dark" />Vite</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	<section class="projects-section">
		<div class="section">
			<h2 class="md:text-center">Projects</h2>
			<div class="projects">
				<div class="project">
					<img src="swirl.png" alt="" class="" />
					<div class="project-details">
						<div>
							<h3>Swirl Lang</h3>
							<p>The Swirl programming language webpage</p>
							<div class="skills">
								<ul>
									<li>
										<Icon icon="skill-icons:svelte" />Svelte
									</li>
									<li><Icon icon="skill-icons:sass" />SCSS</li>
									<li>
										<Icon icon="skill-icons:bootstrap" />Bootstrap
									</li>
									<li>
										<Icon icon="skill-icons:javascript" />JavaScript
									</li>
								</ul>
							</div>
						</div>
						<a href="https://github.com/swirllang/swirl" class="project-btn"
							><Icon icon="lucide:external-link" />View project</a>
					</div>
				</div>
				<div class="project">
					<img src="focuswave.png" alt="" class="" />
					<div class="project-details">
						<div>
							<h3>FocusWave</h3>
							<p>
								A customizable Pomodoro timer designed to boost your productivity with a relaxing
								twist.
							</p>
							<div class="skills">
								<ul>
									<li><Icon icon="skill-icons:svelte" />Svelte</li>
									<li><Icon icon="skill-icons:sass" />SCSS</li>
									<li>
										<Icon icon="skill-icons:tailwindcss-dark" />Tailwind
									</li>
									<li>
										<Icon icon="skill-icons:javascript" />JavaScript
									</li>
								</ul>
							</div>
						</div>
						<a href="https://github.com/MrinmoyHaloi/FocusWave" class="project-btn"
							><Icon icon="lucide:external-link" />View project</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<style lang="scss">
	.section {
		height: 100%;
		width: 80%;
		@media screen and (width < 768px) {
			width: 85%;
		}
		margin-inline: auto;
		padding-block: 2rem;
	}
	.landing-section {
		height: 100vh;
		position: relative;
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
		.section {
			display: flex;
			flex-direction: column;
			width: 85%;
			.title-box {
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				h1 {
					font-weight: 400;
					span.address {
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
		min-height: 100vh;
		position: relative;
		display: grid;
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100vh;
			width: 100%;
			background: radial-gradient(circle at 110% 0%, rgba(0, 230, 230, 0.545) 0%, transparent 40%);
			z-index: -1;
		}
		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 100vh;
			width: 100%;
			background: radial-gradient(
				circle at -10% 100%,
				rgba(0, 230, 230, 0.545) 0%,
				transparent 40%
			);
			z-index: -1;
		}
		.section {
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
			}
		}
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
					color: black;
					background-color: white;
					border-radius: 50rem;
					transition: all 0.3s;
					cursor: pointer;
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
	}
	.projects-section {
		min-height: 100vh;
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
		.projects {
			margin-top: 2rem;
			display: grid;
			gap: 2rem;
			justify-content: center;
			grid-auto-columns: minmax(15rem, 50rem);
			@media screen and (width < 768px) {
				grid-auto-rows: 27rem;
			}
			grid-auto-rows: 27rem;
			.project {
				position: relative;
				overflow: hidden;
				background-color: #000;
				border-radius: 0.5rem;
				box-shadow: 0 0 0.2rem rgba(0, 230, 230, 0.545) inset;
				transition: all 0.1s;
				&:hover {
					// transform: translateY(-0.5rem);
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
		}
	}
</style>
