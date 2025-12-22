
import { test, expect } from '@playwright/test';
test('Mobile web app test', async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    userAgent:
      'Mozilla/5.0 (Linux; Android 13; Pixel 7)'
  });

  const page = await context.newPage();
  await page.goto('https://m.amazon.in');

  await page.locator('#nav-search-keywords').fill('iphone');
  await page.keyboard.press('Enter');
});
