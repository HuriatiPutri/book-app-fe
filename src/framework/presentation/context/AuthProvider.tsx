import React, { createContext, ReactNode } from 'react';
import User from '../../../business/domain/User';
import usePersistedState from '../hooks/usePersistance';

interface AuthContextProps {
    children: ReactNode;
}

interface AuthContextValue {
    auth: User | null;
    // eslint-disable-next-line @typescript-eslint/ban-types
    setAuth: React.Dispatch<React.SetStateAction<User | null>>;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

export default function AuthContextProvider({ children }: AuthContextProps) {
  const [auth, setAuth] = usePersistedState('auth','');

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}


