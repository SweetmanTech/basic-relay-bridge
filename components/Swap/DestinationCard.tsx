import { Card } from '../Card/Card';
import DestinationChain from './DestinationChain';
import DestinationAmount from './DestinationAmount';

const DestinationCard = () => (
  <Card className="p-6 space-y-4">
    <DestinationAmount />
    <DestinationChain />
  </Card>
);

export default DestinationCard;
