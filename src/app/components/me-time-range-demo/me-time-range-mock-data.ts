import { defaultStepSettings, defaultTimeSteps, type TimeRangeConfig } from '../../../../projects/dx-monitel-components/me-components';

export const defaultTimeRangeConfig: Partial<TimeRangeConfig> = {
  absoluteDate: {
    start: new Date(),
    end: new Date(),
  },
  startShift: {
    type: 'mixed',
    switchIsActive: true,
    switchEnabled: true,
    properties: [
      { text: 'Месяцы', key: 'months', enabled: false, value: 0 },
      { text: 'Недели', key: 'weeks', enabled: false, value: 0 },
      { text: 'Дни', key: 'days', enabled: false, value: 0 },
      { text: 'Часы', key: 'hours', enabled: false, value: 0 },
      { text: 'Минуты', key: 'minutes', enabled: false, value: 0 },
      { text: 'Секунды', key: 'seconds', enabled: true, value: -20 }]
  },
  endShift: {
    type: 'mixed',
    switchIsActive: true,
    switchEnabled: true,
    properties: [
      { text: 'Месяцы', key: 'months', enabled: false, value: 0 },
      { text: 'Недели', key: 'weeks', enabled: false, value: 0 },
      { text: 'Дни', key: 'days', enabled: false, value: 0 },
      { text: 'Часы', key: 'hours', enabled: false, value: 0 },
      { text: 'Минуты', key: 'minutes', enabled: false, value: 0 },
      { text: 'Секунды', key: 'seconds', enabled: false, value: 0 },
    ],
  },
  step: defaultStepSettings,
  quickFilterId: 'last_1h',
  update: {
    items: defaultTimeSteps,
    selectedUnitValue: 'seconds',
    unitDisplayExpr: 'text',
    unitValueExpr: 'id',
    numberValue: 30,
  },
};

export const smallTimeRangeConfig: Partial<TimeRangeConfig> = {
  absoluteDate: {
    start: new Date(),
    end: new Date(),
  },
  startShift: {
    properties: null,
    switchEnabled: false
  },
  endShift: {
    properties: null,
    switchEnabled: false
  },
  step: {
    items: defaultTimeSteps,
    selectedUnitValue: 'seconds',
    unitDisplayExpr: 'text',
    unitValueExpr: 'id',
    numberValue: 15,
  },
  quickFilterId: 'last_1h',
  update: {
    items: defaultTimeSteps,
    selectedUnitValue: 'seconds',
    unitDisplayExpr: 'text',
    unitValueExpr: 'id',
    numberValue: 30,
  },
};
