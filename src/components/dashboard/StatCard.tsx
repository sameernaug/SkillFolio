
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: string | number;
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon: Icon,
  title,
  value,
  description,
  trend,
  className,
}) => {
  return (
    <Card className={cn("edufolio-card", className)}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
            {description && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{description}</p>
            )}
            {trend && (
              <div className="flex items-center mt-2">
                <span
                  className={cn(
                    "text-xs font-medium",
                    trend.isPositive ? "text-green-600" : "text-red-600"
                  )}
                >
                  {trend.isPositive ? '+' : '-'}{Math.abs(trend.value)}%
                </span>
                <span className="text-xs text-gray-500 ml-1">from last month</span>
              </div>
            )}
          </div>
          <div className="p-3 rounded-full bg-edufolio-blue/10 dark:bg-edufolio-blue/20">
            <Icon className="h-6 w-6 text-edufolio-blue dark:text-edufolio-blue-light" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
