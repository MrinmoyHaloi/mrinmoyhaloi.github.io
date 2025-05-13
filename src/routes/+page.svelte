<script lang="ts">
	import Icon from '@iconify/svelte';
	import Skills from '$lib/Skills.svelte';
	import Project from '$lib/Project.svelte';
	import Button from '$lib/Button.svelte';
	import { onMount } from 'svelte';
	import { animate, hover, inView, stagger, type AnimationSequence } from 'motion';

	let languages = [
		{ name: 'HTML', icon: 'skill-icons:html' },
		{ name: 'CSS', icon: 'vscode-icons:file-type-css' },
		{ name: 'JavaScript', icon: 'skill-icons:javascript' },
		{ name: 'Svelte', icon: 'skill-icons:svelte' },
		{ name: 'SCSS', icon: 'skill-icons:sass' },
		{ name: 'Tailwind', icon: 'skill-icons:tailwindcss-dark' },
		{ name: 'Bootstrap', icon: 'skill-icons:bootstrap' },
		{ name: 'Python', icon: 'skill-icons:python-dark' }
	];
	let tools = [
		{ name: 'Git', icon: 'skill-icons:git' },
		{ name: 'GitHub', icon: 'skill-icons:github-dark' },
		{ name: 'Linux', icon: 'skill-icons:linux-dark', popover: 'I use Fedora BTW!' },
		{ name: 'VSCode', icon: 'skill-icons:vscode-dark' },
		{ name: 'NPM', icon: 'skill-icons:npm-dark' },
		{ name: 'Bun', icon: 'skill-icons:bun-dark' },
		{ name: 'Vite', icon: 'skill-icons:vite-dark' }
	];
	let projects = [
		{
			name: 'Swirl Programming Language',
			description:
				'Website for the Swirl programming language, featuring downloads for respective platforms binaries fetched from the latest GitHub release.',
			skills: [
				{ name: 'Svelte', icon: 'skill-icons:svelte' },
				{ name: 'SCSS', icon: 'skill-icons:sass' },
				{ name: 'Tailwind', icon: 'skill-icons:tailwindcss-dark' },
				{ name: 'JavaScript', icon: 'skill-icons:javascript' }
			],
			github: 'https://github.com/swirllang/website',
			link: 'https://swirl-lang.netlify.app',
			image: 'swirl.png'
		},
		{
			name: 'FocusWave: Pomodoro Timer',
			description:
				'A customizable Pomodoro timer designed to enhance your productivity with a calming and focused experience. Radio support, customizable focus, and more.',
			skills: [
				{ name: 'Svelte', icon: 'skill-icons:svelte' },
				{ name: 'SCSS', icon: 'skill-icons:sass' },
				{ name: 'Tailwind', icon: 'skill-icons:tailwindcss-dark' },
				{ name: 'JavaScript', icon: 'skill-icons:javascript' }
			],
			github: 'https://github.com/MrinmoyHaloi/FocusWave',
			link: 'https://focus-wave.vercel.app',
			image: 'focuswave.png'
		}
	];

	onMount(() => {
		let sequence: AnimationSequence = [
			['.slide-up', { opacity: [0, 1] }, { duration: 1, delay: stagger(0.3), at: 0.2 }],
			['.slide-up', { y: [30, 0] }, { duration: 1, ease: 'circOut', delay: stagger(0.2), at: 0.3 }],
			['.btn-slide-up', { opacity: [0, 1] }, { duration: 0.8, delay: stagger(0.2), at: 0.6 }],
			['.btn-slide-up', { y: [30, 0] }, { duration: 0.5, delay: stagger(0.2), at: 0.6 }]
		];

		animate(sequence);

		hover('.btn-hover', (element) => {
			animate(element, { scale: 1.1, rotate: -5 }, { type: 'spring', bounce: 0.7 });
			return () =>
				animate(element, { scale: 1, rotate: 0 }, { type: 'spring', bounce: 0.4, duration: 0.4 });
		});

		hover('.pill-hover', (element) => {
			animate(element, { scale: 1.1 }, { type: 'spring', bounce: 0.7 });
			return () => animate(element, { scale: 1 }, { type: 'spring', bounce: 0.7 });
		});

		inView(
			'h2, input, textarea',
			(element) => {
				animate(
					element,
					{ opacity: [0, 1], y: [20, 0] },
					{ duration: 1, type: 'spring', bounce: 0.4 }
				);
			},
			{ margin: '0px 0px -20% 0px' }
		);

		inView(
			'.about-section .skills',
			(element) => {
				animate(
					'.about-section .skills ul li',
					{ opacity: [0, 1], y: [20, 0] },
					{ duration: 1.5, type: 'spring', bounce: 0.4, delay: stagger(0.1) }
				);
			},
			{ margin: '0px 0px -20% 0px' }
		);

		inView(
			'.project',
			(element) => {
				animate(
					element,
					{ opacity: [0, 1], y: [20, 0] },
					{ duration: 1.5, type: 'spring', bounce: 0.4, delay: stagger(0.1) }
				);
			},
			{ margin: '0px 0px -20% 0px' }
		);
	});
