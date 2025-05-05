import { $ } from '@wdio/globals';

export class Lotteries {
    Containers = {
        MainContainer: $('//div[@class="main-context"]')
    }; 

    learnMore(lotteryName: string) {
        return this.Containers.MainContainer.$(`//p[text()="${lotteryName}"]//ancestor::div[@class="name-lottery-block"]//*[text()="Узнать больше"]`)
    }
};