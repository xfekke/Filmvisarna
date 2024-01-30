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

Given('set total tickets to zero', () => {
  while (cy.get('span').eq(4) != 0) {
    cy.get('svg').eq(0).click({ force: true })
  }
  while (cy.get('span').eq(5) != 0) {
    cy.get('svg').eq(2).click({ force: true })
  }
  while (cy.get('span').eq(6) != 0) {
    cy.get('svg').eq(4).click({ force: true })
  }
});

When('ordering only {string} child tickets', (a) => {
  for (let i = 0; i < a; i++) {
    cy.get('svg').eq(3).click({ force: true })
  }
});

Then('the total cost should be equal to {string} kr', (a) => {
  let totalCost = cy.get('span').eq(2)

  expect(a).to.equal(totalCost)
});

When('ordering only {string} seniors tickets', (a) => {
  for (let i = 0; i < a; i++) {
    cy.get('svg').eq(3).click({ force: true })
  }
});

When('ordering only {string} original ticket, {string} senior tickets and {string} children ticket', (a, b, c) => {
  for (let i = 0; i < a; i++) {
    cy.get('svg').eq(1).click({ force: true })
  }
  for (let i = 0; i < b; i++) {
    cy.get('svg').eq(2).click({ force: true })
  }
  for (let i = 0; i < c; i++) {
    cy.get('svg').eq(5).click({ force: true })
  }
});