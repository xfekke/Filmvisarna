import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('the user is on the movie selection page', () => {
  cy.visit('https://filmvisarna-team2.nodehill.se/filmer'); // goes to that page 
});

When('the user clicks on a movie', () => {
  cy.get('a[href="/film/1"]').click();
  cy.url().should('include', 'https://filmvisarna-team2.nodehill.se/film/1');
});

Then('the user should be able to see more information about that movie', () => {
  cy.get('.movie-desc-container.mt-2.container').should('exist');
});