import { SelectTrigger, SelectItem, SelectContent, Select } from '@/components/Select/Select';
import { SOURCE_CHAINS } from '@/lib/consts';
import getChainIcon from '@/lib/getChainIcon';
import Image from 'next/image';
import { Chain } from 'viem';

const ChainSelect = ({ onChange, selectedChain }: any) => (
  <Select onValueChange={onChange}>
    <SelectTrigger id="sourceChain" className="w-[222px] text-black">
      {selectedChain?.name}
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

export default ChainSelect;
