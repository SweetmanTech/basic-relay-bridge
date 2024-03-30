import Image from 'next/image';
import ChainSelect from './ChainSelect';
import getChainIcon from '@/lib/getChainIcon';
import useConnectedWallet from '@/hooks/useConnectedWallet';
import { getPublicClient } from '@/lib/clients';
import { Chain } from 'viem';
import { sepolia } from 'viem/chains';

const SourceChain = () => {
  const { wallet } = useConnectedWallet();
  const activeChainId = wallet?.chainId?.split?.(':')[1] || sepolia.id.toString();
  const publicClient = getPublicClient(parseInt(activeChainId, 10));
  const chain = publicClient.chain as Chain;

  const handleSelectChange = async (selectedOption: string) => {
    if (!wallet) return;
    await wallet.switchChain(parseInt(selectedOption, 10));
  };

  return (
    <div className="flex items-center space-x-2">
      <Image
        alt="chain icon"
        height={25}
        width={25}
        src={getChainIcon(parseInt(activeChainId, 10))}
      />
      <ChainSelect onChange={handleSelectChange} selectedChain={chain} />
    </div>
  );
};

export default SourceChain;
