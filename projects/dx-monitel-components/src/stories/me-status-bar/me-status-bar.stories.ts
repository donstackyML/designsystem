import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DxButtonModule } from 'devextreme-angular';
import { MeIconComponent, MeStatusBarComponent } from '../../public-api';

export default {
  title: 'Components/MeStatusBar(RC)',
  decorators: [
    moduleMetadata({
      imports: [DxButtonModule, MeIconComponent, MeStatusBarComponent],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'large'],
      description: 'Размер компонента',
    },
    showDivider: {
      control: 'boolean',
      description: 'Отображать разделители между элементами',
    },
  },
  args: {
    size: 'large',
    showDivider: true,
  },
  render: (args) => ({
    props: { ...args },
    template: `
      <me-status-bar
        [leftItems]="leftItems"
        [rightItems]="rightItems"
        [size]="size"
        [showDivider]="showDivider"
      ></me-status-bar>
    `,
  }),
} as Meta;

type Story = StoryObj;

// Пример с ошибкой
export const ErrorStatus: Story = {
  args: {
    leftItems: [
      { text: 'Воткинская ГЭС' },
      {
        text: 'Раскраска схемы без учета ТП',
        fill: true,
        type: 'info',
      },
      { text: 'Режим исследования', fill: true, type: 'warning' },
    ],
    rightItems: [
      {
        icon: 'error',
        text: 'Отсутствует соединение с источником данных',
        type: 'error',
        fill: true,
      },
    ],
  },
};

// Пример с успешным подключением
export const SuccessStatus: Story = {
  args: {
    leftItems: [
      { text: 'Воткинская ГЭС' },
      {
        text: 'Раскраска схемы без учета ТП',
        fill: true,
        type: 'default',
      },
      { text: 'Режим исследования' },
    ],
    rightItems: [
      {
        icon: 'check_circle',
        text: 'Соединение с источником данных восстановлено',
        type: 'success',
        fill: true,
      },
    ],
  },
};

// Пример с предупреждением
export const WarningStatus: Story = {
  args: {
    leftItems: [
      { text: 'Воткинская ГЭС' },
      {
        text: 'Раскраска схемы без учета ТП',
        fill: true,
        type: 'default',
      },
      { text: 'Режим исследования' },
    ],
    rightItems: [
      {
        icon: 'warning_amber',
        text: 'Соединение с источником данных восстановлено',
        type: 'warning',
        fill: true,
      },
    ],
  },
};

// Пример с информацией
export const InfoStatus: Story = {
  args: {
    leftItems: [
      { text: 'Воткинская ГЭС' },
      {
        text: 'Раскраска схемы без учета ТП',
        fill: true,
        type: 'default',
      },
      { text: 'Режим исследования' },
    ],
    rightItems: [
      {
        icon: 'info',
        text: 'Новая информация',
        type: 'info',
      },
    ],
  },
};

// Компактный размер
export const Small: Story = {
  args: {
    ...ErrorStatus.args,
    size: 'small',
  },
};

// С разделителями
export const WithDividers: Story = {
  args: {
    ...ErrorStatus.args,
    showDivider: true,
  },
};

// Без разделителей
export const WithoutDividers: Story = {
  args: {
    ...ErrorStatus.args,
    showDivider: false,
  },
};

// Пример без заливки
export const WithoutFill: Story = {
  args: {
    leftItems: [
      { text: 'Воткинская ГЭС' },
      {
        text: 'Раскраска схемы без учета ТП',
        fill: false,
        type: 'info',
      },
      { text: 'Режим исследования', fill: false, type: 'success' },
    ],
    rightItems: [
      {
        icon: 'error',
        text: 'Отсутствует соединение с источником данных',
        type: 'error',
        fill: false,
      },
    ],
  },
};
