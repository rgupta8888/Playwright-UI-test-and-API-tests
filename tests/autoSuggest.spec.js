const {test, expect} = require('@playwright/test')

test ('auto suggest Test', async ({ page }) => {
    await page.goto('https://www.redbus.in/');
    await page.locator("//div[starts-with(@class, 'srcDest')]").fill("delhi")

    await page.waitForTimeout(2000);



});