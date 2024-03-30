import { baseSepolia, sepolia } from 'viem/chains';
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

const useRelayBridge = () => {
  const { walletClient } = usePrivyWalletClient(baseSepolia);
  const { connectedWallet } = useConnectedWallet();
  const wallet = walletClient as WalletClient;
  const chainId = baseSepolia.id;
  const toChainId = sepolia.id;
  const [sourceTxHash, setSourceTxHash] = useState<string | null>(null);
  const [destinationTxHash, setDestinationTxHash] = useState<string | null>(null);

  const handleProgress = (steps: any, fees: any, currentStep: any, currentStepItem: any) => {
    const transaction = currentStepItem?.items?.[0]?.txHashes?.[0];
    const txChainId = transaction?.chainId;
    const txHash = transaction?.txHash;
    console.log('SWEETS handleProgress', currentStepItem?.items?.[0]);

    if (!txHash) return;
    if (txChainId === sepolia.id) {
      setDestinationTxHash(txHash);
    }
    if (txChainId === baseSepolia.id) {
      setSourceTxHash(txHash);
    }
  };

  const prepareBridge = async () => {
    const { enabled } = await getSolverCapacity({
      originChainId: baseSepolia.id,
      destinationChainId: sepolia.id,
    });

    if (!enabled) {
      toast.error(
        'Relay not enabled for selected chains. Please select different chains & try again.',
      );
    }
    return enabled;
  };

  const bridge = async (bridgeValue: string) => {
    console.log('SWEETS BRIDGING', bridgeValue);
    const isPrepared = await prepareBridge();
    console.log('SWEETS isPrepared', isPrepared);

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
    createClient({
      baseApiUrl: TESTNET_RELAY_API,
      chains: [convertViemChainToRelayChain(baseSepolia)],
    });
  }, []);

  return { bridge, sourceTxHash, destinationTxHash };
};

export default useRelayBridge;
