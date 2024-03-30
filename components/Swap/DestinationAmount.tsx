import { useBridgeProvider } from '@/providers/BridgeProvider';
import { formatEther } from 'viem';

const DestinationAmount = () => {
  const { bridgeAmount } = useBridgeProvider();

  return (
    <div className="flex justify-between items-center">
      <span className="text-sm text-gray-500">To (estimated)</span>
      <span className="text-2xl font-semibold">{formatEther(bridgeAmount)} ETH</span>
    </div>
  );
};

export default DestinationAmount;
