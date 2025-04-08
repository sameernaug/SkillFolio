
import React from 'react';
import { Navigate } from 'react-router-dom';
import SignupForm from '@/components/auth/SignupForm';
import { useAuth } from '@/contexts/AuthContext';

const Signup: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </div>
    );
  }
  
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-edufolio-blue/5 to-edufolio-green/5">
      <div className="w-full max-w-md px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-edufolio-blue">MyEdufolio</h1>
          <p className="text-gray-600 mt-2">Create your account to get started</p>
        </div>
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
