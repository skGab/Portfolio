import { test, expect } from '@playwright/test';

test('Animation, links and button should work', async ({ page }) => {
	// // Select the logo element
	// const logo = await page.$('.navbar-brand');

	// // Hover over the logo
	// await logo.hover();

	// // Wait for a short period to ensure the animation has had time to trigger
	// await page.waitForTimeout(500); // Adjust the time as needed

	await page.getByRole('link', { name: 'gabriel assunção' }).hover();

	const logoElement = await page.$('.navbar-brand');

	// Check if the element exists before attempting to get its computed styles
	if (logoElement) {
		// Get the computed styles of the element after hover
		const styles = await page.evaluate((logo) => {
			return window.getComputedStyle(logo);
		}, logoElement);

		// Check if the transform property has changed to rotate(-22deg)
		expect(styles.transform).toContain('rotate(-22deg)');
	} else {
		throw new Error('Logo element not found');
	}
});
