const { Builder, By, Key, until } = require("selenium-webdriver");
const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");

async function testcases() {
  let driver = await new Builder().forBrowser("chrome").build();

  // .setChromeOptions(new chrome.Options().headless())
  try {
    await driver.get("http://localhost:3000/");
    // await driver
    //   .findElement(By.id, "uemail")
    //   .sendKeys("ShoaibQ@gmail.com", Key.RETURN);
    // await driver.findElement(By.id, "usname").sendKeys("ShoaibQ", Key.RETURN);
    // await driver.findElement(By.id, "pass1").sendKeys("abcd12", Key.RETURN);
    // await driver.findElement(By.id, "pass2").sendKeys("abcd12", Key.RETURN);

    await driver
      .findElement(By.id("uemail"))
      .sendKeys("eed@gmail.com", Key.RETURN);

    await driver.findElement(By.id("usname")).sendKeys("eead", Key.RETURN);

    await driver.findElement(By.id("pass1")).sendKeys("123456", Key.RETURN);
    await driver.findElement(By.id("pass2")).sendKeys("123456", Key.RETURN);

    await driver.findElement(By.id("regbutt")).click();

    // if ((await driver.getCurrentUrl()) == "http://localhost:3000/login") {
    //   console.log("Test Case 1 Passed-  User Registration is Completed");
    // } else {
    //   console.log("Test Case 1 Failed-  User Registration Aborted");
    // }
    await driver.sleep(4 * 1000);
    if ((await driver.getTitle()) == "Login") {
      console.log("Test Case2 Passed-  User Registration is Completed");
    } else {
      console.log("Test Case 2 Failed-  User Registration Aborted");
    }
  } catch (e) {
    console.log(e);
  } finally {
    await driver.quit();
  }
}

async function testcase2() {
  let driver = await new Builder().forBrowser("chrome").build();

  // .setChromeOptions(new chrome.Options().headless())
  try {
    await driver.get("http://localhost:3000/login");
    // await driver
    //   .findElement(By.id, "uemail")
    //   .sendKeys("ShoaibQ@gmail.com", Key.RETURN);
    // await driver.findElement(By.id, "usname").sendKeys("ShoaibQ", Key.RETURN);
    // await driver.findElement(By.id, "pass1").sendKeys("abcd12", Key.RETURN);
    // await driver.findElement(By.id, "pass2").sendKeys("abcd12", Key.RETURN);

    await driver
      .findElement(By.id("uemail"))
      .sendKeys("eed@gmail.com", Key.RETURN);

    await driver.findElement(By.id("pass")).sendKeys("123456", Key.RETURN);

    await driver.findElement(By.id("lgbut")).click();

    await driver.sleep(2 * 1000);

    var element = await driver
      .findElement(driver.findElement(By.id("check")))
      .getText();

    await driver.sleep(4 * 1000);
    if (element == "This Email Is not regestered!") {
      console.log("Test Case3 Passed-  User Registration is Completed");
    } else {
      console.log("Test Case 3 Failed-  User Registration Aborted");
    }
  } catch (e) {
    console.log(e);
  } finally {
    await driver.quit();
  }
}

async function testcase3() {
  let driver = await new Builder().forBrowser("chrome").build();

  // .setChromeOptions(new chrome.Options().headless())
  try {
    await driver.get("http://localhost:3000/login");
    // await driver
    //   .findElement(By.id, "uemail")
    //   .sendKeys("ShoaibQ@gmail.com", Key.RETURN);
    // await driver.findElement(By.id, "usname").sendKeys("ShoaibQ", Key.RETURN);
    // await driver.findElement(By.id, "pass1").sendKeys("abcd12", Key.RETURN);
    // await driver.findElement(By.id, "pass2").sendKeys("abcd12", Key.RETURN);

    await driver
      .findElement(By.className("email"))
      .sendKeys("ShoaibQ@gmail.com", Key.RETURN);

    // await driver.findElement(By.id("pass")).sendKeys("123456", Key.RETURN);
    //email

    await driver
      .findElement(By.className("password"))
      .sendKeys("123456", Key.RETURN);

    //password

    await driver.findElement(By.id("lgbut")).click();

    await driver.sleep(4 * 1000);

    var element1 = await driver
      .findElement(driver.findElement(By.id("remail")))
      .getText();

    await driver.sleep(4 * 1000);
    if (element1 == "ShoaibQ@gmail.com") {
      console.log("Test Case3 Passed-  User Registration is Completed");
    } else {
      console.log("Test Case 3 Failed-  User Registration Aborted");
    }
  } catch (e) {
    console.log(e);
  } finally {
    await driver.quit();
  }
}

testcase3();
