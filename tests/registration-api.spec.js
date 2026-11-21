
import { test, expect } from "@playwright/test";

test.describe("Registration API Tests", () => {

  const baseURL = "http://localhost:5000/api/auth";

  test("Should register a student successfully", async ({ request }) => {

    const response = await request.post(`${baseURL}/register`, {
      data: {
        name: "QA Test Student",
        email: `qatest${Date.now()}@example.com`,
        password: "Test12345",
        role: "student"
      }
    });

    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    expect(responseBody).toHaveProperty("token");
    expect(responseBody.user).toHaveProperty("id");
    expect(responseBody.user.role).toBe("student");

  });

  test("Should reject registration without a name", async ({ request }) => {

    const response = await request.post(`${baseURL}/register`, {
      data: {
        name: "",
        email: `noname${Date.now()}@example.com`,
        password: "Test12345",
        role: "student"
      }
    });

    expect(response.status()).toBe(400);

    const body = await response.json();

    expect(body.message).toBe("Name, email and password are required.");

  });

  test("Should reject a short password", async ({ request }) => {

    const response = await request.post(`${baseURL}/register`, {
      data: {
        name: "QA Student",
        email: `short${Date.now()}@example.com`,
        password: "123",
        role: "student"
      }
    });

    expect(response.status()).toBe(400);

  });

  test("Should reject an invalid account type", async ({ request }) => {

    const response = await request.post(`${baseURL}/register`, {
      data: {
        name: "QA Student",
        email: `invalid${Date.now()}@example.com`,
        password: "Test12345",
        role: "admin"
      }
    });

    expect(response.status()).toBe(400);

  });

});
