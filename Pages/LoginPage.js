exports.LoginPage=
class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.loginLink = "//a[@id='login2']";
    this.usernameInput = "//input[@id='loginusername']";  
    this.passwordInput = "//input[@id='loginpassword']";
    this.loginButton = "//button[normalize-space()='Log in']";
  }     

 async gotoLoginPage(url) {    
    await this.page.goto(url);
    }   

    async login(username, password) {
        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();
    }           

}

//module .exports = { LoginPage };
