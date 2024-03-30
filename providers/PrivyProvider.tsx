'use client';

import { PrivyProvider as PP } from '@privy-io/react-auth';

export default function PrivyProvider({ children }: { children: React.ReactNode }) {
  return (
    <PP
      appId={process.env.NEXT_PUBLIC_PRIVY_KEY as string}
      config={{
        appearance: {
          theme: 'light',
          accentColor: '#ff5700',
          logo: '/images/zorb.png',
        },
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
        loginMethods: ['wallet'],
      }}
    >
      {children}
    </PP>
  );
}
