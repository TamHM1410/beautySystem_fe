import { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { User } from '@/models/user.model';

interface AuthContextType {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const savedUser = localStorage.getItem('user');
  const [user, setUser] = useState<User | null>(null);

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    toast.success('Logged out successfully');
  };

  useEffect(() => {
    if (!savedUser) {
      return setUser(null);
    }

    setUser(JSON.parse(savedUser));
  }, [savedUser]);

  console.log(user, 'user');

  return <AuthContext.Provider value={{ user, setUser, logout }}>{children}</AuthContext.Provider>;
};
export const useAuth = () => {
  return useContext(AuthContext);
};
