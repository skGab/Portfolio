import type { PageLoad } from './$types';
import type { Config } from '@sveltejs/adapter-vercel';
import { error } from '@sveltejs/kit';
import { repoCategories, repoImgs, repoDescription } from './content';
import type { Repos } from './interface';

export const config: Config = {
	runtime: 'edge',
};

export const load = (async ({ fetch }) => {
	const username = 'skGab';

	try {
		const data = await fetch(`https://api.github.com/users/${username}/starred`);

		if (!data.ok) {
			throw new Error('Failed to fetch data');
		}

		const parseData = await data.json();

		const repositories: Repos[] = parseData.map((repo: Repos) => {
			return {
				name: repo.name,
				category: repoCategories[repo.name],
				image: repoImgs[repo.name],
				link: repo.html_url,
				description: repoDescription[repo.name],
			};
		});
		// return { repositories };

		return { repositories };
	} catch (err) {
		// throw error(500, err.message);
	}
}) satisfies PageLoad;
