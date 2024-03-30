import { baseSepolia } from 'viem/chains';
import usePrivyWalletClient from './usePrivyWalletClient';
import { WalletClient } from 'viem';
import relayBridge from '@/lib/relay/relayBridge';
import useConnectedWallet from './useConnectedWallet';
import { useEffect } from 'react';
import getSolverCapacity from '@/lib/relay/getSolverCapacity';
import { toast } from 'react-toastify';
import {
  TESTNET_RELAY_API,
  convertViemChainToRelayChain,
  createClient,
} from '@reservoir0x/relay-sdk';
import getViemNetwork from '@/lib/clients/getViemNetwork';
import { useBridgeProvider } from '@/providers/BridgeProvider';

const useRelayBridge = () => {
  const { connectedWallet, wallet: privyWallet } = useConnectedWallet();
  const chainId = parseInt(privyWallet?.chainId?.split?.(':')[1] || '1', 10);
  const activeChain = getViemNetwork(chainId);
  const { walletClient } = usePrivyWalletClient(activeChain);
  const wallet = walletClient as WalletClient;
  const { setSourceTx, setDestinationTx, bridgeAmount, destinationChain } =
    useBridgeProvider() as any;
  const toChainId = destinationChain.id;

  const handleProgress = (steps: any, fees: any, currentStep: any, currentStepItem: any) => {
    const transaction = currentStepItem?.items?.[0]?.txHashes?.[0];
    const txChainId = transaction?.chainId;
    const txHash = transaction?.txHash;
    if (!txHash) return;
    if (txChainId === toChainId) {
      setDestinationTx({
        chainId: toChainId,
        txHash,
      });
    }
    if (txChainId === chainId) {
      setSourceTx({ txHash, chainId });
      setDestinationTx({ chainId: toChainId });
    }
  };

  const prepareBridge = async () => {
    const { enabled } = await getSolverCapacity({
      originChainId: chainId,
      destinationChainId: toChainId,
    });

    if (!enabled) {
      toast.error(
        'Relay not enabled for selected chains. Please select different chains & try again.',
      );
    }
    return enabled;
  };

  const bridge = async () => {
    const isPrepared = await prepareBridge();
    if (!isPrepared) return;
    await relayBridge({
      wallet,
      chainId,
      toChainId,
      amount: bridgeAmount.toString(),
      currency: 'eth',
      recipient: connectedWallet,
      onProgress: handleProgress,
    });
  };

  useEffect(() => {
    const chains = [convertViemChainToRelayChain(activeChain)];
    createClient({
      baseApiUrl: TESTNET_RELAY_API,
      chains,
    });
  }, [privyWallet]);

  return { bridge };
};

export default useRelayBridge;
