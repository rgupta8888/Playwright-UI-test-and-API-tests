const { test, expect }= require('@playwright/test');

test('Sofy Assertions Demo', async ({ page }) => {
     await page.goto('https://demo.nopcommerce.com/register');

    // HArd  assertion 
    await expect(page).toHaveTitle('nopCommerce demo store. Register');
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');  
    const registorButton = await page.locator("//button[normalize-space()='Search']");
    await expect(registorButton).toBeVisible();

    // soft assetion
    await expect.soft(page).toHaveTitle('nopCommerce demo store');
    await expect.soft(page).toHaveURL('https://demo.nopcommerce.com/register');  
    const registorButton2 = await page.locator("//button[normalize-space()='Search']");
    await expect.soft(registorButton2).toBeVisible();

})