import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { HomePage } from '../Pages/HomePage';
import { CartPage } from '../Pages/CartPage';
import { describe } from 'node:test';


test.describe.serial('POM Test Suite', () => {

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

    })

    test.fail('POM Test Demo @regression @fail', async ({ page }) => {
        console.log("This is regression test");
        expect.soft(1).toBe(2);
    })

    test.fixme('POM Test Demo @regression @fixme', async ({ page }) => {
        console.log("This is regression test fix me test");
        expect.soft(1).toBe(2);
    })

    test.slow('POM Test Demo @regression @slow', async ({ page }) => {
        
        // increasing deafault 30000 to 3 times of that
        
        await page.goto('https://demo.nopcommerce.com/');
        await page.waitForTimeout(40000);
        console.log("This is regression test slow test");

    })


});