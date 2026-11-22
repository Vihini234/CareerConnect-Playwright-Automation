# CareerConnect – Playwright Test Automation Framework

An end-to-end and API test automation framework for the CareerConnect internship discovery platform, built using Playwright and JavaScript.

The project demonstrates UI automation, API testing, Page Object Model (POM), negative testing, and Continuous Integration using GitHub Actions.

## Project Overview

CareerConnect is an internship discovery platform where students can register, log in, browse internship opportunities, save jobs, manage profiles, and submit applications.

This repository contains the automated testing framework developed to validate the application's functionality and API behaviour.

## Technology Stack

| Technology | Purpose |
|---|---|
| Playwright | UI and API test automation |
| JavaScript | Automation scripting |
| Node.js | Runtime environment |
| Page Object Model | Test architecture |
| Chromium | Browser automation |
| GitHub Actions | CI/CD |
| MySQL | Test application database |
| Git and GitHub | Version control |

## Project Structure

```text
CareerConnect-Playwright-Automation/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── database/
│   └── setup.sql
│
├── pages/
│   ├── JobsPage.js
│   ├── LoginPage.js
│   ├── ProfilePage.js
│   ├── RegistrationPage.js
│   └── SavedJobsPage.js
│
├── tests/
│   ├── auth.spec.js
│   ├── registration.spec.js
│   ├── jobs.spec.js
│   ├── profile.spec.js
│   ├── saved-jobs.spec.js
│   └── API test files
│
├── docs/
│   ├── TEST_PLAN.md
│   ├── TEST_CASES.md
│   ├── RTM.md
│   ├── BUG_REPORTS.md
│   └── TEST_EXECUTION_SUMMARY.md
│
├── playwright.config.js
├── package.json
└── README.md
```

## Testing Scope

### UI Automation

- Student registration
- Login form validation
- Invalid login scenarios
- Jobs page navigation
- Search and filter controls
- Student profile page
- Saved opportunities

### API Automation

- Login API
- Registration API
- Jobs API
- Saved jobs API
- Application submission API
- Application management API

### Negative Testing

- Invalid login credentials
- Missing required fields
- Invalid account types
- Unauthorized API requests
- Invalid authentication tokens
- Duplicate application submissions
- Invalid application status values

## Framework Design

The framework follows the Page Object Model (POM).

- **Pages:** Store page-specific locators and reusable actions.
- **Tests:** Contain test scenarios and assertions.
- **Configuration:** Defines browser, base URL, reporting and execution settings.
- **GitHub Actions:** Executes automated tests in a CI environment.

## Running Tests Locally

### 1. Clone the repository

```bash
git clone https://github.com/Vihini234/CareerConnect-Playwright-Automation.git
```

### 2. Navigate to the project

```bash
cd CareerConnect-Playwright-Automation
```

### 3. Install dependencies

```bash
npm ci
```

### 4. Install Playwright browsers

```bash
npx playwright install
```

### 5. Start the CareerConnect application

Start the application's MySQL-compatible database, backend and frontend using their respective project configurations.

The current Playwright configuration uses:

```text
http://localhost:5173
```

Ensure the backend is available at the API address expected by the application.

### 6. Execute tests

```bash
npx playwright test
```

## Test Reports

Generate and view the HTML report:

```bash
npx playwright show-report
```

The framework is configured to use:

- List reporter
- HTML reporter
- Screenshots on test failure
- Trace collection on first retry

## Continuous Integration – GitHub Actions

The project uses GitHub Actions to automate test execution.

The workflow is triggered by:

- Pushes to the `main` branch
- Pull requests targeting `main`
- Manual workflow dispatch

The workflow:

1. Checks out the automation repository.
2. Checks out the CareerConnect application.
3. Configures Node.js.
4. Installs dependencies and Playwright browsers.
5. Initializes the test database.
6. Starts the application backend and frontend.
7. Executes Playwright tests.
8. Uploads test reports and diagnostic artifacts.

View workflow executions:

[GitHub Actions – Workflow Runs](https://github.com/Vihini234/CareerConnect-Playwright-Automation/actions)

## Test Execution Results

A local Playwright HTML report captured during development showed:

| Metric | Result |
|---|---:|
| Total Tests | 36 |
| Passed | 36 |
| Failed | 0 |
| Flaky | 0 |
| Skipped | 0 |
| Pass Rate | 100% |

The GitHub Actions workflow has also completed successfully in the observed runs. Local and CI results should be evaluated separately because they represent different execution environments.

## QA Documentation

Detailed project documentation is available in the `docs/` directory:

- [Test Plan](docs/TEST_PLAN.md)
- [Test Cases](docs/TEST_CASES.md)
- [Requirement Traceability Matrix](docs/RTM.md)
- [Bug Reports](docs/BUG_REPORTS.md)
- [Test Execution Summary](docs/TEST_EXECUTION_SUMMARY.md)

## Future Enhancements

- Cross-browser automation with Firefox and WebKit
- Additional UI and API test coverage
- Improved test data management
- Automated regression execution
- Enhanced test reporting
- Defect tracking and evidence management

## Author

**Vihini Wathsiluni Ranasingha**

GitHub: [Vihini234](https://github.com/Vihini234)

Project Repository: [CareerConnect Playwright Automation](https://github.com/Vihini234/CareerConnect-Playwright-Automation)
