// tests/regression.test.js

const { Builder, By, until } = require('selenium-webdriver');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

describe('Regression Testing with Selenium', function () {
    let driver;

    beforeAll(async function () {
        driver = await new Builder().forBrowser('chrome').build();
        // Open the local HTML file (make sure to adjust the path if necessary)
        await driver.get(`file://${__dirname}/index.html`);
    });

    afterAll(async function () {
        await driver.quit();
    });

    it('should load the homepage and check title', async function () {
        const title = await driver.getTitle();
        console.log(`Title is: ${title}`);
        if (title !== 'Sample App') {
            throw new Error('Title does not match!');
        }
        await sleep(2000); // Pause for 2 seconds
    });

    it('should show an alert for invalid credentials', async function () {
        await driver.findElement(By.name('username')).clear();
        await driver.findElement(By.name('username')).sendKeys('wronguser');
        await driver.findElement(By.name('password')).clear();
        await driver.findElement(By.name('password')).sendKeys('wrongpass');

        // Click login button
        await driver.findElement(By.id('loginButton')).click();

        // Wait for alert and check its message
        const alert = await driver.wait(until.alertIsPresent(), 5000);
        const alertText = await alert.getText();

        console.log(`Alert text is: ${alertText}`);

        // Accept the alert to close it
        await alert.accept();

        if (alertText !== 'Invalid credentials') {
            throw new Error('Alert message does not match!');
        }
        await sleep(2000); // Pause for 2 seconds

    });

    it('should perform a login and check user dashboard', async function () {
        await driver.findElement(By.name('username')).clear();
        await driver.findElement(By.name('username')).sendKeys('testuser');
        await driver.findElement(By.name('password')).clear();
        await driver.findElement(By.name('password')).sendKeys('password');
        await driver.findElement(By.id('loginButton')).click();

        // Wait until the dashboard is loaded
        await driver.wait(until.elementLocated(By.id('dashboard')), 10000);

        const welcomeMessage = await driver.findElement(By.id('welcomeMessage')).getText();
        console.log(`Welcome message is: ${welcomeMessage}`);
        if (!welcomeMessage.includes('Welcome')) {
            throw new Error('Login failed or dashboard did not load correctly!');
        }
        await sleep(2000); // Pause for 2 seconds

    });


});
