import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import baseUrl from "../../baseUrl";

Given('the application is accessible and running', () => {
  cy.visit('/');
});

When('a user wants to view the URL for the start page', () => {
  // You can add specific implementation for this step if needed
});

Then('the system should provide the URL for the start page', () => {
  cy.url().should('eq', Cypress.config().baseUrl);
});

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('setExpanded is not defined')) {
    return false;
  }
  return true;
});

When('a user wants to view the URL for a specific movie page', function () {
  cy.get('a[href="/filmer"]').should('be.visible').click();
  cy.get('a[href="/film/1"]').should('be.visible').click();

  cy.url().as('moviePageUrl');
});

Then('the system should provide the URL for the movie page', function () {
  const baseUrl = Cypress.config().baseUrl;
  const moviePageUrl = this.moviePageUrl;

  expect(moviePageUrl).not.to.eq(baseUrl);
});


/* No duplicate steps, this one already above
Given('the application is accessible and running', () => {});*/

When('a user wants to view the URL for logging in', function () {
  cy.get('a[href="/logga-in"]').should('be.visible').click();
  // Alias the login page URL
  cy.url().as('logInUrl');
});

Then('the system should provide the URL for the login page', function () {
  const baseUrl = Cypress.config().baseUrl;
  const moviePageUrl = this.moviePageUrl;
  const logInUrl = this.logInUrl;

  expect(logInUrl).not.to.eq(baseUrl);
  expect(logInUrl).not.to.eq(moviePageUrl);
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