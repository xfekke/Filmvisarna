Feature: Filter movies 
  As an user
  I want to be able to filter movies
  So that I can see which movies are available for the different filter choices

    Background:
      Given the user is on the movie selection page

    Scenario: Showing movies that are appropriate for children
      When the user sets the age filter to "Barntillåten"  
      Then only movies appropriate for children should be displayed

    Scenario: Showing movies that have 7 year old age restriction
      When the user sets the age filter to "7 år"
      Then only movies with a minimum age limit of 7 years should be displayed

    Scenario: Showing movies that have 11 year old age restriction
      When the user sets the age filter to "11 år"
      Then only movies with a minimum age limit of 11 years should be displayed

    Scenario: Showing movies that have 15 year old age restriction
      When the user sets the age filter to "15 år"
      Then only movies with a minimum age limit of 15 years should be displayed

    Scenario: Showing all movies on the movie page
      When the user sets the age filter to "Alla filmer"
      Then All the available movies should be displayed

