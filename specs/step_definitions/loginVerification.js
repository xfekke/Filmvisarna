import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

//test-1

Given("the user is on the 'Logga In' page", () => {
  cy.visit('/logga-in');
});

When("the user enters their correct email and password", () => {
  cy.get('input[name="email"]').type('kedipi3878@konican.com');
  cy.get('input[name="password"]').type('ABc12345');
});

When("the user clicks the login button", () => {
  cy.get('.form-wrapper.container button[type="submit"]').click();
});

Then("redirected to the start page", () => {
  cy.url().should('eq', Cypress.config().baseUrl);
});

Then("the user should be logged in successfully", () => {
  cy.visit('/');
  cy.get('a.nav-link.logout-btn').should('be.visible');
});


//test-2

When('the user enters an incorrect username or password', () => {
  cy.get('input[name="email"]').type('fel@fel.com');
  cy.get('input[name="password"]').type('Stortfel123');
});

Then('they should receive an error message about invalid login credentials', () => {
  cy.get('.text-center').contains('Fel uppgifter').should('be.visible');
});

// test-3

When('the user attempts to submit the login form with empty username and password fields', () => {
  cy.get('input[name="email"]').clear();
  cy.get('input[name="password"]').clear();
  cy.get('form').submit();
});

Then('nothing should happen', () => {
  let currentUrl;
  cy.url().then((url) => {
    currentUrl = url;
  });

  //cy.wait(5000);

  cy.url().should((url) => {
    expect(url).to.eq(currentUrl);
  });
});

//test-4

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('setExpanded is not defined')) {
    return false;
  }
  return true;
});

Then('then press Min Sida to navigate to the page', () => {
  cy.get('a[href="/min-sida"]').should('be.visible').click();
  cy.url().should('include', '/min-sida');
  cy.contains('h6', 'Dina uppgifter').should('be.visible');
});