
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { useAuth } from '@/contexts/AuthContext';
import { GraduationCap, Award, FolderKanban, BarChart3 } from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard';
import RecentActivityCard from '@/components/dashboard/RecentActivityCard';
import PortfolioOverviewCard from '@/components/dashboard/PortfolioOverviewCard';
import { mockEducations, mockProjects, mockCertifications } from '@/lib/mock-data';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  
  // Statistics
  const stats = [
    {
      title: 'Education',
      value: mockEducations.length,
      icon: GraduationCap,
      description: 'Academic qualifications',
    },
    {
      title: 'Projects',
      value: mockProjects.length,
      icon: FolderKanban,
      description: 'Portfolio projects',
      trend: { value: 20, isPositive: true },
    },
    {
      title: 'Certifications',
      value: mockCertifications.length,
      icon: Award,
      description: 'Professional certifications',
    },
    {
      title: 'Profile Views',
      value: 158,
      icon: BarChart3,
      description: 'Last 30 days',
      trend: { value: 12, isPositive: true },
    },
  ];

  return (
    <AppLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Welcome back, {user?.name || 'User'}!</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Here's an overview of your portfolio
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            title={stat.title}
            value={stat.value}
            description={stat.description}
            trend={stat.trend}
          />
        ))}
      </div>

      {/* Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentActivityCard />
        </div>
        <div>
          <PortfolioOverviewCard />
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
