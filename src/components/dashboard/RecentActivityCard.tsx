
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { GraduationCap, Award, FolderKanban, Plus } from 'lucide-react';
import { format, parseISO } from 'date-fns';

// Mock activity data
const activities = [
  {
    id: 1,
    type: 'education',
    title: 'Added Computer Science Degree',
    timestamp: '2023-04-01T10:30:00Z',
  },
  {
    id: 2,
    type: 'certification',
    title: 'Uploaded AWS Certification',
    timestamp: '2023-03-28T14:15:00Z',
  },
  {
    id: 3,
    type: 'project',
    title: 'Created Portfolio Website Project',
    timestamp: '2023-03-25T09:45:00Z',
  },
  {
    id: 4,
    type: 'education',
    title: 'Updated GPA for semester',
    timestamp: '2023-03-20T11:20:00Z',
  },
];

const getActivityIcon = (type: string) => {
  switch (type) {
    case 'education':
      return <GraduationCap className="h-4 w-4" />;
    case 'certification':
      return <Award className="h-4 w-4" />;
    case 'project':
      return <FolderKanban className="h-4 w-4" />;
    default:
      return <Plus className="h-4 w-4" />;
  }
};

const getActivityColor = (type: string) => {
  switch (type) {
    case 'education':
      return 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300';
    case 'certification':
      return 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300';
    case 'project':
      return 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300';
    default:
      return 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300';
  }
};

const RecentActivityCard: React.FC = () => {
  return (
    <Card className="edufolio-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-4">
              <div className={`mt-0.5 p-2 rounded-full ${getActivityColor(activity.type)}`}>
                {getActivityIcon(activity.type)}
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{activity.title}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {format(parseISO(activity.timestamp), 'MMM d, yyyy • h:mm a')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivityCard;
