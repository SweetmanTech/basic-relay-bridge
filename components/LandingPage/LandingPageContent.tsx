import { useEffect } from 'react';
import MadeBySweets from '../MadeBySweets';
import BridgeButton from './BridgeButton';
import LandingPageHeader from './LandingPageHeader';
import {
  TESTNET_RELAY_API,
  convertViemChainToRelayChain,
  createClient,
} from '@reservoir0x/relay-sdk';
import { baseSepolia } from 'viem/chains';

const LandingPageContent = () => {
  useEffect(() => {
    createClient({
      baseApiUrl: TESTNET_RELAY_API,
      chains: [convertViemChainToRelayChain(baseSepolia)],
    });
  }, []);

  return (
    <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center sm:gap-8 md:px-6">
      <LandingPageHeader />
      <BridgeButton />
      <MadeBySweets />
    </div>
  );
};

export default LandingPageContent;
