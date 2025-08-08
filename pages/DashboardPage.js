const { BasePage } = require('./BasePage');
class DashboardPage extends BasePage{

  constructor(page){
    super(page);
    this.productText = page.locator(".card-body b");
    this.addToCartBtn = page.locator("(//button[normalize-space()='Add To Cart'])");
    this.cartBtn = page.locator("[routerlink*='cart']");
    this.homeBtn = page.locator("//p[normalize-space()='Automation Practice']");
  }

  async searchProduct(productName){
    const productCount = await this.productText.count();

    for(let i=0; i<productCount; i++){
      if(await this.productText.nth(i).textContent() === productName){
        await this.addToCartBtn.nth(i).click();
        //await this.page.waitForSelector("//div[@aria-label='Product Added To Cart']");
        break;
      }
    }
  }

  async goToCartPage(){
    await this.click(this.cartBtn);
  }

  async goToHomePage(){
    await this.click(this.homeBtn);
    //await this.page.waitForSelector("section[id='sidebar'] p b", { state: 'visible' });
    await this.page.waitForTimeout(1000);
  }
}

module.exports = {DashboardPage};