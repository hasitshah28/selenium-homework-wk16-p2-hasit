
@regression
Feature: Login Test
  As user,
  I want to login successfully

  Background: I should login
    Given  I am on home page
    And    I enter username
    And    I enter Password
    When    I click on login button

  @smoke
  Scenario: I should navigate login page successfully
    Then    I should navigate login page successfully

  @sanity
  Scenario: Verify that the logo Display On homepage
    Then   I should verify logo is display

  @smoke @sanity
  Scenario: I should logout successfully
    Then    I should click on user profile logo
    And     I should hovering on 'logout' and click button
    Then    I should logout successfully
