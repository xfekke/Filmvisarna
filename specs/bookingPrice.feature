Feature: 10. As a visitor, I want to be able to book tickets at different prices so that I can take advantage of the lower prices: origonal: 140 SEK, Senior: 120 SEK, Child: 80 SEK

  10.1 Booking tickets for children
  10.2 Booking tickets for seniors
  10.3 Booking tickets for mixed ages
  10.4 Booking zero tickets

  Scenario: Booking tickets for children
    Given that the user at home page
    And choosing on a movie
    And time and date
    When ordering only "3" child tickets
    Then the total cost should be "240" kr

  Scenario: Booking tickets for seniors
    Given that the user at home page
    And choosing on a movie
    And time and date
    When ordering only "2" seniors tickets
    Then the total cost should be "240" kr

  Scenario: Booking tickets for mixed ages
    Given that the user at home page
    And choosing on a movie
    And time and date
    When ordering only "1" original ticket, "2" senior tickets and "3" children ticket
    Then the total cost should be equal to "620" kr

  Scenario: Booking zero tickets
    Given that the user at home page
    And choosing on a movie
    And time and date
    When ordering only "0" ticket
    Then the total cost should be equal to "0" kr