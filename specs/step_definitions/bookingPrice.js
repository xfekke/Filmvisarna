import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that the user at home page', () => {
  cy.visit('/');
});

Given('choosing on a movie', () => {
  cy.visit('/film/9')
});

Given('time and date', () => {
  cy.get('button.screening-btn.text-nowrap.btn').first().click({ force: true });
});

When('ordering only {string} child tickets', (a) => {
  while (cy.get('span').eq(4) != 0) {
    cy.get('svg').eq(0).click({ force: true })
  }

  for (let i = 0; i < a; i++) {
    cy.get('svg').eq(5).click({ force: true })
  }
});

Then('the total cost should be {string} kr', (a) => {
  // TODO: implement step
});

When('ordering only {string} seniors tickets', (a) => {
  // TODO: implement step
});


When('ordering only {string} original ticket, {string} senior tickets and {string} children ticket', (a, b, c) => {
  // TODO: implement step
});

Then('the total cost should be equal to {string} kr', (a) => {
  // TODO: implement step
});


When('ordering only {string} ticket', (a) => {
  // TODO: implement step
});
