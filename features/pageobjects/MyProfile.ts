import { $ } from '@wdio/globals';

export class MyProfile {
    Containers = {
        MyProfileContainer: $('//div[@class="inner-popup-block"]')
    }; 

    Elements = {
        EmailConfirmed: this.Containers.MyProfileContainer.$('//span[@class="text--green left-post__label"]'),
        StatusNew: this.Containers.MyProfileContainer.$('(//span[@class="statuseName"])[1]')
    };
};