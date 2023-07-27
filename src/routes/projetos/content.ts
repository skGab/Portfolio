import type { RepoImages, RepoCategories, RepoDescriptions } from './interface';

import apiImage from '$lib/imgs/api_thumb.webp';
import icarrosImage from '$lib/imgs/icarros_thumb.webp';
import bnsImage from '$lib/imgs/bns_thumb.webp';
import mobiltecImage from '$lib/imgs/mobiltec_thumb.webp';
import coopersImage from '$lib/imgs/coopers_thumb.webp';
import portfolioImage from '$lib/imgs/portfolio_thumb.webp';
import atlanticImage from '$lib/imgs/atlantic_thumb.webp';

// IMAGES
const repoImgs: RepoImages = {
	Atlantic: atlanticImage,
	Portfolio: portfolioImage,
	'Leads-API': apiImage,
	API: apiImage,
	Icarros: icarrosImage,
	BNS: bnsImage,
	Mobiltec: mobiltecImage,
	Coopers: coopersImage,
};

// CATEGORIES
const repoCategories: RepoCategories = {
	Atlantic: 'front-end',
	Portfolio: 'full-stack',
	'Leads-API': 'back-end',
	API: 'back-end',
	Icarros: 'front-end',
	BNS: 'front-end',
	Mobiltec: 'front-end',
	Coopers: 'full-stack',
};

// DESCRIPTION
const repoDescription: RepoDescriptions = {
	Atlantic: 'Template conceito Atlantic Hub - Wordpress',
	Portfolio: 'Meu Portfolio - Sveltekit & Typescript',
	'Leads-API': 'Recebendo dados + armazenamento em tabelas do Google BigQuery',
	API: 'Recebendo requests de aplicações ex. Coopers',
	Icarros: 'Template conceito Icarros - Sveltekit',
	BNS: 'Template conceito BNS - Html & Css',
	Mobiltec: 'Template conceito Mobiltec - PHP',
	Coopers: 'To Do App - React & Sass',
};

export { repoImgs, repoCategories, repoDescription };
