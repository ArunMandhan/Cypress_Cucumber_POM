import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import SearchHotel from "../../../../PageObjectModel/PageActions/SearchHotelActions.js";
import * as bHelper from "../../../../PageObjectModel/BusinessHelper.js";

const search = new SearchHotel;

When('User enter the valid Username and valid Password and click on Login Button', () => {
    cy.AH_login(bHelper.configData("adactinhotel").username,bHelper.configData("adactinhotel").password)
})

Then('Verify the Search Hotel Page is open successfully after login', () => {
    cy.verify_AH_login(bHelper.configData("adactinhotel").expected)
})

When('Enter all the mendatory fields in the Search Hotel form and click on Search Button', () => {
    cy.searchHotel();
})

Then('verify that the searched hotel is listed in the next Select Hotel Page to select',()=>{
    cy.verifySearchPage(bHelper.configData("adactinhotel").location)
})

When('User Select the Hotel on Select Hotel Page and Click the Continue Button',()=>{
    cy.selectHotel();
})

Then('Verify Book a Hotel Page got visible for Booking Your Hotel',()=>{
    cy.verifySearchHotel(bHelper.configData("adactinhotel").verifylbl)
})

When('User fill the payments details form given in the Book a Hotel Page and click Book Now Button',()=>{
    cy.BookHotel();
})

Then('Verify the hotel booking got successfull',()=>{
    cy.VerifyBooking(bHelper.configData("adactinhotel").verifyBook);
})

Then('click on the Logout Button after successfull Hotel Booking',()=>{
    cy.HotelLogout();
})

