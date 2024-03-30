'use client';

import Button from '../Button';
import PendingTxModal from '../PendingTxModal';
import useRelayBridge from '@/hooks/useRelayBridge';
import usePrepareWallet from '@/hooks/usePrepareWallet';
import { useBridgeProvider } from '@/providers/BridgeProvider';
import { useState } from 'react';
import Spinner from '../Spinner';

const BridgeButton = () => {
  const { prepare } = usePrepareWallet();
  const { bridge } = useRelayBridge();
  const { sourceTx } = useBridgeProvider() as any;
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = async () => {
    if (loading) return;
    if (!prepare()) return;
    setLoading(true);
    await bridge();
    setLoading(false);
  };

  return (
    <div>
      <Button
        disabled={loading}
        onClick={handleClick}
        className="!bg-[#ff5700] flex gap-5 min-h-[50px]"
      >
        {loading && <Spinner size={30} />}
        {loading ? 'Bridging...' : 'Bridge'}
      </Button>
      {sourceTx?.txHash && <PendingTxModal />}
    </div>
  );
};

export default BridgeButton;
