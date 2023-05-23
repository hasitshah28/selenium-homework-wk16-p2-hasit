
Feature: Users Test
  As a user I should verify employee successfully

  Background: I should login
    Given  I am on home page
    And    I enter username
    And    I enter Password
    And    I click on login button



  @sanity @regression
  Scenario: I should add user successfully
    When  I click on Admin Tab
    And   I verify System Users text
    And   I click on add button
    And   I verify Add User text
    Then  I select User Role Admin
    And   I enter employee name "Goutam Ganesh"
    And   I enter user name "Prime"
    And   I select status Disable
    And   I enter password "Prime123"
    And   I enter confirm password "Prime123"
    Then  I click on save button

  @smoke @regression
  Scenario: I should see the user in the result list
    When    I click on Admin Tab
    And     I verify System Users text
    And     I enter System Users Username "Hasit Shah"
    And     I select User Role
    And     I select Disable status
    And     I click on Search button
    Then    I verify the user is in the result list

  @regression
  Scenario: I should able to delete the user successfully
    When    I click on Admin Tab
    And     I verify System Users text
    And     I enter System Users Username "Hasit Shah"
    And     I select User Role
    And     I enter employee name "Tom Patel"
    And     I select Disable status
    And     I click on Search button
    And     I verify the user is in the result list
    Then    I click on checkbox
    Then    I click on Delete button
    And     I click on popup button
    Then    I should be able to verify user Successfully Deleted

  @regression
  Scenario: I should be able to search deleted user and verify No Records Found Text
    When    I click on Admin Tab
    And     I verify System Users text
    And     I enter System Users Username "Hasit Shah"
    And     I select User Role
    And     I enter employee name "Goutam Ganesh"
    And     I select Disable status
    And     I click on Search button
    Then    I verify No Records Found Text
