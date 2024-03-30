import { getClient } from '@reservoir0x/relay-sdk';

const relayBridge = async ({ wallet, chainId, toChainId, amount, recipient, onProgress }: any) => {
  const client = getClient();

  await client?.actions.bridge({
    wallet,
    chainId,
    toChainId,
    amount,
    currency: 'eth',
    recipient,
    onProgress,
  });
};

export default relayBridge;
