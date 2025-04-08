
import React, { useState } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { Plus, X } from 'lucide-react';
import CertificationCard, { Certification } from '@/components/certifications/CertificationCard';
import { mockCertifications } from '@/lib/mock-data';
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const CertificationsPage: React.FC = () => {
  const [certifications, setCertifications] = useState<Certification[]>(mockCertifications);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [viewCertification, setViewCertification] = useState<Certification | null>(null);

  const handleAddClick = () => {
    toast.info('Certification form will be implemented in the next phase');
  };

  const handleEditClick = (id: string) => {
    toast.info('Certification edit will be implemented in the next phase');
  };

  const handleDeleteClick = (id: string) => {
    setDeleteId(id);
  };

  const handleViewCertification = (certification: Certification) => {
    setViewCertification(certification);
  };

  const confirmDelete = () => {
    if (deleteId) {
      setCertifications(certifications.filter(c => c.id !== deleteId));
      toast.success('Certification deleted');
      setDeleteId(null);
    }
  };

  return (
    <AppLayout>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Certifications</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage your professional certifications
          </p>
        </div>
        <Button onClick={handleAddClick} className="bg-edufolio-blue hover:bg-edufolio-blue-dark">
          <Plus className="mr-2 h-4 w-4" />
          Add Certification
        </Button>
      </div>

      {certifications.length === 0 ? (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center">
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">No certifications yet</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Add your first certification to showcase your credentials.</p>
          <Button onClick={handleAddClick} variant="outline" className="mt-4">
            <Plus className="mr-2 h-4 w-4" />
            Add Certification
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map(certification => (
            <CertificationCard
              key={certification.id}
              certification={certification}
              onEdit={handleEditClick}
              onDelete={handleDeleteClick}
              onView={handleViewCertification}
            />
          ))}
        </div>
      )}

      <AlertDialog open={!!deleteId} onOpenChange={(open) => !open && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this certification.
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

      <Dialog open={!!viewCertification} onOpenChange={(open) => !open && setViewCertification(null)}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>{viewCertification?.name}</DialogTitle>
            <DialogDescription>
              Issued by {viewCertification?.issuer}
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-4 flex justify-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
            {viewCertification?.thumbnailUrl ? (
              <img 
                src={viewCertification.thumbnailUrl} 
                alt={viewCertification.name} 
                className="max-w-full max-h-[60vh] object-contain"
              />
            ) : (
              <div className="p-12 text-center">
                <div className="text-6xl text-gray-300 mb-4">📜</div>
                <p className="text-gray-500">Certificate preview not available</p>
              </div>
            )}
          </div>
          
          <DialogFooter>
            {viewCertification?.credentialUrl && (
              <Button asChild>
                <a href={viewCertification.credentialUrl} target="_blank" rel="noopener noreferrer">
                  Verify Credential
                </a>
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AppLayout>
  );
};

export default CertificationsPage;
