"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "../../../components/ui/button";

const PollDetailPage = () => {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const [poll, setPoll] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchPoll = async () => {
        const response = await fetch(`/api/polls/${id}`);
        const data = await response.json();
        setPoll(data);
        setLoading(false);
      };

      fetchPoll();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!poll) {
    return <div>Poll not found.</div>;
  }

  return (
    <div>
      <h1>{poll.title}</h1>
      <p>{poll.description}</p>
      <Button onClick={() => router.push("/polls")}>Back to Polls</Button>
    </div>
  );
};

export default PollDetailPage;
