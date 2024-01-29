Feature: Unique URLs for All Views

  Scenario: Viewing URL for Start Page
    Given the application is accessible and running
    When a user wants to view the URL for the start page
    Then the system should provide the URL for the start page

  Scenario: Viewing URL for Movie Page
    Given the application is accessible and running
    When a user wants to view the URL for a specific movie page
    Then the system should provide the URL for the movie page

  Scenario: Viewing URL for Logging In
    Given the application is accessible and running
    When a user wants to view the URL for logging in
    Then the system should provide the URL for the login page

  Scenario: Viewing URL for Sign Up
    Given the application is accessible and running
    When a user wants to view the URL for signing up
    Then the system should provide the URL for the sign-up page

  Scenario: Viewing URL for Specific Movie
    Given the application is accessible and running
    When a user wants to view the URL for a specific movie
    Then the system should provide the URL for the page of that specific movie