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
			<a href="#about" class="arrow-down"><i>˅</i></a>
		</div>
	</section>
	<section class="about-section" id="about">
		<div class="about-text">
			<h2>Myself,</h2>
			<p>I'm <span class="name">Mrinmoy Haloi</span>, a Front End Developer hailing from the coasts of India.</p>
			<p>
				I specialize in creating user-friendly interfaces with Svelte, bringing designs to life with
				precision and efficiency.
			</p>
			<a href="#contact" class="btn">Get in touch</a>
		</div>
		<div class="about-img">
			<img
				src="https://mrinmoy.is-a.dev/assets/logo-dark-transparent.png"
				alt="logo"
				width="450"
				height="450"
			/>
		</div>
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
		display: flex;
		.about-text {
			p {
				margin-block: 1rem;
				.name {
					text-decoration: underline;
					text-underline-offset: 2px;
                    text-decoration-color: hsl(180, 100%, 45%);
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
	.skills-section {
		height: 100vh;
		ul {
			display: flex;
			gap: 1rem;
			li {
				list-style-type: none;
				border: 2px solid hsl(180, 100%, 45%);
				padding: 0.4rem 0.7rem;
				border-radius: .5rem;
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
