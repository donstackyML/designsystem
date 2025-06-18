import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { DxCalendarComponent } from 'devextreme-angular';
import { MeCalendarDirective } from '../../../../public-api';

export default {
  title: 'Components/Calendar',
  decorators: [
    moduleMetadata({
      declarations: [MeCalendarDirective, DxCalendarComponent],
    }),
  ],
  argTypes: {
    type: {
      control: 'select',
      options: ['date', 'datetime'],
      description: 'Тип значения для отображения.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'date' },
      },
    },
    value: {
      control: 'date',
      description:
        'Объект или значение, указывающее дату и время, выбранные в календаре.',
      table: {
        type: { summary: 'Date' },
        defaultValue: { summary: 'null' },
      },
    },
    firstDayOfWeek: {
      control: { type: 'select' },
      options: [0, 1, 2, 3, 4, 5, 6],
      description: 'Первый день недели',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    weekNumberRule: {
      control: { type: 'select' },
      options: ['auto', 'firstDay', 'firstFourDays', 'fullWeek'],
      description: 'Правило наименования недель',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'auto' },
      },
    },
    showWeekNumbers: {
      control: 'boolean',
      description: 'Показывать номера недель',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    zoomLevel: {
      control: { type: 'select' },
      options: ['month', 'year', 'decade', 'century'],
      description: 'Уровень масштабирования',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'month' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Отключение компонента',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    selectionMode: {
      control: { type: 'select' },
      options: ['range', 'multiple', 'single', 'none'],
      description: 'Определяет режим выбора даты в календаре.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
      },
    },
    showTodayButton: {
      control: 'boolean',
      description: 'Показывать кнопку "Сегодня"',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    value: undefined,
    showWeekNumbers: true,
    disabled: false,
    firstDayOfWeek: 1,
    selectionMode: 'single',
    weekNumberRule: 'auto',
    zoomLevel: 'month',
    showTodayButton: false,
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
} satisfies Meta<MeCalendarDirective | DxCalendarComponent>;

type Story = StoryObj<MeCalendarDirective | DxCalendarComponent>;

export const Default: Story = {
  args: {},
};

export const WithoutWeekNumbers: Story = {
  args: {
    showWeekNumbers: false,
  },
};

export const WeekNumberRuleFirstDay: Story = {
  args: {
    weekNumberRule: 'firstDay',
  },
};

export const WeekNumberRuleFirstFourDays: Story = {
  args: {
    weekNumberRule: 'firstFourDays',
  },
};

export const WeekNumberRuleFullWeek: Story = {
  args: {
    weekNumberRule: 'fullWeek',
  },
};

export const CustomFirstDay: Story = {
  args: {
    firstDayOfWeek: 0,
  },
};

export const SelectionModeSingle: Story = {
  args: {
    selectionMode: 'single',
  },
};

export const SelectionModeMultiple: Story = {
  args: {
    selectionMode: 'multiple',
    value: undefined,
    selectWeekOnClick: false,
  },
};

export const SelectFullWeekOnClick: Story = {
  args: {
    selectWeekOnClick: true,
    selectionMode: 'multiple',
    value: undefined,
  },
};

export const SelectionModeRange: Story = {
  args: {
    selectionMode: 'range',
    value: undefined,
  },
};

export const ZoomLevelMonth: Story = {
  args: {
    zoomLevel: 'month',
  },
};

export const ZoomLevelYear: Story = {
  args: {
    zoomLevel: 'year',
  },
};

export const WithTodayButton: Story = {
  args: {
    showTodayButton: true,
  },
};

export const StateDisabled: Story = {
  args: {
    disabled: true,
  },
};
