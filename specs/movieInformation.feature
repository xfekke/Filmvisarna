Feature: Information about a movie

  As a user 
  I want to view more information about a movie
  So that I can know which movie I would be most interested in

  
   Scenario: See more information about a movie 
      Given the user is on the movie selection page
      When the user clicks on "<Movie>"
      Then the user should be able to see more information about that movie

    Examples:
      | Movie                                        |
      | Jack Reacher: Never Go Back                  |
      | Rambo: Last Blood                            |
      | Oppenheimer                                  |
      | Star Wars: Episode III - Revenge of the Sith |
      | Star Wars: Episode II - Attack of the Clones |
      | Star Wars: Episode I - The Phantom Menace    |
      | Barbie                                       |
      
    


