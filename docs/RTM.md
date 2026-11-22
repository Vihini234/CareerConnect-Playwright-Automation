# CareerConnect – Requirement Traceability Matrix (RTM)

## 1. Purpose

The RTM maps CareerConnect application requirements to their corresponding test cases to ensure testing coverage.

## 2. Traceability Matrix

| Requirement ID | Requirement | Test Case IDs | Testing Type |
|---|---|---|---|
| REQ-001 | Students can access registration | TC_AUTH_001 | UI |
| REQ-002 | Login form validates required fields | TC_AUTH_002 | UI |
| REQ-003 | Invalid login credentials are rejected | TC_AUTH_003, TC_AUTH_004 | UI |
| REQ-004 | Registration form validates required fields | TC_REG_001, TC_REG_002 | UI |
| REQ-005 | Students can browse and search jobs | TC_JOB_001, TC_API_JOB_001, TC_API_JOB_002 | UI/API |
| REQ-006 | Students can filter jobs by category | TC_API_JOB_003 | API |
| REQ-007 | Students can access their profile | TC_PRO_001 | UI |
| REQ-008 | Students can access saved opportunities | TC_SAV_001 | UI |
| REQ-009 | Login API validates credentials | TC_API_LOG_001, TC_API_LOG_002, TC_API_LOG_003, TC_API_LOG_004 | API |
| REQ-010 | Registration API validates account creation | TC_API_REG_001, TC_API_REG_002, TC_API_REG_003, TC_API_REG_004 | API |
| REQ-011 | Saved jobs require authentication | TC_API_SAV_001, TC_API_SAV_002, TC_API_SAV_003, TC_API_SAV_004 | API |
| REQ-012 | Students can save and remove jobs | TC_API_SAV_005, TC_API_SAV_006 | API |
| REQ-013 | Students can submit applications | TC_API_APP_001, TC_API_APP_002, TC_API_APP_003 | API |
| REQ-014 | Application access is role-based | TC_API_APM_001, TC_API_APM_002, TC_API_APM_003, TC_API_APM_004 | API |
| REQ-015 | Companies can retrieve applications | TC_API_APM_005 | API |
| REQ-016 | Application status accepts valid values only | TC_API_APM_006 | API |

## 3. Coverage Summary

- Requirements mapped: 16
- Test cases mapped: 36
- UI and API testing included
- Requirement coverage will be reviewed as the test suite evolves.

## 4. Notes

This matrix is based on the current documented test scenarios. It should be updated whenever requirements or automated tests change.

The requirement IDs are documentation identifiers created for this project; they are not original business requirement IDs.
