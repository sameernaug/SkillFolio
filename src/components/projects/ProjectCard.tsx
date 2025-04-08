import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Edit2, Trash2, ExternalLink, Github } from 'lucide-react';
import { formatDate } from '@/lib/format';
import { Badge } from '@/components/ui/badge';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  startDate: string;
  endDate?: string;
  isOngoing: boolean;
}

interface ProjectCardProps {
  project: Project;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onEdit, onDelete }) => {
  return (
    <Card className="edufolio-card overflow-hidden">
      <CardContent className="p-0">
        {project.imageUrl && (
          <div className="w-full h-48 overflow-hidden">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-bold">{project.title}</h3>
              
              <div className="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                <span>
                  {formatDate(project.startDate)} - {project.isOngoing ? 'Present' : project.endDate ? formatDate(project.endDate) : ''}
                </span>
              </div>
              
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-4 flex space-x-2">
                {project.githubUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                )}
                
                {project.liveUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
            
            <div className="flex space-x-2">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => onEdit(project.id)}
              >
                <Edit2 className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => onDelete(project.id)}
                className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
