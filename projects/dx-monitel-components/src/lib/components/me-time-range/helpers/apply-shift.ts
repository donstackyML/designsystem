import { addDays, addHours, addMinutes, addMonths, addSeconds, addWeeks, isValid } from 'date-fns';

import { MinimalTimeShiftProperty, TimeShiftProperty } from '../ui/me-shift-properties';

const applyTimeShift = (unit: string, shiftedDate: Date, value: number): Date => {
  switch (unit) {
    case 'months':
      return addMonths(shiftedDate, value);
    case 'weeks':
      return addWeeks(shiftedDate, value);
    case 'days':
      return addDays(shiftedDate, value);
    case 'hours':
      return addHours(shiftedDate, value);
    case 'minutes':
      return addMinutes(shiftedDate, value);
    case 'seconds':
      return addSeconds(shiftedDate, value);
    default:
      return shiftedDate;
  }
};

export const applyShift = (
  baseDate: Date | string,
  shiftProperties?: Array<TimeShiftProperty> | MinimalTimeShiftProperty | null,
): Date | string => {
  if (!shiftProperties || !isValid(baseDate)) {
    return baseDate;
  }

  let shiftedDate = new Date(baseDate);

  if (Array.isArray(shiftProperties)) {
    const order: Array<string> = ['months', 'weeks', 'days', 'hours', 'minutes', 'seconds'];

    for (const key of order) {
      const setting = shiftProperties.find((s) => s.key === key);
      if (setting && setting.enabled && setting.value !== 0) {
        shiftedDate = applyTimeShift(key, shiftedDate, setting.value);
      }
    }
  } else {
    const value = shiftProperties.value ?? 0;

    if (value !== 0) {
      shiftedDate = applyTimeShift(shiftProperties.selectedUnit, shiftedDate, value);
    }
  }

  return shiftedDate;
};
