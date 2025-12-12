const { test, expect } = require('@playwright/test');

test('title and url test', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');

    const pageTitle = await page.title();

    await expect(page).toHaveTitle("STORE");

    console.log("Title of the page is: " + pageTitle);

    const pageUrl = await page.url();

    await expect(page).toHaveURL("https://www.demoblaze.com/index.html");

    console.log("URl of the page is: " + pageUrl);

    await page.close();
});
