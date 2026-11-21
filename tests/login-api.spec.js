
import { test, expect } from "@playwright/test";

const baseURL = "http://localhost:5000/api/auth";

// Helper function to create a test account
async function createTestUser(request) {
  const email = `login${Date.now()}${Math.random()}@example.com`;
  const password = "Test12345";

  const registerResponse = await request.post(`${baseURL}/register`, {
    data: {
      name: "Login Test Student",
      email,
      password,
      role: "student"
    }
  });

  expect(registerResponse.status()).toBe(201);

  return { email, password };
}

test.describe("Login API Tests", () => {

  test("Should login successfully with valid credentials", async ({ request }) => {

    const user = await createTestUser(request);

    const response = await request.post(`${baseURL}/login`, {
      data: {
        email: user.email,
        password: user.password
      }
    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body).toHaveProperty("token");
    expect(body.user.email).toBe(user.email);
    expect(body.user.role).toBe("student");
  });

  test("Should reject an incorrect password", async ({ request }) => {

    const user = await createTestUser(request);

    const response = await request.post(`${baseURL}/login`, {
      data: {
        email: user.email,
        password: "WrongPassword123"
      }
    });

    expect(response.status()).toBe(401);
  });

  test("Should reject an unknown email", async ({ request }) => {

    const response = await request.post(`${baseURL}/login`, {
      data: {
        email: `unknown${Date.now()}@example.com`,
        password: "Test12345"
      }
    });

    expect(response.status()).toBe(401);
  });

  test("Should reject an empty password", async ({ request }) => {

    const user = await createTestUser(request);

    const response = await request.post(`${baseURL}/login`, {
      data: {
        email: user.email,
        password: ""
      }
    });

    expect(response.status()).toBe(401);
  });

});
