
import React, { useState } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import EducationCard, { Education } from '@/components/education/EducationCard';
import EducationForm from '@/components/education/EducationForm';
import { mockEducations } from '@/lib/mock-data';
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

const EducationPage: React.FC = () => {
  const [educations, setEducations] = useState<Education[]>(mockEducations);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentEducation, setCurrentEducation] = useState<Education | undefined>(undefined);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const handleAddClick = () => {
    setCurrentEducation(undefined);
    setIsFormOpen(true);
  };

  const handleEditClick = (id: string) => {
    const education = educations.find(e => e.id === id);
    if (education) {
      setCurrentEducation(education);
      setIsFormOpen(true);
    }
  };

  const handleDeleteClick = (id: string) => {
    setDeleteId(id);
  };

  const confirmDelete = () => {
    if (deleteId) {
      setEducations(educations.filter(e => e.id !== deleteId));
      toast.success('Education entry deleted');
      setDeleteId(null);
    }
  };

  const handleSave = (education: Omit<Education, 'id'> & { id?: string }) => {
    if (education.id) {
      // Update existing education
      setEducations(educations.map(e => 
        e.id === education.id ? { ...education, id: education.id } as Education : e
      ));
      toast.success('Education updated successfully');
    } else {
      // Add new education
      const newEducation = {
        ...education,
        id: `education-${Date.now()}`
      } as Education;
      setEducations([newEducation, ...educations]);
      toast.success('Education added successfully');
    }
    setIsFormOpen(false);
  };

  return (
    <AppLayout>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Education</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage your academic qualifications
          </p>
        </div>
        <Button onClick={handleAddClick} className="bg-edufolio-blue hover:bg-edufolio-blue-dark">
          <Plus className="mr-2 h-4 w-4" />
          Add Education
        </Button>
      </div>

      {educations.length === 0 ? (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center">
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">No education entries yet</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Add your first education qualification to get started.</p>
          <Button onClick={handleAddClick} variant="outline" className="mt-4">
            <Plus className="mr-2 h-4 w-4" />
            Add Education
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {educations.map(education => (
            <EducationCard
              key={education.id}
              education={education}
              onEdit={handleEditClick}
              onDelete={handleDeleteClick}
            />
          ))}
        </div>
      )}

      <EducationForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSave}
        education={currentEducation}
      />

      <AlertDialog open={!!deleteId} onOpenChange={(open) => !open && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this education entry.
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

export default EducationPage;
