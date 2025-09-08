import { castVote } from '../../models/pollModel.js';

describe("castVote (Unit Test)", () => {
  it("should increment vote count for a valid option", () => {
    const poll = { options: { yes: 0, no: 0 } };

    castVote(poll, "yes");

    expect(poll.options.yes).toBe(1);
  });

  it("should throw error for invalid option", () => {
    const poll = { options: { yes: 0, no: 0 } };

    expect(() => castVote(poll, "maybe")).toThrow("Invalid option");
  });
});
