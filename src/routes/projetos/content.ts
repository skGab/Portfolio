import type { RepoImages, RepoCategories, RepoDescriptions } from './interface';

import apiImage from '$lib/imgs/api_thumb.webp';
import icarrosImage from '$lib/imgs/icarros_thumb.webp';
import bnsImage from '$lib/imgs/bns_thumb.webp';
import mobiltecImage from '$lib/imgs/mobiltec_thumb.webp';
import coopersImage from '$lib/imgs/coopers_thumb.webp';

// IMAGES
const repoImgs: RepoImages = {
	'Leads-API': apiImage,
	API: apiImage,
	'Icarros-Sveltekit': icarrosImage,
	'BNS-HTML': bnsImage,
	Mobiltec: mobiltecImage,
	Coopers: coopersImage,
};

// CATEGORIES
const repoCategories: RepoCategories = {
	'Portfolio-Svelte': 'full-stack',
	'Leads-API': 'back-end',
	API: 'back-end',
	'Icarros-Sveltekit': 'front-end',
	'BNS-HTML': 'front-end',
	Mobiltec: 'front-end',
	Coopers: 'full-stack',
};

// DESCRIPTION
const repoDescription: RepoDescriptions = {
	'Portfolio-Svelte': 'Meu Portfolio - Sveltekit & Typescript',
	'Leads-API': 'Recebendo dados + armazenamento em tabelas do Google BigQuery',
	API: 'Recebendo requests de aplicações. Ex: Coopers',
	'Icarros-Sveltekit': 'Template conceito Icarros - Sveltekit',
	'BNS-HTML': 'Template conceito BNS - Html & Css',
	Mobiltec: 'Template conceito Mobiltec - PHP',
	Coopers: 'To Do App - React & Sass',
};

export { repoImgs, repoCategories, repoDescription };
