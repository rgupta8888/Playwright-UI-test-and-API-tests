import { test, expect } from '@playwright/test';

test('Assertions Demo', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/register');

  // assertion to check URL
  await expect(page).toHaveURL('https://demo.nopcommerce.com/register');


    // assertion to check title
    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    // assertion for element to be visible
    const registerButton = await page.locator('#register-button');
    await expect(registerButton).toBeVisible();

    // assertion for element to be enabled 
    const searchButton = await page.locator("//button[normalize-space()='Search']");
    await expect(searchButton).toBeEnabled();

    // assertion to check radio button is checked
    const maleRadioButton = await page.locator("//input[@id='gender-male']");
    await maleRadioButton.click();
    await expect(maleRadioButton).toBeChecked();

    // assertion to check checkbox is checked   
    const newsletterCheckbox = await page.locator("//input[@id='NewsLetterSubscriptions_0__IsActive']");
    await expect(newsletterCheckbox).toBeChecked();


    // assertion to check attributes of element
    const searchTexTBox = await page.locator("//input[@id='small-searchterms']");
    await expect(searchTexTBox).toHaveAttribute('placeholder', 'Search store');    

    // assertion to check css property of element
    await expect(searchButton).toHaveCSS('background-color', 'rgb(74, 178, 241)');

    // assertion to check element text
    const welcomeText = await page.locator("//button[@id='register-button']");
    await expect(welcomeText).toHaveText('Register');

    // asertion to check value 
    const moduleNames = page.locator("(//div[@role='menu' and @class='menu'])/div");
    for (let i = 0; i < await moduleNames.count(); i++) {
      console.log(await moduleNames.nth(i).textContent());
    }

});
