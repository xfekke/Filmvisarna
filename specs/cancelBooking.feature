Feature: Cancelling a booking of a movie

  Scenario: User cancels booking succesfully
    Given that I am on on the page "Min Sida" 
    And I am logged in
    And I have made a booking
    When I click on "Avboka"
    Then my booking container should be removed

  Scenario: User cancels multiple bookings
    Given that I am on on the page "Min Sida"
    And I am logged in
    And I have made several bookings
    When I click on "Avboka" for all of my bookings
    Then all of my bookings should be removed

