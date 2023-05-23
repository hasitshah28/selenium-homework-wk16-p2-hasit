$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 3,
  "name": "Login Test",
  "description": "As user,\r\nI want to login successfully",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 9523144000,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "I should login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter username",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter Password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 175683200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterUsername()"
});
formatter.result({
  "duration": 620714499,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterPassword()"
});
formatter.result({
  "duration": 200940299,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 130540600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "I should navigate login page successfully",
  "description": "",
  "id": "login-test;i-should-navigate-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I should navigate login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iShouldNavigateLoginPageSuccessfully()"
});
formatter.result({
  "duration": 1510279600,
  "status": "passed"
});
formatter.after({
  "duration": 1101785300,
  "status": "passed"
});
formatter.before({
  "duration": 6254097000,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "I should login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter username",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter Password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 32299,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterUsername()"
});
formatter.result({
  "duration": 484347800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterPassword()"
});
formatter.result({
  "duration": 147588900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 156292799,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify that the logo Display On homepage",
  "description": "",
  "id": "login-test;verify-that-the-logo-display-on-homepage",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I should verify logo is display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iShouldVerifyLogoIsDisplay()"
});
formatter.result({
  "duration": 1809255400,
  "status": "passed"
});
formatter.after({
  "duration": 977460000,
  "status": "passed"
});
formatter.before({
  "duration": 5548755300,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "I should login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter username",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter Password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 20000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterUsername()"
});
formatter.result({
  "duration": 425796600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterPassword()"
});
formatter.result({
  "duration": 226951700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 134304000,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "I should logout successfully",
  "description": "",
  "id": "login-test;i-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@smoke"
    },
    {
      "line": 21,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I should click on user profile logo",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I should hovering on \u0027logout\u0027 and click button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should logout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iShouldClickOnUserProfileLogo()"
});
formatter.result({
  "duration": 2698325300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldHoveringOnLogoutAndClickButton()"
});
formatter.result({
  "duration": 830333500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldLogoutSuccessfully()"
});
formatter.result({
  "duration": 286179600,
  "status": "passed"
});
formatter.after({
  "duration": 852575200,
  "status": "passed"
});
formatter.uri("user.feature");
formatter.feature({
  "line": 2,
  "name": "Users Test",
  "description": "As a user I should verify employee successfully",
  "id": "users-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6170632600,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I should login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter Password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 36101,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterUsername()"
});
formatter.result({
  "duration": 467170100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterPassword()"
});
formatter.result({
  "duration": 161294000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 129011501,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "I should add user successfully",
  "description": "",
  "id": "users-test;i-should-add-user-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@sanity"
    },
    {
      "line": 13,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I click on Admin Tab",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I verify System Users text",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on add button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify Add User text",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select User Role Admin",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I enter employee name \"Goutam Ganesh\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter user name \"Kavya\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select status Disable",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter password \"Prime12345*\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter confirm password \"Prime12345*\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on save button",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 2531773500,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iVerifySystemUsersText()"
});
formatter.result({
  "duration": 347579100,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iClickOnAddButton()"
});
formatter.result({
  "duration": 365444400,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iVerifyAddUserText()"
});
formatter.result({
  "duration": 241701200,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iSelectUserRoleAdmin()"
});
formatter.result({
  "duration": 2221247201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Goutam Ganesh",
      "offset": 23
    }
  ],
  "location": "UserSteps.iEnterEmployeeName(String)"
});
formatter.result({
  "duration": 41220079700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@class\u003d\u0027oxd-autocomplete-wrapper\u0027]//*[contains(text(),\u0027Goutam  Ganesh\u0027)]\"}\n  (Session info: chrome\u003d113.0.5672.127)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [da60c6ad3bfbba39180a5fb33121573e, findElement {using\u003dxpath, value\u003d//*[@class\u003d\u0027oxd-autocomplete-wrapper\u0027]//*[contains(text(),\u0027Goutam  Ganesh\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.127, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\Bhavya\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:51307}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:51307/devtoo..., se:cdpVersion: 113.0.5672.127, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: da60c6ad3bfbba39180a5fb33121573e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat com.orangehrmlive.demo.utility.Utility.clickOnElement(Utility.java:53)\r\n\tat com.orangehrmlive.demo.pages.ViewSystemUserPage.enterEmp(ViewSystemUserPage.java:89)\r\n\tat com.orangehrmlive.demo.steps.UserSteps.iEnterEmployeeName(UserSteps.java:37)\r\n\tat ✽.And I enter employee name \"Goutam Ganesh\"(user.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kavya",
      "offset": 19
    }
  ],
  "location": "UserSteps.iEnterUserName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserSteps.iSelectStatusDisable()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime12345*",
      "offset": 18
    }
  ],
  "location": "UserSteps.iEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime12345*",
      "offset": 26
    }
  ],
  "location": "UserSteps.iEnterConfirmPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserSteps.iClickOnSaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1364161900,
  "status": "passed"
});
formatter.before({
  "duration": 6928173600,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I should login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter Password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 39200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterUsername()"
});
formatter.result({
  "duration": 687931801,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterPassword()"
});
formatter.result({
  "duration": 149440599,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 128549800,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "I should see the user in the result list",
  "description": "",
  "id": "users-test;i-should-see-the-user-in-the-result-list",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@smoke"
    },
    {
      "line": 27,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I click on Admin Tab",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I verify System Users text",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter System Users Username \"Axi Patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select User Role",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select Disable status",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I verify the user is in the result list",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 2487644200,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iVerifySystemUsersText()"
});
formatter.result({
  "duration": 379798100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Axi Patel",
      "offset": 31
    }
  ],
  "location": "UserSteps.iEnterSystemUsersUsername(String)"
});
formatter.result({
  "duration": 71800,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iSelectUserRole()"
});
formatter.result({
  "duration": 1197036699,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iSelectDisableStatus()"
});
formatter.result({
  "duration": 1186341899,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 69066500,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iVerifyTheUserIsInTheResultList()"
});
formatter.result({
  "duration": 1365007300,
  "status": "passed"
});
formatter.after({
  "duration": 961274700,
  "status": "passed"
});
formatter.before({
  "duration": 7158387800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I should login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter Password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 20400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterUsername()"
});
formatter.result({
  "duration": 429573500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterPassword()"
});
formatter.result({
  "duration": 345021100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 106417300,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "I should able to delete the user successfully",
  "description": "",
  "id": "users-test;i-should-able-to-delete-the-user-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "I click on Admin Tab",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I verify System Users text",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter System Users Username \"Axi Patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I select User Role",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter employee name \"Goutam Ganesh\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I select Disable status",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I verify the user is in the result list",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click on checkbox",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I click on Delete button",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "I click on popup button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I should be able to verify user Successfully Deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 2321440500,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iVerifySystemUsersText()"
});
formatter.result({
  "duration": 386819000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Axi Patel",
      "offset": 31
    }
  ],
  "location": "UserSteps.iEnterSystemUsersUsername(String)"
});
formatter.result({
  "duration": 153200,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iSelectUserRole()"
});
formatter.result({
  "duration": 1230859300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Goutam Ganesh",
      "offset": 23
    }
  ],
  "location": "UserSteps.iEnterEmployeeName(String)"
});
formatter.result({
  "duration": 41215435299,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@class\u003d\u0027oxd-autocomplete-wrapper\u0027]//*[contains(text(),\u0027Goutam  Ganesh\u0027)]\"}\n  (Session info: chrome\u003d113.0.5672.127)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [1769bb09919c824d412f0451d6b0caa7, findElement {using\u003dxpath, value\u003d//*[@class\u003d\u0027oxd-autocomplete-wrapper\u0027]//*[contains(text(),\u0027Goutam  Ganesh\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.127, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\Bhavya\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:51363}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:51363/devtoo..., se:cdpVersion: 113.0.5672.127, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 1769bb09919c824d412f0451d6b0caa7\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat com.orangehrmlive.demo.utility.Utility.clickOnElement(Utility.java:53)\r\n\tat com.orangehrmlive.demo.pages.ViewSystemUserPage.enterEmp(ViewSystemUserPage.java:89)\r\n\tat com.orangehrmlive.demo.steps.UserSteps.iEnterEmployeeName(UserSteps.java:37)\r\n\tat ✽.And I enter employee name \"Goutam Ganesh\"(user.feature:43)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UserSteps.iSelectDisableStatus()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserSteps.iClickOnSearchButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserSteps.iVerifyTheUserIsInTheResultList()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserSteps.iClickOnCheckbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserSteps.iClickOnDeleteButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserSteps.iClickOnPopupButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserSteps.iShouldBeAbleToVerifyUserSuccessfullyDeleted()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1260610800,
  "status": "passed"
});
formatter.before({
  "duration": 6218144201,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I should login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter Password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 29900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterUsername()"
});
formatter.result({
  "duration": 800164800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterPassword()"
});
formatter.result({
  "duration": 234228600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1093632501,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "I should be able to search deleted user and verify No Records Found Text",
  "description": "",
  "id": "users-test;i-should-be-able-to-search-deleted-user-and-verify-no-records-found-text",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 52,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "I click on Admin Tab",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "I verify System Users text",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I enter System Users Username \"Axi Patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I select User Role",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I enter employee name \"Goutam Ganesh\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I select Disable status",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I click on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I verify No Records Found Text",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 1817004199,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iVerifySystemUsersText()"
});
formatter.result({
  "duration": 394990500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Axi Patel",
      "offset": 31
    }
  ],
  "location": "UserSteps.iEnterSystemUsersUsername(String)"
});
formatter.result({
  "duration": 46800,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iSelectUserRole()"
});
formatter.result({
  "duration": 1223427201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Goutam Ganesh",
      "offset": 23
    }
  ],
  "location": "UserSteps.iEnterEmployeeName(String)"
});
formatter.result({
  "duration": 41162542200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@class\u003d\u0027oxd-autocomplete-wrapper\u0027]//*[contains(text(),\u0027Goutam  Ganesh\u0027)]\"}\n  (Session info: chrome\u003d113.0.5672.127)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9d963ebb975282a89fd78cad52620a61, findElement {using\u003dxpath, value\u003d//*[@class\u003d\u0027oxd-autocomplete-wrapper\u0027]//*[contains(text(),\u0027Goutam  Ganesh\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.127, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\Bhavya\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:51394}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:51394/devtoo..., se:cdpVersion: 113.0.5672.127, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 9d963ebb975282a89fd78cad52620a61\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat com.orangehrmlive.demo.utility.Utility.clickOnElement(Utility.java:53)\r\n\tat com.orangehrmlive.demo.pages.ViewSystemUserPage.enterEmp(ViewSystemUserPage.java:89)\r\n\tat com.orangehrmlive.demo.steps.UserSteps.iEnterEmployeeName(UserSteps.java:37)\r\n\tat ✽.And I enter employee name \"Goutam Ganesh\"(user.feature:58)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UserSteps.iSelectDisableStatus()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserSteps.iClickOnSearchButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserSteps.iVerifyNoRecordsFoundText()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1133178800,
  "status": "passed"
});
});