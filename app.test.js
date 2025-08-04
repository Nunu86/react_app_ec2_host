const request = require("supertest");
const app = require("./app");

let server;

beforeAll((done) => {
  server = app.listen(0, done); // start on random free port
});

afterAll((done) => {
  server.close(done); // close server after tests
});

describe("Node.js Backend API", () => {
  test("GET / should return greeting message", async () => {
    const res = await request(server).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello from Node.js backend!");
  });

  test("GET /api/greet should return JSON message", async () => {
    const res = await request(server).get("/api/greet");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: "Hello from API!" });
  });
});
