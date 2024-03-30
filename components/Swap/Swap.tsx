import Button from '../Button';
import { Card } from '../Card/Card';
import ArrowDownIcon from './ArrowDownIcon';
import SourceCard from './SourceCard';

const Swap = () => {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-8">
      <SourceCard />
      <ArrowDownIcon className="text-orange-600 mx-auto" />
      <Card className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">To (estimated)</span>
          <span className="text-2xl font-semibold">0.0 USDC</span>
        </div>
        <Button className="w-full" variant="secondary">
          Select Network
        </Button>
      </Card>
    </div>
  );
};

export default Swap;
