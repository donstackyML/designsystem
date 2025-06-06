import {
  defaultFullTimeShiftProperties,
  defaultTimeSteps,
} from '../model/me-time-range-base-settings';
import {
  StepSettings,
  TimeRangeConfig,
  TimeShiftSettings,
} from '../model/types';
import { ShiftType } from '../ui/me-shift-settings';

export const stepDefaultSettings = {
  items: defaultTimeSteps,
  selectedUnitValue: defaultTimeSteps[0].id,
  unitDisplayExpr: 'text',
  unitValueExpr: 'id',
  numberValue: 30,
};

export const updateDefaultSettings = {
  items: defaultTimeSteps,
  selectedUnitValue: defaultTimeSteps[0].id,
  unitDisplayExpr: 'text',
  unitValueExpr: 'id',
  numberValue: 30,
};

export const buildShiftSettings = (
  shiftSettings?: TimeShiftSettings | null,
  shiftType?: ShiftType
): TimeShiftSettings | null => {
  if (shiftSettings === null) return null;

  return {
    type: shiftType ?? 'current',
    properties:
      shiftSettings?.type === 'mixed' ? defaultFullTimeShiftProperties : null,
    switchIsActive: shiftSettings?.type === 'current' ? true : false,
    ...(shiftSettings as object),
  };
};

export const buildStepSettings = (
  stepSettings?: Partial<StepSettings> | null
): StepSettings | null => {
  if (stepSettings === null) return null;

  return {
    items: [...defaultTimeSteps, { id: 'onChange', text: 'По изменению' }],
    selectedUnitValue: defaultTimeSteps[0].id,
    unitDisplayExpr: 'text',
    unitValueExpr: 'id',
    numberValue: 30,
    ...(stepSettings as object),
  };
};

export const buildTimeRangeSettings = (
  config: Partial<TimeRangeConfig> = {}
): TimeRangeConfig => {
  const now = new Date();

  return {
    absoluteDate: {
      start: new Date(new Date().setDate(new Date().getDate())),
      end: now,
      ...config.absoluteDate,
    },
    startShift: buildShiftSettings(config.startShift, config.shiftType),
    endShift: buildShiftSettings(config.endShift, config.shiftType),
    step: buildStepSettings(config.step),
    update: buildStepSettings(config.update),
    quickFilterId: config.quickFilterId || null,
    shiftType: config.shiftType || 'unknown',
  };
};
