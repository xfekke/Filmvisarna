Feature: Login Verification

  Scenario: Logging in with correct information
    Given the user is on the 'Logga In' page
    When the user enters their correct email and password
    And the user clicks the login button
    Then redirected to the start page
    And the user should be logged in successfully

  Scenario: Logging in with incorrect information
    Given the user is on the 'Logga In' page
    When the user enters an incorrect username or password
    And the user clicks the login button
    Then they should receive an error message about invalid login credentials

  Scenario: Logging in with empty fields
    Given the user is on the 'Logga In' page
    When the user attempts to submit the login form with empty username and password fields
    Then nothing should happen

  Scenario: Login and navigate to Min Sida
    Given the user is on the 'Logga In' page
    When the user enters their correct email and password
    And the user clicks the login button
    Then redirected to the start page
    And then press Min Sida to navigate to the page