import { ChangeDetectionStrategy, Component } from '@angular/core';

import { type TimeRangeConfig } from '../../../../projects/dx-monitel-components/me-components';

@Component({
  selector: 'me-time-range-demo',
  templateUrl: './me-time-range-demo.component.html',
  styleUrls: ['./me-time-range-demo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeTimeRangeDemoComponent {
  timeRangeSettings: Partial<TimeRangeConfig> = {
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
        { text: 'Секунды', key: 'seconds', enabled: true, value: -20 },
      ],
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
    step: {
      items: [
        /* Array of TimeStep, e.g., { text: '1 минута', id: 'minutes', numberValue: 1 } ... */
      ],
      selectedUnitValue: 'minutes',
      unitDisplayExpr: 'text',
      unitValueExpr: 'id',
      numberValue: 5,
    },
    quickFilterId: 'last_1h',
    update: {
      items: [
        /* Array of TimeStep, e.g., { text: 'Каждую минуту', id: 'minutes', numberValue: 1 } ... */
      ],
      selectedUnitValue: 'seconds',
      unitDisplayExpr: 'text',
      unitValueExpr: 'id',
      numberValue: 30,
    },
  };

  onTimeRangeApplied(settings: TimeRangeConfig) {
    console.log('Time range applied:', settings);
  }
}
