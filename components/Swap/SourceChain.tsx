import Image from 'next/image';
import SourceChainSelect from './SourceChainSelect';
import getChainIcon from '@/lib/getChainIcon';
import useConnectedWallet from '@/hooks/useConnectedWallet';

const SourceChain = () => {
  const { wallet } = useConnectedWallet();
  const activeChainId = wallet?.chainId?.split?.(':')[1] || '1';

  return (
    <div className="flex items-center space-x-2">
      <Image
        alt="chain icon"
        height={25}
        width={25}
        src={getChainIcon(parseInt(activeChainId, 10))}
      />
      <SourceChainSelect />
    </div>
  );
};

export default SourceChain;
