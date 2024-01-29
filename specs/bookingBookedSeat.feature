Feature: Avoiding booking already booked seats

  Scenario: Failing to book a seat that is already booked
    Given that I am on the page to see all seats
    And There is a seat already booked
    When I try click on the booked seats
    Then I should not be able to select them

  Scenario: Booking an already booked seat succesfully
    Given that I am on the page to see all seats
    And There is a seat already booked
    When I try to click on the booked seats
    Then I should be able to select them

