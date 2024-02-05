Feature: 16. Som besökare vill jag kunna registrera nytt konto för att sedan kunna logga in

  16.1 Registering account
  16.2 Registering account with occupied email
  16.3 Registering account with invalid password
  16.4 Registering account with incorrect confirm password
  16.5 do not want to register anymore

  Scenario: Registering account
    Given that the user do not own an account
    And the user at the home page
    When go to the "Bli Medlem" section
    And enter mail, password and confirm password
    And press the "Registera" button
    Then the account should be registerd and user should be logged in
    And redirect to home page

  Scenario: Registering account with occupied email
    Given that the user do not own an account
    And the user at the home page
    When go to the "Bli Medlem" section
    And enter a occupied email and password and confirm password
    And press the "Registera" button
    Then the "Blev fel vid registeringen" message should be showned

  Scenario: Registering account with invalid password
    Given that the user do not own an account
    And the user at the home page
    When go to the "Bli Medlem" section
    And enter email, invalid password and confirm password
    And press the "Registera" button
    Then an error message should be showned

  Scenario: Registering account with incorrect confirm password
    Given that the user do not own an account
    And the user at the home page
    When go to the "Bli Medlem" section
    And enter email, password and incorrect confirm password
    And press the "Registera" button
    Then an error message "Du måste ha matchande lösenord!" be showned

  Scenario: do not want to register anymore
    Given that the user do not own an account
    And the user at the home page
    When go to the "Bli Medlem" section
    And press the "Avbryt" button
    Then user shold be redirect to home page