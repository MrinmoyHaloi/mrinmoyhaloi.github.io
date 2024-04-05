<main>
	<section class="landing-section">
		<div class="title-box">
			<h1>
				<span>Front-End dev.</span>
				<br />
				<span style="margin-right: 2rem;">Based in</span>
				<span class="address">Assam, India</span>
			</h1>
		</div>
		<div class="bottom-box">
			<div>
				<span>Mrinmoy Haloi</span>
				<br />
				<span style="font-weight: 200;">Front End dev · Web designer</span>
			</div>
			<a href="#about-section" class="arrow-down"><i>˅</i></a>
		</div>
	</section>
	<section class="about-section" id="about-section">
		<h2>Myself,</h2>
		<p>
			I'm Mrinmoy Haloi, a Front End Developer from India. I specialize in creating user-friendly
			interfaces with Svelte, bringing designs to life with precision and efficiency.
		</p>
	</section>
	<section class="skills-section">
		<h2>Skills</h2>
		<ul>
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<li>Python</li>
			<li>Svelte</li>
			<li>SCSS</li>
			<li>Git</li>
			<li>GitHub</li>
			<li>Linux</li>
		</ul>
	</section>
	<section class="projects-section">
		<h2>Projects</h2>
		<ul>
			<li>
				<a href="#">Project 1</a>
			</li>
			<li>
				<a href="#">Project 2</a>
			</li>
		</ul>
	</section>
	<section class="contact-section">
		<h2>Contact</h2>
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
</main>

<style lang="scss">
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
				font-size: 7rem;
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
	}
	.skills-section {
		height: 100vh;
	}
	.projects-section {
		height: 100vh;
	}
	.contact-section {
		height: 100vh;
	}

	section {
		padding-block: 2rem;
	}
</style>
