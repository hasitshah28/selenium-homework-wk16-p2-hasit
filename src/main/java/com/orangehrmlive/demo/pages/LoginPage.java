package com.orangehrmlive.demo.pages;


import com.orangehrmlive.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());
    public LoginPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@placeholder='Username']")
    WebElement userNameField;

    @CacheLookup
    @FindBy(xpath = "//input[@placeholder='Password']")
    WebElement passwordField;

    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Login']")
    WebElement loginButton;

    @CacheLookup
    @FindBy(xpath ="//div[@class='orangehrm-login-logo']//img[@alt='orangehrm-logo']" )
    WebElement logoHRForALL;

    @CacheLookup
    @FindBy(xpath ="//h5[normalize-space()='Login']" )
    WebElement loginPanelDisplayed;

    public void enterUserName(String username)
    {
        sendTextToElement(userNameField, username);
        log.info("Enter User Name : " +userNameField.toString());
    }

    public void enterPassword(String password)
    {
        sendTextToElement(passwordField, password);
        log.info("Enter password : "+passwordField.toString());
    }

    public void clickLoginButton()
    {
        clickOnElement(loginButton);
        log.info("Click on login Button");
    }

    public String getLogoHRForALL()
    {
        log.info("Verify Logo");
        return getTextFromElement(logoHRForALL);
    }

    public String loginPanelDisplayed()
    {
        log.info("Verify Login panel display ");
        return getTextFromElement(loginPanelDisplayed);
    }

    By verifyLogo = By.xpath("//img[@alt='client brand banner']");
    public void verifyLogoDisplay()
    {
        verifyText(driver, verifyLogo,"/web/images/orangehrm-logo.png?v=1683010990518");
    }

}
