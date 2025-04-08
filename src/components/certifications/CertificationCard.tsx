
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Edit2, Trash2, FileText, Calendar } from 'lucide-react';
import { formatDate } from '@/lib/format';

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  fileUrl?: string;
  thumbnailUrl?: string;
}

interface CertificationCardProps {
  certification: Certification;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onView: (certification: Certification) => void;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ 
  certification, 
  onEdit, 
  onDelete,
  onView
}) => {
  return (
    <Card className="edufolio-card overflow-hidden">
      <CardContent className="p-0">
        <div 
          className="w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center cursor-pointer"
          onClick={() => onView(certification)}
        >
          {certification.thumbnailUrl ? (
            <img 
              src={certification.thumbnailUrl} 
              alt={certification.name} 
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="text-center p-6">
              <FileText className="h-12 w-12 mx-auto text-gray-400" />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Certificate Preview</p>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-bold">{certification.name}</h3>
              <p className="text-md text-gray-700 dark:text-gray-300">{certification.issuer}</p>
              
              <div className="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="h-4 w-4 mr-1" />
                <span>Issued: {formatDate(certification.issueDate)}</span>
                
                {certification.expiryDate && (
                  <span className="ml-3">
                    Expires: {formatDate(certification.expiryDate)}
                  </span>
                )}
              </div>
              
              {certification.credentialId && (
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Credential ID: {certification.credentialId}
                </p>
              )}
              
              {certification.credentialUrl && (
                <Button 
                  variant="link" 
                  className="mt-2 h-auto p-0 text-edufolio-blue dark:text-edufolio-blue-light" 
                  asChild
                >
                  <a href={certification.credentialUrl} target="_blank" rel="noopener noreferrer">
                    Verify Credential
                  </a>
                </Button>
              )}
            </div>
            
            <div className="flex space-x-2">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => onEdit(certification.id)}
              >
                <Edit2 className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => onDelete(certification.id)}
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

export default CertificationCard;
