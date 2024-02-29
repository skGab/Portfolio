import type { RepoImages, RepoCategories, RepoDescriptions } from './interface';

import icarrosImage from '$lib/imgs/icarros_thumb.webp';
import bnsImage from '$lib/imgs/bns_thumb.webp';
import mobiltecImage from '$lib/imgs/mobiltec_thumb.webp';
import coopersImage from '$lib/imgs/coopers_thumb.webp';
import portfolioImage from '$lib/imgs/portfolio_thumb.webp';
import atlanticImage from '$lib/imgs/atlantic_thumb.webp';
import goImage from '$lib/imgs/go_thumb.webp';
import nestImage from '$lib/imgs/nest_thumb.webp';
import nodeImage from '$lib/imgs/node_thumb.webp';

// IMAGES
const repoImgs: RepoImages = {
	Atlantic: atlanticImage,
	Portfolio: portfolioImage,
	'Monday-integration-service': nodeImage,
	'Leads-API': nodeImage,
	Icarros: icarrosImage,
	BNS: bnsImage,
	Mobiltec: mobiltecImage,
	Coopers: coopersImage,
	'Client-management-service': nestImage,
	'Go-API': goImage,
};

// CATEGORIES
const repoCategories: RepoCategories = {
	Atlantic: 'front-end',
	Portfolio: 'full-stack',
	'Monday-integration-service': 'back-end',
	'Leads-API': 'back-end',
	'Client-management-service': 'back-end',
	'Go-API': 'back-end',
	API: 'back-end',
	Icarros: 'front-end',
	BNS: 'front-end',
	Mobiltec: 'front-end',
	Coopers: 'full-stack',
};

// DESCRIPTION
const repoDescription: RepoDescriptions = {
	Atlantic: 'Template Atlantic Hub - (Wordpress)',
	Portfolio: 'Meu Portfolio - (Sveltekit & Typescript)',
	'Leads-API': 'Armazenamento de dados em tabelas do Google BigQuery - (Node.js + Typescript)',
	Icarros: 'Template Icarros - (Sveltekit)',
	BNS: 'Template BNS - (Html & Css)',
	Mobiltec: 'Template Mobiltec - (PHP)',
	Coopers: 'To Do App - (React & Sass)',
	'Monday-integration-service': 'Integração com Monday & Transferencia de dados - (Node.js + Typescript) ',
	'Client-management-service': 'Gerenciamento de clientes e contratos - (Nest.js)',
	'Go-API': 'Gerenciamento de App: Coopers  (Go)',
};

export { repoImgs, repoCategories, repoDescription };
