import {
  MinimalTimeShiftProperty,
  TimeShiftProperty,
} from '../me-shift-properties';

export type ShiftType = 'current' | 'absolute' | 'mixed' | 'unknown';

export interface ShiftSettingsOutput {
  properties: Array<TimeShiftProperty> | MinimalTimeShiftProperty | null;
  absoluteDate: Date | string | number | null;
  isRelativeModeActive: boolean;
  shiftType: ShiftType;
}
