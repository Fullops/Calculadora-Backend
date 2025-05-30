const request = require("supertest");
const express = require("express");
const app = express();
app.use(express.json());

app.post("/add", (req, res) => res.json({ result: req.body.a + req.body.b }));
app.post("/subtract", (req, res) =>
  res.json({ result: req.body.a - req.body.b })
);
app.post("/multiply", (req, res) =>
  res.json({ result: req.body.a * req.body.b })
);

describe("Calculadora API", () => {
  it("suma correctamente", async () => {
    const res = await request(app).post("/add").send({ a: 5, b: 3 });
    expect(res.body.result).toBe(8);
  });

  it("suma correctamente", async () => {
    const res = await request(app).post("/add").send({ a: 10, b: 7 });
    expect(res.body.result).toBe(17);
  });

  it("resta correctamente", async () => {
    const res = await request(app).post("/subtract").send({ a: 5, b: 3 });
    expect(res.body.result).toBe(2);
  });

  it("resta correctamente", async () => {
    const res = await request(app).post("/subtract").send({ a: 8, b: 3 });
    expect(res.body.result).toBe(5);
  });

  it("multiplica correctamente", async () => {
    const res = await request(app).post("/multiply").send({ a: 4, b: 5 });
    expect(res.body.result).toBe(20);
  });
});
