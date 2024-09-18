# What are we testing?

Chalil focused on testing the booking confirmation to ensure it works correctly and contains the right information, such as booking ID, film, and time and date. He also tested that users with registered accounts can log in, including negative scenarios where the user inputs incorrect information.

Mitar tested the bookings that users made, which appear on "My Page," as well as the booking history visible there. He wrote tests to verify that the filtering of movies based on age works correctly, and that the film details are displayed as they should be.

Joakim tested the pricing system (when adjusting the number of tickets across different price categories) and also wrote tests to ensure that the movie trailers function properly.

Albin wrote tests to book seats for specific movie screenings and confirmed that the correct seats are being booked. The tests attempt to book 1 seat, 3 seats, and run a loop to book all remaining available seats. He also tested that each page has a unique URL by saving them as variables, which can then be compared to each other.

Sebastian wrote a test to check the availability of seats, along with a negative scenario that checks if the screening is fully booked. The accompanying test ensures that it is not possible to book seats that have already been booked by someone else. He also wrote a test that logs in to cancel a screening, cancels the remaining bookings, and checks that all bookings have been successfully canceled afterward.

# What do the tests show?

Several tests revealed that the website is very slow when booking seats, and there is no indication that the booking process is loading. All of our tests showed that the website functions properly: bookings are visible on "My Page," bookings can be canceled, trailers for movies can be viewed, users can log in, and so on. Our negative scenarios demonstrated that the website accounts for situations like users entering incorrect information or when a cinema is fully booked.

# Are there any bugs/issues in the product?

The only bug we discovered that directly impacts the user is that all seats in the theater disappear after a short time, and the page has to be reloaded. However, there were several areas for improvement, such as the inability to book different price categories side by side at times.

# Are there things we didn’t have time to test?

As a system owner, I would like to see a prototype with at least 5 films, spread across a minimum of 30 (fictional) screening dates in our 2 cinema halls. As a visitor, I want to be able to register a new account and then log in.

# Are there any potential errors/shortcomings in the step-definitions code? If so, which ones?

We could have made some of the step-definitions clearer and the test code more concise and better organized. The test for booking the entire theater could have been reworked so that it booked as many seats as possible each time, but that would have taken too long and been too difficult. If we had planned how all the different features connected before starting, we would not only have saved time but also created more efficient and clearer step-definitions.