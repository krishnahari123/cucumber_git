package com.cucumber.framework.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;

@RunWith(cucumber.api.junit.Cucumber.class)
@CucumberOptions(features = {
		"C:\\Users\\kharikrishna\\Downloads\\project\\cucumberSeleniumFramework-master\\cucumberSeleniumFramework-master\\src\\test\\resources\\featurefile\\login\\" }, glue = {
				"classpath:com.cucumber.framework.stepdefinition",
				"classpath:com.cucumber.framework.helper" }, plugin = { "html:target/cucumber-html-report" })

public class LoginFeatureRunner {

}
