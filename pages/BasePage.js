import {test} from '@playwright/test';


export class BasePage 
{ 

        constructor(page) 
        {
            this.page = page;
        }

        // waits , alert, fill, type, dropdown, handle multiple tabs , capture text and more methods can be added here.

        async handleDropdown(selector, value)
        {
            await selector.selectOption(value);

            console.log(`**** dropdown handled with value ${value} ****`);
        }

       async getText(selector)
       {
            return await selector.textContent();
       }

       async type(selector, text)
       {
            await selector.fill(text);
            console.log(`**** type performed with value ${text} ****`);
       }

       async click(selector)
       {
            await selector.click();
            console.log(`**** click performed ****`);
       }

       async navigateToApplication(url)
       {
            await this.page.goto(url);
            console.log(`**** navigated to URL: ${url} ****`);
       }

       async uploadFiles(selector, filePaths)
       {
            await selector.setInputFiles(filePaths);
            console.log(`**** files uploaded: ${filePaths} ****`);
       }

}