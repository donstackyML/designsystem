import { StepSettings, TimeStep } from './types';
import {
  MinimalTimeShiftProperty,
  TimeShiftProperty,
  defaultMinimalTimeShiftUnits,
} from '../ui/me-shift-properties';

export const defaultTimeSteps: Array<TimeStep> = [
  { id: 'seconds', text: 'Секунды' },
  { id: 'minutes', text: 'Минуты' },
  { id: 'hours', text: 'Часы' },
  { id: 'days', text: 'Дни' },
  { id: 'weeks', text: 'Недели' },
  { id: 'months', text: 'Месяцы' },
  { id: 'years', text: 'Годы' },
];

export const defaultFullTimeShiftProperties: Array<TimeShiftProperty> = [
  { text: 'Месяцы', key: 'months', enabled: false, value: 0 },
  { text: 'Недели', key: 'weeks', enabled: false, value: 0 },
  { text: 'Дни', key: 'days', enabled: false, value: 0 },
  { text: 'Часы', key: 'hours', enabled: false, value: 0 },
  { text: 'Минуты', key: 'minutes', enabled: false, value: 0 },
  { text: 'Секунды', key: 'seconds', enabled: false, value: 0 },
];

export const defaultMinimalTimeShiftProperty: MinimalTimeShiftProperty = {
  value: 0,
  selectedUnit: 'minutes',
  units: defaultMinimalTimeShiftUnits,
};

export const defaultStepSettings: StepSettings = {
  items: defaultTimeSteps,
  selectedUnitValue: 'seconds',
  unitDisplayExpr: 'text',
  unitValueExpr: 'id',
  numberValue: 15,
};
