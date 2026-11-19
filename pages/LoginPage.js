
class LoginPage {
  constructor(page) {
    this.page = page;

    this.emailInput = page.getByLabel("Email address");
    this.passwordInput = page.getByLabel("Password");

    this.loginButton = page.getByRole("button", {
      name: "Log in"
    });

    this.registerLink = page.getByText("Create an account");
  }

  async goto() {
    await this.page.goto("/");
  }

  async openRegistration() {
    await this.registerLink.click();
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

export default LoginPage;
