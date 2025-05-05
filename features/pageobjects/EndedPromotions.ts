import { $ } from '@wdio/globals';

export class EndedPromotions {
    Containers = {
        MainContainer: $('//div[@class="actions__items"][2]')
    }; 

    promotion(promotionName: string) {
        return this.Containers.MainContainer.$(`//div[text()="${promotionName}"]`);
    }
};