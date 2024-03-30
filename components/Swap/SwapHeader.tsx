import Image from 'next/image';
import Button from '../Button';
import getChainIcon from '@/lib/getChainIcon';
import { mainnet } from 'viem/chains';
import usePrepareWallet from '@/hooks/usePrepareWallet';

const SwapHeader = () => {
  const { toggleLogin } = usePrepareWallet();

  return (
    <div className="flex justify-center items-center">
      <Button onClick={toggleLogin} className="flex items-center space-x-2" variant="outline">
        <h2 className="text-2xl font-bold">Send</h2>
        <Image alt="ether" height={25} width={25} src={getChainIcon(mainnet.id)} />
        <span>ETH</span>
      </Button>
    </div>
  );
};

export default SwapHeader;
