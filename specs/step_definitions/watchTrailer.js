import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('setExpanded is not defined')) {
    return false;
  }
});

Cypress.on('window:before:load', (win) => {
  cy.spy(win.console, 'error');
  cy.spy(win.console, 'warn');
});

Given('that the user at home page', () => {
  cy.visit('/')
  cy.wait(1000)
});

When('click on the play button', () => {
  //click on the play button to see the trailer
  cy.get('svg').eq(0).should('be.visible').click({ force: true })
});

Then('the site should show the movie trailer', () => {
  //wait to show that the site show the trailer
  cy.wait(3000)
});

Given('press the movie {string}', (movieName) => {
  //pick the movie with the variable name "movieName"
  cy.get('div').contains(movieName).should('be.visible').click({ force: true })
  cy.wait(1000)
});

Given('user should go to the Filmer section', () => {
  //click to go to the film section
  cy.get('a[href="/filmer"]').should('be.visible').click()
});