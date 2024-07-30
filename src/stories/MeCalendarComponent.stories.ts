import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Component, Input } from '@angular/core';
import { DxCalendarModule, DxSelectBoxModule, DxCheckBoxModule, DxDateBoxModule } from 'devextreme-angular';
import { FirstDayOfWeek, CalendarZoomLevel, WeekNumberRule } from 'devextreme/ui/calendar';
import {MeCalendarDirective} from "../app/directives/calendar.directive";

@Component({
  selector: 'calendar-demo',
  template: `
    <div class="calendar-demo">
      <div class="calendar-container">
        <dx-calendar
          meCalendar
          [value]="currentValue"
          [showWeekNumbers]="showWeekNumbers"
          [disabled]="disabled"
          [firstDayOfWeek]="firstDayOfWeek"
          [zoomLevel]="zoomLevel"
          [cellTemplate]="useCustomTemplate ? 'custom' : 'cell'"
          [weekNumberRule]="weekNumberRule"
          (onDateValueChanged)="onDateValueChanged($event)"
        >
          <span *dxTemplate="let cell of 'custom'" [ngClass]="getCellCssClass(cell)">
            {{ cell.text }}
          </span>
        </dx-calendar>
      </div>
    </div>
  `,
  styles: [`
    .calendar-demo {
      display: flex;
      justify-content: center;
    }
    .calendar-container {
      width: 300px;
    }
  `]
})
class CalendarDemoComponent {
  @Input() currentValue: Date = new Date();
  @Input() showWeekNumbers: boolean = false;
  @Input() disabled: boolean = false;
  @Input() firstDayOfWeek: FirstDayOfWeek = 0;
  @Input() zoomLevel: CalendarZoomLevel = 'month';
  @Input() weekNumberRule: WeekNumberRule = 'auto';
  @Input() useCustomTemplate: boolean = false;

  onDateValueChanged(e: any) {
    this.currentValue = e.value;
  }

  getCellCssClass(cell: any): string {
    let cssClass = '';
    if (cell.view === 'month') {
      if (!cell.date) {
        cssClass = 'week-number';
      } else {
        if (this.isWeekend(cell.date)) {
          cssClass = 'weekend';
        }
        if (this.isHoliday(cell.date)) {
          cssClass = 'holiday';
        }
      }
    }
    return cssClass;
  }

  private isWeekend(date: Date): boolean {
    const day = date.getDay();
    return day === 0 || day === 6;
  }

  private isHoliday(date: Date): boolean {
    const holidays = [[1, 0], [4, 6], [25, 11]];
    return holidays.some(([day, month]) => date.getDate() === day && date.getMonth() === month);
  }
}

const meta: Meta<CalendarDemoComponent> = {
  title: 'Directives/MeCalendar',
  component: CalendarDemoComponent,
  decorators: [
    moduleMetadata({
      declarations: [MeCalendarDirective, CalendarDemoComponent],
      imports: [DxCalendarModule, DxSelectBoxModule, DxCheckBoxModule, DxDateBoxModule],
    }),
  ],
  argTypes: {
    currentValue: { control: 'date' },
    showWeekNumbers: { control: 'boolean' },
    disabled: { control: 'boolean' },
    firstDayOfWeek: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6],
      mapping: {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday'
      }
    },
    zoomLevel: {
      control: 'select',
      options: ['month', 'year', 'decade', 'century']
    },
    weekNumberRule: {
      control: 'select',
      options: ['auto', 'firstDay', 'firstFourDays', 'fullWeek']
    },
    useCustomTemplate: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<CalendarDemoComponent>;

export const Default: Story = {
  args: {
    currentValue: new Date(),
    showWeekNumbers: false,
    disabled: false,
    firstDayOfWeek: 0,
    zoomLevel: 'month',
    weekNumberRule: 'auto',
    useCustomTemplate: false,
  },
};

export const WithWeekNumbers: Story = {
  args: {
    ...Default.args,
    showWeekNumbers: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const CustomTemplate: Story = {
  args: {
    ...Default.args,
    useCustomTemplate: true,
  },
};

export const YearView: Story = {
  args: {
    ...Default.args,
    zoomLevel: 'year',
  },
};

export const MondayFirstDay: Story = {
  args: {
    ...Default.args,
    firstDayOfWeek: 1,
  },
};
