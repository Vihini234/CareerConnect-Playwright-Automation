
import { test, expect } from "@playwright/test";

const baseURL = "http://localhost:5000/api";

async function createStudent(request) {
  const email = `apply${Date.now()}${Math.random()}@example.com`;

  const response = await request.post(`${baseURL}/auth/register`, {
    data: {
      name: "Application Test Student",
      email,
      password: "Test12345",
      role: "student"
    }
  });

  expect(response.status()).toBe(201);

  const body = await response.json();

  return body.token;
}

test.describe("Application Submission API Tests", () => {

  test("Should reject application without login", async ({ request }) => {
    const jobsResponse = await request.get(`${baseURL}/jobs`);
    const jobs = await jobsResponse.json();

    expect(jobs.length).toBeGreaterThan(0);

    const jobId = jobs[0].id;

    const response = await request.post(
      `${baseURL}/jobs/${jobId}/apply`
    );

    expect(response.status()).toBe(401);
  });

  test("Should submit an application successfully", async ({ request }) => {
    const token = await createStudent(request);

    const jobsResponse = await request.get(`${baseURL}/jobs`);
    const jobs = await jobsResponse.json();

    expect(jobs.length).toBeGreaterThan(0);

    const jobId = jobs[0].id;

    const response = await request.post(
      `${baseURL}/jobs/${jobId}/apply`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
        data: {
          coverNote: "I am interested in this internship opportunity."
        }
      }
    );

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body.message).toBe("Application submitted.");
  });

  test("Should reject duplicate application", async ({ request }) => {
    const token = await createStudent(request);

    const jobsResponse = await request.get(`${baseURL}/jobs`);
    const jobs = await jobsResponse.json();

    const jobId = jobs[0].id;

    const headers = {
      Authorization: `Bearer ${token}`
    };

    const firstResponse = await request.post(
      `${baseURL}/jobs/${jobId}/apply`,
      { headers }
    );

    expect(firstResponse.status()).toBe(201);

    const secondResponse = await request.post(
      `${baseURL}/jobs/${jobId}/apply`,
      { headers }
    );

    expect(secondResponse.status()).toBe(409);

    const body = await secondResponse.json();

    expect(body.message).toBe(
      "You have already applied for this opportunity."
    );
  });

});
