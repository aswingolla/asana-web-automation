import { expect } from '@playwright/test';

export async function verifyTask(page, task, column, tags) {
    console.log(`Column: ${column}`);
    const columnLocator = page.locator(`text=${column}`);
    await expect(columnLocator).toBeVisible();
  
    console.log(`Task: ${task}`);
    const taskLocator = page.locator(`text=${task}`);
    await expect(taskLocator).toBeVisible();

    const parentForColumn = page.getByRole('div', { hasText: column });
    const parentForTask = page.getByRole('div', { hasText: task });
    await expect(parentForColumn).toEqual(parentForTask);
    
    for (const tag of tags) {
      console.log(`Tag: ${tag}`);
      const parentForTag = page.getByRole('div', { hasText: tag });
      await expect(parentForTask).toEqual(parentForTag);
    }
}