
import { test, expect } from "@playwright/test";

const baseURL = "http://localhost:5000/api/jobs";

test.describe("Jobs API Tests", () => {

  test("Should retrieve all available jobs", async ({ request }) => {

    const response = await request.get(baseURL);

    expect(response.status()).toBe(200);

    const jobs = await response.json();

    expect(Array.isArray(jobs)).toBe(true);
    expect(jobs.length).toBeGreaterThan(0);

    expect(jobs[0]).toHaveProperty("title");
    expect(jobs[0]).toHaveProperty("company_name");

  });

  test("Should search jobs by keyword", async ({ request }) => {

    const response = await request.get(baseURL, {
      params: {
        search: "QA"
      }
    });

    expect(response.status()).toBe(200);

    const jobs = await response.json();

    expect(Array.isArray(jobs)).toBe(true);

  });

  test("Should filter jobs by category", async ({ request }) => {

    const response = await request.get(baseURL, {
      params: {
        category: "IT"
      }
    });

    expect(response.status()).toBe(200);

    const jobs = await response.json();

    expect(Array.isArray(jobs)).toBe(true);

    for (const job of jobs) {
      expect(job.category).toBe("IT");
    }

  });

});
