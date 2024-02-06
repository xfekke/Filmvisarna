Cypress.Commands.overwrite('visit', (originalVisit, url, options) => {
  options = options || {};
  options.redirect = options.redirect || 500; // Change this number to your desired redirection limit
  return originalVisit(url, options);
});