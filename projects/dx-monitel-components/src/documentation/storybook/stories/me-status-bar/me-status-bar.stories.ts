import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DxButtonModule } from 'devextreme-angular';
import { StatusBarItem } from '../../../../lib/components/me-status-bar/me-status-bar.component';
import { MeIconComponent, MeStatusBarComponent } from '../../../../public-api';

const defaultLeftItems: StatusBarItem[] = [
  { text: 'Воткинская ГЭС' },
  {
    text: 'Раскраска схемы без учета ТП',
    fill: true,
    type: 'info',
  },
  { text: 'Режим исследования' },
];

export default {
  title: 'Components/Status Bar',
  decorators: [
    moduleMetadata({
      imports: [DxButtonModule, MeIconComponent, MeStatusBarComponent],
    }),
  ],
  argTypes: {
    leftItems: {
      control: 'object',
      description: 'Левый набор элементов',
      table: {
        type: { summary: 'Array<MeStatusBarItem>' },
        defaultValue: { summary: '[]' },
      },
    },
    rightItems: {
      control: 'object',
      description: 'Правый набор элементов',
      table: {
        type: { summary: 'Array<MeStatusBarItem>' },
        defaultValue: { summary: '[]' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'large'],
      description: 'Размер компонента',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'small'" },
      },
    },
    showDivider: {
      control: 'boolean',
      description: 'Отображать разделители между элементами',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    transparent: {
      control: 'boolean',
      description: 'Прозрачный фон',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    size: 'small',
    showDivider: false,
    transparent: false,
    leftItems: defaultLeftItems,
    rightItems: [
      {
        text: 'Отсутствует соединение с источником данных',
        type: 'error',
        showStatusIcon: true,
        fill: true,
      },
    ],
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
} satisfies Meta<MeStatusBarComponent>;

type Story = StoryObj<MeStatusBarComponent>;

export const Default: Story = {};

export const ErrorStatus: Story = {
  args: {
    leftItems: defaultLeftItems,
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
    leftItems: defaultLeftItems,
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
    leftItems: defaultLeftItems,
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
    leftItems: defaultLeftItems,
    rightItems: [
      {
        text: 'Новая информация',
        type: 'info',
        showStatusIcon: true,
      },
    ],
  },
};

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

export const SizeSmall: Story = {
  args: {
    size: 'small',
  },
};

export const SizeLarge: Story = {
  args: {
    size: 'large',
  },
};

export const WithDividers: Story = {
  args: {
    showDivider: true,
  },
};

export const WithoutDividers: Story = {
  args: {
    showDivider: false,
  },
};

export const WithoutFill: Story = {
  args: {
    leftItems: [
      { text: 'Воткинская ГЭС', fill: false },
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
      { text: 'Воткинская ГЭС', readOnly: true },
      {
        text: 'Раскраска схемы без учета ТП',
        fill: true,
        type: 'info',
        readOnly: true,
      },
      {
        text: 'Режим исследования',
        fill: true,
        type: 'success',
        readOnly: true,
      },
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
        readOnly: true,
      },
    ],
  },
};
