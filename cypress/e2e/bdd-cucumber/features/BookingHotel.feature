Feature: Booking Hotel

    After Succeffully login into Adactin Hotel application, User should be able to Booking for a Hotel.
    Background: Navigate to the login page of the website
     Given Navigcate to the Adactin Hotel Application

    Scenario: User should be able to Book for a Hotel after loging into Adactin Hotel Application.
    When User enter the valid Username and valid Password and click on Login Button
    Then Verify the Search Hotel Page is open successfully after login

    When Enter all the mendatory fields in the Search Hotel form and click on Search Button
    Then verify that the searched hotel is listed in the next Select Hotel Page to select

    When User Select the Hotel on Select Hotel Page and Click the Continue Button
    Then Verify Book a Hotel Page got visible for Booking Your Hotel
    When User fill the payments details form given in the Book a Hotel Page and click Book Now Button
    
    Then Verify the hotel booking got successfull
    Then click on the Logout Button after successfull Hotel Booking