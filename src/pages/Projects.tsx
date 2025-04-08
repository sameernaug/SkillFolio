
import React, { useState } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import ProjectCard, { Project } from '@/components/projects/ProjectCard';
import { mockProjects } from '@/lib/mock-data';
import { toast } from 'sonner';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const handleAddClick = () => {
    toast.info('Project form will be implemented in the next phase');
  };

  const handleEditClick = (id: string) => {
    toast.info('Project edit will be implemented in the next phase');
  };

  const handleDeleteClick = (id: string) => {
    setDeleteId(id);
  };

  const confirmDelete = () => {
    if (deleteId) {
      setProjects(projects.filter(p => p.id !== deleteId));
      toast.success('Project deleted');
      setDeleteId(null);
    }
  };

  return (
    <AppLayout>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Projects</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Showcase your work and achievements
          </p>
        </div>
        <Button onClick={handleAddClick} className="bg-edufolio-blue hover:bg-edufolio-blue-dark">
          <Plus className="mr-2 h-4 w-4" />
          Add Project
        </Button>
      </div>

      {projects.length === 0 ? (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center">
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">No projects yet</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Add your first project to showcase your work.</p>
          <Button onClick={handleAddClick} variant="outline" className="mt-4">
            <Plus className="mr-2 h-4 w-4" />
            Add Project
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onEdit={handleEditClick}
              onDelete={handleDeleteClick}
            />
          ))}
        </div>
      )}

      <AlertDialog open={!!deleteId} onOpenChange={(open) => !open && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this project.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-red-500 hover:bg-red-600">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </AppLayout>
  );
};

export default ProjectsPage;
