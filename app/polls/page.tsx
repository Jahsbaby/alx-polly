"use client";

import { useEffect, useState } from 'react';
import { Poll } from '../../lib/types';
import { fetchPolls } from '../../lib/api';
import PollCard from '../../components/ui/PollCard';

const PollsPage = () => {
  const [polls, setPolls] = useState<Poll[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPolls = async () => {
      const polls = await fetchPolls();
      setPolls(polls);
      setLoading(false);
    };

    getPolls();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Polls</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {polls.map((poll) => (
          <PollCard key={poll.id} poll={poll} />
        ))}
      </div>
    </div>
  );
};

export default PollsPage;