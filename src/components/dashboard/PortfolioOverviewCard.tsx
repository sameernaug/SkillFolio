
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface PortfolioStat {
  name: string;
  count: number;
  total: number;
  color: string;
}

const stats: PortfolioStat[] = [
  {
    name: 'Education',
    count: 3,
    total: 5,
    color: 'bg-edufolio-blue'
  },
  {
    name: 'Certifications',
    count: 4,
    total: 10,
    color: 'bg-edufolio-green-dark'
  },
  {
    name: 'Projects',
    count: 6,
    total: 8,
    color: 'bg-purple-500'
  },
  {
    name: 'Skills',
    count: 12,
    total: 20,
    color: 'bg-amber-500'
  }
];

const PortfolioOverviewCard: React.FC = () => {
  return (
    <Card className="edufolio-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Portfolio Completion</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {stats.map((stat) => (
            <div key={stat.name} className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{stat.name}</span>
                <span className="text-sm text-gray-500">
                  {stat.count}/{stat.total}
                </span>
              </div>
              <Progress 
                value={(stat.count / stat.total) * 100} 
                className="h-2"
                indicatorClassName={stat.color}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioOverviewCard;
