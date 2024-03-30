import Button from '../Button';
import PendingTxModal from '../PendingTxModal';
import useRelayBridge from '@/hooks/useRelayBridge';
import usePrepareWallet from '@/hooks/usePrepareWallet';

const BridgeButton = () => {
  const { prepare } = usePrepareWallet();
  const { bridge, sourceTxHash, destinationTxHash } = useRelayBridge();

  const handleClick = async () => {
    if (!prepare()) return;
    const bridgeValue = '1000000000000000';
    await bridge(bridgeValue);
  };

  return (
    <div>
      <Button onClick={handleClick}>Send</Button>
      {sourceTxHash && (
        <PendingTxModal sourceTxHash={sourceTxHash} destinationTxHash={destinationTxHash} />
      )}
    </div>
  );
};

export default BridgeButton;
