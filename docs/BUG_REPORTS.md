# CareerConnect – Bug Reports

## 1. Purpose

This document provides a standard format for recording, tracking and managing defects identified during CareerConnect testing.

## 2. Bug Report Template

| Field | Description |
|---|---|
| Bug ID | Unique defect identifier |
| Bug Title | Short description of the issue |
| Module | Affected application module |
| Environment | Browser, OS and application environment |
| Preconditions | Conditions required before testing |
| Steps to Reproduce | Steps to reproduce the defect |
| Expected Result | Expected application behaviour |
| Actual Result | Observed application behaviour |
| Severity | Critical / High / Medium / Low |
| Priority | P1 / P2 / P3 / P4 |
| Status | New / Open / Fixed / Retest / Closed |
| Evidence | Screenshot, video, trace or log |

## 3. Defect Severity Definitions

| Severity | Meaning |
|---|---|
| Critical | Application-wide failure or major business functionality unavailable |
| High | Major feature is broken |
| Medium | Feature works incorrectly but a workaround exists |
| Low | Minor UI or cosmetic issue |

## 4. Defect Priority Definitions

| Priority | Meaning |
|---|---|
| P1 | Fix immediately |
| P2 | Fix in the next planned release |
| P3 | Fix when resources are available |
| P4 | Minor improvement |

## 5. Defect Log

No confirmed defects have been documented in this log yet.

Add a record here only after reproducing and verifying an actual defect.

| Bug ID | Bug Title | Module | Severity | Priority | Status |
|---|---|---|---|---|---|
| - | No confirmed defects recorded | - | - | - | - |

## 6. Defect Lifecycle

New → Open → Assigned → Fixed → Retest → Closed

If the issue persists after retesting, the defect should be reopened.

## 7. Evidence Guidelines

Attach relevant evidence where available:

- Screenshot of the issue
- Playwright failure screenshot
- Playwright trace
- Relevant error logs
- API request and response details

**Important:** Do not classify failed automated tests as application defects until the failure has been investigated and reproduced.
