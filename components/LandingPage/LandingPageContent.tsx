'use client';

import useConnectedWallet from '@/hooks/useConnectedWallet';
import MadeBySweets from '../MadeBySweets';
import Swap from '../Swap';
import BridgeButton from './BridgeButton';
import LandingPageHeader from './LandingPageHeader';

const LandingPageContent = () => {
  const { connectedWallet } = useConnectedWallet();

  return (
    <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center sm:gap-8 md:px-6">
      <LandingPageHeader />
      {connectedWallet && <Swap />}
      {connectedWallet && <BridgeButton />}
      <MadeBySweets />
    </div>
  );
};

export default LandingPageContent;
