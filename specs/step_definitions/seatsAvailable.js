import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Scenario 1: Users wants to see what seats are available

Given('that I have selected the movie and know what date I want to go', () => {
  // Goes to the Oppenheimer movie since it has the most showings
  cy.visit('/film/3');

});

When('I click on “Välj plats” I should be taken to a view of all the seats', () => {
  // Looks for the "Välj plats" button and clicks it
  // then navigates to the grid of seats
  // force to click element even when covered
  cy.get('button.screening-btn.text-nowrap.btn').first().click({ force: true });

});

Then('I should be able to see a view of the available seats', () => {
  // Looks for available seats
  // if any seat is available test goes through
  // logs the amount of seats available
  // looks for 2 available seats at minimum
  cy.get('div.seat:not(.booked):not(.selected)').should('have.length.gte', 2);

});

// Scenario 2: User wants to see what seats are available when none is

Then('I should be able to see a view of a fully booked cinema', () => {
  // Checking if cinema is fully booked
  // only checks the first 81 seats since the 3 last ones are examples only
  cy.wait(2000);
  cy.get('div.seat:lt(81)').should('have.class', 'booked');
});