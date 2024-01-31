import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that the user at home page', () => {
  //visit home page
  cy.visit('/');
});

Given('choosing on a movie', () => {
  //click on the movie "barbie"
  cy.get('.img-wrapper').eq(3).should('be.visible').click({ force: true })
});

Given('time and date', () => {
  //choose the date and time on top
  cy.get('button.screening-btn.text-nowrap.btn').should('be.visible').first().click({ force: true })
});

Given('set total tickets to {string}', (a) => {
  //change adult tickts to zero
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
  //click the child tickest plus sign "a" times
  for (let i = 0; i < a; i++) {
    cy.get('svg').eq(5).should('be.visible').click({ force: true })
  }
});

Then('the total cost should be equal to {string} kr', (expectedCost) => {
  //get the "totalt att betala" number into variable actualCost
  cy.get('span').eq(2).invoke('text').then((actualCostText) => {
    const actualCost = actualCostText.trim();
    //compare it expectedCost and acualCost are equal
    expect(actualCost).to.equal(expectedCost);
  });
});

When('ordering only {string} seniors tickets', (a) => {
  //click the seniors tickest plus sign "a" times
  for (let i = 0; i < a; i++) {
    cy.get('svg').eq(3).should('be.visible').click({ force: true })
  }
});

When('ordering {string} original tickets, {string} senior tickets and {string} children tickets', (a, b, c) => {
  //click the Adult tickest plus sign "a" times
  for (let i = 0; i < a; i++) {
    cy.get('svg').eq(1).should('be.visible').click({ force: true })
  }
  //click the seniors tickest plus sign "b" times
  for (let i = 0; i < b; i++) {
    cy.get('svg').eq(3).should('be.visible').click({ force: true })
  }
  //click the child tickest plus sign "c" times
  for (let i = 0; i < c; i++) {
    cy.get('svg').eq(5).should('be.visible').click({ force: true })
  }
});