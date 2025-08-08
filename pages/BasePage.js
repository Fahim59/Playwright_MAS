const config = require('../utils/envConfig');

class BasePage {
  constructor(page) {
    this.page = page;
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('load');
    await this.page.waitForLoadState('networkidle');
  }
  
  async Open_Website() {
    await this.page.goto(config.baseURL);
    await this.waitForPageLoad();
  }

  async waitForURLContains(text) {
    await this.page.waitForURL((url) => url.toString().includes(text));
  }

  async waitForElement(element, timeout = 5000) {
    await element.waitFor({ state: 'visible', timeout });
  };

  async write_Send_Keys(element, value, options = {}) {
    if (options.delay) {
        await element.type(value, options);
    } 
    else {
        await element.fill(value);
    }
  }  

  async click(element) {
    await this.waitForElement(element);
    await element.click();
  }

  async get_Text(element) {
    return await element.textContent();
  }
}

module.exports = { BasePage };