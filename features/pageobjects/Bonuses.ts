import { $ } from '@wdio/globals';

export class Bonuses {
    Containers = {
        MainContainer: $('//div[@class="main-context"]')
    }; 

    bonus(bonus: string) {
        return this.Containers.MainContainer.$(`//*[contains(text(), '${bonus}')]`);
    }


};