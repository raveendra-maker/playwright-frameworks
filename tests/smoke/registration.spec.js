//import { test, expect } from '@playwright/test';
import { test, expect } from "../../fixture/fixture.js";
import { RegistrationPage } from '../../pages/RegistrationPage.js';
import userreg from '../../testdata/reguser.json';

test('user Registration', async function ({page,loginPage})
{
    const timestamp = Date.now();
    const dynamicEmail = `ravee${timestamp}@gmail.com`; 

    await page.goto('/login');
    await loginPage.clickOnNewUserSignUpLink();
    const registrationPage = new RegistrationPage(page);
    await registrationPage.newRegistration(userreg.name,dynamicEmail,userreg.password);
    await registrationPage.selectInterest(userreg.interest);
    //page.waitForTimeout(2000);
    await registrationPage.selectGender(userreg.gender);
    //page.waitForTimeout(2000);
    await registrationPage.selectState(userreg.state);
    
    await registrationPage.selectHobby(userreg.hobby);
    await registrationPage.submitForm();

    //const text=page.getByText('Signup successfully, Please login!', { exact: true });
    const text= await page.locator("//div[text()='Signup successfully, Please login!']").innerText();
    console.log(text);
    
    

})