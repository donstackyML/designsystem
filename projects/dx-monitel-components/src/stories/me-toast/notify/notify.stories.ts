import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import {
  DxButtonModule,
  DxToastModule
} from 'devextreme-angular';

import { Component, Input } from '@angular/core';
import { AnimationConfig } from 'devextreme/animation/fx';
import notify from 'devextreme/ui/notify';
import { ToastType } from 'devextreme/ui/toast';

import {
  MeButtonModule,
} from '../../../public-api';
@Component({
  selector: 'notify-storybook-demo',
  imports: [DxButtonModule, MeButtonModule, DxToastModule],
  standalone: true,
  template: `<dx-button text="Показать уведомление" meButton (onClick)="showNotification()"></dx-button>`,
})
class MeToastDemoStorybookComponent {
  @Input() message: string = 'This is a toast notification!';
  @Input() displayTime: number = 3000;
  @Input() position: any = 'bottom right';
  @Input() type: ToastType = 'info';
  @Input() animation: { hide: AnimationConfig; show: AnimationConfig } = {
    show: { type: 'fade', duration: 400, from: 0, to: 1 },
    hide: { type: 'fade', duration: 400, from: 1, to: 0 },
  };
  @Input() visible: boolean = false;
  @Input() width: number | string = '260px';

  showNotification() {
    notify({
      displayTime: this.displayTime,
      message: this.message,
      type: this.type,
      position: this.position,
      width: 450,
    })
  }
}

export default {
  decorators: [
    moduleMetadata({
      imports: [DxToastModule, DxButtonModule, MeButtonModule, MeToastDemoStorybookComponent],
    }),
  ],
  title: 'Components/Toast/Notify',
  parameters: {
    docs: {
      description: {
        component: 'Another description, overriding the comments',
      },
    },
  },
  argTypes: {
    message: {
      control: 'text',
      description:
        'Строка с текстом уведомления, отображаемого в тосте. Можно использовать HTML для форматирования (если поддерживается).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    visible: {
      control: 'boolean',
      description:
        'Флаг, определяющий, отображается ли тост на экране. При значении false тост скрывается.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    type: {
      control: 'select',
      options: ['success', 'info', 'warning', 'error', 'info-inverted'],
      description:
        'Задает стиль уведомления, влияющий на цветовую схему и отображаемую иконку.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'info' },
      },
      width: {
        control: 'text',
        description: 'Ширина уведомления. Может быть числом или строкой. По умолчанию: "260px".',
        table: {
          type: { summary: 'number | string' },
          defaultValue: { summary: '260px' },
        },
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
      description:
        'Определяет позицию тоста на экране. Возможные значения: "top left", "top right", "top center", "bottom left", "bottom center", "bottom right", "center".',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'bottom center' },
      },
    },
    displayTime: {
      control: { type: 'number' },
      description:
        'Время отображения тоста в миллисекундах. По истечении этого времени тост автоматически скрывается.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '4000' },
      },
    },
  },
  args: {
    type: 'info',
    visible: false,
    displayTime: 4000,
    message: 'Операция выполнена успешно',
    position: 'bottom center',
    width: '260px'
  },
  render: (args) => ({
    props: args,
    template: `<notify-storybook-demo ${argsToTemplate(args)}></notify-storybook-demo>`
  })
} satisfies Meta<MeToastDemoStorybookComponent>;

type Story = StoryObj<MeToastDemoStorybookComponent>;

export const Default: Story = {
  args: {}
};

export const TypeInfo: Story = {
  args: {
    type: 'info',
  },
};

export const TypeWarning: Story = {
  args: {
    type: 'warning',
  },
};

export const TypeSuccess: Story = {
  args: {
    type: 'success',
  },
};

export const TypeError: Story = {
  args: {
    type: 'error',
  },
};

export const TypeInfoInverted: Story = {
  args: {
    type: 'info-inverted' as any,
  },
};
