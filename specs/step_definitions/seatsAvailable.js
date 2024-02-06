import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Scenario 1: Users wants to see what seats are available

Given('that I have selected the movie and know what date I want to go', () => {
  // Change movie here depending if you want to test a fully booked one or not
  cy.visit('/film/1');
});

When('I click on “Välj plats” I should be taken to a view of all the seats', () => {
  // Looks for the "Välj plats" button and clicks it
  // then navigates to the grid of seats
  cy.get('button.screening-btn.text-nowrap.btn').first().click({ force: true });
});

Then('I should be able to see a view of the available seats', () => {

  // Website auto-chooses 2 seats, this is in considiration of the code
  // Need wait for the website to load all the seats
  cy.wait(2000);
  // Check if any seat is available
  cy.get('div.seat:not(.booked):not(.selected)').then(($seats) => {

    // Saves the first 81 seats since the last 3 can't be interacted with
    const interactiveSeats = $seats.slice(0, 81);
    // If loop to check length
    if (interactiveSeats.length > 1) {
      // If available seats are found, log the amount of seats available
      cy.log(`There are ${interactiveSeats.length} available seats.`);

      // Check for a minimum of 2 available seats
      expect(interactiveSeats.length).to.be.gte(2);
    } else {
      // If all seats are booked-log
      cy.log('All seats are booked.');
      // Then the "boka" should be disabled
      cy.get('button.btn.btn-custom').contains('Boka').should('have.attr', 'disabled');
    }
  });
});