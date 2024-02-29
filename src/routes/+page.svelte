<script lang="ts">
	import profile from '$lib/imgs/profile.webp';
</script>

<svelte:head>
	<title>Inicio - Gabriel Assunção</title>
	<meta
		name="description"
		content="Gabriel Assunção - Desenvolvedor Full-Stack especializado em Next.js, Laravel e Wordpress. Conheça meu portfólio e entre em contato para projetos"
	/>
</svelte:head>

<section id="about" class="pb-4">
	<div class="container px-4">
		<div class="row">
			<div class="col-12 col-md-8 mx-auto">
				<!-- {/* NAME */} -->
				<section
					id="profile"
					class="d-flex align-items-center justify-content-between my-5"
					data-aos="fade-up"
					data-aos-duration="1200"
				>
					<div class="me-3">
						<h1 class="fw-bold lh-1">Gabriel Assunção</h1>
						<p class="m-0">Programador Back-End ( Nest.js / Golang / Sveltekit )</p>
					</div>

					<figure>
						<img width="120" src={profile} alt="Foto Gabriel Assunção" />
					</figure>
				</section>

				<!-- {/* WORK */} -->
				<section id="work" class="work mb-5" data-aos="fade-up" data-aos-duration="1400">
					<h2 class="d-flex flex-column">Trabalho <span /></h2>

					<p>
					Programador Back-end trabalhando na implementação de <span class="text-secondary">microsserviços internos</span>. Com base sólida em desenvolvimento Front-end que facilita a boa colaboração entre areas. Buscando ser engenheiro de software com especialização em arquitetura e infraestrutura em nuvem.
					</p>

					<p>
						Motivado na programação pela possiblidade de construir aplicações acessiveis no Front-end. E também, no processo de <span class="text-secondary">escalar e manter</span> sistemas bem construidos, no Back-end.
					</p>

					<div class="w-100 text-center">
						<a href="/projetos" title="Meu portfólio" class="btn fw-bold align-items-center"
							>Meu portfólio
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-caret-right-fill"
								viewBox="0 0 16 16"
							>
								<path
									d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
								/>
							</svg>
						</a>
					</div>
				</section>

				<!-- {/* BIO */} -->
				<section
					id="bio"
					class="work mb-5"
					data-aos="fade-up"
					data-aos-duration="1500"
					data-aos-anchor-placement="top-bottom"
				>
					<h2 class="d-flex flex-column">Bio <span /></h2>
					<ul>
						<li class="d-flex">
							<strong>1999</strong>
							<p class="mb-1 ps-3">Nascido em Três Corações, Minas Gerais;</p>
						</li>
						<li class="d-flex">
							<strong class="mr-5">2021</strong>
							<p class="mb-1 ps-3">
								Formação Tecnica em Desenvolvimento Web Full-Stack no SENAI - Centro de Treinamento da
								Tecnologia da Informação;
							</p>
						</li>
						<li class="d-flex">
							<strong class="mr-5">2022</strong>
							<p class="mb-1 ps-3">
								Inicio de jornada como Desenvolvedor Front-end na Black Beans;
							</p>
						</li>
						<li class="d-flex">
							<strong class="mr-5">2023</strong>
							<p class="mb-1 ps-3">Promovido para Programador Back-end na Black Beans.</p>
						</li>
					</ul>
				</section>

				<!-- {/* I_LOVE */} -->
				<section id="i_love" class="mb-5" data-aos="fade-up" data-aos-duration="1000">
					<h2 class="d-flex flex-column">
						<div class="d-flex align-items-center gap-2">
							Eu
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								class="bi bi-balloon-heart-fill"
								viewBox="0 0 16 16"
							>
								<path
									fill-rule="evenodd"
									d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"
								/>
							</svg>
						</div>
						<span />
					</h2>
					<p>
						<span class="text-secondary">Acampar</span>, Trilhas,
						<span class="text-secondary">Corrida</span>, Meditação, Yoga.
					</p>
				</section>

				<!-- {/* SOCIAL */} -->
				<section id="social" class="social" data-aos="fade-up" data-aos-duration="1200">
					<h2 class="d-flex flex-column">Social <span /></h2>

					<ul>
						<li>
							<a class="hover" href="https://github.com/skGab" target="_blank">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									class="bi bi-github"
									viewBox="0 0 16 16"
								>
									<path
										d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
									/>
								</svg>
								@skGab
							</a>
						</li>
						<li class="my-1">
							<a class="hover" href="https://www.linkedin.com/in/gabrielgontijoa/" target="_blank">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									class="bi bi-linkedin"
									viewBox="0 0 16 16"
								>
									<path
										d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
									/>
								</svg>
								@gabrielgontijoa
							</a>
						</li>
					</ul>
				</section>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	#profile {
		figure > img {
			border-radius: 50%;
		}
	}
	#about {
		section {
			h2 {
				width: fit-content;
				font-weight: bold;

				span {
					height: 5px;
					width: 100%;
					border-radius: 50px;
					background-color: #525252;
					margin-top: 0.1rem;
				}
			}
		}

		#work {
			p {
				text-indent: 1rem;
				text-align: justify;
			}

			.btn {
				background-color: #dddddd;
			}
		}

		.hover {
			padding: 0.5rem 1rem;
			border-radius: 5px;
			width: fit-content;
			display: flex;
			align-items: center;
			gap: 0.5rem;

			transition: background 0.2s ease-in;
		}

		.hover:hover {
			background: #f0830621;
		}
	}
</style>
