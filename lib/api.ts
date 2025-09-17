import { Poll } from './types';

export const fetchPolls = async (): Promise<Poll[]> => {
  const response = await fetch('/api/polls');
  const polls = await response.json();
  return polls;
};
