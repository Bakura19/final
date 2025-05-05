import { $ } from '@wdio/globals';

export class Statuses {
    Containers = {
        MainContainer: $('//div[@class="main-context"]')
    }; 

    status(statusTitle: string) {
        return this.Containers.MainContainer.$(`//p[text()="${statusTitle}"]`);
    }
};