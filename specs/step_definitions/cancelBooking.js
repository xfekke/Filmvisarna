import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Cypress.on('uncaught:exception', (err, runnable) => {
  // Fånga ohanterade undantag och logga dem
  console.error('Uncaught Exception:', err.message);
  // Återge felet om det är önskvärt
  // return false;
});

Given('that I am on on the page "Min Sida"', () => {
  // Starts at the website
  cy.visit('/');

  cy.wait(2000);
  // Looks for "Min Sida" (which only appears if the user is logged in)
  // And then clicks it to get to see all the bookings
  cy.get('.navbar.fixed-top a').contains('Logga In').should('be.visible').click('Logga In');

 


  cy.wait(2000);

  cy.get('input.form-control').type('fekke4201337@gmail.com');

  cy.get('input.form-control').type('Hejsan1234');


});

When('I click on "Avboka"', () => {



});

Then('my booking container should be removed', () => {

});


