Feature: As a visitor, I want to be able to book seats for a showing so that I know I have preferred seats when I go to watch the movie.

  Scenario: Booking a single seat for a movie viewing
    Given there are movie viewings available
    And I´m logged in as a user
    And there are available seats for 1 person
    When a moviegoer decides to book a seat for the upcoming film
    And completes the booking process
    Then the system should confirm the reservation of a seat

  Scenario: Booking Seats for 3 People
    Given there is an upcoming movie with available seats
    And there are seats available for 3 people
    When a group of moviegoers decides to book seats
    And they select seats for 3 people
    And complete the booking process
    Then the system should confirm the reservation of seats for the group
    And the moviegoers should have reserved seats for the viewing

  Scenario: Not enough seats for booking
    Given there is an upcoming movie with limited available seats
    And there are not enough seats for 1 person
    When a moviegoer tries to book a seat
    Then the system should inform the moviegoer that there are not enough seats available