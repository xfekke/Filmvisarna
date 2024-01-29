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

  Scenario: Viewing Movies with Less Than 5 Available
    Given there is a limited selection of movies with less than 5 available
    When a user decides to view the list of available movies
    Then the system should display the available movies
    And the user should notice that the number of movies is less than 5

  Scenario: Viewing All Showings with Less Than 30 Available
    Given there is a schedule with limited showings, fewer than 30
    When a user decides to view all available showings
    Then the system should display the schedule with details of each movie showing
    And the user should notice that the number of showings is less than 30