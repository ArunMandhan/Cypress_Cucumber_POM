import * as bHelper from "../BusinessHelper"
const SearchElements = require('../PageElements/SearchHotelElements.json')

class SearchHotel
{
    setLocation(location)
    {
        bHelper.select_value(SearchElements.Location,location)
    }

    setHotels(hotelName)
    {
        bHelper.select_value(SearchElements.Hotels,hotelName)
    }

    hotelType(room)
    {
        bHelper.select_value(SearchElements.RoomType,room)
    }

    noRooms(count)
    {
        bHelper.select_value(SearchElements.RoomCount,count)
    }

    checkinDate(indate)
    {
        bHelper.sendKeys(SearchElements.RoomCount,indate)
    }

    checkoutDate(outdate)
    {
        bHelper.sendKeys(SearchElements.RoomCount,outdate)
    }

    AdultRooms(ad)
    {
        bHelper.select_value(SearchElements.AdRooms,ad)
    }

    childrenRooms(cd)
    {
        bHelper.select_value(SearchElements.CdRomms,cd)
    }

    clickBook()
    {
        bHelper.btnClick(SearchElements.btnSub)
    }

    clickReset()
    {
        bHelper.btnClick(SearchElements.btnReset)
    }

    verifySearch(value)
    {
        bHelper.should_value(SearchElements.expected,value)
    }

}

export default SearchHotel;