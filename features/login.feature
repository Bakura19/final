Feature: My profile section and authorization

  Scenario: As a user, I can log into the secure area

    Given I am on casino Website
    When I click Login button
    When I login with my creds
    When I click on username
    Then I see email is confirmed
    Then I see status new