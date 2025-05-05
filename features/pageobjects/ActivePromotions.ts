import { $ } from '@wdio/globals';

export class ActivePromotions {
    Containers = {
        MainContainer: $('//div[@class="actions__items"][1]')
    }; 

    promotion(promotionName: string) {
        return this.Containers.MainContainer.$(`//div[text()="${promotionName}"]`);
    }
};