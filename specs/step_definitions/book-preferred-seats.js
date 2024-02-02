import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('setExpanded is not defined')) {
    return false;
  }
});

Given('there are movie viewings available', () => {
  // Go to webpage
  cy.visit('/')

  // Click on films
  cy.get('a[href="/filmer"]').should('be.visible').click();
  // Select the second film in the list, in this case rambo last blood
  cy.get('a[href="/film/2"]').should('be.visible').click();

  // Go to the screening that is tomorrow. 
  cy.get('.screening-table.mt-5.text-center.table')
    .find('tbody tr:nth-child(2) td:nth-child(3) button')
    .click({ force: true });

});

Given('there are available seats for 1 person', () => {
  cy.wait(100)
  cy.get('.seat-wrapper .seat-row > .seat:lt(81):not(.booked)').first()
    .click({ force: true });
});

When('a moviegoer decides to book a seat for the upcoming film', () => {
  // TODO: implement step
});

When('the moviegoer selects a single seat', () => {
  // TODO: implement step
});

When('completes the booking process', () => {
  // TODO: implement step
});

Then('the system should confirm the reservation of a seat', () => {
  // TODO: implement step
});

Then('the moviegoer should have a reserved seat for the viewing', () => {
  // TODO: implement step
});

Given('there is an upcoming movie with limited available seats', () => {
  // TODO: implement step
});

Given('there are not enough seats for 1 person', () => {
  // TODO: implement step
});

When('a moviegoer tries to book a seat', () => {
  // TODO: implement step
});

Then('the system should inform the moviegoer that there are not enough seats available', () => {
  // TODO: implement step
});

Then('the moviegoer shouldn´t be able to book the seat', () => {
  // TODO: implement step
});

Given('there is an upcoming movie with available seats', () => {
  // TODO: implement step
});

Given('there are seats available for 3 people', () => {
  // TODO: implement step
});

When('a group of moviegoers decides to book seats', () => {
  // TODO: implement step
});

When('they select seats for 3 people', () => {
  // TODO: implement step
});

When('complete the booking process', () => {
  // TODO: implement step
});

Then('the system should confirm the reservation of seats for the group', () => {
  // TODO: implement step
});

Then('the moviegoers should have reserved seats for the viewing', () => {
  // TODO: implement step
});

/* No duplicate steps, this one already above
Given('there is an upcoming movie with limited available seats', () => {});*/

Given('there are not enough seats for 3 people', () => {
  // TODO: implement step
});

When('a group of moviegoers tries to book seats', () => {
  // TODO: implement step
});

Then('the system should inform the group that there are not enough seats available', () => {
  // TODO: implement step
});

Then('the moviegoers shouldn´t be able to book the seats', () => {
  // TODO: implement step
});