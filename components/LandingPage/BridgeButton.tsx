import Button from '../Button';
import { getClient } from '@reservoir0x/relay-sdk';
import { baseSepolia, sepolia } from 'viem/chains';
import { toast } from 'react-toastify';
import getSolverCapacity from '@/lib/relay/getSolverCapacity';
import { usePrivy } from '@privy-io/react-auth';

const BridgeButton = () => {
  const { ready, authenticated, login } = usePrivy();
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

    // const quote = await getClient()?.methods.getBridgeQuote({
    //   wallet,
    //   chainId: 1, // The chain id to bridge from
    //   toChainId: 7777777, // The chain id to bridge to
    //   amount: '100000000000000000', // Amount in wei to bridge
    //   currency: 'eth', // `eth` | `usdc`
    //   recipient, // A valid address to send the funds to
    // });
  };
  return <Button onClick={handleClick}>Send</Button>;
};

export default BridgeButton;
