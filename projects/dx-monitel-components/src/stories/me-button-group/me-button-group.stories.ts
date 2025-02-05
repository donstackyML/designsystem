import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { DxButtonGroupComponent } from 'devextreme-angular';
import { ButtonType } from 'devextreme/common';
import { MeButtonGroupDirective, MeButtonGroupItem } from '../../public-api';

interface ButtonGroupComponent {
  items?: MeButtonGroupItem[];
  size?: 'small' | 'medium' | 'large';
  stylingMode?: 'contained' | 'outlined' | 'text';
  disabled?: boolean;
}

export default {
  title: 'Components/ButtonGroup',
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
  args: {
    items: [
      { text: 'Первая', type: 'default' },
      { text: 'Вторая', type: 'normal' },
      { text: 'Третья', type: 'success' },
      { text: 'Четвертая', type: 'warning' as ButtonType },
      { text: 'Пятая', type: 'danger' },
    ],
    size: 'medium',
    stylingMode: 'contained',
    disabled: false
  },
  render: (args) => ({
    props: args,
    template: `
      <dx-button-group
        meButtonGroup
        ${argsToTemplate(args)}
      ></dx-button-group>
    `,
  }),
} satisfies Meta<ButtonGroupComponent | MeButtonGroupDirective>;

type Story = StoryObj<ButtonGroupComponent | MeButtonGroupDirective>;

export const Default: Story = {
  args: {}
};

export const WithLeftSideIcons: Story = {
  args: {
    items: [
      { text: 'Назад', leftIcon: 'arrowback', type: 'default' },
      { text: 'Обновить', leftIcon: 'cached', type: 'default' },
      { text: 'Вперед', leftIcon: 'arrowforward', type: 'default' },
    ],
    size: 'medium',
    stylingMode: 'contained',
  },
};

export const WithTwoIcons: Story = {
  args: {
    items: [
      {
        text: 'Назад',
        leftIcon: 'arrowback',
        rightIcon: 'arrowforward',
        type: 'default',
      },
      {
        text: 'Обновить',
        leftIcon: 'arrowback',
        rightIcon: 'arrowforward',
        type: 'default',
      },
      {
        text: 'Вперед',
        leftIcon: 'arrowback',
        rightIcon: 'arrowforward',
        type: 'default',
      },
    ],
    size: 'medium',
    stylingMode: 'contained',
  },
};

export const IconsOnly: Story = {
  args: {
    items: [
      { icon: 'arrowback', type: 'default' },
      { icon: 'cached', type: 'default' },
      { icon: 'arrowforward', type: 'default' },
    ],
    size: 'medium',
    stylingMode: 'contained',
  },
};

export const SizeSmall: Story = {
  args: {
    size: 'small'
  },
};
export const SizeMedium: Story = {
  args: {
    size: 'medium'
  },
};

export const SizeLarge: Story = {
  args: {
    size: 'large'
  },
};

export const StylingModeContained: Story = {
  args: {
    stylingMode: 'contained'
  },
};

export const StylingModeOutlined: Story = {
  args: {
    stylingMode: 'outlined'
  },
};

export const StylingModeText: Story = {
  args: {
    stylingMode: 'text'
  },
};

export const DisabledState: Story = {
  args: {
    disabled: true
  },
};

export const AllButtonTypes: Story = {
  args: {
    items: [
      { text: 'Default', leftIcon: 'database', type: 'default' },
      { text: 'Normal', leftIcon: 'help', type: 'normal' },
      { text: 'Success', leftIcon: 'check', type: 'success' },
      { text: 'Warning', leftIcon: 'help', type: 'warning' as ButtonType },
      { text: 'Danger', leftIcon: 'cancel', type: 'danger' },
    ],
    size: 'medium',
    stylingMode: 'contained',
  },
};
