import type { PageLoad } from './$types';

interface Repos {
	name: string;
}

interface Error {
	message: string;
}

export const load = (async ({ fetch }) => {
	const username = 'zdeep10';

	try {
		const res = await fetch(`https://api.github.com/users/${username}/starred`);
		const repos = await res.json();
		const repositories = repos.map((repositorie: Repos) => repositorie.name);

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
