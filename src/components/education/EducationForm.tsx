
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Education } from './EducationCard';

interface EducationFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (education: Omit<Education, 'id'> & { id?: string }) => void;
  education?: Education;
}

const initialState: Omit<Education, 'id'> = {
  institution: '',
  degree: '',
  field: '',
  startDate: '',
  endDate: null,
  gpa: '',
  description: '',
  isOngoing: false,
};

const EducationForm: React.FC<EducationFormProps> = ({ isOpen, onClose, onSave, education }) => {
  const [formData, setFormData] = useState<Omit<Education, 'id'> & { id?: string }>(initialState);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  useEffect(() => {
    if (education) {
      setFormData(education);
      setStartDate(education.startDate ? new Date(education.startDate) : undefined);
      setEndDate(education.endDate ? new Date(education.endDate) : undefined);
    } else {
      setFormData(initialState);
      setStartDate(undefined);
      setEndDate(undefined);
    }
  }, [education, isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ 
      ...prev, 
      isOngoing: checked,
      endDate: checked ? null : prev.endDate
    }));
  };

  const handleStartDateSelect = (date: Date | undefined) => {
    setStartDate(date);
    if (date) {
      setFormData((prev) => ({ ...prev, startDate: date.toISOString() }));
    }
  };

  const handleEndDateSelect = (date: Date | undefined) => {
    setEndDate(date);
    if (date) {
      setFormData((prev) => ({ ...prev, endDate: date.toISOString() }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>{education ? 'Edit Education' : 'Add Education'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="institution">Institution</Label>
              <Input
                id="institution"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                placeholder="University or School"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="degree">Degree</Label>
              <Input
                id="degree"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                placeholder="Bachelor's, Master's, etc."
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="field">Field of Study</Label>
            <Input
              id="field"
              name="field"
              value={formData.field}
              onChange={handleChange}
              placeholder="Computer Science, Business, etc."
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Start Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !startDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "MMM yyyy") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={handleStartDateSelect}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label>End Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      (!endDate && !formData.isOngoing) && "text-muted-foreground"
                    )}
                    disabled={formData.isOngoing}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "MMM yyyy") : formData.isOngoing ? "Present" : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={handleEndDateSelect}
                    initialFocus
                    disabled={date => startDate ? date < startDate : false}
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox 
              id="isOngoing" 
              checked={formData.isOngoing} 
              onCheckedChange={handleCheckboxChange} 
            />
            <Label htmlFor="isOngoing" className="cursor-pointer">Currently studying here</Label>
          </div>

          <div className="space-y-2">
            <Label htmlFor="gpa">GPA (optional)</Label>
            <Input
              id="gpa"
              name="gpa"
              value={formData.gpa || ''}
              onChange={handleChange}
              placeholder="e.g., 3.8/4.0"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description (optional)</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description || ''}
              onChange={handleChange}
              placeholder="Add any additional information about this education"
              rows={3}
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EducationForm;
