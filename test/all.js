const { Builder, By, Key, until } = require("selenium-webdriver");
const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");
ChromeOptions options = new ChromeOptions();
options.setExperimentalOption("prefs", chromePrefs);
options.addArguments("--no-sandbox");
options.addArguments("--headless"); //!!!should be enabled for Jenkins
options.addArguments("--disable-dev-shm-usage"); //!!!should be enabled for Jenkins
options.addArguments("--window-size=1920x1080"); //!!!should be enabled for Jenkins
driver = new ChromeDriver(options);

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
    testcase2();
  }
}

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
    testcase3();
  }
}

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
    testcase4();
  }
}

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
    testcase5();
  }
}

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

testcase1();
