import { baseSepolia, zoraSepolia } from 'viem/chains';
import usePrivyWalletClient from './usePrivyWalletClient';
import { WalletClient } from 'viem';
import relayBridge from '@/lib/relay/relayBridge';
import useConnectedWallet from './useConnectedWallet';
import { useEffect, useState } from 'react';
import getSolverCapacity from '@/lib/relay/getSolverCapacity';
import { toast } from 'react-toastify';
import {
  TESTNET_RELAY_API,
  convertViemChainToRelayChain,
  createClient,
} from '@reservoir0x/relay-sdk';
import getViemNetwork from '@/lib/clients/getViemNetwork';
import { SOURCE_CHAINS } from '@/lib/consts';
import { useBridgeProvider } from '@/providers/BridgeProvider';

const useRelayBridge = () => {
  const { connectedWallet, wallet: privyWallet } = useConnectedWallet();
  const chainId = parseInt(privyWallet?.chainId?.split?.(':')[1] || '1', 10);
  const activeChain = getViemNetwork(chainId);
  const { walletClient } = usePrivyWalletClient(activeChain);
  const wallet = walletClient as WalletClient;
  const toChainId = baseSepolia.id;
  const { setSourceTx, setDestinationTx } = useBridgeProvider();

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

  const bridge = async (bridgeValue: string) => {
    const isPrepared = await prepareBridge();

    if (!isPrepared) return;
    await relayBridge({
      wallet,
      chainId,
      toChainId,
      amount: bridgeValue,
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
