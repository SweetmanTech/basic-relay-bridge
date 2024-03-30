import Image from 'next/image';
import ChainSelect from './ChainSelect';
import { useBridgeProvider } from '@/providers/BridgeProvider';
import getChainIcon from '@/lib/getChainIcon';
import getViemNetwork from '@/lib/clients/getViemNetwork';

const DestinationChain = () => {
  const { destinationChain, setDestinationChain } = useBridgeProvider() as any;

  const handleSelectChange = async (selectedOption: string) => {
    setDestinationChain(getViemNetwork(parseInt(selectedOption, 10)));
  };

  return (
    <div className="flex items-center space-x-2">
      <div>
        <Image alt="chain icon" height={25} width={25} src={getChainIcon(destinationChain.id)} />
      </div>
      <ChainSelect onChange={handleSelectChange} selectedChain={destinationChain} />
    </div>
  );
};

export default DestinationChain;
