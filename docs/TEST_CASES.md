# CareerConnect – Test Cases

## 1. Authentication – UI Tests

| Test ID | Test Scenario | Expected Result |
|---|---|---|
| TC_AUTH_001 | Student opens registration screen | Registration screen is displayed |
| TC_AUTH_002 | Submit login form with empty fields | Required field validation is displayed |
| TC_AUTH_003 | Login using an invalid email | Login is rejected |
| TC_AUTH_004 | Login using an incorrect password | Login is rejected |

## 2. Registration – UI Tests

| Test ID | Test Scenario | Expected Result |
|---|---|---|
| TC_REG_001 | Display registration form fields | All required fields are displayed |
| TC_REG_002 | Submit registration without full name | Form validation is displayed |

## 3. Jobs – UI Tests

| Test ID | Test Scenario | Expected Result |
|---|---|---|
| TC_JOB_001 | Open jobs page after login | Jobs page is displayed with search and filter controls |

## 4. Profile – UI Tests

| Test ID | Test Scenario | Expected Result |
|---|---|---|
| TC_PRO_001 | Open student profile page | Student profile form is displayed |

## 5. Saved Jobs – UI Tests

| Test ID | Test Scenario | Expected Result |
|---|---|---|
| TC_SAV_001 | Open saved opportunities | Saved opportunities page is displayed |

## 6. Login – API Tests

| Test ID | Test Scenario | Expected Result |
|---|---|---|
| TC_API_LOG_001 | Login with valid credentials | Login succeeds |
| TC_API_LOG_002 | Login with incorrect password | Request is rejected |
| TC_API_LOG_003 | Login using an unknown email | Request is rejected |
| TC_API_LOG_004 | Login with an empty password | Request is rejected |

## 7. Registration – API Tests

| Test ID | Test Scenario | Expected Result |
|---|---|---|
| TC_API_REG_001 | Register a student successfully | Student account is created |
| TC_API_REG_002 | Register without a name | Request is rejected |
| TC_API_REG_003 | Register with a short password | Request is rejected |
| TC_API_REG_004 | Register with an invalid account type | Request is rejected |

## 8. Jobs – API Tests

| Test ID | Test Scenario | Expected Result |
|---|---|---|
| TC_API_JOB_001 | Retrieve available jobs | Jobs are returned |
| TC_API_JOB_002 | Search jobs by keyword | Matching jobs are returned |
| TC_API_JOB_003 | Filter jobs by category | Matching category jobs are returned |

## 9. Saved Jobs – API Tests

| Test ID | Test Scenario | Expected Result |
|---|---|---|
| TC_API_SAV_001 | Retrieve saved jobs without authentication | Request is rejected |
| TC_API_SAV_002 | Save a job without authentication | Request is rejected |
| TC_API_SAV_003 | Remove a saved job without authentication | Request is rejected |
| TC_API_SAV_004 | Use an invalid authentication token | Request is rejected |
| TC_API_SAV_005 | Retrieve saved jobs for a new student | Empty saved jobs list is returned |
| TC_API_SAV_006 | Save and remove a job successfully | Both operations succeed |

## 10. Application Submission – API Tests

| Test ID | Test Scenario | Expected Result |
|---|---|---|
| TC_API_APP_001 | Submit an application without login | Request is rejected |
| TC_API_APP_002 | Submit an application successfully | Application is created |
| TC_API_APP_003 | Submit a duplicate application | Duplicate application is rejected |

## 11. Application Management – API Tests

| Test ID | Test Scenario | Expected Result |
|---|---|---|
| TC_API_APM_001 | Retrieve student applications without a token | Request is rejected |
| TC_API_APM_002 | Retrieve company applications without a token | Request is rejected |
| TC_API_APM_003 | Student attempts to access company applications | Access is rejected |
| TC_API_APM_004 | Student attempts to update application status | Access is rejected |
| TC_API_APM_005 | Company retrieves its applications | Applications are returned |
| TC_API_APM_006 | Update application using an invalid status | Request is rejected |

---

## Test Execution Notes

- Automation framework: Playwright
- Browser: Chromium
- Test execution command: `npx playwright test`
- HTML report command: `npx playwright show-report`

**Note:** The scenarios above are based on the test names visible in the available Playwright reports. Verify each scenario against its actual test script before treating this document as the complete test inventory.
