'use client';

import BridgeProvider from '@/providers/BridgeProvider';
import LandingPageContent from './LandingPageContent';

const LandingPage = () => (
  <div className="flex font-helvetica flex-col items-center justify-center min-h-screen py-12 sm:py-24 lg:py-36 bg-blend-color-burn">
    <BridgeProvider>
      <LandingPageContent />
    </BridgeProvider>
  </div>
);

export default LandingPage;
