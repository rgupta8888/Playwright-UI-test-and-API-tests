const { test, expect}= require('@playwright/test')

test ('Input Box Test', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register');
    const emailInputBox = await page.locator("#Email");
    await expect(emailInputBox).toBeVisible();
    await expect(emailInputBox).toBeEmpty();
    await expect(emailInputBox).toBeEditable();
    await expect(emailInputBox).toBeEnabled();

    await emailInputBox.fill("rahul1988gupta88");
    await page.waitForTimeout(20000);
    await emailInputBox.clear();
    await page.fill("#Email","fdsfdsf");
    


    });

