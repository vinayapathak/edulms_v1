import { create } from 'zustand';
import { AuthState } from '../types/user';

export const useAuthStore = create<AuthState>(() => ({
  user: null,
  isAuthenticated: false,
}));