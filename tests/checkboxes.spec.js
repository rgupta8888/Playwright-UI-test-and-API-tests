const { test, expect } = require('@playwright/test');

test('Multiple Check Box Test', async ({ page }) => {
    await page.goto('https://www.qa-practice.com/elements/checkbox/mult_checkbox');

    const checkboxes = page.locator("//input[@name='checkboxes']");
    const count = await checkboxes.count();
    console.log("Total number of check boxes are: " + count);

    for (let i = 0; i < count; i++) {
        const checkbox = checkboxes.nth(i);

        // Get label text associated with checkbox
        const labelText = await checkbox.evaluate(node => node.nextSibling.textContent.trim());

        if (labelText === 'One' || labelText === 'Three') {
            await checkbox.check();

            await expect(checkbox).toBeChecked();
        }
    }
});
