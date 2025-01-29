import { expect } from '@playwright/test';

export async function navigateToSection(page, section) {
    await page.click(`text=${section}`);
    const sectionLocator = page.locator(`text=${section}`).first();
    await expect(sectionLocator).toBeVisible();

    // Assert if the text is within an <h1> element
    const h1Locator = page.locator('h1', { hasText: section });
    await expect(h1Locator).toBeVisible();
}