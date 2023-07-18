<script>
	import { page } from '$app/stores';
</script>

<section id="error" class="d-flex align-items-center justify-content-center">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<h1 class="text-center">{$page.error?.message}</h1>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	#error {
		height: 85vh;
	}
</style>
