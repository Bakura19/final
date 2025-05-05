import { $ } from '@wdio/globals';

export class LoginPage {
    Containers = {
        MainContainer: $('//div[@class="c-modal__inner"]')
    }; 

    Buttons = {
        Login: this.Containers.MainContainer.$('//button[@data-test="auth-form-btn"]')
    };

    InputFields = {
        Email: this.Containers.MainContainer.$('//input[@name="email"]'), 
        Password: this.Containers.MainContainer.$('//input[@name="password"]')
    };

    async login(username: string, password: string) {
        await this.Containers.MainContainer.waitForDisplayed();
        await this.InputFields.Email.setValue(username);
        await this.InputFields.Password.setValue(password);
        await this.Buttons.Login.click();
    }
};

// comm
