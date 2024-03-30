const shortenTxHash = (txHash: string) => {
  const startLength = 4;
  const endLength = 4;

  if (txHash.length <= startLength + endLength) {
    return txHash;
  }

  return txHash.substring(0, startLength) + '...' + txHash.substring(txHash.length - endLength);
};

export default shortenTxHash;
