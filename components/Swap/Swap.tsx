import ArrowDownIcon from './ArrowDownIcon';
import DestinationCard from './DestinationCard';
import SourceCard from './SourceCard';

const Swap = () => {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-8">
      <SourceCard />
      <ArrowDownIcon className="text-orange-600 mx-auto" />
      <DestinationCard />
    </div>
  );
};

export default Swap;
