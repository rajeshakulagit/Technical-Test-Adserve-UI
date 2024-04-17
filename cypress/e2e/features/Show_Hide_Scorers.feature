@FunctionalTest
Feature: As business user, I would like to verify Show and Hide Scorers toggle on the page

    @Scenario_1
    Scenario: Select 'Show Scorers' and 'Hide Scorers' and verify that its working by few checks
        Given user is on the sport home page
        Then user should click on show-hide scores button to get the required details

