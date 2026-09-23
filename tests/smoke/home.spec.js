import {test,expect} from "../../fixture/fixture.js"
import { HomePage } from '../../pages/HomePage.js';
import user from '../../testdata/user.json';

test('login to Home Page', async ({ page,loginPage,dashboardPage}) => 
{

    await page.goto('/login');
    await loginPage.loginToApplication(user.username, user.password);
    const homePage = new HomePage(page);
    await homePage.manageClick();
    await homePage.hoverOnManageCategories();
    await homePage.manageCatagory();
     


})