import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that the user at home page', () => {
  cy.visit('/');
});

Given('choosing on a movie', () => {
  //
  cy.get('.img-wrapper').eq(3).should('be.visible').click({ force: true })
});

Given('time and date', () => {
  cy.get('button.screening-btn.text-nowrap.btn').should('be.visible').first().click({ force: true })
});

Given('set total tickets to {string}', (a) => {
  for (let i = 0; i < 2; i++) {
    cy.get('svg').eq(0).should('be.visible').click({ force: true })
  }
  /*
  while (cy.get('span').eq(4).should('be.visible') != a) {
    cy.get('svg').eq(0).should('be.visible').click({ force: true })
  }
  while (cy.get('span').eq(5).should('be.visible') != a) {
    cy.get('svg').eq(2).should('be.visible').click({ force: true })
  }
  while (cy.get('span').eq(6).should('be.visible') != a) {
    cy.get('svg').eq(4).should('be.visible').click({ force: true })
  }
  */
});

When('ordering only {string} child tickets', (a) => {
  for (let i = 0; i < a; i++) {
    cy.get('svg').eq(5).should('be.visible').click({ force: true })
  }
});

Then('the total cost should be equal to {string} kr', (expectedCost) => {
  cy.get('span').eq(2).invoke('text').then((actualCostText) => {
    const actualCost = actualCostText.trim();
    expect(actualCost).to.equal(expectedCost);
  });
});

When('ordering only {string} seniors tickets', (a) => {
  for (let i = 0; i < a; i++) {
    cy.get('svg').eq(3).should('be.visible').click({ force: true })
  }
});

When('ordering only {string} original tickets, {string} senior tickets and {string} children tickets', (a, b, c) => {
  for (let i = 0; i < a; i++) {
    cy.get('svg').eq(1).should('be.visible').click({ force: true })
  }
  for (let i = 0; i < b; i++) {
    cy.get('svg').eq(3).should('be.visible').click({ force: true })
  }
  for (let i = 0; i < c; i++) {
    cy.get('svg').eq(5).should('be.visible').click({ force: true })
  }
});