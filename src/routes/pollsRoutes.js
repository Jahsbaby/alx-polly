import express from "express";
import { createPollController, castVoteController, getPollsController } from "../controllers/pollController.js";

const router = express.Router();

router.get("/", getPollsController);
router.post("/", createPollController);
router.post("/:id/vote", castVoteController);

// src/routes/pollsRoutes.test.js
describe("Polls Routes", () => {
  it("should pass a dummy test", () => {
    expect(true).toBe(true);
  });
});


export default router;
