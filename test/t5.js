const { Builder, By, Key, until } = require("selenium-webdriver");
const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");

//FA19-BCS-076
//Testcase for a  Logut
async function testcase5() {
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

    //logoutbutton
    //FA19-BCS-076
    if ((await driver.getTitle()) == "Welcome") {
      await driver.findElement(By.id("logoutbutton")).click();
      await driver.sleep(4 * 1000);

      if ((await driver.getTitle()) == "Registration") {
        console.log("Test Case 5 Passed-  User Logout is Working");
      } else {
        console.log("Test Case 5 Failed-  User Logout is not Working");
      }
    } else {
      console.log("Test Case 5 - Error Occured while executing");
    }
  } catch (e) {
    console.log(e);
  } finally {
    await driver.quit();
  }
}

testcase5();
