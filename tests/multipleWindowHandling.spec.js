const { test, expect } = require('@playwright/test');
test("New window sample", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://demoqa.com/browser-windows");

    // Wait for new window
    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        page.click("#windowButton")
    ]);

    await newPage.waitForLoadState();

    const text = await newPage.locator("#sampleHeading").textContent();
    console.log("Text in new window:", text);

    const pages = context.pages();
    console.log("Number of tabs:", pages.length);

    await pages.forEach(async p => {
        console.log(await p.title());
    });

  
});
