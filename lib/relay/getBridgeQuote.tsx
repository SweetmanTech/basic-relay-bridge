import { getClient } from '@reservoir0x/relay-sdk';

const getBridgeQuote = async ({ wallet, chainId, toChainId, amount, recipient }: any) => {
  const response = await getClient()?.methods.getBridgeQuote({
    wallet,
    chainId,
    toChainId,
    amount,
    currency: 'eth',
    recipient,
  });
  return response;
};

export default getBridgeQuote;
