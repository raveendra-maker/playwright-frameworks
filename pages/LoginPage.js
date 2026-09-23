import {BasePage} from "./BasePage.js"


export class LoginPage extends BasePage {

    
        constructor(page) 
        {

            super(page)

            this.page = page;

            this.usernameField = page.getByPlaceholder("Enter Email")

            this.passwordField = page.getByPlaceholder("Enter Password")

            this.loginButton = page.getByText("Sign in",{exact: true})

            this.newUrlSignUpLink=page.getByText("New user? Signup",{exact: true})

            this.errorMessage = page.locator(".errorMessage")

        }

        async loginToApplication(username, password) 
        {

            await this.type(this.usernameField,username)

            //await this.usernameField.fill(username);

            await this.type(this.passwordField, password)

            //await this.passwordField.fill(password);

            await this.click(this.loginButton)
            //await this.loginButton.click();
        }

        async clickOnNewUserSignUpLink() 
        {
            await this.click(this.newUrlSignUpLink)

            //await this.newUrlSignUpLink.click();
        }

        async getErrorMessage() 
        {
            return await this.getText(this.errorMessage)
            //return await this.errorMessage.textContent();
        }

}

