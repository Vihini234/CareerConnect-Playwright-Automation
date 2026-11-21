
import { test, expect } from "@playwright/test";

const baseURL = "http://localhost:5000/api";

// Create a user and obtain an authentication token
async function createUserToken(request, role) {
  const email = `app${Date.now()}${Math.random()}@example.com`;

  const response = await request.post(`${baseURL}/auth/register`, {
    data: {
      name: "API Test User",
      email,
      password: "Test12345",
      role
    }
  });

  expect(response.status()).toBe(201);

  const body = await response.json();
  return body.token;
}

test.describe("Applications API Tests", () => {

  test("Should reject student applications request without token", async ({ request }) => {

    const response = await request.get(`${baseURL}/applications`);

    expect(response.status()).toBe(401);
  });

  test("Should reject company applications request without token", async ({ request }) => {

    const response = await request.get(`${baseURL}/applications/company`);

    expect(response.status()).toBe(401);
  });

  test("Should reject student access to company applications", async ({ request }) => {

    const token = await createUserToken(request, "student");

    const response = await request.get(`${baseURL}/applications/company`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    expect(response.status()).toBe(403);
  });

  test("Should reject student from updating application status", async ({ request }) => {

    const token = await createUserToken(request, "student");

    const response = await request.patch(`${baseURL}/applications/1/status`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: {
        status: "Accepted"
      }
    });

    expect(response.status()).toBe(403);
  });

  test("Should allow company to retrieve its applications", async ({ request }) => {

    const token = await createUserToken(request, "company");

    const response = await request.get(`${baseURL}/applications/company`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    expect(response.status()).toBe(200);

    const applications = await response.json();

    expect(Array.isArray(applications)).toBe(true);
  });

  test("Should reject an invalid application status", async ({ request }) => {

    const token = await createUserToken(request, "company");

    const response = await request.patch(`${baseURL}/applications/1/status`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: {
        status: "Pending"
      }
    });

    expect(response.status()).toBe(400);

    const body = await response.json();

    expect(body.message).toBe("Invalid status.");
  });

});
