import {
  isSameDay,
  isSameHour,
  isSameMinute,
  isSameMonth,
  isSameSecond,
  isSameYear,
  isValid,
} from 'date-fns';

import { DateHighlightInfo } from '../model/types';
import {
  MinimalTimeShiftProperty,
  TimeShiftProperty,
} from '../ui/me-shift-properties';

export const getHighlightInfo = (
  baseDate: Date,
  shiftedDate: Date,
  shiftProperties?: Array<TimeShiftProperty> | MinimalTimeShiftProperty | null
): DateHighlightInfo => {
  const info: DateHighlightInfo = {};

  if (!shiftProperties || !isValid(baseDate) || !isValid(shiftedDate))
    return info;

  const hasAnyShift = Array.isArray(shiftProperties)
    ? shiftProperties.some((s) => s.enabled && s.value !== 0)
    : shiftProperties.value !== 0;

  if (!hasAnyShift || baseDate.getTime() === shiftedDate.getTime()) {
    return info;
  }

  info.years = !isSameYear(baseDate, shiftedDate);
  info.months = !isSameMonth(baseDate, shiftedDate);
  info.days = !isSameDay(baseDate, shiftedDate);
  info.hours = !isSameHour(baseDate, shiftedDate);
  info.minutes = !isSameMinute(baseDate, shiftedDate);
  info.seconds = !isSameSecond(baseDate, shiftedDate);

  return info;
};
