Feature: Login Verification

  Scenario: Logging in with correct information
    Given the user is on the 'Logga In' page
    When the user enters their correct username and password
    And the user submits the login form
    Then the user should be logged in successfully
    And redirected to their account page

  Scenario: Logging in with incorrect information
    Given the visitor is on the 'Logga In' page
    When the visitor enters an incorrect username or password
    And the visitor submits the login form
    Then they should receive an error message about invalid login credentials
    And be given the option to try logging in again or to reset their password

  Scenario: Logging in with empty fields
    Given the visitor is on the 'Logga In' page
    When the visitor attempts to submit the login form with empty username and password fields
    Then they should receive an error message indicating that username and password are required fields
    And be prompted to fill in the necessary information before submitting again