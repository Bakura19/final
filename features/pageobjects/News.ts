import { $ } from '@wdio/globals';

export class News {
    Containers = {
        MainContainer: $('//div[@class="main-context"]')
    }; 

    new(newName: string) {
        return this.Containers.MainContainer.$(`//div[text()="${newName}"]/parent::div`);
    }
};