import Button from '../Button';
import { baseSepolia, sepolia } from 'viem/chains';
import { toast } from 'react-toastify';
import getSolverCapacity from '@/lib/relay/getSolverCapacity';
import { usePrivy } from '@privy-io/react-auth';
import usePrivyWalletClient from '@/hooks/usePrivyWalletClient';
import useConnectedWallet from '@/hooks/useConnectedWallet';
import { Execute, getClient } from '@reservoir0x/relay-sdk';
import { WalletClient } from 'viem';

const BridgeButton = () => {
  const { ready, authenticated, login } = usePrivy();
  const { connectedWallet } = useConnectedWallet();
  const { walletClient } = usePrivyWalletClient(baseSepolia);
  const disableLogin = ready && authenticated;

  const handleClick = async () => {
    if (!disableLogin) {
      login();
      return;
    }
    const { solver, enabled } = await getSolverCapacity({
      originChainId: baseSepolia.id,
      destinationChainId: sepolia.id,
    });
    console.log('SWEETS solver', solver);
    console.log('SWEETS enabled', enabled);
    if (!enabled) {
      toast.error(
        'Relay not enabled for selected chains. Please select different chains & try again.',
      );
    }

    console.log('SWEETS walletClient', walletClient);

    const bridgeValue = '1000000000000000';
    const wallet = walletClient as WalletClient;
    const chainId = baseSepolia.id;
    const toChainId = sepolia.id;
    const quote = (await getClient()?.methods.getBridgeQuote({
      wallet,
      chainId,
      toChainId,
      amount: bridgeValue, // Amount in wei to bridge
      currency: 'eth',
      recipient: connectedWallet, // A valid address to send the funds to
    })) as any;

    const { gas, relayer } = quote.fees;
    console.log('SWEETS quote', quote);
    console.log('SWEETS gas', gas);
    console.log('SWEETS relayer', relayer);

    const totalValue = BigInt(bridgeValue) + BigInt(gas) + BigInt(relayer);
    console.log('SWEETS totalValue', totalValue);

    await getClient()?.actions.bridge({
      wallet,
      chainId,
      toChainId,
      amount: bridgeValue,
      currency: 'eth',
      recipient: connectedWallet,
      onProgress: (steps, fees, currentStep, currentStepItem) => {
        console.log('SWEETS', steps, fees, currentStep, currentStepItem);
      },
    });
  };
  return <Button onClick={handleClick}>Send</Button>;
};

export default BridgeButton;
