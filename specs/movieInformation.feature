Feature: Information about a movie

  As a user 
  I want to view more information about a movie
  So that I can know which movie I would be most interested in

    Scenario: See more information about a movie
        Given the user is on the movie selection page
        When the user clicks on a movie 
        Then the user should be able to see more information about that movie