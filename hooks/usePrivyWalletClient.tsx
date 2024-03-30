import { useEffect, useState } from 'react';
import { Chain, WalletClient, createWalletClient, custom } from 'viem';
import useConnectedWallet from './useConnectedWallet';

const usePrivyWalletClient = (chain: Chain) => {
  const { connectedWallet, wallet } = useConnectedWallet();
  const [walletClient, setWalletClient] = useState<WalletClient | null>(null);

  useEffect(() => {
    const init = async () => {
      if (!wallet) return;
      const provider = await wallet.getEthereumProvider();
      const response = createWalletClient({
        chain,
        account: connectedWallet as `0x${string}`,
        transport: custom(provider),
      });
      setWalletClient(response);
    };

    if (!connectedWallet || !chain) return;
    init();
  }, [connectedWallet, chain, wallet]);

  return { walletClient };
};

export default usePrivyWalletClient;
