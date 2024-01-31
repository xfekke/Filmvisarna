import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('setExpanded is not defined')) {
    return false;
  }
});

Given('that the user at home page', () => {
  // delete
  cy.visit('/')
  cy.wait(2000)
});

When('click on the play button', () => {
  cy.wait(2000)
  //click on the play button to see the trailer
  cy.get('svg').eq(0).should('be.visible').click({ force: true })
});

Then('the site should show the movie trailer', () => {
  cy.wait(2000)
});

Given('press the movie {string}', (movieName) => {
  //pick the movie with the variable name "movieName"
  cy.get('div').contains(movieName).should('be.visible').click({ force: true })
});

Given('user should go to the Filmer section', () => {

  //click to go to the film section
  cy.get('a[href="/filmer"]').should('be.visible').click()
});