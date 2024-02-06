import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('setExpanded is not defined')) {
    return false;
  }
});
//Scenario 1: Viewing booking history (Will fail if there is no booking history)

Given('the user is visiting {string}', () => {
  cy.visit('https://filmvisarna-team2.nodehill.se/logga-in'); // Goes to that page

});

Given('the user is providing a valid email', () => {
  cy.get('input[type="email"]').type('spammailcrossfire@gmail.com'); // email input
});

Given('the user is providing a valid password', () => {
  cy.get('input[type="password"]').type('filmvisarnaKYH1'); // password input
});

When('the users clicks on {string} the user should be taken to {string}', () => {

  cy.contains('button', 'Logga in').click(); // clicks the button that contains Logga in
  cy.url().should('include', 'https://filmvisarna-team2.nodehill.se/'); // checks if that url is included
});

When('the user clicks on {string}', () => {

  cy.get('.nav-link.text-nowrap[href="/min-sida"]').should('be.visible'); // .nav-link header where Min Sida is visible
  cy.get('.nav-link').contains('Min Sida').click(); // clicks the link with class nav-link and text Min Sida
  cy.url().should('include', 'https://filmvisarna-team2.nodehill.se/min-sida'); // checks if that url is included

});

Then('the user should see {string} where information about booking is available.', () => {
  
  cy.contains('h6', 'Bokningshistorik').should('be.visible') // h6 element with text Bokningshistorik should be visible
    .next() //  next sibling element after h6
    .within(() => { 
      cy.get('.booking-card').should('be.visible'); // checks if there is at least one element with the class booking-card within this section.
    });
});

// Scenario 2: Viewing current bookings

Then('the user should see information about their current bookings under {string}', () => {
  cy.contains('h6', 'Mina nuvarande bokningar').should('be.visible') // h6 element with text Mina nuvarande bokningar should be visible
    .next() // next sibling element after h6
    .then(container => { // inside this container
      
      if (container.find('.booking-card').length > 0) { // checks for booking card within container
        
        cy.wrap(container).find('.booking-card').should('be.visible');  // if booking card is greater than 0 then they should be visible
      } else {
        
        cy.wrap(container).find('.booking-card').should('not.exist'); // booking card shouldn't exist if there are no bookings
      }
    });
});

// Scenario 3: No current bookings (Will fail if there are bookings)

Then('the user should see no bookings under {string}', (a) => {
  cy.contains('h6', 'Mina nuvarande bokningar').should('be.visible') // h6 element with text Mina nuvarande bokningar should be visible
    .next() // next sibling element after h6 
    .within(() => {
      cy.get('.booking-card').should('not.exist'); // booking card shouldn't exist if there are no bookings
    });
});

