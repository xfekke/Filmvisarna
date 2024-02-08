Feature: Booking Confirmation

  Scenario: Successfully receiving a booking confirmation
    Given that the user is on the homepage
    And press the poster for the movie "Barbie"
    And the user has choosen a screening time
    And the user has picked out seats
    When the user completes the booking process for a selected movie
    Then they should receive a booking confirmation
    And the confirmation should include the correct seat numbers, movie title, date, time, and a unique booking number