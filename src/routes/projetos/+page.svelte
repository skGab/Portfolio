<script lang="ts">
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
		<h2 class="d-flex flex-column mb-3" data-aos="fade-up" data-aos-duration="1000">Web App <span /></h2>
		<ul class="row justify-content-between mb-0" data-aos="fade-up" data-aos-duration="1200">
			<!-- {renderRepositories('web-app')} -->
			{data.repositories}
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
			<!-- {renderRepositories('front-end')} -->
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
			<!-- {renderRepositories('back-end')} -->
		</ul>
	</div>
</section>

<style lang="scss">
</style>
