import {page} from '@playwright/test';
import { BasePage } from './BasePage.js';



export class LoginPage extends BasePage {
    constructor(page) {     
        super(page);
        this.usernameField = page.getByPlaceholder('Enter Email');
        this.passwordField = page.getByPlaceholder('Enter Password');
        this.loginButton = page.getByText('Sign in', {exact: true});
        this.newUserSignUpLink = page.getByText('New User? Sign Up', {exact: true});
        this.errorMessage = page.locator('.errorMessage');
    }


    async loginToApplication(username, password) {

        await this.type(this.usernameField, username);
        await this.type(this.passwordField, password);
        await this.click(this.loginButton);
    }

    async clickNewUserSignUpLink() {

        await this.click(this.newUserSignUpLink);
        //await this.newUserSignUpLink.click();
    }

    async getErrorMessage() {

        return await this.getText(this.errorMessage);
        //return await this.errorMessage.textContent();
    }
}