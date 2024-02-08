import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('the user is on the movie selection page', () => {
  cy.visit('/filmer'); // goes to that page 
});

When('the user clicks on the {string} they want to see', (Movie) => {
  cy.get('.movie-card').contains(Movie).click(); // if movie card is visible click on movie card withthe right title
});

Then('the user should be able to see more information about that movie', () => {
  cy.get('.movie-desc-container.mt-2.container').should('exist'); // container with the information about a movie & description
});