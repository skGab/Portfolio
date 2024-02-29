<script lang="ts">
	import Repos from '$lib/components/Repos.svelte';
</script>

<svelte:head>
	<title>Projetos - Gabriel Assunção</title>
	<meta
		name="description"
		content="Explore uma gama variada de projetos de desenvolvimento web de Gabriel Assunção, abrangendo Full-Stack, Front-end e Back-end. Confira exemplos de trabalhos recentes, saiba mais sobre minhas habilidades e competências e veja como posso ajudá-lo a atingir seus objetivos digitais."
	/>
</svelte:head>

<section id="projects" class="py-5">
	<div class="container custom_container">
		<!-- {/* BACK-END */} -->
		<h2
			class="d-flex flex-column mb-4"
			data-aos="fade-up"
			data-aos-duration="1000"
			data-aos-anchor-placement="top-bottom"
		>
			Back-End <span />
		</h2>
		<ul
			class="row justify-content-between align-items-start mb-0"
			data-aos="fade-up"
			data-aos-duration="1000"
			data-aos-anchor-placement="top-bottom"
		>
			<Repos cat={'back-end'} />
		</ul>

		<hr class="mt-4 mb-4" />

		<!-- {/* WEB APP */} -->
		<h2 class="d-flex flex-column mb-4" data-aos="fade-up" data-aos-duration="1000">Web-App <span /></h2>
		<ul class="row justify-content-between align-items-start mb-0" data-aos="fade-up" data-aos-duration="1200">
			<Repos cat={'full-stack'} />
		</ul>

		<hr class="mt-4 mb-4" />

		<!-- {/* FRONT-END */} -->
		<h2 class="d-flex flex-column mb-4" data-aos="fade-up" data-aos-duration="1200">Front-End <span /></h2>
		<ul
			class="row justify-content-between align-items-start mb-0"
			data-aos="fade-up"
			data-aos-duration="1400"
			data-aos-anchor-placement="top-bottom"
		>
			<Repos cat={'front-end'} />
		</ul>
	</div>
</section>

<style lang="scss">
	#projects {
		.custom_container {
			max-width: 517px;
		}

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

		ul {
			gap: 2rem 0;
		}

		hr {
			color: var(--white);
			filter: opacity(40%);
		}
	}
</style>
