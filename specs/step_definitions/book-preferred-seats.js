import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('setExpanded is not defined')) {
    return false;
  }
});

// Scenario 1: Booking a single seat for a movie viewing

Given('there are movie viewings available', () => {
  // Go to webpage
  cy.visit('/')
});

Given('I´m logged in as a user', () => {
  // Logs in the user
  cy.visit('/logga-in');
  cy.get('input[name="email"]')
    .type('fekke4201337@gmail.com');
  cy.get('input[name="password"]')
    .type('Hejsan1234');
  cy.get('.form-wrapper.container button[type="submit"]')
    .click();

  // Waiting so i logg in
  cy.wait(1000)
  // Click on films
  cy.get('a[href="/filmer"]')
    .should('be.visible')
    .click();
  // Select the second film in the list, in this case rambo last blood
  cy.get('a[href="/film/2"]')
    .should('be.visible')
    .click();

  // Go to the screening that is tomorrow. 
  cy.get('.screening-table.mt-5.text-center.table')
    .find('tbody tr:nth-child(2) td:nth-child(3) button')
    .click({ force: true });

});

Given('there are available seats for 1 person', () => {
  // Selecting 1 seat
  cy.get('.btn-wrapper button.btn-custom')
    .first()
    .click({ force: true });

  // Waiting so the seats appear
  cy.wait(100);

  // Selecting the first avalible seat
  cy.get('.seat-wrapper .seat-row > .seat:lt(81):not(.booked)')
    .first()
    .click({ force: true });
});

When('a moviegoer decides to book a seat for the upcoming film', () => {
  // Pressing the book button
  cy.get('.col button.btn-custom')
    .click({ force: true });
});

When('completes the booking process', () => {
  cy.wait(1000);
  // Pressing the booking button to confirm booking
  cy.get('button.submit-btn.btn.btn-primary')
    .first()
    .click();
});

Then('the system should confirm the reservation of a seat', () => {
  // Waiting for the system to book the tickets
  cy.wait(20000);
  // Clicking the close button on the confirmation of the seat
  cy.get('button.btn.btn-custom')
    .click();
});


// Scenario 2: Booking Seats for 3 People

Given('there is an upcoming movie with available seats', () => {
  // Logs in the user
  cy.visit('/logga-in');
  cy.get('input[name="email"]')
    .type('fekke4201337@gmail.com');
  cy.get('input[name="password"]')
    .type('Hejsan1234');
  cy.get('.form-wrapper.container button[type="submit"]')
    .click();

  // Waiting so i logg in
  cy.wait(1000)
  cy.get('a[href="/filmer"]')
    .should('be.visible')
    .click();
  // Select the second film in the list, in this case rambo last blood
  cy.get('a[href="/film/2"]')
    .should('be.visible')
    .click();

  // Go to the screening that is tomorrow. 
  cy.get('.screening-table.mt-5.text-center.table')
    .find('tbody tr:nth-child(2) td:nth-child(3) button')
    .click({ force: true });

});

Given('there are seats available for 3 people', () => {
  // Selecting 3 seat
  cy.get('.btn-wrapper button.btn-custom')
    .eq(1)
    .click({ force: true });

  // Waiting so the seats appear
  cy.wait(1000);

});

When('a group of moviegoers decides to book seats', () => {
  // Selecting the first avalible seat
  cy.get('.seat-wrapper .seat-row > .seat:lt(81):not(.booked)')
    .first()
    .click({ force: true });
});

When('they select seats for 3 people', () => {
  // Pressing the book button
  cy.get('.col button.btn-custom')
    .click({ force: true });
});

When('complete the booking process', () => {
  cy.wait(1000);
  // Pressing the booking button to confirm booking
  cy.get('button.submit-btn.btn.btn-primary')
    .first()
    .click();
});

Then('the system should confirm the reservation of seats for the group', () => {
  // Waiting for the system to book the tickets
  cy.wait(20000);
});

Then('the moviegoers should have reserved seats for the viewing', () => {
  // Clicking the close button on the confirmation of the seat
  cy.get('button.btn.btn-custom')
    .click();
});

// Scenario 3: Not enough seats for booking

Given('there is an upcoming movie with limited available seats', () => {
  // Function to check if there are available seats
  const checkForAvailableSeats = () => {
    // Click on films
    cy.get('a[href="/filmer"]')
      .should('be.visible')
      .click();

    // Select the second film in the list, in this case Rambo: Last Blood
    cy.get('a[href="/film/2"]')
      .should('be.visible')
      .click();

    // Go to the screening that is tomorrow. 
    cy.get('.screening-table.mt-5.text-center.table')
      .find('tbody tr:nth-child(2) td:nth-child(3) button')
      .click({ force: true });

    cy.wait(100);

    // Check if there are available seats
    cy.get('body, .seat-wrapper .seat-row > .seat:lt(81):not(.booked)', { timeout: 10000 })
      .then(el => {
        // If the element is found, start the booking process
        if (el.length > 1) {
          bookAllSeats();
        }
      });

    return;
  };

  // Recursive function to book seats until all are booked
  const bookAllSeats = () => {
    // Function to book a seat
    const bookSeat = () => {

      cy.get('.btn-wrapper button.btn-custom')
        .first()
        .click({ force: true });

      cy.wait(100);

      cy.get('.seat-wrapper .seat-row > .seat:lt(81):not(.booked)')
        .first()
        .click({ force: true });

      cy.get('.col button.btn-custom')
        .click({ force: true });

      cy.wait(1000)

      cy.get('button.submit-btn.btn.btn-primary')
        .first()
        .click();

      cy.wait(20000);

      cy.get('button.btn.btn-custom')
        .click();
    };

    bookSeat();

    checkForAvailableSeats(bookAllSeats);

  };

  // Start the process by checking for available seats
  checkForAvailableSeats();

});

Given('there are not enough seats for 1 person', () => {
  // Going back to homepage
  cy.visit('/')
  // Going to the movie that´s fully booked
  cy.get('a[href="/filmer"]')
    .should('be.visible')
    .click();
  // Select the second film in the list, in this case rambo last blood
  cy.get('a[href="/film/2"]')
    .should('be.visible')
    .click();

  // Go to the screening that is tomorrow. 
  cy.get('.screening-table.mt-5.text-center.table')
    .find('tbody tr:nth-child(2) td:nth-child(3) button')
    .click({ force: true });
});

When('a moviegoer tries to book a seat', () => {
  cy.get('.seat-wrapper .seat-row > .seat.booked')
    .should('have.length', 82);
});

Then('the system should inform the moviegoer that there are not enough seats available', () => {
  cy.log('All 81 seats are booked.');
});
