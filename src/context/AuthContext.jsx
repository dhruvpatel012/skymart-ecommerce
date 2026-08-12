import React, { createContext, useState, useEffect } from 'react';
import { storage } from '../utils/storage';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => storage.get('skymart_current_user', null));

  useEffect(() => {
    if (currentUser) {
      storage.set('skymart_current_user', currentUser);
    } else {
      storage.remove('skymart_current_user');
    }
  }, [currentUser]);

  const register = ({ name, email, password }) => {
    const users = storage.get('skymart_users', []) || [];
    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = users.find((u) => u.email.trim().toLowerCase() === normalizedEmail);
    if (existingUser) {
      return { success: false, message: 'Email is already registered' };
    }

    const newUser = {
      id: `user_${Date.now()}`,
      name: name.trim(),
      email: normalizedEmail,
      password,
      createdAt: new Date().toISOString(),
    };

    const updatedUsers = [...users, newUser];
    storage.set('skymart_users', updatedUsers);
    setCurrentUser(newUser);

    return { success: true, user: newUser };
  };

  const login = ({ email, password }) => {
    const users = storage.get('skymart_users', []) || [];
    const normalizedEmail = email.trim().toLowerCase();

    const user = users.find(
      (u) => u.email.trim().toLowerCase() === normalizedEmail && u.password === password
    );

    if (!user) {
      return { success: false, message: 'Invalid email or password' };
    }

    setCurrentUser(user);
    return { success: true, user };
  };

  const logout = () => {
    setCurrentUser(null);
    storage.remove('skymart_current_user');
  };

  const updateProfile = ({ name, email }) => {
    if (!currentUser) return { success: false, message: 'Not authenticated' };

    const users = storage.get('skymart_users', []) || [];
    const normalizedEmail = email.trim().toLowerCase();

    const duplicate = users.find(
      (u) => u.id !== currentUser.id && u.email.trim().toLowerCase() === normalizedEmail
    );
    if (duplicate) {
      return { success: false, message: 'Email is already in use' };
    }

    const updatedUser = {
      ...currentUser,
      name: name.trim(),
      email: normalizedEmail,
    };

    const updatedUsers = users.map((u) => (u.id === currentUser.id ? updatedUser : u));
    storage.set('skymart_users', updatedUsers);
    setCurrentUser(updatedUser);

    return { success: true, user: updatedUser };
  };

  const value = {
    currentUser,
    isAuthenticated: !!currentUser,
    login,
    register,
    logout,
    updateProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
