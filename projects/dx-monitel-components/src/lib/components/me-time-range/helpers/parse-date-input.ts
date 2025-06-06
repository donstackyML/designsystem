import { isValid, parseISO } from 'date-fns';

export const parseDateInput = (
  dateInput: Date | string | number | undefined | null
): Date => {
  if (dateInput instanceof Date && isValid(dateInput)) {
    return dateInput;
  }
  if (typeof dateInput === 'number') {
    const date = new Date(dateInput);
    return isValid(date) ? date : new Date();
  }
  if (typeof dateInput === 'string') {
    const parsed = parseISO(dateInput);
    if (isValid(parsed)) return parsed;
    const fallbackParsed = new Date(dateInput);
    if (isValid(fallbackParsed)) return fallbackParsed;
  }
  return new Date();
};
