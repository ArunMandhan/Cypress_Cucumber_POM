import * as bHelper from "../BusinessHelper"
const SelectElements = require('../PageElements/SelectHotelElements.json')

class selectHotel
{
    select_hotel()
    {
        bHelper.checkBtn(SelectElements.btnRadio)
    }

    Click_continue()
    {
        bHelper.btnClick(SelectElements.btnCon)
    }

    click_cancel()
    {
        bHelper.btnClick(SelectElements.btnCancel)
    }

    verifySearchHotel(value)
    {
        bHelper.contain(SelectElements.expected,value)
    }

}

export default selectHotel;