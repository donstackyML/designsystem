import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { DxCalendarModule } from 'devextreme-angular';
import { MeCalendarDirective } from '../../public-api';

export default {
  title: 'Components/Calendar(RC)',
  decorators: [
    moduleMetadata({
      declarations: [MeCalendarDirective],
      imports: [DxCalendarModule],
    }),
  ],
  argTypes: {
    showWeekNumbers: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    firstDayOfWeek: {
      control: { type: 'select' },
      options: [0, 1, 2, 3, 4, 5, 6],
    },
    zoomLevel: {
      control: { type: 'select' },
      options: ['month', 'year', 'decade', 'century'],
    },
    weekNumberRule: {
      control: { type: 'select' },
      options: ['auto', 'firstDay', 'firstFourDays', 'fullWeek'],
    },
  },
  args: {
    showWeekNumbers: false,
    disabled: false,
    firstDayOfWeek: 1,
    zoomLevel: 'month',
    weekNumberRule: 'firstDay',
    value: new Date(),
  },
  render: (args) => ({
    props: {
      ...args,
      onDateValueChanged: (e: any) => console.log('Date changed:', e.value),
    },
    template: `<dx-calendar
      meCalendar
      ${argsToTemplate(args)}
      (onValueChanged)="onDateValueChanged($event)"
    ></dx-calendar>`,
  }),
} as Meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    showWeekNumbers: false,
    disabled: false,
    firstDayOfWeek: 1,
    zoomLevel: 'month',
    weekNumberRule: 'firstDay',
    value: new Date(),
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
    firstDayOfWeek: 0,
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
