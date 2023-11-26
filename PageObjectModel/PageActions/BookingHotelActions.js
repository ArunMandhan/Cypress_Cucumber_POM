import * as bHelper from "../BusinessHelper"
const BookElements = require('../PageElements/BookingPageElements.json')

class BookingHotel
{
    setfname(fname)
    {
        bHelper.sendKeys(BookElements.fname,fname)
    }

    setlname(lname)
    {
        bHelper.sendKeys(BookElements.lname,lname)
    }

    setAddress(address)
    {
        bHelper.sendKeys(BookElements.address,address)
    }

    setCC(ccn)
    {
        bHelper.sendKeys(BookElements.ccNo,ccn)
    }

    setCCType(cct)
    {
        bHelper.select_value(BookElements.ccType,cct)
    }

    setExp_month(mon)
    {
        bHelper.select_value(BookElements.expiryDate.month,mon)
    }

    setExp_year(year)
    {
        bHelper.select_value(BookElements.expiryDate.year,year)
    }

    setCCNum(cvv)
    {
        bHelper.sendKeys(BookElements.Cvv,cvv)
    }

    btnBookNow()
    {
        bHelper.btnClick(BookElements.btnBook)
    }

    btnCancel()
    {
        bHelper.btnClick(BookElements.btnCancel)
    }

    verifyBooking(value)
    {
        bHelper.should_Text(BookElements.expected,value);
    }


}

export default BookingHotel;