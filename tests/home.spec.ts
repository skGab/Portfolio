import { test, expect } from '@playwright/test';

test('portfolio button should send user to projects page', async ({ page }) => {
	await page.goto('http://localhost:5173');

	await page.locator('.btn').click();

	await expect(page).toHaveURL('http://localhost:5173/projetos/');
});
