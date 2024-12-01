import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Home, Layout } from 'lucide-react';
import { AuthHeader } from './AuthHeader';

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">EduLMS</span>
            </Link>
            
            <div className="hidden md:flex md:ml-8 space-x-8">
              <Link to="/" className="inline-flex items-center px-1 pt-1 text-gray-600 hover:text-indigo-600">
                <Home className="h-5 w-5 mr-1" />
                Home
              </Link>
              <Link to="/dashboard" className="inline-flex items-center px-1 pt-1 text-gray-600 hover:text-indigo-600">
                <Layout className="h-5 w-5 mr-1" />
                Dashboard
              </Link>
            </div>
          </div>
          
          <div className="flex items-center">
            <AuthHeader />
          </div>
        </div>
      </div>
    </nav>
  );
};