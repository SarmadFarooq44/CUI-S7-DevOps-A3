const { Builder, By, Key, until } = require("selenium-webdriver");
const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");

//FA19-BCS-076
//Testcase for a Valid Signup with email and other required details.
async function testcase1() {
  let driver = await new Builder().forBrowser("chrome").build();

  // .setChromeOptions(new chrome.Options().headless())
  try {
    await driver.get("http://localhost:3000/");

    await driver
      .findElement(By.id("uemail"))
      .sendKeys("shoaibqadeer@gmail.com", Key.RETURN);

    await driver.findElement(By.id("usname")).sendKeys("user1", Key.RETURN);

    await driver.findElement(By.id("pass1")).sendKeys("123456", Key.RETURN);
    await driver.findElement(By.id("pass2")).sendKeys("123456", Key.RETURN);

    await driver.findElement(By.id("regbutt")).click();

    await driver.sleep(5 * 1000);
    if ((await driver.getTitle()) == "Login") {
      console.log("Test Case1 Passed-  User Registration is Completed");
    } else {
      console.log("Test Case 1 Failed-  User Registration Aborted");
    }
  } catch (e) {
    console.log(e);
  } finally {
    await driver.quit();
  }
}

testcase1();
