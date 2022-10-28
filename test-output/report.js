$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "testing login feature",
  "description": "",
  "id": "testing-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Positive and negative testing",
  "description": "",
  "id": "testing-login-feature;positive-and-negative-testing",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@LoginValidation"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user insert username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user insert valid password\"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user is in the product page",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "testing-login-feature;positive-and-negative-testing;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "testing-login-feature;positive-and-negative-testing;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 13,
      "id": "testing-login-feature;positive-and-negative-testing;;2"
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce"
      ],
      "line": 14,
      "id": "testing-login-feature;positive-and-negative-testing;;3"
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce"
      ],
      "line": 15,
      "id": "testing-login-feature;positive-and-negative-testing;;4"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 16,
      "id": "testing-login-feature;positive-and-negative-testing;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Positive and negative testing",
  "description": "",
  "id": "testing-login-feature;positive-and-negative-testing;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@LoginValidation"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user insert username \"standard_user\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user insert valid password\"secret_sauce\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user is in the product page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinition.user_is_in_login_page()"
});
formatter.result({
  "duration": 1883395800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 22
    }
  ],
  "location": "StepsDefinition.user_insert_username(String)"
});
formatter.result({
  "duration": 66762100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 27
    }
  ],
  "location": "StepsDefinition.user_insert_valid_password(String)"
});
formatter.result({
  "duration": 56559300,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 90141300,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.user_is_in_the_product_page()"
});
formatter.result({
  "duration": 35476600,
  "status": "passed"
});
formatter.after({
  "duration": 319534400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Positive and negative testing",
  "description": "",
  "id": "testing-login-feature;positive-and-negative-testing;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@LoginValidation"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user insert username \"problem_user\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user insert valid password\"secret_sauce\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user is in the product page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinition.user_is_in_login_page()"
});
formatter.result({
  "duration": 1274955200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "problem_user",
      "offset": 22
    }
  ],
  "location": "StepsDefinition.user_insert_username(String)"
});
formatter.result({
  "duration": 69184900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 27
    }
  ],
  "location": "StepsDefinition.user_insert_valid_password(String)"
});
formatter.result({
  "duration": 53279300,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 83403400,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.user_is_in_the_product_page()"
});
formatter.result({
  "duration": 20079400,
  "status": "passed"
});
formatter.after({
  "duration": 42798600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Positive and negative testing",
  "description": "",
  "id": "testing-login-feature;positive-and-negative-testing;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@LoginValidation"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user insert username \"locked_out_user\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user insert valid password\"secret_sauce\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user is in the product page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinition.user_is_in_login_page()"
});
formatter.result({
  "duration": 1274074600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "locked_out_user",
      "offset": 22
    }
  ],
  "location": "StepsDefinition.user_insert_username(String)"
});
formatter.result({
  "duration": 66965700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 27
    }
  ],
  "location": "StepsDefinition.user_insert_valid_password(String)"
});
formatter.result({
  "duration": 54923100,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 43262400,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.user_is_in_the_product_page()"
});
formatter.result({
  "duration": 6669400,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c...//www.saucedemo.com/[inventory.html]\u003e but was:\u003c...//www.saucedemo.com/[]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepsDefinitions.StepsDefinition.user_is_in_the_product_page(StepsDefinition.java:56)\r\n\tat ✽.Then user is in the product page(login.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 47088600,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Positive and negative testing",
  "description": "",
  "id": "testing-login-feature;positive-and-negative-testing;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@LoginValidation"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user insert username \"performance_glitch_user\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user insert valid password\"secret_sauce\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user is in the product page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinition.user_is_in_login_page()"
});
formatter.result({
  "duration": 1293177500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "performance_glitch_user",
      "offset": 22
    }
  ],
  "location": "StepsDefinition.user_insert_username(String)"
});
formatter.result({
  "duration": 75319500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 27
    }
  ],
  "location": "StepsDefinition.user_insert_valid_password(String)"
});
formatter.result({
  "duration": 61954300,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 5086187300,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.user_is_in_the_product_page()"
});
formatter.result({
  "duration": 14951900,
  "status": "passed"
});
formatter.after({
  "duration": 41380300,
  "status": "passed"
});
});