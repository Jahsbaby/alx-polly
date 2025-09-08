import request from "supertest";
import app from "../../../app.js";

describe("Polls API (Integration Tests)", () => {
  it("should return 200 OK for GET /polls", async () => {
    const res = await request(app).get("/polls");
    expect(res.statusCode).toBe(200);
  });

  it("should allow creating a poll with options as an array", async () => {
    const res = await request(app)
      .post("/polls")
      .send({ question: "Is testing fun?", options: ["yes", "no"] });

    expect(res.statusCode).toBe(201);
    expect(res.body.question).toBe("Is testing fun?");
    expect(res.body.options).toEqual({ yes: 0, no: 0 });

    const pollId = res.body.id;

    // Cast a vote
    const voteRes = await request(app)
      .post(`/polls/${pollId}/vote`)
      .send({ option: "yes" });

    expect(voteRes.statusCode).toBe(200);
    expect(voteRes.body.poll.options.yes).toBe(1);
  });

  it("should allow creating a poll with options as an object", async () => {
    const res = await request(app)
      .post("/polls")
      .send({ question: "Do you code?", options: { yes: 0, no: 0, maybe: 0 } });

    expect(res.statusCode).toBe(201);
    expect(res.body.options).toEqual({ yes: 0, no: 0, maybe: 0 });

    const pollId = res.body.id;

    // Cast a vote
    const voteRes = await request(app)
      .post(`/polls/${pollId}/vote`)
      .send({ option: "maybe" });

    expect(voteRes.statusCode).toBe(200);
    expect(voteRes.body.poll.options.maybe).toBe(1);
  });
});
