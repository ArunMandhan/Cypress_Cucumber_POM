// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types='cypress'/>

const BookElements = require('../../PageObjectModel/PageElements/BookingPageElements.json')

import * as bHelper from "../../PageObjectModel/BusinessHelper.js"
import Login from "../../PageObjectModel/PageActions/LoginActions.js"
import SearchHotel from "../../PageObjectModel/PageActions/SearchHotelActions.js"
import selectHotel from "../../PageObjectModel/PageActions/SelectHotelActions.js"
import BookingHotel from "../../PageObjectModel/PageActions/BookingHotelActions.js"

const log = new Login;
const search = new SearchHotel;
const select = new selectHotel;
const Book = new BookingHotel;

Cypress.Commands.add('HRMlogin',(user,pass)=>{
    log.setUserName(user);
    log.setPassword(pass);
    log.clickLogin();
})

Cypress.Commands.add('verify_HRM_login',(txt)=>{
    log.verifyLogin(txt)
})

Cypress.Commands.add('HRMlogout',()=>{
    cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
})

Cypress.Commands.add('AH_login',(user,pass)=>{
    log.AdUsername(user);
    log.AdPassword(pass);
    log.AdLogin();
})

Cypress.Commands.add('verify_AH_login',(txt)=>{
    log.AdVerifyLogin(txt)
})

Cypress.Commands.add("searchHotel",()=>{
    search.setLocation(bHelper.configData("adactinhotel").location)
    search.setHotels(bHelper.configData("adactinhotel").hotel);
    search.hotelType(bHelper.configData("adactinhotel").type);
    search.noRooms(bHelper.configData("adactinhotel").count);
    search.checkinDate(bHelper.configData("adactinhotel").in);
    search.checkoutDate(bHelper.configData("adactinhotel").out);
    search.AdultRooms(bHelper.configData("adactinhotel").adult);
    search.childrenRooms(bHelper.configData("adactinhotel").children);
    search.clickBook();
})

Cypress.Commands.add('verifySearchPage',(txt)=>{
    search.verifySearch(txt);
})

Cypress.Commands.add('selectHotel',()=>{
    select.select_hotel();
    select.Click_continue();
})

Cypress.Commands.add('verifySearchHotel',(lbl)=>{
    select.verifySearchHotel(lbl);
})

Cypress.Commands.add('BookHotel',()=>{
 
    Book.setfname(bHelper.configData("adactinhotel").fname)
    Book.setlname(bHelper.configData("adactinhotel").lname)
    Book.setAddress(bHelper.configData("adactinhotel").address)
    Book.setCC(bHelper.configData("adactinhotel").ccNo)
    Book.setCCType(bHelper.configData("adactinhotel").cctype)    
    Book.setExp_month(bHelper.configData("adactinhotel").expmonth)
    Book.setExp_year(bHelper.configData("adactinhotel").expyear)
    Book.setCCNum(bHelper.configData("adactinhotel").cvv)
    Book.btnBookNow();
    cy.wait(2000)
    
})

Cypress.Commands.add('VerifyBooking',(val)=>{
    Book.verifyBooking(val);
})

Cypress.Commands.add('HotelLogout',()=>{
    bHelper.btnClick(BookElements.Btnlogout);
})



