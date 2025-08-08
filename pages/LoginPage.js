const { BasePage } = require('./BasePage');

class LoginPage extends BasePage{

  constructor(page){
    super(page); 
    this.emailField = page.locator("#userEmail");
    this.passwordField = page.locator("#userPassword");
    this.signInBtn = page.locator("#login");
  }

  async enterLoginDetails(email, password){
    await this.write_Send_Keys(this.emailField, email);
    await this.write_Send_Keys(this.passwordField, password);
    await this.click(this.signInBtn);

    await this.waitForPageLoad();
    await this.page.waitForTimeout(1000);
  }
}

module.exports = {LoginPage};