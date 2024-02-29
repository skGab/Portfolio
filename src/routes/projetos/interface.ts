// REPOSITORIES
export interface Repos {
	name: string;
	category: string;
	image: string;
	html_url: HTMLLinkElement;
	link: string | null | undefined;
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
