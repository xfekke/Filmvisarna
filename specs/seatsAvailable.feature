Feature: Showing available seats for a movie showing in the cinema

  Scenario: Users wants to see what seats are available
    Given that I have selected the movie and know what date I want to go
    When I click on “Välj plats” I should be taken to a view of all the seats
    Then I should be able to see a view of the available seats

  # Scenario: User wants to see what seats are available when none is
  #   Given that I have selected the movie and know what date I want to go
  #   When I click on “Välj plats” I should be taken to a view of all the seats
  #   Then I should be able to see a view of a fully booked cinema