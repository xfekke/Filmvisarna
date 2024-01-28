Feature: Search and Add to Cart
  As a user I want to be able to search for products
  using the search field and add them to the cart.

  Background:
    Given that I am on the start page

  Scenario: Searching for products including "<searchTerm>"
    When I enter the letters "<searchTerm>" in the search field
    Then I should see the product "<productName>"
    When I add the product "<productName>" to the cart
    Then the product "<productName>" should be in the cart
    When I go to the cart and proceed to checkout
    Then I should be on the checkout page

    Examples:
      | searchTerm | productName |
      | bord       | Bordslampa  |
      | tak        | Taklampa    |
