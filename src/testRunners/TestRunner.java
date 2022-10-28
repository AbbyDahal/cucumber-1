package testRunners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(

		features = "Features", 
		glue = "stepsDefinitions", 
		plugin = { "pretty", "html:test-output" }, 
		tags = {"@LoginValidation" }

)

public class TestRunner {

}
