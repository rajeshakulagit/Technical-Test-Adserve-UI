In this project I have setup cypress with page object model and cucumber BDD framework
For execution report, I have setup cucumber html reports.

1. Installation Process

download nodejs on your machine

Install the below plugins by running commands:

## To install cypress:
npm install cypress --save-dev

## To install cucumber: 
npm install @badeball/cypress-cucumber-preprocessor --save-dev
npm install @bahmutov/cypress-esbuild-preprocessor --save-dev

## To install cypress multiple cucumber html reporter:
npm install multiple-cucumber-html-reporter --save-dev

2.  Preparing page object model for each page
For example:
created a folder under e2e -> pages -> LoginPage.js
This page conatins locators and resable commands/functions

elements = {
        englishButton: () => cy.get('button:contains("English")')
    };

## reusable function
 navigateToHomeUrl(){
    cy.wait(3000);
    cy.visit("/");
    cy.viewport(1920, 1080);
  }

## export the page
export const loginPage = new LoginPage();

3. Creating cucumber feature file and step defination

## For example:
created a folder under cypress\e2e\features\Login_Journey.feature
@FunctionalTest
Feature: As a business user, I would like to navigate dates forward and backward

@Scenario_1
  Scenario: User should be able to navigate the dates
    Given user is on the sport home page
    Then user should be able to navigate forward and backward by dates

Created step defination for this cypress\e2e\step_definitions\login_steps.js

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { sportPage }  from "@pages/SportPage";

Given("user is on the sport home page", () => {
  sportPage.navigateToSportUrl();
  });

4.	Executing the test in headed and headless mode
## command to run headed mode: 
npx cypress run --headed --spec cypress/e2e/features/*

## command to run headless mode: 
npx cypress run --spec cypress/e2e/features/*

## command to run test with tags: 
npx cypress run --env tags=@ui

## command to run one feature file:
npx cypress run --spec ".\\cypress\\e2e\\features\\Read_articles.feature"

## command to generate report: 
node cucumber-html-report.js

5. Steps to execute all the test cases and generate the cucumber html report
   ## step1:
   run this command to install project locally on your machine: npm install --save-dev

   ## step2:
   run this command to execute all the feature files: npx cypress run --spec cypress/e2e/features/*

   ## step3: 
   once all the feature files executed run this command to generate a report: node cucumber-html-report.js

   ## step4: 
   once report is created, it will be available in this folder: \Technical-Test\reports\cucumber-htmlreport.html\index.html
   open index.html to view the detailed execution report
