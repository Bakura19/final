import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'
import { pageManager } from '../pageobjects/PageManager';
import { Credentials } from '../../TestData/Credentials';


Given('I am on casino Website', async () => {
    await pageManager.page.open();    
});
    
When('I click Login button', async () => {
    await pageManager.headerMenu.Buttons.Login.click();
})
    
When('I login with my creds', async () => {
    await pageManager.loginPage.login(Credentials.LOGIN, Credentials.PASSWORD); //comment
});
    
When('I click on username', async () => {
    await pageManager.headerMenu.Buttons.UserName.click();
})
    
Then('I see email is confirmed', async () => {
    expect(await pageManager.myProfile.Elements.EmailConfirmed.getText()).toBe('Подтверждена')
})
    
Then('I see status new', async () => {
    expect(await pageManager.myProfile.Elements.StatusNew.getText()).toBe('New')
})


