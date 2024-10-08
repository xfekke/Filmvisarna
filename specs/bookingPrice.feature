Feature: 10. As a visitor, I want to be able to book tickets at different prices so that I can take advantage of the lower prices for seniors and children: Adult: 140 SEK Senior: 120 SEK Child: 80 SEK

  Scenario: Booking tickets for children
    Given that the user at home page
    And choosing on a movie
    And time and date
    And set total tickets to "0"
    When ordering only "3" child tickets
    Then the total cost should be equal to "240" kr

  Scenario: Booking tickets for seniors
    Given that the user at home page
    And choosing on a movie
    And time and date
    And set total tickets to "0"
    When ordering only "2" seniors tickets
    Then the total cost should be equal to "240" kr

  Scenario: Booking tickets for mixed ages
    Given that the user at home page
    And choosing on a movie
    And time and date
    And set total tickets to "0"
    When ordering "1" original tickets, "2" senior tickets and "3" children tickets
    Then the total cost should be equal to "620" kr

  Scenario: Booking zero tickets
    Given that the user at home page
    And choosing on a movie
    And time and date
    And set total tickets to "0"
    Then the total cost should be equal to "0" kr
