
import { test, expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage.js";

test("student can open registration screen", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.openRegistration();

  await expect(
    page.getByRole("heading", { name: /Create your account/i })
  ).toBeVisible();
});

test("login form validates required fields", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.loginButton.click();

  await expect(loginPage.emailInput).toBeVisible();
  await expect(loginPage.passwordInput).toBeVisible();
});

// Negative Test 01: Invalid email
test("user cannot login with an invalid email", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.emailInput.fill("invalid-user@example.com");
  await loginPage.passwordInput.fill("WrongPassword123!");
  await loginPage.loginButton.click();

  await expect(loginPage.emailInput).toBeVisible();
  await expect(page).toHaveURL(/\/$/);
});

// Negative Test 02: Incorrect password
test("user cannot login with an incorrect password", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.emailInput.fill(process.env.TEST_EMAIL);
  await loginPage.passwordInput.fill("WrongPassword123!");
  await loginPage.loginButton.click();

  await expect(loginPage.emailInput).toBeVisible();
  await expect(page).toHaveURL(/\/$/);
});
