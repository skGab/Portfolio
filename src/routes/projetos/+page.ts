/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import type { PageLoad } from './$types';

interface Repos {
	name: string;
}

export const load = (async ({ fetch, setHeaders }) => {
	const token = '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';
	const username = 'zdeep10';

	try {
		const res = await fetch(`https://api.github.com/users/${username}/starred`);
		const repos: Repos[] = await res.json();

		setHeaders({
			Authorization: `token ${token}`,
			Accept: 'application/vnd.github.v3+json',
		});

		const repositories = repos.map((repositorie: Repos) => repositorie.name);

		return { repositories };
	} catch (error) {
		return console.error(error);
	}
}) satisfies PageLoad;
