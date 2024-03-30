'use client';

import { usePrivy } from '@privy-io/react-auth';
import { toast } from 'react-toastify';

const usePrepareWallet = () => {
  const { ready, authenticated, login, logout } = usePrivy();
  const disableLogin = ready && authenticated;

  const prepare = () => {
    if (disableLogin) return true;
    login();
    return false;
  };

  const toggleLogin = () => {
    if (disableLogin) {
      logout();
      toast.success('Logged out successfully');
      return;
    }
    login();
  };

  return { prepare, toggleLogin };
};

export default usePrepareWallet;
