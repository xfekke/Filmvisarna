import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Scenario 1: Failing to book a seat that is already booked
Given('that I am on the page to see all seats', () => {
  // Goes to the Oppenheimer movie
  cy.visit('/film/3');

  // Goes to the booking page
  cy.get('button.screening-btn.text-nowrap.btn').first().click({ force: true });

});

When('I try click on the booked seats', () => {

  // Looks after the booked seats and avoid the selected ones
  cy.get('div.seat.booked').should('be.visible')
    .and('not.have.class', 'selected')

    // Clicks the booked seat
    .click({ force: true });
});

Then('I should not be able to select them', () => {
  // Verifying that nothing happens when clicking on booked seats
  cy.get('div.seat.booked').should('not.have.class', 'selected');
});

// Scenario 2: Trying to book more seats than available

When('I try to click on the available seats', () => {

  // Clicks on all div.seat
  cy.get('div.seat').click({ multiple: true, force: true }).as('clickedSeats');

  // Clicks on all div.seat.selected
  cy.get('div.seat.selected').click({ multiple: true, force: true }).as('clickedSelectedSeats');
});

// Scenario 3: Booking more than 12 seats at a time

When('I have selected {string} or more seats and I try to select any seats', (number) => {
 
  // For loop to click +1 additional seat 
  for (let i = 2; i < number; i++) {
    cy.get('svg').eq(1).click({ force: true });
  }
});

Then('no seats should be selected', () => {
  // Clicks on every seats to make sure they are not being selected
  // For loop to click on every seat
  cy.get('div.seat')
    // Excludes the existing example selected seat
    .not('.selected')
    // Excludes the already booked seats
    .not('.booked')
    .each(($seat) => {
    // Clicks on every seat here
    cy.wrap($seat).click({ force: true }); 
    // Verifies that no seat is being selected
    cy.wrap($seat).should('not.have.class', 'selected'); 
  });
});


