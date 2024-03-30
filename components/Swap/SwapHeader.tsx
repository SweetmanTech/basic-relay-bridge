import Image from 'next/image';
import Button from '../Button';
import getChainIcon from '@/lib/getChainIcon';
import { mainnet } from 'viem/chains';

const SwapHeader = () => (
  <div className="flex justify-center items-center">
    <Button className="flex items-center space-x-2" variant="outline">
      <h2 className="text-2xl font-bold">Send</h2>
      <Image alt="ether" height={25} width={25} src={getChainIcon(mainnet.id)} />
      <span>ETH</span>
    </Button>
  </div>
);

export default SwapHeader;
