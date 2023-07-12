const path = require('path');

module.exports = {
	root: true,
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:svelte/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		project: './tsconfig.json',
		extraFileExtensions: ['.svelte'], // This is a required setting in `@typescript-eslint/parser` v4.24.0.
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			// Parse the `<script>` in `.svelte` as TypeScript by adding the following configuration.
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
		},
	],
	rules: {
		'import/prefer-default-export': 'off',
		'import/no-mutable-exports': 'off',
	},
	env: {
		browser: true,
		es2020: true,
		node: true,
	},
};
