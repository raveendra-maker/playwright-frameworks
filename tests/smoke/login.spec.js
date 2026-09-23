import {test,expect} from "../../fixture/fixture.js"

import user from '../../testdata/user.json'


test.describe("Login Test",{tags: ['smoke','login']},()=>{
    
    test('login to application', async ({ page,loginPage,dashboardPage}) => 
{

    await page.goto('/login');
    
    await loginPage.loginToApplication(user.username, user.password);

    await dashboardPage.clickOnMenuIcon();

    await dashboardPage.clickOnSignOutButton();

    expect(page.url()).not.toContain('/login');

    
});



})





