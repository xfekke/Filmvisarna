import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('the application is accessible and running', () => {
  cy.visit('/');
});

When('a user wants to view the URL for the start page', () => {
  // TODO: implement step
});

Then('the system should provide the URL for the start page', () => {
  cy.url().should('eq', Cypress.config().baseUrl);
});

/* No duplicate steps, this one already above
Given('the application is accessible and running', () => {});*/

When('a user wants to view the URL for a specific movie page', () => {
  // TODO: implement step
});

Then('the system should provide the URL for the movie page', () => {
  // TODO: implement step
});

/* No duplicate steps, this one already above
Given('the application is accessible and running', () => {});*/

When('a user wants to view the URL for logging in', () => {
  // TODO: implement step
});

Then('the system should provide the URL for the login page', () => {
  // TODO: implement step
});

/* No duplicate steps, this one already above
Given('the application is accessible and running', () => {});*/

When('a user wants to view the URL for signing up', () => {
  // TODO: implement step
});

Then('the system should provide the URL for the sign-up page', () => {
  // TODO: implement step
});

/* No duplicate steps, this one already above
Given('the application is accessible and running', () => {});*/

When('a user wants to view the URL for a specific movie', () => {
  // TODO: implement step
});

Then('the system should provide the URL for the page of that specific movie', () => {
  // TODO: implement step
});