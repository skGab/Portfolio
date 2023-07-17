<script lang="ts">
		export let data;
		export let cat;

		export let filteredData = data.repositories.filter((repo) => repo.categorie === cat)
</script>

<li>
	{#each filteredData as repo}
		<li class="col-6 d-flex align-items-center justify-content-center">
			<a href={repo.link} target="_blank" rel="noreferrer">
				<figure class="project text-center">
					<img loading="lazy" src={repo.image} alt="project thumb" class="img-fluid mb-3" />
					<h3 class="h5 mb-1">{repo.name}</h3>
					<p class="mb-0">descricao descricao descricao descricao descriao</p>
				</figure>
			</a>
		</li>
	{/each}
</li>

<style style="scss"></style>
