import { getClient } from '@reservoir0x/relay-sdk';

const relayBridge = async ({ wallet, chainId, toChainId, amount, recipient, onProgress }: any) => {
  console.log('SWEETS getClient()?.actions.bridge', amount);
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

export default relayBridge;
