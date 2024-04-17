
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { articlePage } from "@pages/ArticlePage";


Then("user clicks on search button and enters {string}", (text) => {
  articlePage.navigateToListOfArticles(text);
  });


Then("user should see list of atricles displayed", () => {
  articlePage.validateListOfArticles();
  });