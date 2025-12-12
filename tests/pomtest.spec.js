import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { HomePage } from '../Pages/HomePage';
import { CartPage } from '../Pages/CartPage';



test('POM Test Demo @smoke', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('rahul01', 'test@123');

    await page.waitForTimeout(5000);
    expect.soft(page.locator("//a[@id='nameofuser']")).toHaveText("Welcome rahul01");


    const homePage = new HomePage(page);
    await homePage.addProductToCart("Sony vaio i5");
    await page.waitForTimeout(5000);
    await homePage.goToCart();
    await page.waitForTimeout(5000);


    const cartPage = new CartPage(page);
    await page.waitForSelector("#tbodyid tr");
    const status = await cartPage.checkProductInCart("Sony vaio i5");
    expect.soft(status).toBeTruthy();



});