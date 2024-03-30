import { useBridgeProvider } from '@/providers/BridgeProvider';
import Button from '../Button';
import { Card } from '../Card/Card';
import { formatEther } from 'viem';
import ChainSelect from './ChainSelect';
import Image from 'next/image';
import getChainIcon from '@/lib/getChainIcon';
import DestinationChain from './DestinationChain';

const DestinationCard = () => {
  const { bridgeAmount, destinationChain } = useBridgeProvider();

  const handleSelectChange = async (selectedOption: string) => {
    console.log('SWEETS CHANGES DESTINATION', selectedOption);
  };

  return (
    <Card className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">To (estimated)</span>
        <span className="text-2xl font-semibold">{formatEther(bridgeAmount)} ETH</span>
      </div>
      <DestinationChain />
    </Card>
  );
};

export default DestinationCard;
