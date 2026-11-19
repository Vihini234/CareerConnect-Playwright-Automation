
import { test, expect } from "@playwright/test";
import ProfilePage from "../pages/ProfilePage.js";

test("profile page exposes student profile form", async ({ page }) => {
  // Step 1: Open CareerConnect
  await page.goto("/");

  // Step 2: Login
  await page.getByLabel("Email address").fill(process.env.TEST_EMAIL);
  await page.getByLabel("Password").fill(process.env.TEST_PASSWORD);
  await page.getByRole("button", { name: "Log in" }).click();

  // Step 3: Verify successful login
  await expect(
    page.getByRole("heading", { name: /Welcome back/ })
  ).toBeVisible();

  // Step 4: Create Profile Page object
  const profilePage = new ProfilePage(page);

  // Step 5: Open and verify profile page
  await profilePage.open();
  await profilePage.verifyProfilePage();
});
