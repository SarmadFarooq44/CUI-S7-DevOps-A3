const { Builder, By, Key, until } = require("selenium-webdriver");
const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");

//FA19-BCS-076
//Testcase for a Incomplete Signup
async function testcase2() {
  let driver = await new Builder().forBrowser("chrome").build();

  // .setChromeOptions(new chrome.Options().headless())
  try {
    await driver.get("http://localhost:3000/");

    await driver
      .findElement(By.id("uemail"))
      .sendKeys("shoaibqadeer@gmail.com", Key.RETURN);

    await driver.findElement(By.id("usname")).sendKeys("user1", Key.RETURN);
    await driver.findElement(By.id("regbutt")).click();

    await driver.sleep(5 * 1000);
    if ((await driver.getTitle()) == "Registration") {
      console.log("Test Case 2 Passed-  User Registration is Not Completed");
    } else {
      console.log("Test Case 2 Failed-  User Registration is completed");
    }
  } catch (e) {
    console.log(e);
  } finally {
    await driver.quit();
  }
}

testcase2();
