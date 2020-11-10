const {Builder, By, until} = require('selenium-webdriver');

async function example() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/identity");

    //click on sign-in in introduction page
    await driver.findElement(By.xpath("//*[@id=\"toLogin\"]")).click();
    await driver.sleep(250)

    //email address
    const email = 'test502@test.com'

    //click on sign up
    await driver.findElement(By.xpath("//*[@id=\"toSignUp\"]")).click();
    await driver.sleep(250)

    //fill the user information
    await driver.findElement(By.xpath("//*[@id=\"firstName\"]")).sendKeys('Ubaid1');
    await driver.sleep(250)
    await driver.findElement(By.xpath("//*[@id=\"lastName\"]")).sendKeys('rehman1');
    await driver.sleep(250)
    await driver.findElement(By.xpath("//*[@id=\"email\"]")).sendKeys(email);
    await driver.sleep(250)
    await driver.findElement(By.xpath("//*[@id=\"password\"]")).sendKeys('Password@1');
    await driver.sleep(250)
    await driver.findElement(By.xpath("//*[@id=\"signUp\"]")).click();
    await driver.sleep(250)

    //click on fill identity form
    await driver.wait(until.elementLocated(By.xpath("//*[@id=\"fillIdentityForm\"]")), 50000);
    await driver.sleep(250)
    await driver.findElement(By.xpath("//*[@id=\"fillIdentityForm\"]")).click();
    await driver.sleep(250)

    // fill personal info
    await driver.findElement(By.xpath("//*[@id=\"firstName\"]")).sendKeys("Ubaid");
    await driver.sleep(250)
    await driver.findElement(By.xpath("//*[@id=\"middleName\"]")).sendKeys("ur");
    await driver.sleep(250)
    await driver.findElement(By.xpath("//*[@id=\"lastName\"]")).sendKeys("Rehman");
    await driver.sleep(250)
    await driver.findElement(By.xpath("//*[@id=\"age\"]")).sendKeys("23");
    await driver.sleep(250)
    await driver.findElement(By.xpath("//*[@id=\"mobileNumber\"]")).sendKeys("+92-311-1111111");
    await driver.sleep(250)
    await driver.findElement(By.xpath("//*[@id=\"nextFormButton\"]")).click();
    await driver.sleep(250)

    // fill educational info
    await driver.findElement(By.xpath("//*[@id=\"metricMarks\"]")).sendKeys("75%");
    await driver.sleep(250)
    await driver.findElement(By.xpath("//*[@id=\"intermediateMarks\"]")).sendKeys("75%");
    await driver.sleep(250)
    await driver.findElement(By.xpath("//*[@id=\"bachelorCGPA\"]/option[2]")).click();
    await driver.sleep(250)
    await driver.findElement(By.xpath("//*[@id=\"nextFormButton\"]")).click();
    await driver.sleep(250)

    // fill professional info
    await driver.findElement(By.xpath("//*[@id=\"status\"]")).click();
    await driver.sleep(250)
    await driver.findElement(By.xpath("//*[@id=\"companyName\"]")).sendKeys("TechnoSoft")
    await driver.sleep(250)
    await driver.findElement(By.xpath("//*[@id=\"designationName\"]")).sendKeys("Engineer")
    await driver.sleep(250)
    await driver.findElement(By.xpath("//*[@id=\"nextFormButton\"]")).click();
    await driver.sleep(250)

    // fill vehicle information
    await driver.findElement(By.xpath("//*[@id=\"isVehicle\"]")).click();
    await driver.sleep(250)
    await driver.findElement(By.xpath("//*[@id=\"type\"]/option[2]")).click();
    await driver.sleep(250)
    await driver.findElement(By.xpath("//*[@id=\"plateNumber\"]")).sendKeys("AKK-2915");
    await driver.sleep(250)
    await driver.findElement(By.xpath("//*[@id=\"nextFormButton\"]")).click();
    await driver.sleep(250)

    //fill residential information
    await driver.findElement(By.xpath("//*[@id=\"isHouse\"]")).click();
    await driver.sleep(250)
    await driver.findElement(By.xpath("//*[@id=\"houseNumber\"]")).sendKeys("JND-233232")
    await driver.sleep(250)

    //click on preview button
    await driver.findElement(By.xpath("//*[@id=\"previewButton\"]")).click();
    await driver.sleep(250)

}

async function submit(driver)  {
    await driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div[3]/button[2]")).click();
    await driver.sleep(250)
    await driver.wait(until.elementLocated(By.xpath("//*[@id=\"root\"]/div/main/div/div[2]/a[1]/button")), 50000);
    await driver.sleep(250)
    await driver.findElement(By.xpath("//*[@id=\"root\"]/div/main/div/div[2]/a[1]/button")).click();
    await driver.sleep(250)
}

example().then(() => console.log("App is running"));
