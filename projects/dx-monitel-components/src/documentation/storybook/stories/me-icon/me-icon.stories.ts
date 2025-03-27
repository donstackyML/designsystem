import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { NgStyle } from '@angular/common';
import { MeIconComponent } from '../../../../public-api';
import { iconOptions } from './me-icon-mock-data';

export default {
  title: 'Components/Icon',
  component: MeIconComponent,
  decorators: [
    moduleMetadata({
      imports: [MeIconComponent, NgStyle],
    }),
  ],
  argTypes: {
    icon: {
      control: {
        type: 'select',
      },
      options: iconOptions,
      description: 'Имя иконки из Material Symbols',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'home' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Размер иконки',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    color: {
      control: 'color',
      description: 'Цвет иконки',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  },
  args: {
    icon: 'home',
    size: 'medium',
    color: 'currentColor',
  },
  render: (args) => ({
    props: args,
    template: `
    <div style="color: var(--Text-Default)">
      <me-icon
        [icon]="icon"
        [size]="size"
        [color]="color">
      </me-icon>
    </div>
    `,
  })
} satisfies Meta<MeIconComponent>;

type Story = StoryObj<MeIconComponent>;

export const Default: Story = {
  args: {},
};

export const SizeSmall: Story = {
  args: {
    size: 'small',
  },
};

export const SizeMedium: Story = {
  args: {
    size: 'medium',
  },
};

export const SizeLarge: Story = {
  args: {
    size: 'large',
  },
};

export const StarIconWithOrangeColor: Story = {
  args: {
    icon: 'star',
    color: '#ff5722',
  },
};

export const AllIcons: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-wrap: wrap; color: var(--Text-Default)">
        ${iconOptions
        .map(
          (icon) => `
          <div style="display: flex; flex-direction: column; align-items: center; margin: 10px; text-align: center; width: 100px;">
            <me-icon icon="${icon}" size="large" color="currentColor"></me-icon>
            <p style="font-size: 12px; word-wrap: break-word;">${icon}</p>
          </div>
        `
        )
        .join('')}
      </div>
    `,
  }),
};
