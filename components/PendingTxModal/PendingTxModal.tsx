import Image from 'next/image';
import ChainInfo from './ChainInfo';
import { useBridgeProvider } from '@/providers/BridgeProvider';
import getViemNetwork from '@/lib/clients/getViemNetwork';

const PendingTxModal = () => {
  const size = 50;
  const { sourceTx, destinationTx } = useBridgeProvider() as any;

  return (
    <div className="flex items-center justify-center px-4 text-center fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl min-w-[555px] min-h-[555px] flex flex-col justify-around">
        <div className="text-4xl my-4 self-center">Bridging</div>

        <div className="flex-grow flex items-center justify-center">
          <div className="w-full rounded-lg p-4">
            <div className="flex w-full justify-around items-center">
              <ChainInfo
                title="from"
                size={size}
                chain={getViemNetwork(sourceTx?.chainId)}
                txHash={sourceTx?.txHash}
              />
              {destinationTx?.txHash ? (
                <Image src="/images/success.gif" width={3 * size} height={size} alt="arrow" />
              ) : (
                <Image src="/images/bridging.gif" width={3 * size} height={size} alt="arrow" />
              )}
              <ChainInfo
                title="to"
                size={size}
                chain={getViemNetwork(destinationTx?.chainId)}
                txHash={destinationTx?.txHash}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingTxModal;
