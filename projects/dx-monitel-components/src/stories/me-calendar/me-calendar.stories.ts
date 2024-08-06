import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DxCalendarModule } from 'devextreme-angular';
import { MeCalendarDirective } from '../../public-api';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'calendar-demo',
  template: `
    <dx-calendar
      meCalendar
      [value]="currentValue"
      [showWeekNumbers]="showWeekNumbers"
      [disabled]="disabled"
      [firstDayOfWeek]="firstDayOfWeek"
      [zoomLevel]="zoomLevel"
      [weekNumberRule]="weekNumberRule"
      (onValueChanged)="onDateValueChanged($event)"
    ></dx-calendar>
  `,
})
class CalendarDemoComponent {
  @Input() currentValue: Date = new Date();
  @Input() showWeekNumbers: boolean = true;
  @Input() disabled: boolean = false;
  @Input() firstDayOfWeek: number = 1;
  @Input() zoomLevel: string = 'month';
  @Input() weekNumberRule: string = 'firstDay';

  onDateValueChanged(e: any) {
    console.log('Date changed:', e.value);
  }
}

interface MeCalendarProps {
  showWeekNumbers: boolean;
  disabled: boolean;
  firstDayOfWeek: number;
  zoomLevel: string;
  weekNumberRule: string;
}

const meta: Meta<MeCalendarProps> = {
  title: 'Components/MeCalendar',
  component: MeCalendarDirective,
  decorators: [
    moduleMetadata({
      declarations: [MeCalendarDirective, CalendarDemoComponent],
      imports: [DxCalendarModule],
    }),
  ],
  render: (args: MeCalendarProps) => ({
    props: args,
    template: `
      <calendar-demo
        [showWeekNumbers]="showWeekNumbers"
        [disabled]="disabled"
        [firstDayOfWeek]="firstDayOfWeek"
        [zoomLevel]="zoomLevel"
        [weekNumberRule]="weekNumberRule"
      ></calendar-demo>
    `,
  }),
  argTypes: {
    showWeekNumbers: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    firstDayOfWeek: {
      control: { type: 'select', options: [0, 1, 2, 3, 4, 5, 6] },
    },
    zoomLevel: {
      control: {
        type: 'select',
        options: ['month', 'year', 'decade', 'century'],
      },
    },
    weekNumberRule: {
      control: {
        type: 'select',
        options: ['auto', 'firstDay', 'firstFourDays', 'fullWeek'],
      },
    },
  },
};

export default meta;
type Story = StoryObj<MeCalendarProps>;

export const Default: Story = {
  args: {
    showWeekNumbers: true,
    disabled: false,
    firstDayOfWeek: 1,
    zoomLevel: 'month',
    weekNumberRule: 'firstDay',
  },
};

export const WithoutWeekNumbers: Story = {
  args: {
    ...Default.args,
    showWeekNumbers: false,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const CustomFirstDay: Story = {
  args: {
    ...Default.args,
    firstDayOfWeek: 0, // Sunday
  },
};

export const YearZoomLevel: Story = {
  args: {
    ...Default.args,
    zoomLevel: 'year',
  },
};

export const CustomWeekNumberRule: Story = {
  args: {
    ...Default.args,
    weekNumberRule: 'fullWeek',
  },
};
