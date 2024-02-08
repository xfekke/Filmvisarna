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
  // clicks the button that contains Logga in
  cy.contains('button', 'Logga in').click(); 
  // checks if that url is included
  cy.url().should('include', 'https://filmvisarna-team2.nodehill.se/'); 
});

When('the user clicks on {string}', () => {
  // .nav-link header where Min Sida is visible
  cy.get('.nav-link.text-nowrap[href="/min-sida"]').should('be.visible'); 
  // clicks the link with class nav-link and text Min Sida
  cy.get('.nav-link').contains('Min Sida').click(); 
  // checks if that url is included
  cy.url().should('include', 'https://filmvisarna-team2.nodehill.se/min-sida'); 
});

Then('the user should see {string} where information about booking is available.', () => {
  // h6 element with text Bokningshistorik should be visible
  cy.contains('h6', 'Bokningshistorik').should('be.visible') 
    //  next sibling element after h6
    .next() 
    .within(() => { 
      // checks if there is at least one element with the class booking-card within this section.
      cy.get('.booking-card').should('be.visible'); 
    });
});

// Scenario 2: Viewing current bookings

Then('the user should see information about their current bookings under {string}', () => {
  // h6 element with text Mina nuvarande bokningar should be visible
  cy.contains('h6', 'Mina nuvarande bokningar').should('be.visible') 
    // next sibling element after h6
    .next() 
    // inside this container
    .then(container => { 
      // checks for booking card within container
      if (container.find('.booking-card').length > 0) { 
        // if booking card is greater than 0 then they should be visible
        cy.wrap(container).find('.booking-card').should('be.visible');  
      } else {
        // booking card shouldn't exist if there are no bookings
        cy.wrap(container).find('.booking-card').should('not.exist'); 
      }
    });
});

// Scenario 3: No current bookings (Will fail if there are bookings)

Then('the user should see no bookings under {string}', (a) => {
  // h6 element with text Mina nuvarande bokningar should be visible
  cy.contains('h6', 'Mina nuvarande bokningar').should('be.visible') 
    // next sibling element after h6 
    .next() 
    .within(() => {
      // booking card shouldn't exist if there are no bookings
      cy.get('.booking-card').should('not.exist'); 
    });
});

