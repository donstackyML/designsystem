import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';

import { MeTimeRangeResultComponent } from '../../../../../lib/components/me-time-range/ui/me-time-range-result';
import { type DateHighlightInfo } from '../../../../../lib/components/me-time-range';

export default {
  title: 'Components/TimeRange/TimeRangeParts/TimeRangeResult',
  component: MeTimeRangeResultComponent,
  decorators: [
    moduleMetadata({
      imports: [MeTimeRangeResultComponent],
    }),
  ],
  argTypes: {
    timeFormat: {
      control: 'text',
      description: 'Формат отображения даты и времени',
      table: {
        category: 'Форматирование',
        type: { summary: 'string' },
        defaultValue: { summary: 'dd.MM.yyyy HH:mm:ss' },
      },
    },
    startDate: {
      control: 'date',
      description: 'Начальная дата диапазона',
      table: {
        category: 'Данные',
        type: { summary: 'string | Date' },
      },
    },
    endDate: {
      control: 'date',
      description: 'Конечная дата диапазона',
      table: {
        category: 'Данные',
        type: { summary: 'string | Date' },
      },
    },
    startText: {
      control: 'text',
      description: 'Текст для начальной даты',
      table: {
        category: 'Тексты',
        type: { summary: 'string' },
        defaultValue: { summary: 'Начало' },
      },
    },
    endText: {
      control: 'text',
      description: 'Текст для конечной даты',
      table: {
        category: 'Тексты',
        type: { summary: 'string' },
        defaultValue: { summary: 'Конец' },
      },
    },
    startDateHighlightInfo: {
      control: 'object',
      description: 'Информация о подсветке для начальной даты',
      table: {
        category: 'Подсветка',
        type: { summary: 'DateHighlightInfo' },
        defaultValue: { summary: '{}' },
      },
    },
    endDateHighlightInfo: {
      control: 'object',
      description: 'Информация о подсветке для конечной даты',
      table: {
        category: 'Подсветка',
        type: { summary: 'DateHighlightInfo' },
        defaultValue: { summary: '{}' },
      },
    },
  },
  args: {
    startDate: new Date('2024-03-20T10:00:00'),
    endDate: new Date('2024-03-20T18:00:00'),
    timeFormat: 'dd.MM.yyyy HH:mm:ss',
    startText: 'Начало',
    endText: 'Конец',
  },
  render: (args) => ({
    props: args,
    template: `<me-time-range-result ${argsToTemplate(
      args
    )}></me-time-range-result>`,
  }),
} satisfies Meta<MeTimeRangeResultComponent>;

type Story = StoryObj<MeTimeRangeResultComponent>;

export const Default: Story = {};

export const WithHighlight: Story = {
  args: {
    startDate: new Date('2024-03-20T10:00:00'),
    endDate: new Date('2024-03-20T18:00:00'),
    startDateHighlightInfo: {
      days: true,
      months: true,
      years: true,
    } satisfies DateHighlightInfo,
    endDateHighlightInfo: {
      days: true,
      months: true,
      years: true,
    } satisfies DateHighlightInfo,
  },
};

export const CustomFormat: Story = {
  args: {
    startDate: new Date('2024-03-20T10:00:00'),
    endDate: new Date('2024-03-20T18:00:00'),
    timeFormat: 'HH:mm',
    startText: 'С',
    endText: 'До',
  },
};
