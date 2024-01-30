import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that the user at home page', () => {
  cy.visit('/');
});

Given('choosing on a movie', () => {
  cy.get('.img-wrapper').eq(3).click({ force: true }).wait(5000)
});

Given('time and date', () => {
  cy.get('button.screening-btn.text-nowrap.btn').should('be.visible').first().click({ force: true }).wait(5000)
  cy.wait(5000)
});

Given('set total tickets to {string}', (a) => {
  while (cy.get('span').eq(4) != a) {
    cy.get('svg').eq(0).click({ force: true }).wait(5000)
  }
  while (cy.get('span').eq(5) != a) {
    cy.get('svg').eq(2).click({ force: true }).wait(5000)
  }
  while (cy.get('span').eq(6) != a) {
    cy.get('svg').eq(4).click({ force: true }).wait(5000)
  }
  cy.wait(5000)
});

When('ordering only {string} child tickets', (a) => {
  for (let i = 0; i < a; i++) {
    cy.get('svg').eq(3).click({ force: true }).wait(5000)
  }
  cy.wait(5000)
});

Then('the total cost should be equal to {string} kr', (a) => {
  let totalCost = cy.get('span').eq(2)

  expect(a).to.equal(totalCost)
  cy.wait(5000)

});

When('ordering only {string} seniors tickets', (a) => {
  for (let i = 0; i < a; i++) {
    cy.get('svg').eq(3).click({ force: true }).wait(5000)
  }
  cy.wait(5000)

});

When('ordering only {string} original tickets, {string} senior tickets and {string} children tickets', (a, b, c) => {
  for (let i = 0; i < a; i++) {
    cy.get('svg').eq(1).click({ force: true }).wait(5000)
  }
  for (let i = 0; i < b; i++) {
    cy.get('svg').eq(3).click({ force: true }).wait(5000)
  }
  for (let i = 0; i < c; i++) {
    cy.get('svg').eq(5).click({ force: true }).wait(5000)
  }
  cy.wait(5000)

});