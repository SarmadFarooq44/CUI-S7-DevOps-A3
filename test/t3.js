const { Builder, By, Key, until } = require("selenium-webdriver");
const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");

//FA19-BCS-076
//Testcase for a  Valid Login
async function testcase3() {
  let driver = await new Builder().forBrowser("chrome").build();

  // .setChromeOptions(new chrome.Options().headless())
  try {
    await driver.get("http://localhost:3000/login");
    await driver
      .findElement(By.id("uemail"))
      .sendKeys("shoaibqadeer@gmail.com", Key.RETURN);

    await driver.findElement(By.id("upass")).sendKeys("123456", Key.RETURN);

    await driver.findElement(By.id("lgbut")).click();

    await driver.sleep(2 * 1000);

    // var element = await driver
    //   .findElement(driver.findElement(By.id("check")))
    //   .getText();

    await driver.sleep(4 * 1000);
    if ((await driver.getTitle()) == "Welcome") {
      console.log(
        "Test Case 3 Passed-  User Login with Valid Details is Completed"
      );
    } else {
      console.log(
        "Test Case 3 Failed-  User Login with Valid Details is Not Completed"
      );
    }
  } catch (e) {
    console.log(e);
  } finally {
    await driver.quit();
  }
}

testcase3();
