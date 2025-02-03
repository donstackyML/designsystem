import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';

import { MeToastComponent } from '../../public-api';

export default {
  title: 'Components/Toast',
  decorators: [
    moduleMetadata({
      imports: [MeToastComponent],
    }),
  ],
  argTypes: {
    visible: {
      control: 'boolean',
      description: 'Отображение тоста.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    type: {
      control: 'select',
      options: ['success', 'info', 'warning', 'error', 'info-inverted'],
      description: 'Определяет тип уведомления.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'info' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'large'],
      description: 'Определяет размер тоста.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'small' },
      },
    },
    position: {
      control: 'select',
      options: [
        'top left',
        'top right',
        'top center',
        'bottom left',
        'bottom center',
        'bottom right',
        'center',
      ],
      description: 'Позиция тоста на экране.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'bottom center' },
      },
    },
    message: {
      control: 'text',
      description: 'Текст уведомления в тосте.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    title: {
      control: 'text',
      description:
        'Текст заголовка уведомления в тосте. Если не указан, заголовок не отображается.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    displayTime: {
      control: { type: 'number' },
      description: 'Время отображения тоста в миллисекундах.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 10000 },
      },
    },
  },
  render: (args) => ({
    props: args,
    template: `<me-toast ${argsToTemplate(args)}
    (onAccept)="visible = false"
    (onCancel)="visible = false"
    (handleClose)="visible = false"
    >
  </me-toast>`,
  }),
} as Meta<typeof MeToastComponent>;

type Story = StoryObj<MeToastComponent>;

export const FullToastSizeSmall: Story = {
  args: {
    size: 'small',
    type: 'info',
    visible: true,
    displayTime: 4000,
    title: 'Заголовок',
    message: 'Операция выполнена успешно',
    position: 'bottom center',
  },
};

export const FullToastSizeLarge: Story = {
  args: {
    ...FullToastSizeSmall.args,
    size: 'large',
  },
};

export const FullToastTypeInfo: Story = {
  args: {
    ...FullToastSizeSmall.args,
    type: 'info',
  },
};

export const FullToastTypeWarning: Story = {
  args: {
    ...FullToastSizeSmall.args,
    type: 'warning',
  },
};

export const FullToastTypeSuccess: Story = {
  args: {
    ...FullToastSizeSmall.args,
    type: 'success',
  },
};

export const FullToastTypeError: Story = {
  args: {
    ...FullToastSizeSmall.args,
    type: 'error',
  },
};

export const FullToastTypeInfoInverted: Story = {
  args: {
    ...FullToastSizeSmall.args,
    type: 'info-inverted',
  },
};
