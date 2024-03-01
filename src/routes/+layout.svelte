<script lang="ts">
	import { onMount } from 'svelte';
	import arrowTop from '$lib/icons/arrow-top.png';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import '../global.scss';

	let scrollToTop: () => void;

	onMount(() => {
		AOS.init({
			once: true,
		});

		window.addEventListener('scroll', () => {
			const element = document.getElementById('toTop');

			if (element) {
				if (window.scrollY === 0) {
					element.style.opacity = '0';
				} else {
					element.style.opacity = '50%';
				}
			}
		});

		scrollToTop = () => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		};

		const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');

		// @ts-ignore
		const popoverList = [...popoverTriggerList].map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl));
	});
</script>

<svelte:head>
	<!-- BOOTSTRAP CSS -->
	<link
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
		rel="stylesheet"
		integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
		crossorigin="anonymous"
	/>

	<script
		src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
		crossorigin="anonymous"
	></script>

	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
		crossorigin="anonymous"
	></script>
</svelte:head>

<!-- HEADER -->
<Header />

<!-- 3D MODEL -->
<!-- <section id="tree3D">
	<div class="container px-4">
		<div class="row justify-content-center">
			<div class="col-11 text-center">
				{/* <DynamicModel/> */}
			</div>
		</div>
	</div>
</section> -->

<!-- MAIN -->
<main data-bs-theme="light"><slot /></main>

<!-- FOOTER -->
<Footer />

<!-- TO TOP -->
<button id="toTop" class="d-md-none p-0 border-0 bg-transparent position-fixed bottom-0 end-0" on:click={scrollToTop}>
	<img src={arrowTop} alt="Para o topo" />
</button>

<style lang="scss">
	#toTop {
		transition: all ease-in 0.3s;
	}
</style>
