# CareerConnect – Software Test Plan

## 1. Project Overview

**Project Name:** CareerConnect  
**Testing Framework:** Playwright  
**Programming Language:** JavaScript  
**Automation Approach:** UI End-to-End Testing and API Testing  
**Browser:** Chromium  
**CI/CD:** GitHub Actions  

CareerConnect is an internship discovery platform that allows students to register, log in, browse internship opportunities, save jobs, manage profiles, and submit applications.

## 2. Testing Objectives

- Verify that core application features work as expected.
- Validate API responses and backend functionality.
- Identify functional defects and authentication issues.
- Verify role-based access control.
- Automate regression testing using Playwright.
- Execute automated tests through GitHub Actions.

## 3. Testing Scope

### In Scope
- Student registration
- Login and authentication
- Jobs listing, searching and filtering
- Student profile
- Saved jobs
- Application submission
- Application tracking
- API authentication and validation
- Negative and unauthorized access scenarios

### Out of Scope
- Performance and load testing
- Security penetration testing
- Cross-browser testing beyond Chromium
- Production environment testing

## 4. Testing Types

| Testing Type | Description |
|---|---|
| Functional Testing | Validate application features |
| UI Testing | Verify user interface behaviour |
| API Testing | Validate backend endpoints |
| Negative Testing | Verify invalid inputs and error handling |
| Authentication Testing | Validate login and access control |
| Regression Testing | Ensure existing functionality remains stable |
| Integration Testing | Verify communication between frontend and backend |

## 5. Test Environment

- Operating System: Windows (local) / Ubuntu (GitHub Actions)
- Frontend: React and Vite
- Backend: Node.js and Express
- Database: MySQL-compatible CareerConnect database
- Automation: Playwright
- Browser: Chromium
- CI/CD: GitHub Actions

## 6. Entry Criteria

- Application source code is available.
- Database is initialized.
- Frontend and backend dependencies are installed.
- Required environment variables are configured.
- Playwright browsers are installed.

## 7. Exit Criteria

- All planned automated tests have been executed.
- Test failures have been investigated.
- Defects are documented.
- Test execution results are reviewed.
- CI workflow execution is verified.

## 8. Risks and Mitigation

| Risk | Mitigation |
|---|---|
| Application unavailable | Verify frontend and backend before execution |
| Database connection failure | Validate database configuration |
| Test data conflicts | Use controlled test data |
| Flaky UI tests | Use reliable Playwright locators and assertions |
| CI environment differences | Maintain consistent configuration |

## 9. Deliverables

- Test Plan
- Detailed Test Cases
- Automated Playwright Test Scripts
- API Test Scripts
- Bug Reports
- Requirement Traceability Matrix
- Playwright HTML Reports
- GitHub Actions Execution Results

## 10. Approval

**Prepared by:** QA Automation Engineer  
**Project:** CareerConnect  
**Framework:** Playwright
