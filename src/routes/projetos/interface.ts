// REPOSITORIES
export interface Repos {
	link: string | null | undefined;
	name: string;
	category: string;
	image: string;
	html_url: HTMLLinkElement;
	description: string;
}

// IMAGES
export interface RepoImages {
	[key: string]: string;
}

// CATEGORIES
export interface RepoCategories {
	[key: string]: string;
}

// DESCRIPTIONS
export interface RepoDescriptions {
	[key: string]: string;
}
