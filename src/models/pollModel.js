// In-memory "database"
let polls = [
  { id: 1, question: "Do you like AI?", options: { yes: 0, no: 0 } }
];

export const getPollById = (id) => polls.find(p => p.id === id);

export const createPoll = (question, options) => {
  // Ensure options are always stored as { optionName: 0 }
  const formattedOptions = Array.isArray(options)
    ? options.reduce((acc, opt) => ({ ...acc, [opt]: 0 }), {})
    : options;

  const newPoll = { id: polls.length + 1, question, options: formattedOptions };
  polls.push(newPoll);
  return newPoll;
};

export const castVote = (poll, option) => {
  if (!(option in poll.options)) {
    throw new Error("Invalid option");
  }
  poll.options[option] += 1;
  return poll;
};

export const getAllPolls = () => polls;
