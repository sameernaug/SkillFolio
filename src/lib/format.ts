
import { format, parseISO } from 'date-fns';

export const formatDate = (dateString: string) => {
  try {
    return format(parseISO(dateString), 'MMM yyyy');
  } catch (error) {
    console.error('Invalid date format:', error);
    return 'Invalid date';
  }
};
