
import {test,expect} from '@playwright/test';


test ('Multiple Locators Test',async({page}) =>{
    await page.goto('https://www.demoblaze.com/index.html');    
   
   /* const  links = await page.$$("a");
    for (const link of links){
        const linkText = await link.textContent();
        console.log(linkText);
    }*/
    await page.waitForSelector("//div[@id='tbodyid']/div/div/div/h4/a")
     const links = await  page.$$("//div[@id='tbodyid']/div/div/div/h4/a")
         for (const link of links){  
        const linkText = await link.textContent();
        console.log(linkText);
         }
})