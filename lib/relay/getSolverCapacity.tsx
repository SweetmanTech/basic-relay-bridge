import { getClient } from '@reservoir0x/relay-sdk';
import { zeroAddress } from 'viem';

const getSolverCapacity = async ({ originChainId, destinationChainId }: any) => {
  try {
    const { solver, enabled } = await getClient()?.methods.getSolverCapacity({
      originChainId: originChainId.toString(),
      destinationChainId: destinationChainId.toString(),
      currency: zeroAddress,
    });
    return { solver, enabled };
  } catch (error) {
    console.error(error);
    return { error };
  }
};

export default getSolverCapacity;
