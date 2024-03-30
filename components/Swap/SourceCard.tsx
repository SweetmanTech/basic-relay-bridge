import { Card } from '../Card/Card';
import SourceBalance from './SourceBalance';
import SourceChain from './SourceChain';
import SourceInput from './SourceInput';

const SourceCard = () => (
  <Card className="p-6 space-y-4">
    <div className="flex justify-between items-center gap-3">
      <SourceChain />
      <SourceBalance />
    </div>
    <SourceInput />
  </Card>
);

export default SourceCard;
