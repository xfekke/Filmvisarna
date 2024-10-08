Feature: Avoiding booking already booked seats
  As a user I do not want to be able to book a seat
  that has already been booked to avoid being 
  without a seat once I arrive

  Background:
    Given that I am on the page to see all seats

  Scenario: Failing to book a seat that is already booked
    When I try click on the booked seats
    Then I should not be able to select them

  Scenario: Trying to book more seats than available
    When I try to click on the available seats
    Then I should not be able to select them

  Scenario: Booking more than 12 seats at a time
    When I have selected "13" or more seats and I try to select any seats 
    Then no seats should be selected

