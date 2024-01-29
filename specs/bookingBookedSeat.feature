Feature: Avoiding booking already booked seats

  Scenario: Failing to book a seat that is already booked
    Given that I am on the page to see all seats
    When I try click on the booked seats
    Then I should not be able to select them

  Scenario: Trying to book more seats than available
    Given that I am on the page to see all seats
    And I want to book more seats than available
    When I try to click on the available seats
    Then I should not be able to select them

  Scenario: Booking more than 12 seats at a time
    Given that I am on the page to see all seats
    And I want to book more than 13 or more seats at a time
    When I try to click on the available seats
    Then I should not be able to 

