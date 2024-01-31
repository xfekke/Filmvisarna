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

  Scenario: Viewing URL for My Page when logged in
    Given the application is accessible and running
    When a user wants to log in with email "user@example.com" and password "password"
    And the user wants to view the URL for My Page
    Then the system should provide the URL for the My Page

  Scenario: Viewing URL for Specific Movie
    Given the application is accessible and running
    When a user wants to view the URL for a specific movie
    Then the system should provide the URL for the page of that specific movie