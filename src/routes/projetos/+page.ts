import type { PageLoad } from './$types';
import apiImage from '$lib/imgs/api_thumb.webp';
import icarrosImage from '$lib/imgs/icarros_thumb.webp';
import abcBooksImage from '$lib/imgs/abcBooks_thumb.webp';
import bnsImage from '$lib/imgs/bns_thumb.webp';
import mobiltecImage from '$lib/imgs/mobiltec_thumb.webp';
import coopersImage from '$lib/imgs/coopers_thumb.webp';
import blogNovalarImage from '$lib/imgs/blogNovalar_thumb.webp';

export interface Repos {
	name: string;
	categorie: string;
	image: HTMLImageElement;
	html_url: HTMLLinkElement;
}

interface Error {
	message: string;
}

interface repoCategories {
	[key: string]: string;
}

const repositoryImages = {
	'Leads-API': apiImage,
	API: apiImage,
	'Icarros-Sveltekit': icarrosImage,
	abcbooks: abcBooksImage,
	'BNS-HTML': bnsImage,
	Mobiltec: mobiltecImage,
	Coopers: coopersImage,
	TestBlogNovalar: blogNovalarImage,
};

const repositoryCategories: repoCategories = {
	'Leads-API': 'back-end',
	API: 'back-end',
	'Icarros-Sveltekit': 'front-end',
	abcbooks: 'front-end',
	'BNS-HTML': 'front-end',
	Mobiltec: 'front-end',
	Coopers: 'full-stack',
	TestBlogNovalar: 'front-end',
};

export const load = (async ({ fetch }) => {
	const username = 'zdeep10';

	try {
		const data = await fetch(`https://api.github.com/users/${username}/starred`);
		const parseData = await data.json();

		// console.log(parseData)

		const repositories = parseData.map((repo: Repos) => {
			const repoName = repo.name as keyof typeof repositoryImages;
			return {
				name: repo.name,
				categorie: repositoryCategories[repoName],
				image: repositoryImages[repoName],
				link: repo.html_url,
			};
		});

		return { repositories };
	} catch (error) {
		const err = error as Error;

		return {
			error: true,
			message: 'An error occurred while fetching repositories.',
			details: err.message,
		};
	}
}) satisfies PageLoad;
