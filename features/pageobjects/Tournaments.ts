import { $ } from '@wdio/globals';

export class Tournaments {
    Containers = {
        MainContainer: $('//div[@class="main-context"]')
    }; 

    tournament(tournament: string) {
        return this.Containers.MainContainer.$(`//*[contains(text(), '${tournament}')]`);
    }
};