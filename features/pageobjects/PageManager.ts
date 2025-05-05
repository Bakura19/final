import { LoginPage } from '../pageobjects/LoginPage'; // comm
import { Page } from './Page';
import { HeaderMenu } from './HeaderMenu';
import { MyProfile } from './MyProfile';
import { LobbyMenu } from './LobbyMenu';
import { Statuses } from './Statuses';
import { Tournaments } from './Tournaments';
import { Bonuses } from './Bonuses';
import { Lotteries } from './Lotteries';
import { News } from './News';
import { ActivePromotions } from './ActivePromotions';
import { EndedPromotions } from './EndedPromotions';

class PageManager {
    page; 
    loginPage; // comm
    headerMenu;
    myProfile;
    lobbyMenu;
    statuses;
    tournaments;
    bonuses;
    lotteries;
    news;
    activePromotions;
    endedPromotions

    constructor() {
        this.page = new Page();
        this.loginPage = new LoginPage(); // comm
        this.headerMenu = new HeaderMenu();
        this.myProfile = new MyProfile();
        this.lobbyMenu = new LobbyMenu();
        this.statuses = new Statuses();
        this.tournaments = new Tournaments();
        this.bonuses = new Bonuses();
        this.lotteries = new Lotteries();
        this.news = new News();
        this.activePromotions = new ActivePromotions();
        this.endedPromotions = new EndedPromotions();
    };
};

export const pageManager = new PageManager();