import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {DxCalendarComponent, DxCalendarModule} from 'devextreme-angular';
import { MeCalendarDirective } from "../../lib/directives/me-calendar/calendar.directive";

@Component({
  selector: 'calendar-demo',
  template: `
    <dx-calendar
      meCalendar
      [value]="value"
      [showWeekNumbers]="showWeekNumbers"
      [firstDayOfWeek]="firstDayOfWeek"
      [zoomLevel]="zoomLevel"
      [weekNumberRule]="weekNumberRule"
      [disabled]="disabled"
      (onValueChanged)="onValueChanged($event)"
    ></dx-calendar>
  `
})
class CalendarDemoComponent implements OnInit, AfterViewInit {
  @ViewChild('dxCalendar', { static: false }) dxCalendar!: DxCalendarComponent;

  @Input() value: Date = new Date();
  @Input() showWeekNumbers: boolean = true;
  @Input() firstDayOfWeek: number = 1;
  @Input() zoomLevel: string = 'month';
  @Input() weekNumberRule: string = 'firstDay';
  @Input() disabled: boolean = false;

  ngOnInit() {
    // Инициализация, если необходимо
  }

  ngAfterViewInit() {
    // Убедимся, что компонент полностью инициализирован
    setTimeout(() => {
      if (this.dxCalendar && this.dxCalendar.instance) {
        // Здесь можно выполнить дополнительные настройки, если нужно
      }
    });
  }

  onValueChanged(e: any) {
    console.log('Date changed:', e.value);
  }
}

const meta: Meta<CalendarDemoComponent> = {
  title: 'Components/meCalendar',
  component: CalendarDemoComponent,
  decorators: [
    moduleMetadata({
      declarations: [MeCalendarDirective, CalendarDemoComponent],
      imports: [DxCalendarModule],
    }),
  ],
  argTypes: {
    showWeekNumbers: { control: 'boolean' },
    firstDayOfWeek: { control: { type: 'range', min: 0, max: 6, step: 1 } },
    zoomLevel: { control: { type: 'select', options: ['month', 'year', 'decade', 'century'] } },
    weekNumberRule: { control: { type: 'select', options: ['firstDay', 'firstFourDays', 'fullWeek'] } },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<CalendarDemoComponent>;

export const Default: Story = {
  args: {
    showWeekNumbers: true,
    firstDayOfWeek: 1,
    zoomLevel: 'month',
    weekNumberRule: 'firstDay',
    disabled: false,
  },
};

export const WithWeekNumbers: Story = {
  args: {
    ...Default.args,
    showWeekNumbers: true,
  },
};

export const DifferentZoomLevels: Story = {
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

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};
