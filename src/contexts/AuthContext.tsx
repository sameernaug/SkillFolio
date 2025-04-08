
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';

export type User = {
  id: string;
  email: string;
  name: string;
  avatar?: string;
};

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data for demo purposes
const MOCK_USERS = [
  {
    id: '1',
    email: 'demo@example.com',
    password: 'password123',
    name: 'Demo User',
    avatar: 'https://ui-avatars.com/api/?name=Demo+User&background=4A6FA5&color=fff',
  },
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session in localStorage
    const storedUser = localStorage.getItem('edufolio_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse stored user:', error);
        localStorage.removeItem('edufolio_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    try {
      // Find user in mock data
      const foundUser = MOCK_USERS.find(u => u.email === email && u.password === password);
      
      if (!foundUser) {
        throw new Error('Invalid email or password');
      }
      
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('edufolio_user', JSON.stringify(userWithoutPassword));
      toast.success('Logged in successfully');
    } catch (error) {
      toast.error((error as Error).message || 'Login failed');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (email: string, password: string, name: string) => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    try {
      // Check if user already exists
      if (MOCK_USERS.some(u => u.email === email)) {
        throw new Error('Email already in use');
      }
      
      // For demo purposes only - in a real app, you would call an API
      const newUser = {
        id: String(MOCK_USERS.length + 1),
        email,
        name,
        avatar: `https://ui-avatars.com/api/?name=${name.replace(' ', '+')}&background=4A6FA5&color=fff`,
      };
      
      setUser(newUser);
      localStorage.setItem('edufolio_user', JSON.stringify(newUser));
      toast.success('Account created successfully');
    } catch (error) {
      toast.error((error as Error).message || 'Signup failed');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('edufolio_user');
    toast.success('Logged out successfully');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
