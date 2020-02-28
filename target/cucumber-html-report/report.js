$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login to application",
  "description": "",
  "id": "login-to-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.before({
  "duration": 10358800300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Login to application",
  "description": "",
  "id": "login-to-application;login-to-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "navigate to application",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#When user click on sign in link"
    }
  ],
  "line": 8,
  "name": "enter email address as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "enter password as \"7ab3590096904d6cb47320edae64c823\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Login is successful",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginToAutomationPractices.navigate_to_application()"
});
formatter.result({
  "duration": 340246000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 24
    }
  ],
  "location": "LoginToAutomationPractices.enter_email_address_as(String)"
});
formatter.result({
  "duration": 118183600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7ab3590096904d6cb47320edae64c823",
      "offset": 19
    }
  ],
  "location": "LoginToAutomationPractices.enter_password_as(String)"
});
formatter.result({
  "duration": 140161700,
  "status": "passed"
});
formatter.match({
  "location": "LoginToAutomationPractices.click_on_sign_in_button()"
});
formatter.result({
  "duration": 16780738800,
  "error_message": "java.lang.NullPointerException\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy17.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:302)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:288)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:285)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\r\n\tat com.cucumber.framework.helper.Wait.WaitHelper.waitForElement(WaitHelper.java:54)\r\n\tat com.cucumber.framework.PageObject.HomePage.\u003cinit\u003e(HomePage.java:47)\r\n\tat com.cucumber.framework.PageObject.LoginPage.clickOnSubmitButton(LoginPage.java:68)\r\n\tat com.cucumber.framework.stepdefinition.login.LoginToAutomationPractices.click_on_sign_in_button(LoginToAutomationPractices.java:43)\r\n\tat ✽.And click on sign in button(login.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginToAutomationPractices.login_is_successful()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 455300,
  "status": "passed"
});
});