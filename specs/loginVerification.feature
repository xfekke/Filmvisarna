Feature: Login Verification
  As a user with an account i would like to loggin and access features as a member of the page.

  Scenario: Logging in with correct information
    Given the user is on the "Logga In" page
    When the user enters their correct email and password
    And the user clicks the login button
    Then the user should be redirected to the start page
    And the user should be logged in successfully

  Scenario: Logging in with incorrect information
    Given the user is on the "Logga In" page
    When the user enters an incorrect username or password
    And the user clicks the login button
    Then they should receive an error message about invalid login credentials

  Scenario: Logging in with empty fields
    Given the user is on the "Logga In" page
    And the user attempts to submit the login form with empty username and password fields
    Then nothing should happen

  Scenario: Login and navigate to Min Sida
    Given the user is on the "Logga In" page
    And the user enters their correct email and password
    And the user clicks the login button
    And the user should be redirected to the start page
    When the user presses "Min Sida"
    Then the site should navigate to "Min Sida"

  Scenario: Edit the users information
    Given the user is on the "Logga In" page
    And the user enters their correct email and password
    And the user clicks the login button
    And the user should be redirected to the start page
    And the user presses "Min Sida"
    When the user clicks on the button "Redigera"
    Then the user should be able to change their email, firstname, lastname and phonenumber