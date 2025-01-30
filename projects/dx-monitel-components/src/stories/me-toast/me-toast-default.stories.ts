import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { DxButtonModule, DxToastComponent, DxToastModule } from 'devextreme-angular';

import { MeButtonModule, MeIconComponent, MeToastDirective, } from '../../public-api';

export default {
  decorators: [
    moduleMetadata({
      declarations: [MeToastDirective],
      imports: [DxToastModule, DxButtonModule, MeButtonModule, MeIconComponent],
    }),
  ],
  title: 'Components/Toast/Default',
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
      options: ['top left', 'top right', 'top center', 'bottom left', 'bottom center', 'bottom right', 'center'],
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
    displayTime: {
      control: { type: 'number' },
      description: 'Время отображения тоста в миллисекундах.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 10000 },
      },
    },
    showIcon: {
      control: 'boolean',
      description: 'Отображение иконки рядом с текстом.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },

  render: (args) => ({
    props: args,
    template: `<dx-toast meToast ${argsToTemplate(args)}>
  </dx-toast>`,
  }),
} as Meta<MeToastDirective | DxToastComponent>;

type Story = StoryObj<
  MeToastDirective | DxToastComponent
>;

export const DefaultToastSizeSmall: Story = {
  args: {
    size: 'small',
    type: 'info',
    visible: true,
    displayTime: 4000,
    message: 'Операция выполнена успешно',
    position: 'bottom center',
    showIcon: false
  }
};


export const DefaultToastSizeLarge: Story = {
  args: {
    ...DefaultToastSizeSmall.args,
    size: 'large'
  }
};

export const DefaultToastTypeInfo: Story = {
  args: {
    ...DefaultToastSizeSmall.args,
    type: 'info'
  }
};

export const DefaultToastTypeWarning: Story = {
  args: {
    ...DefaultToastSizeSmall.args,
    type: 'warning'
  }
};

export const DefaultToastTypeSuccess: Story = {
  args: {
    ...DefaultToastSizeSmall.args,
    type: 'success'
  }
};

export const DefaultToastTypeError: Story = {
  args: {
    ...DefaultToastSizeSmall.args,
    type: 'error'
  }
};

export const DefaultToastTypeInfoInverted: Story = {
  args: {
    ...DefaultToastSizeSmall.args,
    type: 'info-inverted' as any
  }
};
export const DefaultToastWithIcon: Story = {
  args: {
    ...DefaultToastSizeSmall.args,
    showIcon: true
  }
};
