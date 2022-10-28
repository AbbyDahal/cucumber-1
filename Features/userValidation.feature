Feature: testing login feature
@Smoke
Scenario: Positive testing standard_user

Given user is in login page
When user insert valid standard_user
When user insert valid password
And user click on the login button
Then user is in the product page
