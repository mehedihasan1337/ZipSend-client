import React, { use } from 'react';
import { AuthContext } from '../assets/contexts/AuthContext/AuthContext';

const useAuth = () => {
  const authInfo=use(AuthContext)
  return authInfo
};

export default useAuth;