import { getClient } from '@reservoir0x/relay-sdk';

const bridge = async ({ wallet, chainId, toChainId, amount, recipient, onProgress }: any) => {
  await getClient()?.actions.bridge({
    wallet,
    chainId,
    toChainId,
    amount,
    currency: 'eth',
    recipient,
    onProgress,
  });
};

export default bridge;
