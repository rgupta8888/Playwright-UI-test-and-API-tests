import {test,expect} from '@playwright/test';

// above way of importing is also valid
//const { test, expect } = require('@playwright/test');


test('Login Test',async({page}) =>{
    await page.goto('https://www.demoblaze.com/index.html');
    //await page.maximizeWindow();
    await page.click("//a[@id='login2']");
    // above way of clicking is also valid
    //await page.locator("//a[@id='login2']").click();
    await page.fill("//input[@id='loginusername']","rahul01");
    await page.fill("#loginpassword","test@123");
    await page.click("//button[normalize-space()='Log in']");

    // Assertion to verify login
    await page.waitForSelector("//a[@id='logout2']")
    const userLoggedIn = await page.locator("//a[@id='logout2']")
    expect(userLoggedIn).toBeVisible();
});