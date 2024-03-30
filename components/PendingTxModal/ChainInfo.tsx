import shortenTxHash from '@/lib/shortenTxHash';
import Image from 'next/image';
import { baseSepolia } from 'viem/chains';

const ChainInfo = ({ size, title = 'from', chain = baseSepolia, txHash = null }: any) => {
  const blockExplorer = chain.blockExplorers.default.url;
  const linkToTx = `${blockExplorer}/tx/${txHash}`;
  console.log('SWEETS CHAIN', chain);
  return (
    <div className="flex flex-col gap-2">
      <Image
        src="/images/zorb.png"
        alt={chain.name}
        width={size}
        height={size}
        className="w-12 h-12 mx-auto text-5xl"
      />
      <p className="text-sm font-medium tracking-wide uppercase dark:text-gray-400">{title}</p>
      <p className="text-sm font-medium tracking-wide uppercase dark:text-gray-400">{chain.name}</p>
      {txHash && (
        <a
          href={linkToTx}
          target="_blank"
          className="text-sm font-medium tracking-wide uppercase dark:text-gray-400"
        >
          tx hash: {shortenTxHash(txHash)}
        </a>
      )}
    </div>
  );
};

export default ChainInfo;
