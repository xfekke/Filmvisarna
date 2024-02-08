import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"; 

// Scenario 1: Showing movies that are appropriate for children

// Given is already defined at movieInformation.js

When('the user sets the age filter to {string}', (a) => {
  // when user selects filter Barntillåten
  cy.get('select[name="filter"]').select('0'); 
});

Then('only movies appropriate for children should be displayed', () => {
  // Movie 9 which is Barbie should be visible
  cy.get('.movie-card a[href="/film/9"]').should('be.visible'); 
});

// Scenario 2: Showing movies that have 7 year old age restriction

Then('only movies with a minimum age limit of 7 years should be displayed', () => {
  //when user selects filter 7 år
  cy.get('select[name="filter"]').select('7');  
  cy.get('.movie-card a[href="/film/4"]').should('be.visible');
});

// Scenario 3:Showing movies that have 11 year old age restriction

Then('only movies with a minimum age limit of 11 years should be displayed', () => {
  //when user selects filter 11 år
  cy.get('select[name="filter"]').select('11'); 
  cy.get('.movie-card a[href="/film/1"]').should('be.visible'); 
  cy.get('.movie-card a[href="/film/6"]').should('be.visible');
});

// Scenario 4: Showing movies that have 15 year old age restriction

Then('only movies with a minimum age limit of 15 years should be displayed', () => {
  //when user selects filter 15 år
  cy.get('select[name="filter"]').select('15'); 
  cy.get('.movie-card a[href="/film/2"]').should('be.visible');
  cy.get('.movie-card a[href="/film/3"]').should('be.visible');
  cy.get('.movie-card a[href="/film/5"]').should('be.visible');
});

// Scenario 5: Showing all movies on the movie page

Then('All the available movies should be displayed', () => {
  cy.get('select[name="filter"]').select('Alla filmer'); //when user selects filter Alla filmer
  cy.get('.movie-card a[href="/film/1"]').should('be.visible'); 
  cy.get('.movie-card a[href="/film/2"]').should('be.visible');
  cy.get('.movie-card a[href="/film/3"]').should('be.visible');
  cy.get('.movie-card a[href="/film/4"]').should('be.visible');
  cy.get('.movie-card a[href="/film/5"]').should('be.visible');
  cy.get('.movie-card a[href="/film/6"]').should('be.visible');
  cy.get('.movie-card a[href="/film/9"]').should('be.visible');
});
