import { SelectTrigger, SelectItem, SelectContent, Select } from '@/components/Select/Select';
import useConnectedWallet from '@/hooks/useConnectedWallet';
import { getPublicClient } from '@/lib/clients';
import { SOURCE_CHAINS } from '@/lib/consts';
import getChainIcon from '@/lib/getChainIcon';
import Image from 'next/image';
import { Chain } from 'viem';
import { sepolia } from 'viem/chains';

const SourceChainSelect = () => {
  const { wallet } = useConnectedWallet();
  const activeChainId = wallet?.chainId?.split?.(':')[1] || sepolia.id.toString();
  const publicClient = getPublicClient(parseInt(activeChainId, 10));
  const chain = publicClient.chain as Chain;

  const handleSelectChange = async (selectedOption: string) => {
    if (!wallet) return;
    await wallet.switchChain(parseInt(selectedOption, 10));
  };

  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger id="sourceChain" className="w-[222px] text-black">
        {chain?.name}
      </SelectTrigger>
      <SelectContent position="popper">
        {SOURCE_CHAINS.map((chain: Chain) => (
          <SelectItem value={chain.id.toString()}>
            <div className="flex items-center gap-3">
              <div>
                <Image alt="chain icon" height={15} width={15} src={getChainIcon(chain.id)} />
              </div>

              {chain.name}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SourceChainSelect;
