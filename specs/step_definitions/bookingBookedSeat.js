import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


// Scenario 1: Failing to book a seat that is already booked
Given('that I am on the page to see all seats', () => {
  // Goes to the Oppenheimer movie since it has the most showings
  cy.visit('/film/3');

  // Goes to the booking page
  cy.get('button.screening-btn.text-nowrap.btn').first().click({ force: true });

});

When('I try click on the booked seats', () => {

  cy.get('div.seat.booked')
    .should('be.visible')
 
    .and('not.have.class', 'selected')
    // Clicks the booked seat
    .click({ force: true });
});

Then('I should not be able to select them', () => {
  // Verifying that nothing happens when clicking on booked seats
  cy.get('div.seat.booked').should('not.have.class', 'selected');
});

// Scenario 2: Trying to book more seats than available

Given('I want to book more seats than available', () => {
  // Does nothing
});

When('I try to click on the available seats', () => {

  // Clicks on all div.seat
  cy.get('div.seat').click({ multiple: true, force: true }).as('clickedSeats');

  // Clicks on all div.seat.selected
  cy.get('div.seat.selected').click({ multiple: true, force: true }).as('clickedSelectedSeats');
});


