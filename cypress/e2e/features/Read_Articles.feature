@FunctionalTest
Feature: As a sports user, I would like to read about all articles related to sports

    @Scenario_1
    Scenario Outline: Use the search option to find all articles related to 'sports'. Output the first heading and the last heading returned on the page.
        Given user is on the sport home page
        When user clicks on search button and enters "<Text>"
        Then user should see list of atricles displayed

    Examples:
            | Text  |
            | Sport |