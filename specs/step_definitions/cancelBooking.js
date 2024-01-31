import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('setExpanded is not defined')) {
    return false;
  }
});

// The test needs at least 3 bookings to be active for it to work

// Looks active bookings
let cancelCount;

// Scenario 1: User cancels booking succesfully

Given('that I have logged in', () => {
  // Logs in the user
  cy.visit('/logga-in');
  cy.get('input[name="email"]').type('fekke4201337@gmail.com');
  cy.get('input[name="password"]').type('Hejsan1234');
  cy.get('.form-wrapper.container button[type="submit"]').click();
  cy.url().should('eq', Cypress.config().baseUrl);
});

Given('I am on the "Min Sida" page', () => {
  // Redirects the user
  cy.get('a[href="/min-sida"]').should('be.visible').click();
});

Given('I have made a booking', () => {
  // Looks so there is a booking made
  // Checks the first booking
  cy.get('div.booking-card').first().contains('Avboka');
});

When('I click on "Avboka"', () => {
  // Looks at how many active booking that exists
  cy.get('div.booking-card').find('button').contains('Avboka').its('length').then((count) => {
    cancelCount = count
  });
  // Clicks on "Avboka" to cancel the first booking
  cy.get('div.booking-card').first().contains('Avboka').click({ force: true });
});

Then('my booking container should be removed', () => {
  // Checks if the booking has been removed
  cy.get('Avboka').should('have.length', cancelCount - 1);
});

// Scenario 2: User cancels all bookings

Given('I have made several bookings', () => {
  // Checks so there is bookings
  cy.get('div.booking-card:contains("Avboka")');
});

When('I click on "Avboka" for all of my bookings', () => {
  // Click on "Avboka" for each booking
  cy.get('div.booking-card').each(($bookingCard) => {
    // In each "booking-card", find and click the "Avboka" button
    cy.wrap($bookingCard).contains('button.btn.btn-primary.btn-md', 'Avboka').should('exist').click({ force: true });
  });
});

Then('all of my bookings should be removed', () => {
  // Checks if all bookings have been removed
  cy.get('div.booking-card:contains("Avboka")').should('not.exist');
});



// Scenario 3: No bookings exists

When('I have no active bookings to cancel', () => {
  // Check that there are no bookings to cancel
  cy.get('div.booking-card').find('button').contains('Avboka').should('not.exist');
});

Then('no active bookings are visible', () => {
  cy.get('div.booking-card button:contains("Avboka")').should('not.be.visible');
});