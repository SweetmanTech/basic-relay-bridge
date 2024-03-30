import {
  createClient,
  convertViemChainToRelayChain,
  TESTNET_RELAY_API,
} from '@reservoir0x/relay-sdk';
import { baseSepolia } from 'viem/chains';

createClient({
  baseApiUrl: TESTNET_RELAY_API,
  chains: [convertViemChainToRelayChain(baseSepolia)],
});
