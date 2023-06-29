<script lang="ts">
	import Footer from '$lib/footer.svelte';
	import Header from '$lib/header.svelte';
    import '../global.scss'
</script>

<svelte:head>
	<!-- BOOTSTRAP CSS -->
	<link
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
		rel="stylesheet"
		integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
		crossorigin="anonymous"
	/>
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
