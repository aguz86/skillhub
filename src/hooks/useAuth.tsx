import React, { createContext, useContext, useEffect, useState } from 'react';

interface User {
  uid: string;
  displayName: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  loginWithPin: (pin: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  error: null,
  loginWithPin: async () => {},
  logout: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('userPinLoggedIn');
    if (loggedInUser === 'true') {
      setUser({ uid: 'student', displayName: 'Student' });
    } else {
      setUser(null);
    }
    setLoading(false);
  }, []);

  const loginWithPin = async (pin: string) => {
    setError(null);
    if (pin === '100699') {
      localStorage.setItem('userPinLoggedIn', 'true');
      setUser({ uid: 'student', displayName: 'Student' });
    } else {
      setError("PIN salah. Silakan coba lagi.");
    }
  };

  const logout = async () => {
    localStorage.removeItem('userPinLoggedIn');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, loginWithPin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
