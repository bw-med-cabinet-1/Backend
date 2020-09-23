const supertest = require("supertest");
const server = require("../server");
const db = require("../data/db-config");
// const Users = require("../router/helper");

describe("auth-router", () => {
    describe("POST /register", () => {
      it("returns status 400 if info is invalid", async () => {
        await db("users").truncate(); // deletes all reset id
        return supertest(server)
          .post("/api/auth/register")
          .send({})
          .then((res) => {
            expect(res.status).toBe(400);
          });
      });
      it("returns status 201 if created successfully", () => {
        return supertest(server)
          .post("/api/auth/register")
          .send({ username: "dobbi", password: "pass123", role:1 })
          .then((res) => {
            expect(res.status).toBe(201);
          });
      });
    });
    describe("POST /login", () => {
      it("returns status 200 if info is valid", () => {
        return supertest(server)
          .post("/api/auth/login")
          .send({ username: "dobbi", password: "pass123" })
          .then((res) => {
            expect(res.status).toBe(200);
          });
      });
      it("returns status 400 if info is invalid", () => {
        return supertest(server)
          .post("/api/auth/login")
          .send({})
          .then((res) => {
            expect(res.status).toBe(400);
          });
      });
      it("returns token property with JWT value", () => {
        return supertest(server)
          .post("/api/auth/login")
          .send({ username: "dobbi", password: "pass123" })
          .then((res) => {
            expect(res.body.token).toContain(
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
            );
          });
      });
    });
  });