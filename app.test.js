// app.test.js
const request = require("supertest");
const app = require("./app"); // Import the Express app

describe("Node.js Backend API", () => {
  test("GET / should return greeting message", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hello from Node.js backend!");
  });

  test("GET /api/greet should return JSON message", async () => {
    const response = await request(app).get("/api/greet");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: "Hello from API!" });
  });
});
