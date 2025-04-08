
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { GraduationCap, Award, FolderKanban, UserCircle } from 'lucide-react';

const Index: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-edufolio-blue/10 to-edufolio-green/10" />
        
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              MyEdufolio
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              Your personal educational portfolio platform. Showcase your academic journey, projects, and certifications in one beautiful place.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Button 
                onClick={() => navigate('/signup')}
                className="bg-edufolio-blue hover:bg-edufolio-blue-dark text-white px-6 py-5 text-lg"
                size="lg"
              >
                Get Started
              </Button>
              <Button 
                onClick={() => navigate('/login')}
                variant="outline"
                className="text-edufolio-blue border-edufolio-blue hover:bg-edufolio-blue/10 px-6 py-5 text-lg"
                size="lg"
              >
                Log In
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Everything you need to showcase your education
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              All your educational accomplishments in one organized, beautiful portfolio
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="bg-edufolio-blue/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-edufolio-blue" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Education Tracking</h3>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                  Record and showcase your educational journey, degrees, and academic achievements.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="bg-edufolio-green/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <FolderKanban className="h-6 w-6 text-edufolio-green" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Project Showcase</h3>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                  Display your projects with details, links, and technologies used.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Certification Management</h3>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                  Upload and organize your certifications and credentials in one place.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <UserCircle className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Professional Profile</h3>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                  Create a professional profile that highlights your skills and accomplishments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-edufolio-blue to-edufolio-blue-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ready to showcase your educational journey?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            Join thousands of students and professionals who are using MyEdufolio to present their accomplishments.
          </p>
          <div className="mt-8">
            <Button 
              onClick={() => navigate('/signup')}
              className="bg-white text-edufolio-blue hover:bg-gray-50 px-6 py-5 text-lg"
              size="lg"
            >
              Create Your Portfolio Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center md:justify-start">
              <h2 className="text-xl font-bold text-edufolio-blue">MyEdufolio</h2>
            </div>
            <div className="mt-8 md:mt-0">
              <p className="text-center md:text-right text-base text-gray-500">
                &copy; 2024 MyEdufolio. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
