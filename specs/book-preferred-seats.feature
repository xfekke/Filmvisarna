Feature: View Prototype with Minimum 5 Films and at least 30 (Fictional) Screening Dates across 2 Cinema Screens

  Scenario: Viewing All Movies and Finding at Least 5 Objects
    Given there is a database of movies with various objects
    When a user decides to view all available movies
    Then the system should display the list of all movies
    And the user should be able to identify and find at least 5 distinct objects in the displayed movie information

  Scenario: Viewing All Showings of Movies
    Given there is a schedule with multiple showings of different movies
    When a user decides to view all available showings
    Then the system should display the schedule with details of each movie showing
    And the user should be able to see information about all the scheduled movie showings

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