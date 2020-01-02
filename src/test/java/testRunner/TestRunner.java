package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
	@CucumberOptions(
	 features = "src/test/java/features/Test.feature",
			 plugin = {  "pretty", "json:target/cucumber-reports/Cucumber.json",
					 "junit:target/cucumber-reports/Cucumber.xml",
					 "html:target/cucumber-reports"},
			 glue= {"stepDefinition"}
		)	 
public class TestRunner {	
	
}
