'use client';

import { createContext, useContext, useMemo, useState } from 'react';
import { Chain } from 'viem';
import { zoraSepolia } from 'viem/chains';

const BridgeContext = createContext(null);

const BridgeProvider = ({ children }: any) => {
  const [bridgeAmount, setBridgeAmount] = useState<bigint>(0n);
  const [sourceTx, setSourceTx] = useState<any>({});
  const [destinationTx, setDestinationTx] = useState<any>({});
  const [destinationChain, setDestinationChain] = useState<Chain>(zoraSepolia);

  const value = useMemo(
    () => ({
      bridgeAmount,
      setBridgeAmount,
      sourceTx,
      setSourceTx,
      destinationTx,
      setDestinationTx,
      destinationChain,
      setDestinationChain,
    }),
    [
      bridgeAmount,
      setBridgeAmount,
      sourceTx,
      setSourceTx,
      destinationTx,
      setDestinationTx,
      destinationChain,
      setDestinationChain,
    ],
  );

  return <BridgeContext.Provider value={value as any}>{children}</BridgeContext.Provider>;
};

export const useBridgeProvider = () => {
  const context = useContext(BridgeContext);
  if (!context) {
    throw new Error('useBridgeProvider must be used within a BridgeProvider');
  }
  return context;
};

export default BridgeProvider;
