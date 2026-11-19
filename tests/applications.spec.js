
import { test, expect } from "@playwright/test";

test("student can open application tracker", async ({ page }) => {

  await page.goto("/");

  // Step 1: Enter student credentials
await page.getByLabel("Email address").fill(process.env.TEST_EMAIL);
await page.getByLabel("Password").fill(process.env.TEST_PASSWORD);

  // Step 2: Login
  await page.getByRole("button", { name: "Log in" }).click();

  // Step 3: Verify successful login
 await expect(
  page.getByRole("heading", { name: /Welcome back,/ })
).toBeVisible({ timeout: 10000 });

  // Step 4: Verify navigation link
  await expect(
    page.getByRole("link", { name: "My Applications" })
  ).toBeVisible();

  // Step 5: Open application tracker
  await page.getByRole("link", { name: "My Applications" }).click();

  // Step 6: Verify application tracker
  await expect(
    page.getByRole("heading", { name: "My applications" })
  ).toBeVisible();

});
