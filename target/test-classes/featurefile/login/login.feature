@tag
Feature: Login to application

@tag1
Scenario: Login to application
Given navigate to application
	#When user click on sign in link
  And enter email address as "admin"
	And enter password as "7ab3590096904d6cb47320edae64c823"
	And click on sign in button
	Then Login is successful
	


