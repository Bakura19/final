import { $ } from '@wdio/globals';

export class LobbyMenu {
    Containers = {
        MainContainer: $('//div[@class="main-wrap-menu"]')
    }; 

    Buttons = {
        LiveCasino: this.Containers.MainContainer.$('(//a[text()="live-казино"])[1]')
    };

    DropDowns = {
        Promo: this.Containers.MainContainer.$('//a[text()="промо"]')
    };

    async selectSectionInPromo(section: string) {
        await this.DropDowns.Promo.moveTo();
        await expect(this.Containers.MainContainer.$('//ul[@class="main-bottom-line dropdown dropdown-promo dropdown-open"]')).toBeDisplayed();
        await this.Containers.MainContainer.$('//ul[@class="main-bottom-line dropdown dropdown-promo dropdown-open"]').$(`//a[text()="${section}"]`).click();
        await browser.pause(1000);
    }
};

