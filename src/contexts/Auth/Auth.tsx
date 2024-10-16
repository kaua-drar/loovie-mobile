import { meRequest } from '@/requests';
import { useQuery } from '@tanstack/react-query';
import { SplashScreen } from 'expo-router';
import { createContext, PropsWithChildren, useContext } from 'react';
import { AuthContextData } from './Auth.types';

const AuthContext = createContext({} as AuthContextData);

SplashScreen.preventAutoHideAsync();

export function AuthProvider({ children }: PropsWithChildren) {
  const { data: user, isLoading: isLoadingUser } = useQuery({
    queryKey: ['users', 'me'],
    queryFn: meRequest,
  });

  return (
    <AuthContext.Provider value={{ user, isLoadingUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
