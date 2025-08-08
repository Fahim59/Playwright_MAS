const { test } = require('@playwright/test'); 
const { POManager } = require('../manager/POManager'); 
const config = require('../utils/envConfig');

let poManager, loginPage, dashboardPage;
let productName = "ZARA COAT 3";

test.describe.serial('Browser Launch and Login', () => {
  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    poManager = new POManager(page);

    loginPage = poManager.getLoginPage();
    dashboardPage = poManager.getDashboardPage();

    await loginPage.Open_Website();

    await loginPage.enterLoginDetails(config.username, config.password);
  });

  test('Step 1: Search Product', async () => {
  
    /* adding product into cart */
    await dashboardPage.searchProduct(productName);

    /* going to cart, verify product and checkout */
    await dashboardPage.goToCartPage();
  });
});