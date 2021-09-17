const request = require("supertest");
const db = require("../data/dbConfig");
const server = require("./server");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db.seed.run();
});

test("sanity", () => {
  expect(true).toBe(true);
});
describe("Auth endpoints", () => {
  describe("[POST] /api/auth/register", () => {
    test("responds with a status 200", async () => {
      const res = await request(server)
        .post("/api/auth/register")
        .send({ username: "test", password: "test" });

      expect(res.status).toBe(201);
    });
    test("returns with correct properties", async () => {
      const res = await request(server)
        .post("/api/auth/register")
        .send({ username: "test", password: "test" });

      expect(res.body).toHaveProperty("username");
      expect(res.body).toHaveProperty("password");
    });
  });

  describe("[POST] /api/auth/login", () => {
    test("responds with a status 200", async () => {
      const res = await request(server)
        .post("/api/auth/login")
        .send({ username: "bob", password: "saget" });

      expect(res.status).toBe(200);
    });

    test("returns a token", async () => {
      const res = await request(server)
        .post("/api/auth/login")
        .send({ username: "bob", password: "saget" });

      expect(res.body).toHaveProperty("token");
    });
  });
});
