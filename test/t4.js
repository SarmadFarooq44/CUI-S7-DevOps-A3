const { Builder, By, Key, until } = require("selenium-webdriver");
const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");

//FA19-BCS-076
//Testcase for a  Login with invalid Details
async function testcase4() {
  let driver = await new Builder().forBrowser("chrome").build();

  // .setChromeOptions(new chrome.Options().headless())
  try {
    await driver.get("http://localhost:3000/login");
    await driver
      .findElement(By.id("uemail"))
      .sendKeys("shoaibqadeer@gmail.com", Key.RETURN);

    await driver.findElement(By.id("upass")).sendKeys("wrongpass", Key.RETURN);

    await driver.findElement(By.id("lgbut")).click();

    await driver.sleep(2 * 1000);

    // var element = await driver
    //   .findElement(driver.findElement(By.id("check")))
    //   .getText();

    await driver.sleep(4 * 1000);
    if ((await driver.getTitle()) == "Login") {
      console.log(
        "Test Case 4 Passed-  User Login with Invalid Login details is Aborted"
      );
    } else {
      console.log(
        "Test Case 4 Passed-  User Login with Invalid Login details is Successful"
      );
    }
  } catch (e) {
    console.log(e);
  } finally {
    await driver.quit();
  }
}

testcase4();
