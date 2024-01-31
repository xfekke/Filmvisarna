import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

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
  // Alias the movie page URL
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

When('a user wants to log in with email {string} and password {string}', (a, b) => {
  //go to login page
  cy.get('a[href="/logga-in"]').should('be.visible').click();

  //input email and username
  cy.get('input[name="email"]').type('kedipi3878@konican.com');
  cy.get('input[name="password"]').type('ABc12345');
  cy.get('.form-wrapper.container button[type="submit"]').click();

});

When('the user wants to view the URL for My Page', function () {
  //go to "min sida"
  cy.get('a[href="/min-sida"]').should('be.visible').click();
  // Alias the min sida page URL
  cy.url().as('myPageUrl');
});

Then('the system should provide the URL for the My Page', function () {
  const baseUrl = Cypress.config().baseUrl;
  const moviePageUrl = this.moviePageUrl;
  const logInUrl = this.logInUrl;
  const myPageUrl = this.myPageUrl;

  expect(myPageUrl).not.to.eq(baseUrl);
  expect(myPageUrl).not.to.eq(moviePageUrl);
  expect(myPageUrl).not.to.eq(logInUrl);
});

/* No duplicate steps, this one already above
Given('the application is accessible and running', () => {});*/

When('a user wants to view the URL for a specific movie', function () {
  cy.get('a[href="/filmer"]').should('be.visible').click();
  cy.get('a[href="/film/1"]').should('be.visible').click();

  cy.url().as('jackReacherPageUrl');
});

Then('the system should provide the URL for the page of that specific movie', function () {
  const baseUrl = Cypress.config().baseUrl;
  const moviePageUrl = this.moviePageUrl;
  const logInUrl = this.logInUrl;
  const myPageUrl = this.myPageUrl;
  const jackReacherPageUrl = this.jackReacherPageUrl;

  expect(jackReacherPageUrl).not.to.eq(baseUrl);
  expect(jackReacherPageUrl).not.to.eq(moviePageUrl);
  expect(jackReacherPageUrl).not.to.eq(logInUrl);
  expect(jackReacherPageUrl).not.to.eq(myPageUrl);
});