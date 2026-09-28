import {expect} from "@playwright/test";
import {test} from "../../fixture/fixture.js";
import { HomePage } from "../../pages/HomePage.js";
import { CategoriesPage } from "../../pages/CategoriePage.js";
import user from '../../testdata/user.json'

test('Manage Category', async function ({page,loginPage,browser})
{
    //test.setTimeout(120000);
    await page.goto('/login');
    await loginPage.loginToApplication(user.username, user.password); 
    const homePage = new HomePage(page);
    await homePage.manageClick();
    await homePage.hoverOnManageCategories();
    const categoryPage = new CategoriesPage(page);
    await categoryPage.manageCategoriesFlow(browser);

    
})