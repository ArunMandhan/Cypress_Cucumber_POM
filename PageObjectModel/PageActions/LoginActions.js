import * as bHelper from "../BusinessHelper"
const LoginElements = require('../PageElements/LoginPageElements.json')

class Login
{

    //Methodes For Orange HRM Website Login
    setUserName(user)
    {
        bHelper.sendKeys(LoginElements.AdacitinLogin.username,user)
    }

    setPassword(pass)
    {
        bHelper.sendKeys(LoginElements.AdacitinLogin.password,pass)
    }

    clickLogin()
    {
        bHelper.btnClick(LoginElements.AdacitinLogin.btnLogin)
    }

    verifyLogin(expected)
    {
        bHelper.should_Text(LoginElements.AdacitinLogin.expected,expected)
    }

    ///End Methode for Orange HRM

    //Start methodes for Adactin Hotel

    AdUsername(user)
    {
        bHelper.sendKeys(LoginElements.AdacitinLogin.username,user)
    }
    AdPassword(pass)
    {
        bHelper.sendKeys(LoginElements.AdacitinLogin.password,pass)
    }
    AdLogin()
    {
        bHelper.btnClick(LoginElements.AdacitinLogin.btnLogin)
    }
    AdVerifyLogin(expected)
    {
        bHelper.should_Text(LoginElements.AdacitinLogin.expected,expected)
    }
}

export default Login;