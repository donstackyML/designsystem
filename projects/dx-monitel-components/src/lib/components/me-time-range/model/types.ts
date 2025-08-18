import { PropertiesState } from '../ui/me-shift-properties/me-shift-properties.component';
import {
  MinimalTimeShiftProperty,
  TimeShiftProperty,
} from '../ui/me-shift-properties/me-shift-properties.model';
import { ShiftType } from '../ui/me-shift-settings';

export enum TimeUnit {
  Seconds = 's',
  Minutes = 'm',
  Hours = 'h',
  Days = 'd',
  Weeks = 'w',
  Months = 'M',
  Years = 'y',
}

export type TimeGranularity =
  | 'onChange'
  | 'seconds'
  | 'minutes'
  | 'hours'
  | 'days'
  | 'weeks'
  | 'months'
  | 'years';

export interface TimeStep {
  id: TimeGranularity;
  text: string;
}

export interface TimeShiftSettings {
  type?: ShiftType;
  properties: Array<TimeShiftProperty> | MinimalTimeShiftProperty | null;
  propertiesState?: PropertiesState;
  switchIsActive?: boolean;
  switchEnabled?: boolean;
  isRelativeModeActive?: boolean;
}

export interface StepSettings {
  items: Array<TimeStep>;
  selectedUnitValue: TimeGranularity;
  unitDisplayExpr: string;
  unitValueExpr: string;
  numberValue: number;
}

export interface TimeRangeConfig {
  absoluteDate: {
    start: Date | string | null;
    end: Date | string | null;
  };
  shiftType?: ShiftType;
  startShift: TimeShiftSettings | null;
  endShift: TimeShiftSettings | null;
  step: StepSettings | null;
  update: StepSettings | null;
  quickFilterId?: string | null;
  resultStartDate?: Date | string;
  resultEndDate?: Date | string;
}

export interface DateHighlightInfo {
  years?: boolean;
  months?: boolean;
  days?: boolean;
  hours?: boolean;
  minutes?: boolean;
  seconds?: boolean;
}

export interface RoundingSetting {
  years: boolean;
  months: boolean;
  days: boolean;
  hours: boolean;
  minutes: boolean;
  seconds: boolean;
}

export type SettingBlock = 'quickFilter' | 'shiftSettings' | 'steps' | 'result';

export interface TimeShiftChangedOutput {
  startDate: Date | string;
  endDate: Date | string;
}
