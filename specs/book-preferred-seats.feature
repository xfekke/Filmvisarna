Feature: As a visitor, I want to be able to book seats for a showing so that I know I have preferred seats when I go to watch the movie.

  Scenario: Booking a single seat for a movie viewing
    Given there are movie viewings available
    And there are available seats for 1 person
    When a moviegoer decides to book a seat for the upcoming film
    And the moviegoer selects a single seat
    And completes the booking process
    Then the system should confirm the reservation of a seat
    And the moviegoer should have a reserved seat for the viewing

  Scenario: Not enough seats for booking
    Given there is an upcoming movie with limited available seats
    And there are not enough seats for 1 person
    When a moviegoer tries to book a seat
    Then the system should inform the moviegoer that there are not enough seats available
    And the moviegoer shouldn´t be able to book the seat

  Scenario: Booking Seats for 3 People
    Given there is an upcoming movie with available seats
    And there are seats available for 3 people
    When a group of moviegoers decides to book seats
    And they select seats for 3 people
    And complete the booking process
    Then the system should confirm the reservation of seats for the group
    And the moviegoers should have reserved seats for the viewing

  Scenario: Not Enough Seats for Group Booking
    Given there is an upcoming movie with limited available seats
    And there are not enough seats for 3 people
    When a group of moviegoers tries to book seats
    Then the system should inform the group that there are not enough seats available
    And the moviegoers shouldn´t be able to book the seats