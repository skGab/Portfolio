import { test, expect } from '@playwright/test';
import { describe } from 'node:test';

test.describe('Animation, links and button should work', () => {
	// test('Testing logo animation', async ({ page }) => {});

	// TEST PROJECT AND LOGO LINKS
	test('Testing project and logo links', async ({ page }) => {
		await page.goto('http://localhost:5173');

		await page.getByRole('link', { name: 'Projetos' }).click();
		await expect(page).toHaveURL('http://localhost:5173/projetos/');
		await page.getByRole('link', { name: 'gabriel assunção' }).click();
		await expect(page).toHaveURL('http://localhost:5173');
	});

	//TEST BUTTON THEME
	test('Testing button theme', async ({ page }) => {
		await page.goto('http://localhost:5173');

		await page.locator('.theme').click();

		const themeButtonClass = await page.locator('.theme').getAttribute('class');

		// 	CHECK IF IS EVERYTHING RIGHT WITH THE BUTTON CLASS
		if (themeButtonClass === null) throw new Error('Erro ao pegar classe do botão');

		const colorTheme = themeButtonClass.includes('light') ? 'light' : 'dark';

		await expect(page.locator('.theme')).toHaveAttribute(
			'class',
			`theme border-0 rounded-3 me-1 me-md-0 ${colorTheme} s-6t0zidZTtq_e`,
		);
	});
});
