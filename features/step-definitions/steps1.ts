import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'
import { pageManager } from '../pageobjects/PageManager';

Given('I am on casino Website', async () => {
    await pageManager.page.open(); 
});

When('I hover on Promo and then click Statuses', async () => {
    await pageManager.lobbyMenu.selectSectionInPromo('статусы');
})

Then('I see Elite status', async () => {
    await expect(pageManager.statuses.status('elite')).toBePresent();
});

When('I hover on Promo and then click Tournaments', async () => {
    await pageManager.lobbyMenu.selectSectionInPromo('турниры');
});

Then('I see Турнир по Factor', async () => {
    await expect(pageManager.tournaments.tournament('Турнир по FACTOR')).toBePresent();
});

When('I hover on Promo and then click Bonuses', async () => {
    await pageManager.lobbyMenu.selectSectionInPromo('бонусы');
});

Then('I see Подарок на день рождения', async () => {
    await expect(pageManager.bonuses.bonus('ДЕНЬ РОЖДЕНИЯ')).toBeDisplayed()
});

When('I hover on Promo and then click Lotteries', async () => {
    await pageManager.lobbyMenu.selectSectionInPromo('лотереи');
});

Then('I see button Learn more', async () => {
    await expect(pageManager.lotteries.learnMore('JINGLE BELL ROX')).toBePresent();
});

When('I hover on Promo and then click News', async () => {
    await pageManager.lobbyMenu.selectSectionInPromo('новости');
});

Then('I see 2 news', async () => {
    await expect(pageManager.news.new('70 000 € в акции Easter YGG')).toBePresent();
    await expect(pageManager.news.new('200 000 € в Reels of Bloom')).toBePresent();
});

When('I hover on Promo and then click Promotions', async () => {
    await pageManager.lobbyMenu.selectSectionInPromo('акции');
});

Then('I see 2 active and 2 ended promotions', async () => {
    await expect(pageManager.activePromotions.promotion('Еndorphina Drops')).toBePresent();
    await expect(pageManager.activePromotions.promotion('Spinomenal Drops')).toBePresent();
    await expect(pageManager.endedPromotions.promotion('Treasure Trail')).toBePresent();
    await expect(pageManager.endedPromotions.promotion('Easter YGG')).toBePresent();
});