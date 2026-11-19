
class RegistrationPage {
  constructor(page) {
    this.page = page;

    this.fullNameInput = page.getByLabel("Full name");
    this.accountTypeSelect = page.getByLabel("Account type");
    this.emailInput = page.getByLabel("Email address");
    this.passwordInput = page.getByLabel("Password");

    this.registerButton = page.getByRole("button", {
      name: "Create account"
    });
  }

  async open() {
    await this.page.goto("/login");
    await this.page.getByText("Create an account").click();
  }

  async register(fullName, accountType, email, password) {
    await this.fullNameInput.fill(fullName);
    await this.accountTypeSelect.selectOption({
      label: accountType
    });
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.registerButton.click();
  }
}

export default RegistrationPage;
