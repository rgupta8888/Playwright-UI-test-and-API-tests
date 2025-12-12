const { test, expect}= require('@playwright/test')

test('Select Female Radio Button', async ({ page }) => {

  await page.goto('https://demo.nopcommerce.com/register');

  const femaleRadio = page.locator("//input[@id='gender-female']");
  const maleRadio = page.locator("//input[@id='gender-male']");


  const radioButtons = await page.locator("//div[@id='gender']/span/label");
  const count = await radioButtons.count();
   /* for (let i = 0; i < count; i++) {

        console.log(await radioButtons.nth(i).textContent());   
    }*/

  for (let i = 0; i < count; i++) {
    const label = radioButtons.nth(i);
    const text = (await label.textContent()).trim();

    if (text === 'Female') {
      await label.click();     // clicks the associated radio input
      break;
    }
  }
 
 console.log("waiting ------------------");
 await page.waitForTimeout(5000);
   
  // Click or check the radio button
  await femaleRadio.check();

  // Assertion 1: should be checked
  await expect(femaleRadio).toBeChecked();

  // Assertion 2: boolean check
  const isChecked = await femaleRadio.isChecked();
  await page.waitForTimeout(5000);
  expect(isChecked).toBeTruthy();

   // Assertion 3: boolean check
  const isNotChecked = await maleRadio.isChecked();
  expect(isNotChecked).toBeFalsy();

});

