import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';

import { MeQuickFiltersComponent } from '../../../../../public-api';

const quickFilters = [
  { id: 'last-hour', text: 'Последний час' },
  { id: 'last-day', text: 'Последние сутки' },
  { id: 'last-week', text: 'Последняя неделя' },
  { id: 'last-month', text: 'Последний месяц' },
];

const offFilter = { id: 'off', text: 'Выключено' };

export default {
  title: 'Components/TimeRange/TimeRangeParts/QuickFilters',
  decorators: [
    moduleMetadata({
      imports: [MeQuickFiltersComponent],
    }),
  ],
  argTypes: {
    title: {
      control: 'text',
      description: 'Заголовок блока быстрых фильтров',
      table: {
        category: 'Контент',
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    filters: {
      control: 'object',
      description: 'Массив быстрых фильтров',
      table: {
        category: 'Данные',
        type: { summary: 'QuickFilter[]' },
        defaultValue: { summary: '[]' },
      },
    },
    selectedFilterId: {
      control: 'text',
      description: 'ID выбранного фильтра',
      table: {
        category: 'Состояние',
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
      },
    },
    mode: {
      control: 'select',
      options: ['buttons', 'select-box'],
      description: 'Тип отображения фильтров',
      table: {
        category: 'Внешний вид',
        type: { summary: 'string' },
        defaultValue: { summary: 'buttons' },
      },
    },
    offFilter: {
      control: 'object',
      description: 'Фильтр для выключения функциональности',
      table: {
        category: 'Данные',
        type: { summary: 'QuickFilter | null' },
        defaultValue: { summary: 'defaultOffQuickFilter' },
      },
    },
    offFilterPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Позиция фильтра выключения',
      table: {
        category: 'Внешний вид',
        type: { summary: 'string' },
        defaultValue: { summary: 'left' },
      },
    },
    filtersSelected: {
      action: 'filtersSelected',
      description: 'Событие выбора фильтра',
      table: {
        category: 'События',
        type: { summary: 'EventEmitter<string>' },
      },
    },
    filtersIsEnabled: {
      action: 'filtersIsEnabled',
      description: 'Событие изменения состояния активности фильтров (true - активно, false - выключено)',
      table: {
        category: 'События',
        type: { summary: 'EventEmitter<boolean>' },
      },
    },
  },
  args: {
    title: '',
    
    mode: 'buttons',

    offFilterPosition: 'left',
  },
  render: (args) => ({
    props: args,
    template: `
      <me-quick-filters
        ${argsToTemplate(args)}
        (filtersSelected)="filtersSelected($event)"
        (filtersIsEnabled)="filtersIsEnabled($event)"
      ></me-quick-filters>
    `,
  }),
} satisfies Meta<MeQuickFiltersComponent>;

type Story = StoryObj<MeQuickFiltersComponent>;

export const Default: Story = {
  args: {},
};

export const ButtonsMode: Story = {
  args: {
    mode: 'buttons',
  },
};

export const SelectBoxMode: Story = {
  args: {
    mode: 'select-box',
  },
};

export const WithTitle: Story = {
  args: {
    title: 'Интервал за последние:',
  },
};

export const WithCustomFilters: Story = {
  args: {
    filters: [
      { id: 'today', text: 'Сегодня' },
      { id: 'yesterday', text: 'Вчера' },
      { id: 'this-week', text: 'Текущая неделя' },
      { id: 'this-month', text: 'Текущий месяц' },
      { id: 'this-year', text: 'Текущий год' },
    ],
    selectedFilterId: 'today',
  },
};

export const WithoutOffFilter: Story = {
  args: {
    offFilter: null,
  },
};

export const WithOffFilterExplicitlySelected: Story = {
  args: {
    selectedFilterId: 'off',
  },
};
