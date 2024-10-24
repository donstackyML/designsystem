import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { DxButtonGroupComponent } from 'devextreme-angular';
import { MeButtonGroupDirective } from '../../public-api';

interface ButtonGroupItem {
  text?: string;
  icon?: string;
  leftIcon?: string;
  rightIcon?: string;
  type?: 'default' | 'normal' | 'success' | 'warning' | 'danger';
  disabled?: boolean;
  iconColor?: string;
  leftIconColor?: string;
  rightIconColor?: string;
  iconSize?: string;
  leftIconSize?: string;
  rightIconSize?: string;
  elementAttr?: {
    class?: string;
  };
}

interface ButtonGroupComponent {
  items?: ButtonGroupItem[];
  size?: 'small' | 'medium' | 'large';
  stylingMode?: 'contained' | 'outlined' | 'text';
  disabled?: boolean;
}

export default {
  title: 'Components/ButtonGroup',
  component: DxButtonGroupComponent,
  decorators: [
    moduleMetadata({
      declarations: [MeButtonGroupDirective, DxButtonGroupComponent],
    }),
  ],
  argTypes: {
    items: {
      control: 'object',
      description: 'Определяет массив элементов группы кнопок',
      table: {
        type: { summary: 'ButtonGroupItem[]' },
        defaultValue: { summary: '[]' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Меняет размер группы кнопок',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    stylingMode: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
      description: 'Определяет стиль отображения группы кнопок',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'contained' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Отключает всю группу кнопок',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} as Meta<ButtonGroupComponent>;

type Story = StoryObj<ButtonGroupComponent>;

// Базовый вариант с текстом
export const Default: Story = {
  args: {
    items: [
      { text: 'Первая', type: 'default' },
      { text: 'Вторая', type: 'default' },
      { text: 'Третья', type: 'default' }
    ],
    size: 'medium',
    stylingMode: 'contained',
  },
  render: (args) => ({
    props: args,
    template: `
      <dx-button-group
        meButtonGroup
        [items]="items"
        [size]="size"
        [stylingMode]="stylingMode"
        [disabled]="disabled"
      ></dx-button-group>
    `,
  }),
};

// Кнопки с иконками
export const WithIcons: Story = {
  args: {
    items: [
      { text: 'Назад', leftIcon: 'arrowback', type: 'default' },
      { text: 'Обновить', leftIcon: 'cached', type: 'default' },
      { text: 'Вперед', leftIcon: 'arrowforward', type: 'default' }
    ],
    size: 'medium',
    stylingMode: 'contained',
  },
  render: Default.render,
};

// Только иконки
export const IconsOnly: Story = {
  args: {
    items: [
      { icon: 'arrowback', type: 'default' },
      { icon: 'cached', type: 'default' },
      { icon: 'arrowforward', type: 'default' }
    ],
    size: 'medium',
    stylingMode: 'contained',
  },
  render: Default.render,
};

// Разные типы кнопок
export const ButtonTypes: Story = {
  args: {
    items: [
      { text: 'Default', leftIcon: 'database', type: 'default' },
      { text: 'Normal', leftIcon: 'help', type: 'normal' },
      { text: 'Success', leftIcon: 'check', type: 'success' },
      { text: 'Warning', leftIcon: 'help', type: 'warning' },
      { text: 'Danger', leftIcon: 'cancel', type: 'danger' }
    ],
    size: 'medium',
    stylingMode: 'contained',
  },
  render: Default.render,
};

// Отключенные состояния
export const DisabledStates: Story = {
  args: {
    items: [
      { text: 'Активная', leftIcon: 'add', type: 'default', disabled: true},
      { text: 'Отключенная', leftIcon: 'cancel', type: 'default', disabled: true },
      { text: 'Активная', leftIcon: 'check', type: 'default', disabled: true }
    ],
    size: 'medium',
    stylingMode: 'contained',
  },
  render: Default.render,
};

// Разные размеры
export const Sizes: Story = {
  args: {
    items: [
      { text: 'Назад', leftIcon: 'arrowback', type: 'normal' },
      { text: 'Обновить', leftIcon: 'cached', type: 'normal' },
      { text: 'Вперед', leftIcon: 'arrowforward', type: 'normal' }
    ],
    stylingMode: 'contained',
  },
  render: (args) => ({
    props: {
      ...args,
      sizes: ['small', 'medium', 'large'],
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div *ngFor="let currentSize of sizes">
          <h4 style="margin-bottom: 0.5rem;">{{currentSize}}</h4>
          <dx-button-group
            meButtonGroup
            [items]="items"
            [size]="currentSize"
            [stylingMode]="stylingMode"
            [disabled]="disabled"
          ></dx-button-group>
        </div>
      </div>
    `,
  }),
};

// Стили кнопок
export const Styles: Story = {
  args: {
    items: [
      { text: 'Default', leftIcon: 'add', type: 'default' },
      { text: 'Warning', leftIcon: 'cached', type: 'warning' },
      { text: 'Danger', leftIcon: 'cancel', type: 'danger' }
    ],
    size: 'medium',
  },
  render: (args) => ({
    props: {
      ...args,
      styles: ['contained', 'outlined', 'text'],
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div *ngFor="let style of styles">
          <h4 style="margin-bottom: 0.5rem;">{{style}}</h4>
          <dx-button-group
            meButtonGroup
            [items]="items"
            [size]="size"
            [stylingMode]="style"
            [disabled]="disabled"
          ></dx-button-group>
        </div>
      </div>
    `,
  }),
};
