
import { test, expect } from "@playwright/test";

const baseURL = "http://localhost:5000/api";

// Create a student account and obtain a valid token
async function createStudentToken(request) {
  const email = `saved${Date.now()}${Math.random()}@example.com`;

  const response = await request.post(`${baseURL}/auth/register`, {
    data: {
      name: "Saved Jobs Test Student",
      email,
      password: "Test12345",
      role: "student"
    }
  });

  expect(response.status()).toBe(201);

  const body = await response.json();
  return body.token;
}

test.describe("Saved Jobs API Authentication Tests", () => {

  test("Should reject saved jobs request without a token", async ({ request }) => {
    const response = await request.get(`${baseURL}/jobs/saved`);

    expect(response.status()).toBe(401);
  });

  test("Should reject save job request without a token", async ({ request }) => {
    const response = await request.post(`${baseURL}/jobs/1/save`);

    expect(response.status()).toBe(401);
  });

  test("Should reject remove saved job request without a token", async ({ request }) => {
    const response = await request.delete(`${baseURL}/jobs/1/save`);

    expect(response.status()).toBe(401);
  });

  test("Should reject request with an invalid token", async ({ request }) => {
    const response = await request.get(`${baseURL}/jobs/saved`, {
      headers: {
        Authorization: "Bearer invalid-token"
      }
    });

    expect(response.status()).toBe(401);
  });

});


test("Should return an empty saved jobs list for a new student", async ({ request }) => {

  const token = await createStudentToken(request);

  const response = await request.get(`${baseURL}/jobs/saved`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  expect(response.status()).toBe(200);

  const savedJobs = await response.json();

  expect(Array.isArray(savedJobs)).toBe(true);
  expect(savedJobs.length).toBe(0);

});

test("Should save and remove a job successfully", async ({ request }) => {

  // Create a student and get a valid token
  const token = await createStudentToken(request);

  // Get an available job from the API
  const jobsResponse = await request.get(`${baseURL}/jobs`);

  expect(jobsResponse.status()).toBe(200);

  const jobs = await jobsResponse.json();

  expect(jobs.length).toBeGreaterThan(0);

  const jobId = jobs[0].id;

  // Save the job
  const saveResponse = await request.post(
    `${baseURL}/jobs/${jobId}/save`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  expect(saveResponse.status()).toBe(200);

  const saveBody = await saveResponse.json();

  expect(saveBody.message).toBe("Opportunity saved.");

  // Verify that the job appears in saved jobs
  const savedResponse = await request.get(`${baseURL}/jobs/saved`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  expect(savedResponse.status()).toBe(200);

  const savedJobs = await savedResponse.json();

  expect(savedJobs.some(job => job.id === jobId)).toBe(true);

  // Remove the saved job
  const deleteResponse = await request.delete(
    `${baseURL}/jobs/${jobId}/save`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  expect(deleteResponse.status()).toBe(200);

  // Verify that the job is no longer saved
  const finalResponse = await request.get(`${baseURL}/jobs/saved`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const finalSavedJobs = await finalResponse.json();

  expect(finalSavedJobs.some(job => job.id === jobId)).toBe(false);

});

