Feature: View Bookings and Booking History


    Scenario: Viewing booking history
        Given the user is visiting "Logga in"
        And the user is providing a valid email
        And the user is providing a valid password
        When the users clicks on "Logga in" the user should be taken to "Hemsidan"
        And the user clicks on "Min Sida"
        Then the user should see "Bokningshistorik" where information about booking is available.

  

    Scenario: Viewing current bookings
        Given the user is visiting "Logga in"
        And the user is providing a valid email
        And the user is providing a valid password
        When the users clicks on "Logga in" the user should be taken to "Hemsidan"
        And the user clicks on "Min Sida"
        Then the user should see information about their current bookings under "Mina nuvarande bokningar"

