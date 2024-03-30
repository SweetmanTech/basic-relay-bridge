import {
  optimism,
  optimismSepolia,
  baseSepolia,
  base,
  sepolia,
  mainnet,
  zora,
  zoraSepolia,
} from 'viem/chains';

import ethereumIcon from '../public/icons/Ethereum.svg';
import optimismIcon from '../public/icons/Optimism.svg';
import baseIcon from '../public/icons/Base.svg';
import zoraIcon from '../public/images/zorb.png';

const getChainIcon = (chainId: number) => {
  switch (chainId) {
    case base.id:
    case baseSepolia.id:
      return baseIcon;
    case optimism.id:
    case optimismSepolia.id:
      return optimismIcon;
    case mainnet.id:
    case sepolia.id:
      return ethereumIcon;
    case zora.id:
    case zoraSepolia.id:
      return zoraIcon;
    default:
      return ethereumIcon;
  }
};

export default getChainIcon;
