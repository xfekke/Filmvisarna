Feature: 13. As a visitor, I want to be able to watch trailers for movies to better determine if they interest me or not

  Scenario: Trailer are in the home page
    Given that the user at home page
    When click on the play button
    Then the site should show the movie trailer

  Scenario: Trailer are not in the home page
    Given that the user at home page
    And press the movie "Five Nights at Freddy's"
    When click on the play button
    Then the site should show the movie trailer

  Scenario: Trailer only exist at movie i Filmer section
    Given that the user at home page
    And user should go to the Filmer section
    And press the movie "Star Wars: Episode III - Revenge of the Sith"
    When click on the play button
    Then the site should show the movie trailer

