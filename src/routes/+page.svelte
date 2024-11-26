<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<main class="relative">
	<section class="landing-section">
		<div class="title-box">
			<h1>
				<span>Front-End dev.</span>
				<br />
				<span style="margin-right: 2rem;">Based in</span>
				<span class="address">Assam, India</span>
			</h1>
		</div>
		<div class="bottom-box pb-6">
			<div class="flex gap-6">
				<span>Mrinmoy Haloi</span>
				<div class="flex items-center gap-3 hover:*:text-slate-300">
					<a href="https://github.com/mrinmoyhaloi" target="_blank">
						<Icon icon="fa-brands:github" />
					</a>
					<a href="https://www.linkedin.com/in/mrinmoy-haloi" target="_blank">
						<Icon icon="fa-brands:linkedin" />
					</a>
				</div>
			</div>
			<a href="#about" class="arrow-down"
				><Icon icon="fa6-solid:arrow-down" width="28" height="28" /></a
			>
		</div>
	</section>
	<section class="about-section" id="about">
		<div class="m-auto flex gap-16 *:flex-1">
			<div class="about-text">
				<h2>Myself,</h2>
				<p>
					I'm <span class="name">Mrinmoy Haloi</span>, a Front End Developer from Assam, India with
					4 years of programming experience.
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
				<!-- <a href="#contact" class="btn">Get in touch</a> -->
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
	</section>
	<section class="projects-section">
		<h2>Projects</h2>
		<ul>
			<li>
				<a href="https://github.com/SwirlLang/Swirl">Swirl Lang</a>
			</li>
			<li>
				<a href="#d">Project 2</a>
			</li>
		</ul>
	</section>
	<section class="contact-section" id="contact">
		<h2>Contact</h2>
		<form action="/">
			<label for="name">Name</label>
			<input type="text" name="name" id="" />

			<label for="name">Email</label>
			<input type="text" name="name" id="" />

			<label for="name">Subject</label>
			<input type="text" name="name" id="" />

			<label for="name">Message</label>
			<textarea name="name" id="" rows="10"></textarea>

			<button type="submit">Submit</button>
		</form>
		<ul>
			<li>
				<a href="mailto:example@email.com">Email</a>
			</li>
			<li>
				<a href="social/twitter">Twitter</a>
			</li>
			<li>
				<a href="https://linkedin.com/in/linkedin">LinkedIn</a>
			</li>
		</ul>
	</section>
	<div class="glow left-[-55rem] top-[-75rem]"></div>
	<div class="glow left-[40rem] top-0"></div>
	<div class="glow left-[-75rem] top-[90rem]"></div>
</main>

<style lang="scss">
	.glow {
		position: absolute;
		width: 130rem;
		height: 130rem;
		background: radial-gradient(circle, rgba(0, 230, 230, 0.47) 0%, transparent 60%);
		z-index: -99;
	}

	.landing-section {
		height: 100dvh;
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
	.about-section {
		height: 100vh;
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
				transition: width .4s;
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
				}
			}
		}
	}
	.projects-section {
		height: 100vh;
		ul {
			display: flex;
			justify-content: space-evenly;
			li {
				list-style-type: none;
				border: 2px solid hsl(180, 100%, 45%);
				padding: 10rem 15rem;
			}
		}
	}
	.contact-section {
		height: 100vh;
	}

	section {
		margin-inline: auto;
		padding-block: 2rem;
		width: 80%;
		// border: 2px solid red;
	}
</style>
