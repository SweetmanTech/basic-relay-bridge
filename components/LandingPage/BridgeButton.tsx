import Button from '../Button';
import PendingTxModal from '../PendingTxModal';
import useRelayBridge from '@/hooks/useRelayBridge';
import usePrepareWallet from '@/hooks/usePrepareWallet';
import { useBridgeProvider } from '@/providers/BridgeProvider';

const BridgeButton = () => {
  const { prepare } = usePrepareWallet();
  const { bridge } = useRelayBridge();
  const { bridgeAmount, sourceTx } = useBridgeProvider();
  const handleClick = async () => {
    if (!prepare()) return;
    await bridge((bridgeAmount as bigint).toString());
  };

  return (
    <div>
      <Button onClick={handleClick}>Send</Button>
      {sourceTx && <PendingTxModal />}
    </div>
  );
};

export default BridgeButton;
