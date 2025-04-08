
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Edit2, Trash2 } from 'lucide-react';
import { formatDate } from '@/lib/format';

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string | null;
  gpa?: string;
  description?: string;
  isOngoing: boolean;
}

interface EducationCardProps {
  education: Education;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const EducationCard: React.FC<EducationCardProps> = ({ education, onEdit, onDelete }) => {
  return (
    <Card className="edufolio-card">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold">{education.degree}</h3>
            <p className="text-md text-gray-700 dark:text-gray-300">{education.field}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{education.institution}</p>
            
            <div className="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-400">
              <span>
                {formatDate(education.startDate)} - {education.isOngoing ? 'Present' : education.endDate ? formatDate(education.endDate) : ''}
              </span>
              {education.gpa && (
                <span className="ml-3 px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full">
                  GPA: {education.gpa}
                </span>
              )}
            </div>
            
            {education.description && (
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                {education.description}
              </p>
            )}
          </div>
          
          <div className="flex space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => onEdit(education.id)}
            >
              <Edit2 className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => onDelete(education.id)}
              className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EducationCard;