</script>

<main class="relative">
	<section class="landing-section" id="home">
		<div class="dot-grid"></div>
		<div class="section">
			<div class="title-box">
				<span class="name opacity-0 slide-up">Mrinmoy Haloi</span>
				<h1 class="text-[4rem] leading-snug sm:text-[5rem] md:text-[6rem] lg:text-[8rem]">
					<span class="slide-up inline-block opacity-0">Front-End dev.</span>
					<br />
					<span style="margin-right: 2rem;" class="slide-up inline-block opacity-0">Based in</span>
					<span
						class="address slide-up inline-block text-[2rem] opacity-0 md:text-[2.3rem] lg:text-[2.5rem]"
						>Assam, India</span>
					<div class="links flex gap-6 py-6">
						<Button
							href="#projects"
							text="View My Work"
							className="bg-zinc-300 text-black hover:bg-zinc-400 btn-hover btn-slide-up opacity-0" />
						<Button
							href="#contact"
							text="Get In Touch"
							className="bg-zinc-900 hover:bg-zinc-800 btn-hover btn-slide-up opacity-0" />
					</div>
				</h1>
			</div>
			<div class="bottom-box pb-6">
				<a href="#about" class="arrow-down ms-auto" aria-label="scroll down"
					><Icon icon="fa6-solid:arrow-down" width="28" height="28" /></a>
			</div>
		</div>
	</section>
	<section class="about-section" id="about">
		<div class="section">
			<div class="m-auto flex flex-col gap-16 *:flex-1 lg:flex-row">
				<div class="about-text mx-auto sm:w-10/12 lg:w-full">
					<h2>Myself,</h2>
					<p class="text-[1.2rem] leading-9 sm:text-[1.5rem] md:text-[1.5rem]">
						I'm <span class="name">Mrinmoy Haloi</span>, a Front End Developer from Assam, India
						with 4 years of programming experience.
					</p>
					<p class="text-[1.2rem] leading-9 sm:text-[1.5rem] md:text-[1.5rem]">
						I specialize in creating user-friendly and performant interfaces with Svelte.
					</p>
					<div class="mt-5 w-24">
						<div
							class="css-awsm flex w-14 flex-col
						border-2 border-white p-1 font-medium">
							<span>CSS</span>
							<span>IS</span>
							<span>AWESOME</span>
						</div>
					</div>
				</div>
				<Skills {languages} {tools} />
			</div>
		</div>
	</section>
	<section class="projects-section" id="projects">
		<div class="section">
			<h2>Projects</h2>
			<p class="text-lg text-zinc-300">
				Here are some of my recent projects that showcase my skills and expertise in web
				development.
			</p>
			<div class="projects">
				{#each projects as project, i}
					<Project
						name={project.name}
						description={project.description}
						skills={project.skills}
						github={project.github}
						link={project.link}
						image={project.image}
						reverse={i % 2 !== 0} />
				{/each}
			</div>
		</div>
	</section>
	<section class="contact-section" id="contact">
		<div class="section">
			<h2>Get In Touch</h2>
			<p class="text-lg text-zinc-300">
				Have a project in mind or want to discuss a potential collaboration? Feel free to reach out
				to me.
			</p>
			<div class="mt-16 flex gap-6 max-md:flex-col">
				<div class="flex w-full flex-col gap-4">
					<div class="flex items-center gap-6">
						<a href="mailto:dev.mrinmoy.haloi@gmail.com">
							<div class="rounded-full bg-zinc-800 p-3">
								<Icon icon="lucide:mail" width="24" height="24" />
							</div>
						</a>
						<div>
							<h3 class="font-medium">Email</h3>
							<p class="leading-relaxed">dev.mrinmoy.haloi@gmail.com</p>
						</div>
					</div>

					<div class="flex items-center gap-6">
						<div class="rounded-full bg-zinc-800 p-3">
							<Icon icon="lucide:map-pin" width="24" height="24" />
						</div>
						<div>
							<h3 class="font-medium">Location</h3>
							<p class="leading-relaxed">Guwahati, Assam, India</p>
						</div>
					</div>
					<div>
						<h3 class="mb-4">Socials</h3>
						<div class="flex gap-4">
							<a
								href="https://github.com/mrinmoyhaloi"
								class="rounded-full bg-zinc-800 p-3 hover:bg-zinc-700"
								aria-label="GitHub profile">
								<Icon icon="uil:github" width="24" height="24" />
							</a>
							<a
								href="https://linkedin.com/in/mrinmoy-haloi"
								class="rounded-full bg-zinc-800 p-3 hover:bg-zinc-700"
								aria-label="linkedin profile">
								<Icon icon="uil:linkedin" width="24" height="24" />
							</a>
							<a
								href="https://x.com/_mrinmoy_haloi_"
								class="rounded-full bg-zinc-800 p-3 hover:bg-zinc-700"
								aria-label="x(twitter) profile">
								<Icon icon="uil:twitter" width="24" height="24" />
							</a>
						</div>
					</div>
				</div>
				<div class="w-full">
					<form
						class="grid gap-5"
						action="https://formsubmit.co/32577f1a2278ad4ad33dafc2fa1e2797"
						method="POST">
						<input type="hidden" name="_next" value="https://mrinmoy.is-a.dev" />
						<input type="hidden" name="_template" value="table" />
						<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
							<div>
								<label for="name" class="font-medium">Your Name</label>
								<input
									type="text"
									id="name"
									name="name"
									class="mt-3 w-full rounded-md border border-cyan-800 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-800" />
							</div>
							<div>
								<label for="email" class="font-medium">Your Email</label>
								<input
									type="email"
									id="email"
									name="email"
									class="mt-3 w-full rounded-md border border-cyan-800 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-800" />
							</div>
						</div>
						<div>
							<label for="subject" class="font-medium">Subject</label>
							<input
								type="text"
								id="subject"
								name="_subject"
								class="mt-3 w-full rounded-md border border-cyan-800 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-800" />
						</div>
						<div>
							<label for="message" class="font-medium">Message</label>
							<textarea
								id="message"
								name="message"
								class="mt-3 h-36 w-full resize-none rounded-md border border-cyan-800 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-800"
							></textarea>
						</div>
						<button
							type="submit"
							class="btn-hover flex w-fit items-center gap-2 rounded-md bg-slate-50 px-4 py-2 font-medium text-black hover:bg-zinc-300"
							>Send message <Icon icon="lucide:send" />
						</button>
					</form>
				</div>
			</div>
		</div>
	</section>
</main>

<style lang="scss">
	.landing-section {
		height: 100dvh;
		position: relative;
		.dot-grid {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: radial-gradient(rgb(107, 107, 107) 1px, transparent 1px);
			background-size: 40px 40px;
			z-index: -1;
			mask-image: linear-gradient(to top, transparent 0%, black 15%);
			animation: dot-grid 2s linear infinite;
		}

		@keyframes dot-grid {
			0% {
				background-position: 0 0;
			}
			100% {
				background-position: 0 40px;
			}
		}
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
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
				flex-direction: column;
				justify-content: center;
				margin-inline: auto;
				span.name {
					font-size: 1rem;
					font-weight: 500;
					border: 1px solid hsl(0, 0%, 64%);
					width: fit-content;
					padding: 0.3rem 0.7rem;
					border-radius: 10rem;
					backdrop-filter: blur(5px);
				}
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
				.arrow-down {
					font-size: 2.2rem;
					color: hsl(0, 0%, 100%);
					text-decoration: none;
					animation: indicateScroll 1s infinite;
					transition: all 0.1s ease-in-out;
					&:hover {
						color: hsl(180, 100%, 35%);
						transform: translateY(0.2rem);
					}
					@keyframes indicateScroll {
						0% {
							transform: translateY(0);
						}
						50% {
							transform: translateY(0.25rem);
						}
						100% {
							transform: translateY(0);
						}
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
		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			right: 0;
			width: 100%;
			height: 100vh;
			background: radial-gradient(
				circle at 110% 100%,
				rgba(0, 230, 230, 0.545) 0%,
				transparent 40%
			);
			z-index: -1;
		}
		.projects {
			margin-block: 5rem;
			display: grid;
			gap: 7rem;
		}
	}
	.contact-section {
		min-height: 100vh;
		position: relative;
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100vh;
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
			background: radial-gradient(circle at 0% 110%, rgba(0, 230, 230, 0.545) 0%, transparent 40%);
			z-index: -1;
		}
		input,
		textarea {
			opacity: 0;
			background-color: transparent;
			transition: background-color 0.1s;
			box-shadow: 0 0 40px 0 hsl(180, 100%, 10%);
			&:hover,
			&:focus {
				background-color: rgba(0, 230, 230, 0.1);
			}
		}
	}
</style>
