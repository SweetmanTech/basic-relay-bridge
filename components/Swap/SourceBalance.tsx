import useConnectedWallet from '@/hooks/useConnectedWallet';
import { getPublicClient } from '@/lib/clients';
import { useEffect, useState } from 'react';
import { formatEther } from 'viem';

const SourceBalance = () => {
  const [balance, setBalance] = useState<bigint>(0n);
  const { wallet, connectedWallet: address } = useConnectedWallet();
  const activeChainId = wallet?.chainId?.split?.(':')[1] || '11155111';
  const publicClient = getPublicClient(parseInt(activeChainId, 10));

  useEffect(() => {
    const init = async () => {
      setBalance(0n);
      const balance = await publicClient.getBalance({
        address,
      });
      setBalance(balance);
    };
    if (!address) return;
    init();
  }, [wallet]);

  return (
    <div>
      <span className="text-sm text-gray-500">
        Balance: {parseFloat(formatEther(balance)).toFixed(3)}
      </span>
    </div>
  );
};

export default SourceBalance;
