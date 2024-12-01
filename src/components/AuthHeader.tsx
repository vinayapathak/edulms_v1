import React from 'react';
import { User, LogIn } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export const AuthHeader: React.FC = () => {
  const { user, isAuthenticated } = useAuthStore();

  return (
    <div className="flex items-center space-x-4">
      {isAuthenticated && user ? (
        <div className="flex items-center space-x-3">
          <span className="text-gray-700">{user.name}</span>
          <button className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors">
            <User className="h-5 w-5" />
            <span>Profile</span>
          </button>
        </div>
      ) : (
        <button className="flex items-center space-x-2 bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-lg transition-colors">
          <LogIn className="h-5 w-5" />
          <span>Login</span>
        </button>
      )}
    </div>
  );
};