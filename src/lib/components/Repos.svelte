<script lang="ts">
	import { onMount, tick } from 'svelte';
	import type { Repos } from '../../routes/projetos/interface';
	import { error } from '@sveltejs/kit';
	import { repoCategories, repoImgs, repoDescription } from '../../routes/projetos/content';
	import Loading from './Loading.svelte';
	import { writable } from 'svelte/store';

	export let cat: string;
	let data: { repositories: Repos[] | null } = { repositories: null };
	let filteredRepos: Repos[] = [];

	let isLoading = true;

	// export const repositories = writable(null);
	// export const timeout = writable(false);

	const fetchData = async () => {
		try {
			const response = await fetch(`https://api.github.com/users/skGab/starred`);

			const repos = await response.json();

			const repositories: Repos[] | null = repos.map((repo: any) => ({
				name: repo.name,
				category: repoCategories[repo.name],
				image: repoImgs[repo.name],
				link: repo.html_url,
				description: repoDescription[repo.name],
			}));

			isLoading = true;
			return { repositories };
		} catch (err) {
			throw error(500, 'An unknown error occurred');
		}
	};

	onMount(async () => {
		await tick();
		data = await fetchData();
		isLoading = false;
	});

	$: if (data.repositories && cat) {
		filteredRepos = data.repositories.filter((repo: Repos) => repo.category === cat);
	}

	// const fetchData = async () => {
	// 	try {
	// 		const response = await fetch(`https://api.github.com/users/skGab/starred`);
	// 		const repos = await response.json();

	// 		const repoData: Repos[] = repos.map((repo: any) => ({
	// 			name: repo.name,
	// 			category: repoCategories[repo.name],
	// 			image: repoImgs[repo.name],
	// 			link: repo.html_url,
	// 			description: repoDescription[repo.name],
	// 		}));

	// 		repositories.set(repoData);

	// 		// Cache data in localStorage
	// 		localStorage.setItem('cachedRepos', JSON.stringify({ data: repoData, timestamp: Date.now() }));
	// 	} catch (err) {
	// 		throw error(500, 'An unknown error occurred');
	// 	}
	// };

	// onMount(async () => {
	// 	await tick();
	// 	const cachedData = localStorage.getItem('cachedRepos');
	// 	const currentTime = Date.now();
	// 	const ttl = 3600000; // 1 hour in milliseconds

	// 	if (cachedData) {
	// 		const { data, timestamp } = JSON.parse(cachedData);

	// 		if (currentTime - timestamp < ttl) {
	// 			repositories.set(data);
	// 			isLoading = false;
	// 			return;
	// 		}
	// 	}

	// 	if (getRepo(repositories) === null || getRepo(timeout)) {
	// 		isLoading = true;
	// 		await fetchData();
	// 		timeout.set(false);
	// 		isLoading = false;
	// 	}
	// });

	// $: filteredRepos = getRepo(repositories)?.filter((repo: Repos) => repo.category === cat) || [];
</script>

{#if isLoading}
	<Loading />
{:else}
	{#each filteredRepos as repo}
		<li class="col-12 col-sm-6 d-flex align-items-center justify-content-center">
			<a href={repo.link} class="w-100" target="_blank" rel="noreferrer">
				<figure class="project text-center text-center px-4 px-sm-0">
					<img loading="lazy" src={repo.image} height="130px" alt="project thumb" class=" w-100 mb-3" />
					<h3 class="h5 mb-1">{repo.name}</h3>
					<p class="mb-0">{repo.description}</p>
				</figure>
			</a>
		</li>
	{/each}
{/if}

<style lang="scss">
	a {
		color: unset;
	}

	a:hover {
		color: #fd8802de;
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

			max-width: 350px;
			max-height: 190px;

			@media screen and (min-width: 576px) {
				max-width: 430px;
				max-height: 130px;
			}

			// max-width: 230px;

			transition: all 0.3s ease; /* Adding smooth transition */
		}
		img:hover {
			-webkit-mask-position: 7.5% 50%, 92.5% 50%;
			mask-position: 7.5% 50%, 92.5% 50%;
			filter: grayscale(0);
			transform: scale(1.1);
		}

		p {
			font-size: 0.95rem;
			max-width: 250px;
			margin: 0 auto;
		}
	}
</style>
