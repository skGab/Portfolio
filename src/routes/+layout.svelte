<script lang="ts">
	import { onMount } from 'svelte';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import '../global.scss';

	onMount(() => {
		AOS.init({
			once: true,
		});
	});
</script>

<svelte:head>
	<!-- BOOTSTRAP CSS -->
	<link
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
		rel="stylesheet"
		integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
		crossorigin="anonymous"
	/>

	<script
		defer
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
		crossorigin="anonymous"
	></script>
</svelte:head>

<!-- HEADER -->
<Header />

<!-- 3D MODEL -->
<section id="tree3D">
	<div class="container px-4">
		<div class="row justify-content-center">
			<div class="col-11 text-center">
				<!-- {/* <DynamicModel/> */} -->
			</div>
		</div>
	</div>
</section>

<!-- MAIN -->
<main><slot /></main>

<!-- FOOTER -->
<Footer />

<style lang="scss">
</style>
