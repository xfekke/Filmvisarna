Feature: Search
  As a user I want to able to search for products
  using the search field.

  Background:
    Given that I am on the start page

  Scenario: Searching for products including "<searchTerm>"
    When I enter the letters "<searchTerm>" in the search field
    Then I should see the product "<productName>"

    Examples:
      | searchTerm | productName |
      | bord       | Bordslampa  |
      | tak        | Taklampa    |