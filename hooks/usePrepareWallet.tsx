import { usePrivy } from '@privy-io/react-auth';

const usePrepareWallet = () => {
  const { ready, authenticated, login } = usePrivy();
  const disableLogin = ready && authenticated;

  const prepare = () => {
    if (!disableLogin) {
      login();
      return false;
    }
    return true;
  };

  return { prepare };
};

export default usePrepareWallet;
