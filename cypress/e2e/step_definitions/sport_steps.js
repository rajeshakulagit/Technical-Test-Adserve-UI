
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { sportPage }  from "@pages/SportPage";


Given("user is on the sport home page", () => {
  sportPage.navigateToSportUrl();
  });

Then("user should see team names with a match today", () => {
  sportPage.displayTeamNames();
    });

Then("incase there are no matches the message should be displayed as {string}", () => {
      sportPage.noMatchConveyMessage();
        });

Then("user should click on show-hide scores button to get the required details",() => {
  sportPage.validateShowHideScores();
          });

Then("user should be able to navigate forward and backward by dates", () => {
  sportPage.validateForwardBackwardByDates();
            });

Then("user should be able to navigate to all sport page",() => {
  sportPage.validateAllSportPage();
          });