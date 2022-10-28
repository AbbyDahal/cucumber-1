package stepsDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Reporter;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class StepsDefinition {
	WebDriver driver;
	@Given("^user is in login page$")
	public void user_is_in_login_page() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\browserdrivers\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.saucedemo.com/");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}

	@When("^user insert username$")
	public void user_insert_valid_standard_user() throws Throwable {
	   WebElement enterUserNameTxtFld = driver.findElement(By.id("user-name"));
	   enterUserNameTxtFld.sendKeys("standard_user");
	}
	
	@When("^user insert username \"([^\"]*)\"$")
	public void user_insert_username(String username) throws Throwable {
		WebElement enterUserNameTxtFld = driver.findElement(By.id("user-name"));
		   enterUserNameTxtFld.sendKeys(username);
	}

	@When("^user insert valid password\"([^\"]*)\"$")
	public void user_insert_valid_password(String password) throws Throwable {
		 WebElement enterPasswordTxtFld = driver.findElement(By.id("password"));
		  enterPasswordTxtFld.sendKeys(password);
	}

	@When("^user click on the login button$")
	public void user_click_on_the_login_button() throws Throwable {
		 WebElement clickLoginBtn = driver.findElement(By.id("login-button"));
		 clickLoginBtn.click();  
	}

	@Then("^user is in the product page$")
	public void user_is_in_the_product_page() throws Throwable {
		String expected = "https://www.saucedemo.com/inventory.html";
		String actual = driver.getCurrentUrl();
	   Assert.assertEquals(expected, actual);
	}

    @After
    public void closeTheBrowser() {
    	driver.close();
    }
}
