
import { test, expect } from "@playwright/test";
import RegistrationPage from "../pages/RegistrationPage.js";

test("registration page displays all required fields", async ({ page }) => {
  const registrationPage = new RegistrationPage(page);

  await registrationPage.open();

  await expect(registrationPage.fullNameInput).toBeVisible();
  await expect(registrationPage.accountTypeSelect).toBeVisible();
  await expect(registrationPage.emailInput).toBeVisible();
  await expect(registrationPage.passwordInput).toBeVisible();
  await expect(registrationPage.registerButton).toBeVisible();
});

test("registration form requires a full name", async ({ page }) => {
  const registrationPage = new RegistrationPage(page);

  await registrationPage.open();

  const isRequired = await registrationPage.fullNameInput.evaluate(
    element => element.required
  );

  expect(isRequired).toBe(true);
});
