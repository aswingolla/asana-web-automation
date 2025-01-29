import { expect } from '@playwright/test';
import * as dotenv from 'dotenv';

// Load environment variables from a specified file or default to 'env/dev.env'
const envFilePath = process.env.ENV_FILE || 'env/dev.env';
dotenv.config({ path: envFilePath });

const loginURL = process.env.BASE_URL || '';
const credentials = { email: process.env.EMAIL, password: process.env.PASSWORD };

export async function login(page) {
    await page.goto(loginURL);
    await page.getByRole('textbox', { name: 'Username' }).fill(credentials.email);
    await page.getByRole('textbox', { name: 'Password' }).fill(credentials.password);
    await page.getByRole('button', { name: 'Sign in' }).click();
    if (loginURL) {
        await expect(page).toHaveURL(loginURL);
    } else {
        throw new Error('BASE_URL is not defined');
    }
}