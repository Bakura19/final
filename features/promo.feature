Feature: Promo section

  Scenario: As a user, I can check promo section

    Given I am on casino Website
    When I hover on Promo and then click Statuses
    Then I see Elite status
    When I hover on Promo and then click Tournaments
    Then I see Турнир по Factor
    When I hover on Promo and then click Bonuses
    Then I see Подарок на день рождения
    When I hover on Promo and then click Lotteries
    Then I see button Learn more
    When I hover on Promo and then click News
    Then I see 2 news
    When I hover on Promo and then click Promotions
    Then I see 2 active and 2 ended promotions


