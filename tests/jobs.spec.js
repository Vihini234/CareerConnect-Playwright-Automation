
import { test, expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage.js";
import JobsPage from "../pages/JobsPage.js";

test("jobs page displays search and filter controls after login", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const jobsPage = new JobsPage(page);

  // Step 1: Login
  await loginPage.goto();
  await loginPage.login(
    process.env.TEST_EMAIL,
    process.env.TEST_PASSWORD
  );

  // Step 2: Verify successful login
  await expect(
    page.getByRole("heading", { name: /Welcome back/ })
  ).toBeVisible();

  // Step 3: Open Jobs page
  await jobsPage.open();

  // Step 4: Verify Jobs page and controls
  await jobsPage.verifyJobsPage();

  await expect(jobsPage.searchInput).toBeVisible();
  await expect(jobsPage.categoryFilter).toBeVisible();
});
