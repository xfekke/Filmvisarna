import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I have selected the movie and know what date I want to go', () => {
  // Goes to the Oppenheimer movie since it has the most showings
  cy.visit('/film/3');

});

When('I click on “Välj plats” I should be taken to a view of all the seats', () => {
  // Looks for the "Välj plats" button and clicks it 
  // then navigates to the grid of seats
  cy.get('button.screening-btn.text-nowrap.btn').first().click();
});

Then('I should be able to see a view of the available seats', () => {
  // Looks for available seats
  // if any seat is available test goes through
  // logs the amount of seats available
  cy.get('div.seat').then(($seats) => {
    const numberOfSeats = $seats.length;
    cy.log(`Antal div.seat: ${numberOfSeats}`);
    
  });

});