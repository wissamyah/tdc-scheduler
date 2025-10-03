import { createContext, useContext, useState, useEffect } from 'react';
import {
  loginUser as loginUserService,
  logoutUser as logoutUserService,
  getCurrentUser as getCurrentUserService,
  changePassword as changePasswordService,
  registerUser as registerUserService,
  isAuthSystemInitialized as checkAuthInitialized
} from '../services/userAuth';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authInitialized, setAuthInitialized] = useState(false);

  // Check authentication status on mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      setLoading(true);

      // Check if auth system is initialized
      const initialized = await checkAuthInitialized();
      setAuthInitialized(initialized);

      // Check if user is logged in
      const user = getCurrentUserService();
      setCurrentUser(user);
    } catch (error) {
      console.error('Error checking auth status:', error);
      setCurrentUser(null);
      setAuthInitialized(false);
    } finally {
      setLoading(false);
    }
  };

  const login = async (username, password) => {
    try {
      const user = await loginUserService(username, password);
      setCurrentUser(user);
      return user;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      await registerUserService(userData);
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  };

  const logout = () => {
    logoutUserService();
    setCurrentUser(null);
  };

  const changePassword = async (oldPassword, newPassword) => {
    try {
      await changePasswordService(oldPassword, newPassword);
      // Update current user to reflect firstLogin change
      const updatedUser = { ...currentUser, firstLogin: false };
      setCurrentUser(updatedUser);
      return true;
    } catch (error) {
      console.error('Change password error:', error);
      throw error;
    }
  };

  const refreshAuthStatus = async () => {
    await checkAuthStatus();
  };

  const isAdmin = () => {
    return currentUser && currentUser.role === 'admin';
  };

  const isOfficer = () => {
    return currentUser && (currentUser.role === 'admin' || currentUser.role === 'officer');
  };

  const isMember = () => {
    return currentUser && ['admin', 'officer', 'member'].includes(currentUser.role);
  };

  const value = {
    currentUser,
    loading,
    authInitialized,
    login,
    register,
    logout,
    changePassword,
    refreshAuthStatus,
    isAdmin,
    isOfficer,
    isMember,
    isAuthenticated: !!currentUser
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
