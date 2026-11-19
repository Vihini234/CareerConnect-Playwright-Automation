
import { test } from "@playwright/test";
import SavedJobsPage from "../pages/SavedJobsPage.js";

test("student can open saved opportunities", async ({ page }) => {
  // Step 1: Open CareerConnect
  await page.goto("/");

  // Step 2: Login
  await page.getByLabel("Email address").fill(process.env.TEST_EMAIL);
  await page.getByLabel("Password").fill(process.env.TEST_PASSWORD);
  await page.getByRole("button", { name: "Log in" }).click();

  // Step 3: Create Saved Jobs Page object
  const savedJobsPage = new SavedJobsPage(page);

  // Step 4: Open Saved Jobs page
  await savedJobsPage.open();

  // Step 5: Verify Saved Jobs page
  await savedJobsPage.verifySavedJobsPage();
});
