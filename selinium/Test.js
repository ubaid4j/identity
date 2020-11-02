const {Builder, By, until} = require('selenium-webdriver');

async function example() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/identity");
    await driver.findElement(By.xpath("//*[@id=\"root\"]/div/main/div/div/main/div/div/div/div/div/a/button/span[1]")).click();

    //email address
    const email = 'test4@test.com'

    //sign up
    await driver.findElement(By.xpath("//*[@id=\"root\"]/div/main/main/div[1]/form/div[3]/div/a/button")).click();
    await driver.sleep(250)
    await driver.findElement(By.xpath("//*[@id=\"firstName\"]")).sendKeys('Ubaid1');
    await driver.sleep(250)
    await driver.findElement(By.xpath("//*[@id=\"lastName\"]")).sendKeys('rehman1');
    await driver.sleep(250)
    await driver.findElement(By.xpath("//*[@id=\"email\"]")).sendKeys(email);
    await driver.sleep(250)
    await driver.findElement(By.xpath("//*[@id=\"password\"]")).sendKeys('Password@1');
    await driver.sleep(250)
    await driver.findElement(By.xpath("//*[@id=\"root\"]/div/main/main/div[1]/form/button")).click();
    await driver.sleep(250)


    await driver.wait(until.elementLocated(By.xpath("//*[@id=\"root\"]/div/main/main/div/div[2]/div/a")), 50000);
    await driver.sleep(250)
    await driver.findElement(By.xpath("//*[@id=\"root\"]/div/main/main/div/div[2]/div/a")).click();
    await driver.sleep(250)

    await driver.findElement(By.xpath("//*[@id=\"firstName\"]")).sendKeys("Ubaid");
    await driver.sleep(250)

    await driver.findElement(By.xpath("//*[@id=\"middleName\"]")).sendKeys("ur");
    await driver.sleep(250)

    await driver.findElement(By.xpath("//*[@id=\"lastName\"]")).sendKeys("Rehman");
    await driver.sleep(250)

    await driver.findElement(By.xpath("//*[@id=\"age\"]")).sendKeys("23");
    await driver.sleep(250)

    await driver.findElement(By.xpath("//*[@id=\"mobileNumber\"]")).sendKeys("+92-307-5034375");
    await driver.sleep(250)

    await driver.findElement(By.xpath("//*[@id=\"root\"]/div/main/div/div[2]/div[1]/div[2]/button[2]")).click();
    await driver.sleep(250)

    await driver.findElement(By.xpath("//*[@id=\"metricMarks\"]")).sendKeys("75%");
    await driver.sleep(250)

    await driver.findElement(By.xpath("//*[@id=\"intermediateMarks\"]")).sendKeys("75%");
    await driver.sleep(250)

    await driver.findElement(By.xpath("//*[@id=\"bachelorCGPA\"]/option[2]")).click();
    await driver.sleep(250)

    await driver.findElement(By.xpath("//*[@id=\"root\"]/div/main/div/div[2]/div[1]/div[2]/button[2]")).click();
    await driver.sleep(250)

    await driver.findElement(By.xpath("//*[@id=\"status\"]")).click();
    await driver.sleep(250)

    await driver.findElement(By.xpath("//*[@id=\"companyName\"]")).sendKeys("TechnoSoft")
    await driver.sleep(250)

    await driver.findElement(By.xpath("//*[@id=\"designationName\"]")).sendKeys("Engineer")
    await driver.sleep(250)

    await driver.findElement(By.xpath("//*[@id=\"root\"]/div/main/div/div[2]/div[1]/div[2]/button[2]")).click();
    await driver.sleep(250)

    await driver.findElement(By.xpath("//*[@id=\"isVehicle\"]")).click();
    await driver.sleep(250)

    await driver.findElement(By.xpath("//*[@id=\"type\"]/option[2]")).click();
    await driver.sleep(250)

    await driver.findElement(By.xpath("//*[@id=\"plateNumber\"]")).sendKeys("AKK-2915");
    await driver.sleep(250)

    await driver.findElement(By.xpath("//*[@id=\"root\"]/div/main/div/div[2]/div[1]/div[2]/button[2]")).click();
    await driver.sleep(250)


    await driver.findElement(By.xpath("//*[@id=\"isHouse\"]")).click();
    await driver.sleep(250)

    await driver.findElement(By.xpath("//*[@id=\"houseNumber\"]")).sendKeys("JND-233232")
    await driver.sleep(250)

    await driver.findElement(By.xpath("//*[@id=\"root\"]/div/main/div/div[2]/div[1]/div[2]/button[2]")).click();
    await driver.sleep(250)

    await driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div[3]/button[2]")).click();
    await driver.sleep(250)

    await driver.wait(until.elementLocated(By.xpath("//*[@id=\"root\"]/div/main/div/div[2]/a[1]/button")), 50000);
    await driver.sleep(250)

    await driver.findElement(By.xpath("//*[@id=\"root\"]/div/main/div/div[2]/a[1]/button")).click();
    await driver.sleep(250)
}

example().then(() => console.log("App is running"));
