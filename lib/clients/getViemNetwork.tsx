import {
  goerli,
  mainnet,
  optimism,
  polygon,
  polygonMumbai,
  sepolia,
  baseSepolia,
  optimismSepolia,
  base,
  zoraSepolia,
  holesky,
} from 'viem/chains';

const getViemNetwork = (chainId: number) => {
  switch (chainId) {
    case mainnet.id:
      return mainnet;
    case polygon.id:
      return polygon;
    case base.id:
      return base;
    case optimism.id:
      return optimism;
    case goerli.id:
      return goerli;
    case polygonMumbai.id:
      return polygonMumbai;
    case sepolia.id:
      return sepolia;
    case holesky.id:
      return holesky;
    case baseSepolia.id:
      return baseSepolia;
    case optimismSepolia.id:
      return optimismSepolia;
    case zoraSepolia.id:
      return zoraSepolia;
    default:
      return mainnet;
  }
};

export default getViemNetwork;
