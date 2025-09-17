import { Poll } from '../../lib/types';
import Link from 'next/link';

interface PollCardProps {
  poll: Poll;
}

const PollCard: React.FC<PollCardProps> = ({ poll }) => {
  return (
    <Link href={`/polls/${poll.id}`}>
      <a className="block p-4 border rounded-lg hover:shadow-lg">
        <h2 className="text-xl font-bold">{poll.title}</h2>
        <p className="text-gray-500">{poll.description}</p>
      </a>
    </Link>
  );
};

export default PollCard;