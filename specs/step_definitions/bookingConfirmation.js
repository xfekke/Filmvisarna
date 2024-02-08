import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

//global variable be saved for movie title
let movieNameGlobal;

Given('that the user is on the homepage', () => {
  cy.visit('/');
});

Given('press the movie {string}', (movieName) => {
  //uses moviename in feature "movieName"
  //stores name
  movieNameGlobal = movieName;
  cy.get('div').contains(movieName).should('be.visible').click();
});

Given('the user has choosen a screening time', () => {
  //presses first available movie time
  cy.get('.screening-table.mt-5.text-center.table').find('tbody tr:nth-child(1) td:nth-child(3) button').click({ force: true });
  //selecting 1 seat, reduces one from two seats
  cy.get('.btn-wrapper button.btn-custom').first().click({ force: true });
});

Given('the user has picked out seats', () => {
  cy.wait(2000);
  //chooses first empty seat
  cy.get('.seat-wrapper .seat-row > .seat:lt(81):not(.booked)').should('be.visible').first().click({ force: true });
  cy.wait(2000);
  cy.get('button.btn.btn-custom').contains('Boka').should('be.visible').click({ force: true });
});

When('the user completes the booking process for a selected movie', () => {
  cy.get('input[name="email"]').should('be.visible').type('fake1234@fake.com');
  cy.get('.form-wrapper.container button[type="submit"]').should('be.visible').click();
});

//checks if 'Bokningsnummer' is visible
Then('they should receive a booking confirmation', () => {
  cy.wait(10000);
  cy.get('.confirm-wrapper div.row p').contains('Bokningsnummer').should('be.visible');
});


Then('the confirmation should include the correct seat numbers, movie title, date, time, and a unique booking number', () => {
  cy.get('.confirm-wrapper div.row').invoke('text').then((text) => {

    //unique booking number pattern
    const bookingNumberPattern = /Bokningsnummer:\s*([A-Z0-9]+)/;
    const bookingNumberMatch = bookingNumberPattern.exec(text);
    expect(bookingNumberMatch, 'Booking number should visible').to.not.be.null;

    //date pattern, matching swe (weekday, date and month)
    const datePattern = /\b(måndag|tisdag|onsdag|torsdag|fredag|lördag|söndag)\s+\d{1,2}\s+(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)\b/;
    const dateMatch = datePattern.exec(text);
    expect(dateMatch, 'Date should be correct');

    //checks if that movie title match
    const movieTitle = movieNameGlobal
    cy.get('.confirm-wrapper').invoke('text').then((text) => {
      expect(text).to.include(movieTitle);
      cy.contains('.confirm-wrapper', (movieTitle)).should('be.visible');

      //checks that seats are visible
      const seatsPattern = /Rad\s+\d+\s+Stol\s+\d+(,\s+Stol\s+\d+)*/;
      const seatsMatch = seatsPattern.exec(text);
      expect(seatsMatch, 'Seat numbers should be visible').to.not.be.null;

      //checks that time pattern matches
      const timePattern = /\d{2}:\d{2}\s+-\s+\d{2}:\d{2}/;
      const timeMatch = timePattern.exec(text);
      expect(timeMatch, 'Time should show').to.not.be.null;
    });
  });
});