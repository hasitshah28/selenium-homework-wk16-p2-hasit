package com.orangehrmlive.demo.steps;


import com.orangehrmlive.demo.pages.DashboardPage;
import com.orangehrmlive.demo.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class LoginSteps {
    @Given("^I am on home page$")
    public void iAmOnHomePage()
    {

    }


    @And("^I enter username$")
    public void iEnterUsername() {
        new LoginPage().enterUserName("Admin");
    }

    @And("^I enter Password$")
    public void iEnterPassword()
    {
        new LoginPage().enterPassword("admin123");
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton()
    {
        new LoginPage().clickLoginButton();
    }

    @Then("^I should navigate login page successfully$")
    public void iShouldNavigateLoginPageSuccessfully()
    {
        new DashboardPage().getDashboardText();
    }

    @Then("^I should verify logo is display$")
    public void iShouldVerifyLogoIsDisplay()
    {
        new LoginPage().verifyLogoDisplay();
    }


    @Then("^I should click on user profile logo$")
    public void iShouldClickOnUserProfileLogo()
    {
        new DashboardPage().clickOnUserProfileLogo();
    }

    @And("^I should hovering on 'logout' and click button$")
    public void iShouldHoveringOnLogoutAndClickButton()
    {
        new DashboardPage().mouseHooverOnLogoutAndClick();
    }

    @Then("^I should logout successfully$")
    public void iShouldLogoutSuccessfully()
    {
        new DashboardPage().verifyLoginPanel();

    }
}
