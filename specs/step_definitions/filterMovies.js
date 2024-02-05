import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"; 

// Scenario 1: Showing movies that are appropriate for children

Given('the user is on the movie selection page', () => {
  cy.visit('https://filmvisarna-team2.nodehill.se/filmer'); // goes to that page 
});

When('the user sets the age filter to {string}', (a) => {
  cy.get('select[name="filter"]').select('0'); // when user selects filter Barntillåten
});

Then('only movies appropriate for children should be displayed', () => {
  cy.get('a[href="/film/9"]').should('be.visible'); // Movie 9 which is Barbie should be visible
});

// Scenario 2: Showing movies that have 7 year old age restriction

Then('only movies with a minimum age limit of 7 years should be displayed', () => {
  cy.get('select[name="filter"]').select('7');  //when user selects filter 7 år
  cy.get('a[href="/film/4"]').should('be.visible');
});

// Scenario 3:Showing movies that have 11 year old age restriction

Then('only movies with a minimum age limit of 11 years should be displayed', () => {
  cy.get('select[name="filter"]').select('11'); //when user selects filter 11 år
  cy.get('.movie-card a[href="/film/1"]').should('be.visible'); // looking for movie card due to film 1 already existing in popular overlay on the website
  cy.get('a[href="/film/6"]').should('be.visible');
});

// Scenario 4: Showing movies that have 15 year old age restriction

Then('only movies with a minimum age limit of 15 years should be displayed', () => {
  cy.get('select[name="filter"]').select('15'); //when user selects filter 15 år
  cy.get('a[href="/film/2"]').should('be.visible');
  cy.get('a[href="/film/3"]').should('be.visible');
  cy.get('a[href="/film/5"]').should('be.visible');
});

// Scenario 5: Showing all movies on the movie page

Then('All the available movies should be displayed', () => {
  cy.get('select[name="filter"]').select('Alla filmer'); //when user selects filter Alla filmer
  cy.get('.movie-card a[href="/film/1"]').should('be.visible'); // looking for movie card due to film 1 already existing in popular overlay on the website
  cy.get('a[href="/film/2"]').should('be.visible');
  cy.get('a[href="/film/3"]').should('be.visible');
  cy.get('a[href="/film/4"]').should('be.visible');
  cy.get('a[href="/film/5"]').should('be.visible');
  cy.get('a[href="/film/6"]').should('be.visible');
  cy.get('a[href="/film/9"]').should('be.visible');
});

// TO DO: movie-card for every movie instead of only href if popular overlay would change in the future