import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import {MeIconModule} from "../../public-api";


export default {
  title: 'Components/Icon',
  decorators: [
    moduleMetadata({
      imports: [MeIconModule], // Подключаем модуль
    }),
  ],
  argTypes: {
    icon: {
      control: 'text',
      description: 'Имя иконки из Material Symbols',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Размер иконки',
    },
    color: {
      control: 'color',
      description: 'Цвет иконки',
    },
  },
  args: {
    icon: 'home',
    size: 'medium',
    color: '#000000',
  },
  render: (args) => ({
    props: args,
    template: `
      <me-icon
        [icon]="icon"
        [size]="size"
        [ngStyle]="{ color: color }">
      </me-icon>
    `,
  }),
} as Meta;

type Story = StoryObj;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const CustomIcon: Story = {
  args: {
    icon: 'star',
  },
};

export const CustomColor: Story = {
  args: {
    color: '#ff5722',
  },
};
