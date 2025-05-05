import { $ } from '@wdio/globals';

export class HeaderMenu {
    Containers = {
        MainContainer: $('//div[@class="main-block1 js-header"]')
    }; 

    Buttons = {
        Login: this.Containers.MainContainer.$('//a[@class="header-btn login-btn"]'),
        UserName: this.Containers.MainContainer.$('//p[@class="main-login"]')
    };

    
};