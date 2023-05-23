package com.orangehrmlive.demo.pages;


import com.orangehrmlive.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

public class DashboardPage extends Utility {
    private static final Logger log = LogManager.getLogger(DashboardPage.class.getName());

    public DashboardPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath ="//a[@class='oxd-main-menu-item active']" )
    WebElement dashboardText;

    @CacheLookup
    @FindBy(xpath = "//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']")
    WebElement userProfileLogo;

    @CacheLookup
    @FindBy(linkText = "Logout")
    WebElement logout;


    public void getDashboardText()
    {
        String expectedMessage = "Dashboard";
        String actualMessage = getTextFromElement(dashboardText);
        Assert.assertEquals(actualMessage, expectedMessage);
        log.info("Verify Dashboard text : " + dashboardText.toString());
    }

    public void clickOnUserProfileLogo()
    {
        clickOnElement(userProfileLogo);
        log.info("Click on User Profile logo");
    }

    public void mouseHooverOnLogoutAndClick()
    {
        mouseHoverToElementAndClick(logout);
        log.info("Mouse hoover on Logout");
    }

    By verifyLoginPanel = By.xpath("//h5[normalize-space()='Login']");
    public void verifyLoginPanel()
    {
        verifyText(driver, verifyLoginPanel,"Login Panel");
    }
    }

