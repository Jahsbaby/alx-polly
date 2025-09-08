import { getPollById, createPoll, castVote, getAllPolls } from "../models/pollModel.js";

export const createPollController = (req, res) => {
  const { question, options } = req.body;
  if (!question || !options) {
    return res.status(400).json({ error: "Invalid data" });
  }

  const poll = createPoll(question, options);
  res.status(201).json(poll);
};

export const castVoteController = (req, res) => {
  const { id } = req.params;
  const { option } = req.body;

  const poll = getPollById(parseInt(id));
  if (!poll) return res.status(404).json({ error: "Poll not found" });

  try {
    const updated = castVote(poll, option);
    res.json({ message: "Vote recorded", poll: updated });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getPollsController = (req, res) => {
  res.json(getAllPolls());
};
