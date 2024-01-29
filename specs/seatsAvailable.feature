Feature: Booking Confirmation

  Scenario: Successfully receiving a booking confirmation
    Given that the user is on the homepage
    And the user has selected a movie
    And the user has chosen a screening time
    And the user has picked out seats
    When the user completes the booking process for a selected movie
    Then they should receive a booking confirmation
    And the confirmation should include the correct seat numbers, movie title, date, time, and a unique booking number

  Scenario: Accessing the booking confirmation through user account
    Given the visitor has made a booking
    And is logged into their user account
    When the visitor navigates to their 'Min Sida'
    Then they should be able to view the confirmation the booked movie