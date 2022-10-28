Feature: testing login feature
@LoginValidation
Scenario Outline: Positive and negative testing 

Given user is in login page
When user insert username "<username>"
When user insert valid password"<password>"
And user click on the login button
Then user is in the product page

Examples:
|username|password|
|standard_user|secret_sauce|
|problem_user|secret_sauce|
|locked_out_user|secret_sauce|
|performance_glitch_user|secret_sauce|

