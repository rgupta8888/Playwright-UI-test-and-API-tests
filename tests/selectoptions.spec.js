const {test, expect} = require('@playwright/test');

    test ('select options test', async ({ page }) => {
        await page.goto('https://www.qa-practice.com/elements/select/single_select');
        
        // by value
        //await page.selectOption('#id_choose_language', '3');
        
        // visible text
        //await page.selectOption('#id_choose_language', { label: 'Python' });

        // by index
        //await page.selectOption('#id_choose_language', { index: 4 });

        // Returns Page.$$ returns array of elements
        const options = await page.$$("#id_choose_language option");
        console.log("Total number of options are: " + options.length);

        for (const option of options) {
            const optionText = await option.textContent();
            console.log(optionText);

            if(optionText.trim().includes('JavaScript')) {
               await page.selectOption('#id_choose_language', { label: optionText.trim() }); 
                break;
        }
    
    }});
