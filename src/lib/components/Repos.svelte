<script lang="ts">
	import type { Repos } from '../../routes/projetos/+page';

	export let data;
	export let cat: string;

	let filteredRepos = data.repositories.filter((repo: Repos) => repo.category === cat);
</script>

{#each filteredRepos as repo}
	<li class="col-12 col-sm-6 d-flex align-items-center justify-content-center">
		<a href={repo.link} target="_blank" rel="noreferrer">
			<figure class="project text-center">
				<img loading="lazy" src={repo.image} alt="project thumb" class="w-100 mb-3" />
				<h3 class="h5 mb-1">{repo.name}</h3>
				<p class="mb-0">descricao descricao descricao descricao descriao</p>
			</figure>
		</a>
	</li>
{/each}

<style lang="scss">
	a {
		text-decoration: none;
		color: unset;
	}
	.project {
		margin: 0;
		text-align: center;

		img {
			border-radius: 12px;
			mask: var(--m);
			filter: grayscale(0.5);
			box-shadow: 1px 2px 4px black;
			transition: 0.3s linear;
			object-fit: cover;
			min-height: 130px;
			max-height: 130px;
			max-width: 230px;
		}
		img:hover {
			-webkit-mask-position: 7.5% 50%, 92.5% 50%;
			mask-position: 7.5% 50%, 92.5% 50%;
			filter: grayscale(0);
		}

		p {
			max-width: 250px;
		}
	}
</style>
