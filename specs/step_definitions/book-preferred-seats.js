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
  cy.get('input[name="email"]').type('fekke4201337@gmail.com');
  cy.get('input[name="password"]').type('Hejsan1234');
  cy.get('.form-wrapper.container button[type="submit"]').click();

  // Waiting so i logg in
  cy.wait(1000)
  // Click on films
  cy.get('a[href="/filmer"]').should('be.visible').click();
  // Select the second film in the list, in this case rambo last blood
  cy.get('a[href="/film/2"]').should('be.visible').click();

  // Go to the screening that is tomorrow. 
  cy.get('.screening-table.mt-5.text-center.table')
    .find('tbody tr:nth-child(2) td:nth-child(3) button')
    .click({ force: true });

});

Given('there are available seats for 1 person', () => {
  // Selecting 1 seat
  cy.get('.btn-wrapper button.btn-custom').first()
    .click({ force: true });

  // Waiting so the seats appear
  cy.wait(100)

  // Selecting the first avalible seat
  cy.get('.seat-wrapper .seat-row > .seat:lt(81):not(.booked)').first()
    .click({ force: true });
});

When('a moviegoer decides to book a seat for the upcoming film', () => {
  // Pressing the book button
  cy.get('.col button.btn-custom')
    .click({ force: true });
});

When('the moviegoer selects a single seat', () => {
  // TODO: implement step
});

When('completes the booking process', () => {
  // Pressing the booking button to confirm booking
  cy.get('button.submit-btn.btn.btn-primary').first()
    .click();
});

Then('the system should confirm the reservation of a seat', () => {
  // Waiting for the system to book the tickets
  cy.wait(10000);
  // Clicking the close button on the confirmation of the seat
  cy.get('button.btn.btn-custom')
    .click();
});

Then('the moviegoer should have a reserved seat for the viewing', () => {
  // TODO: implement step
});

Given('there is an upcoming movie with limited available seats', () => {
  // Function to check if there are available seats
  const checkForAvailableSeats = () => {
    // Click on films
    cy.get('a[href="/filmer"]').should('be.visible').click();

    // Select the second film in the list, in this case Rambo: Last Blood
    cy.get('a[href="/film/2"]').should('be.visible').click();

    // Go to the screening that is tomorrow. 
    cy.get('.screening-table.mt-5.text-center.table')
      .find('tbody tr:nth-child(2) td:nth-child(3) button')
      .click({ force: true });

    cy.wait(100);

    // Check if there are available seats
    cy.get('.seat-wrapper .seat-row > .seat:lt(81):not(.booked)', { timeout: 10000 })
      .then(() => {
        // If the element is found, start the booking process
        bookAllSeats();
      });

    return;
  };

  // Recursive function to book seats until all are booked
  const bookAllSeats = () => {
    // Function to book a seat
    const bookSeat = () => {
      // cy.get('.screening-table.mt-5.text-center.table')
      //   .find('tbody tr:nth-child(2) td:nth-child(3) button')
      //   .click({ force: true });

      cy.get('.btn-wrapper button.btn-custom').first().click({ force: true });

      cy.wait(100);

      cy.get('.seat-wrapper .seat-row > .seat:lt(81):not(.booked)').first().click({ force: true });

      cy.get('.col button.btn-custom').click({ force: true });

      cy.wait(1000)

      cy.get('button.submit-btn.btn.btn-primary').first().click();

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
  // TODO: implement step
});

When('a moviegoer tries to book a seat', () => {
  // TODO: implement step
});

Then('the system should inform the moviegoer that there are not enough seats available', () => {
  // TODO: implement step
});

Then('the moviegoer shouldn´t be able to book the seat', () => {
  // TODO: implement step
});


Given('there is an upcoming movie with available seats', () => {
  // TODO: implement step
});

Given('there are seats available for 3 people', () => {
  // TODO: implement step
});

When('a group of moviegoers decides to book seats', () => {
  // TODO: implement step
});

When('they select seats for 3 people', () => {
  // TODO: implement step
});

When('complete the booking process', () => {
  // TODO: implement step
});

Then('the system should confirm the reservation of seats for the group', () => {
  // TODO: implement step
});

Then('the moviegoers should have reserved seats for the viewing', () => {
  // TODO: implement step
});

/* No duplicate steps, this one already above
Given('there is an upcoming movie with limited available seats', () => {});*/

Given('there are not enough seats for 3 people', () => {
  // TODO: implement step
});

When('a group of moviegoers tries to book seats', () => {
  // TODO: implement step
});

Then('the system should inform the group that there are not enough seats available', () => {
  // TODO: implement step
});

Then('the moviegoers shouldn´t be able to book the seats', () => {
  // TODO: implement step
});