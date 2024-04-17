@FunctionalTest
Feature: As a business user, I would like to make a record of all teams which are playing today

@Scenario_1
  Scenario: Output all team names with a match today. If there are no matches today, output a message to convey this.
    Given user is on the sport home page
    Then user should see team names with a match today
    Then incase there are no matches the message should be displayed as 'There are no matches today'