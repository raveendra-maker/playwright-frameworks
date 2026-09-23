import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage.js";
import multiuser from "../../testdata/allUsers.json";



test.describe("Data Driven Test For Login Scenario",{tags:["datadriven","login"]},()=>{


for (const user of multiuser) 
{
  test("login to application "+user.id, async ({ page }) => 
    {

     await page.goto('/login');

     const loginPage = new LoginPage(page);

     console.log(`Test Data Used In This Test ${user.username} and ${user.password}`);
    
     await loginPage.loginToApplication(user.username, user.password);
     
     expect(await loginPage.getErrorMessage()).toBe(user.message) 

     expect(page.url()).toContain('/login');
      

    })
}







})




