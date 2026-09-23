import {BasePage} from "./BasePage.js"

export class RegistrationPage extends BasePage{

    constructor(page)

    {
        super(page);
        this.page=page;
        this.regName = page.getByPlaceholder("Name")
        this.regEmail = page.getByPlaceholder("Email")
        this.RegPassword = page.getByPlaceholder("Password")
        this.stateDropdown = page.locator("//select[@id='state']")
        this.hobbiePlaying = page.locator("//option[text()='Playing']")
        this.signUpButton = page.locator("//button[text()='Sign up']")
    }

    async newRegistration(name,email,password)
    {
        await this.type(this.regName,name);
        //await this.regName.fill(name);
        await this.type(this.regEmail,email);
        //await this.regEmail.fill(email);
        await this.type(this.RegPassword,password);
        //await this.RegPassword.fill(password);
                
    }
    async selectInterest(interestName) {
        let interestLocator = this.page.locator(`//label[text()='${interestName}']//preceding::input[1]`);
        await interestLocator.check();   // selects the checkbox
    }

    async selectGender(genderName) {
        const genderLocator = this.page.locator(`//h4[text()='Gender']//following::input[@type='radio' and @value='${genderName}']`);
        await genderLocator.check();
    }

    async selectState(stateName) {
        await this.stateDropdown.click();
        await this.stateDropdown.selectOption({ value: stateName });
    }
    async selectHobby(hobbyName) {
        await this.hobbiePlaying.locator(`text=${hobbyName}`).click();
    }

    async submitForm() {
        await this.click(this.signUpButton);
        //await this.signUpButton.click();
    }
    

}