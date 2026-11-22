npx playwright test --list > docs/TEST_CASE_LIST.txt
## application-submit-api.spec.js
test.describe("Application Submission API Tests", () => {
test("Should reject application without login", async ({ request }) => {
test("Should submit an application successfully", async ({ request }) => {
test("Should reject duplicate application", async ({ request }) => {

## applications-api.spec.js
test.describe("Applications API Tests", () => {
test("Should reject student applications request without token", async ({ request }) => {
test("Should reject company applications request without token", async ({ request }) => {
test("Should reject student access to company applications", async ({ request }) => {
test("Should reject student from updating application status", async ({ request }) => {
test("Should allow company to retrieve its applications", async ({ request }) => {
test("Should reject an invalid application status", async ({ request }) => {

## applications.spec.js
test("student can open application tracker", async ({ page }) => {

## auth.spec.js
test("student can open registration screen", async ({ page }) => {
test("login form validates required fields", async ({ page }) => {
test("user cannot login with an invalid email", async ({ page }) => {
test("user cannot login with an incorrect password", async ({ page }) => {

## jobs-api.spec.js
test.describe("Jobs API Tests", () => {
test("Should retrieve all available jobs", async ({ request }) => {
test("Should search jobs by keyword", async ({ request }) => {
test("Should filter jobs by category", async ({ request }) => {

## jobs.spec.js
test("jobs page displays search and filter controls after login", async ({ page }) => {

## login-api.spec.js
test.describe("Login API Tests", () => {
test("Should login successfully with valid credentials", async ({ request }) => {
test("Should reject an incorrect password", async ({ request }) => {
test("Should reject an unknown email", async ({ request }) => {
test("Should reject an empty password", async ({ request }) => {

## profile.spec.js
test("profile page exposes student profile form", async ({ page }) => {

## registration-api.spec.js
test.describe("Registration API Tests", () => {
test("Should register a student successfully", async ({ request }) => {
test("Should reject registration without a name", async ({ request }) => {
test("Should reject a short password", async ({ request }) => {
test("Should reject an invalid account type", async ({ request }) => {

## registration.spec.js
test("registration page displays all required fields", async ({ page }) => {
test("registration form requires a full name", async ({ page }) => {

## saved-jobs-api.spec.js
test.describe("Saved Jobs API Authentication Tests", () => {
test("Should reject saved jobs request without a token", async ({ request }) => {
test("Should reject save job request without a token", async ({ request }) => {
test("Should reject remove saved job request without a token", async ({ request }) => {
test("Should reject request with an invalid token", async ({ request }) => {
test("Should return an empty saved jobs list for a new student", async ({ request }) => {
test("Should save and remove a job successfully", async ({ request }) => {

## saved-jobs.spec.js
test("student can open saved opportunities", async ({ page }) => {
