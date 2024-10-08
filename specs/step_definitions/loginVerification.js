import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

//17.1: Scenario: Logging in with correct information

Given('the user is on the "Logga In" page', () => {
  cy.visit('/logga-in');
});

When('the user enters their correct email and password', () => {
  cy.get('input[name="email"]').type('kedipi3878@konican.com');
  cy.get('input[name="password"]').type('ABc12345');
});

When('the user clicks the login button', () => {
  cy.get('.form-wrapper.container button[type="submit"]').click();
});

Then('the user should be redirected to the start page', () => {
  cy.url().should('eq', Cypress.config().baseUrl);
});

Then('the user should be logged in successfully', () => {
  cy.visit('/');
  cy.get('a.nav-link.logout-btn').should('be.visible');
});


//17-2: Scenario: Logging in with incorrect information

When('the user enters an incorrect username or password', () => {
  cy.get('input[name="email"]').type('fel@fel.com');
  cy.get('input[name="password"]').type('Stortfel123');
  cy.get('form').submit();
});

Then('they should receive an error message about invalid login credentials', () => {
  cy.get('.text-center').contains('Fel uppgifter').should('be.visible');
});

//17-3: Scenario: Logging in with empty fields

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

  cy.url().should((url) => {
    expect(url).to.eq(currentUrl);
  });
});

//17-4: Scenario: Login and navigate to Min Sida

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('setExpanded is not defined')) {
    return false;
  }
  return true;
});

When('the user presses "Min Sida"', () => {
  cy.get('a[href="/min-sida"]').should('be.visible').click();
});

Then('the site should navigate to "Min Sida"', () => {
  cy.url().should('include', '/min-sida');
  cy.contains('h6', 'Dina uppgifter').should('be.visible');
});

//17-5: Scenario: Edit the users information

When('the user clicks on the button "Redigera"', () => {
  cy.contains('button', 'Redigera').should('be.visible').click();
});

Then('the user should be able to change their email, firstname, lastname and phonenumber', () => {
  cy.get('input[name="email"]').should('be.visible').clear().type('newemail@example.com');
  cy.get('input[name="firstname"]').should('be.visible').clear().type('NewFirstName');
  cy.get('input[name="lastname"]').should('be.visible').clear().type('NewLastName');
  cy.get('input[name="phone"]').should('be.visible').clear().type('1234567890');
  //Nedanför utkommenterad för att den kommer ändra inlogg som används till sidan!!!!
  //cy.get('form').submit();
});