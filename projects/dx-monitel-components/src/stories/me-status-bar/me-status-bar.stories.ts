import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DxButtonModule } from 'devextreme-angular';
import { MeIconComponent, MeStatusBarComponent } from '../../public-api';

export default {
  title: 'Components/Status Bar',
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

export const Default: Story = {
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
        text: 'Отсутствует соединение с источником данных',
        type: 'error',
        showStatusIcon: true,
        fill: true,
      },
    ],
  },
};

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
        text: 'Отсутствует соединение с источником данных',
        type: 'error',
        showStatusIcon: true,
        fill: true,
      },
    ],
  },
};

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
        text: 'Соединение с источником данных восстановлено',
        type: 'success',
        showStatusIcon: true,
        fill: true,
      },
    ],
  },
};

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
        text: 'Соединение с источником данных восстановлено',
        type: 'warning',
        showStatusIcon: true,
        fill: true,
      },
    ],
  },
};

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
        text: 'Новая информация',
        type: 'info',
        showStatusIcon: true,
      },
    ],
  },
};

// Добавление иконок

export const StatusIcons: Story = {
  args: {
    leftItems: [{ text: 'Воткинская ГЭС' }],
    rightItems: [
      {
        text: 'Отсутствует соединение с источником данных',
        type: 'error',
        showStatusIcon: true,
        fill: true,
      },
    ],
  },
};

export const CustomIcons: Story = {
  args: {
    leftItems: [{ text: 'Воткинская ГЭС', icon: 'home' }],
    rightItems: [
      {
        text: 'Отсутствует соединение с источником данных',
        type: 'error',
        icon: 'error',
        fill: true,
      },
    ],
  },
};

export const CustomIconsWithColor: Story = {
  args: {
    leftItems: [{ text: 'Воткинская ГЭС', icon: 'home', iconColor: '#ff0' }],
    rightItems: [
      {
        text: 'Отсутствует соединение с источником данных',
        type: 'error',
        icon: 'error',
        fill: true,
      },
    ],
  },
};

// Размеры

export const SizeSmall: Story = {
  args: {
    ...ErrorStatus.args,
    size: 'small',
  },
};

export const SizeLarge: Story = {
  args: {
    ...ErrorStatus.args,
    size: 'large',
  },
};

// Разделитель

export const WithDividers: Story = {
  args: {
    ...ErrorStatus.args,
    showDivider: true,
  },
};

export const WithoutDividers: Story = {
  args: {
    ...ErrorStatus.args,
    showDivider: false,
  },
};

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
        text: 'Отсутствует соединение с источником данных',
        type: 'error',
        fill: false,
      },
    ],
  },
};

export const Readonly: Story = {
  args: {
    leftItems: [
      { text: 'Воткинская ГЭС' },
      {
        text: 'Раскраска схемы без учета ТП',
        fill: true,
        type: 'info',
      },
      { text: 'Режим исследования', fill: true, type: 'success' },
    ],
    rightItems: [
      {
        text: 'Отсутствует соединение с источником данных',
        type: 'error',
        fill: true,
        onClick: () => {
          console.log(
            'При заданном свойстве readonly этот текст в консоле не отобразится'
          );
        },
        readonly: true,
      },
    ],
  },
};
