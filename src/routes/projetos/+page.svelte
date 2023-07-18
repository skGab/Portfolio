<script lang="ts">
	import Repos from '$lib/components/Repos.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Gabriel A - Home</title>
	<meta name="description" content="This is where the description goes for SEO" />
</svelte:head>

<section id="projects" class="py-5">
	<div class="container custom_container">
		<!-- {/* WEB APP */} -->
		<h2 class="d-flex flex-column mb-3" data-aos="fade-up" data-aos-duration="1000">Full-Stack <span /></h2>
		<ul class="row justify-content-between mb-0" data-aos="fade-up" data-aos-duration="1200">
			<Repos {data} cat={'full-stack'} />
		</ul>

		<hr class="mt-5 mb-4" />

		<!-- {/* FRONT-END */} -->
		<h2 class="d-flex flex-column mb-3" data-aos="fade-up" data-aos-duration="1200">Front-end <span /></h2>
		<ul
			class="row justify-content-between mb-0"
			data-aos="fade-up"
			data-aos-duration="1400"
			data-aos-anchor-placement="top-bottom"
		>
			<Repos {data} cat={'front-end'} />
		</ul>
		<hr class="mt-5 mb-4" />

		<!-- {/* BACK-END */} -->
		<h2
			class="d-flex flex-column mb-3"
			data-aos="fade-up"
			data-aos-duration="1000"
			data-aos-anchor-placement="top-bottom"
		>
			Back-end <span />
		</h2>

		<ul
			class="row justify-content-between mb-0"
			data-aos="fade-up"
			data-aos-duration="1000"
			data-aos-anchor-placement="top-bottom"
		>
			<Repos {data} cat={'back-end'} />
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
