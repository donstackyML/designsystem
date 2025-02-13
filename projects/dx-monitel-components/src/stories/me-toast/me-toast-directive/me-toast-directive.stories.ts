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

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AnimationConfig } from 'devextreme/animation/fx';
import { PositionConfig } from 'devextreme/animation/position';
import { ToastType } from 'devextreme/ui/toast';
import {
  MeButtonModule,
  MeSize,
  MeToastModule
} from '../../../public-api';
@Component({
  selector: 'me-toast-directive-storybook-demo',
  imports: [DxButtonModule, MeButtonModule, DxToastModule, MeToastModule],
  standalone: true,
  template: `
    <div class='flex'>
      <dx-button text="Открыть тост" meButton (onClick)="showToast(toast)"></dx-button>
      <dx-button text="Закрыть тост" meButton (onClick)="hideToast(toast)"></dx-button>
    </div>

    <dx-toast
      #toast="meToastControl"
      meToast
      [message]="message"
      [size]="size"
      [width]="width"
      [maxWidth]="maxWidth"
      [minWidth]="minWidth"
      [height]="height"
      [maxHeight]="maxHeight"
      [minHeight]="minHeight"
      [type]="type"
      [position]="position"
      [visible]="visible"
      [displayTime]="displayTime"
      [closeOnClick]="closeOnClick"
      [hideOnOutsideClick]="hideOnOutsideClick"
      [closeOnSwipe]="closeOnSwipe"
      [hoverStateEnabled]="hoverStateEnabled"
      [animation]="animation"
      (onContentReady)="onContentReady.emit($event)"
      (onDisposing)="onDisposing.emit($event)"
      (onHidden)="onHidden.emit($event)"
      (onHiding)="onHiding.emit($event)"
      (onInitialized)="onInitialized.emit($event)"
      (onOptionChanged)="onOptionChanged.emit($event)"
      (onShowing)="onShowing.emit($event)"
      (onShown)="onShown.emit($event)"
    >
    </dx-toast>`
  ,
  styles: [
    `
      .flex {
        display: flex;
        gap: 10px;
      }
    `,
  ]
})
class MeToastDemoStorybookComponent {
  @Input() message: string = 'This is a toast notification!';
  @Input() displayTime: number = 3000;
  @Input() type: ToastType = 'info';

  @Input() visible: boolean = false;
  @Input() showIcon: boolean = false;
  @Input() icon: string = 'dx-icon-info';

  @Input() size?: MeSize = 'medium';
  @Input() height?: number | Function | string;
  @Input() maxHeight?: number | string;
  @Input() minHeight?: number | string;
  @Input() width?: number | string = '260px';
  @Input() maxWidth?: number | string;
  @Input() minWidth?: number | string;

  @Input() position?: PositionConfig | string = 'bottom right';
  @Input() animation?: {
    hide?: AnimationConfig;
    show?: AnimationConfig;
  } = {
      show: { type: 'fade', duration: 400, from: 0, to: 1 },
      hide: { type: 'fade', duration: 400, from: 1, to: 0 },
    };
  @Input() closeOnClick?: boolean;
  @Input() hideOnOutsideClick?: boolean | ((event: Event) => boolean);
  @Input() closeOnSwipe?: boolean;
  @Input() hoverStateEnabled?: boolean;

  @Output() onContentReady = new EventEmitter<void>();
  @Output() onDisposing = new EventEmitter<void>();
  @Output() onHidden = new EventEmitter<void>();
  @Output() onHiding = new EventEmitter<void>();
  @Output() onInitialized = new EventEmitter<void>();
  @Output() onOptionChanged = new EventEmitter<void>();
  @Output() onShowing = new EventEmitter<void>();
  @Output() onShown = new EventEmitter<void>();

  showToast(toastDirective: any) {
    toastDirective.showToast();
  }

  hideToast(toastDirective: any) {
    toastDirective.hideToast();
  }

  handleOnHidden() {
    console.log('handleOnHidden');
  }
}

export default {
  decorators: [
    moduleMetadata({
      imports: [DxToastModule, DxButtonModule, MeButtonModule, MeToastDemoStorybookComponent],
    }),
  ],
  title: 'Components/Toast/Directive',
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'info', 'warning', 'error', 'info-inverted'],
      description: 'Определяет визуальный стиль уведомления, влияя на цветовую схему и значок.',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'string' },
        defaultValue: { summary: 'info' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'large'],
      description: 'Задает размер тоста: "small" для компактного вида или "large" для более выразительного уведомления.',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'string' },
        defaultValue: { summary: 'small' },
      },
    },
    message: {
      control: 'text',
      description: 'Основной текст уведомления, который отображается в тосте.',
      table: {
        category: 'Контент и управление контентом',
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    showIcon: {
      control: 'boolean',
      description: 'Определяет, отображается ли иконка уведомления. По умолчанию: true.',
      table: {
        category: 'Контент и управление контентом',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    animation: {
      control: 'object',
      description:
        'Настраивает анимацию показа и скрытия уведомления. Задает параметры для анимаций "show" и "hide".',
      table: {
        category: 'Анимация',
        type: { summary: 'object' },
        defaultValue: { summary: '{ show: {…}, hide: {…} }' },
      },
    },
    visible: {
      control: 'boolean',
      description: 'Управляет отображением тоста. Если значение `false`, уведомление скрыто.',
      table: {
        category: 'Отображение',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
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
      description: 'Указывает позицию уведомления на экране.',
      table: {
        category: 'Отображение',
        type: { summary: 'string' },
        defaultValue: { summary: 'bottom center' },
      },
    },
    displayTime: {
      control: { type: 'number' },
      description: 'Время отображения тоста в миллисекундах, после которого уведомление скрывается.',
      table: {
        category: 'Отображение',
        type: { summary: 'number' },
        defaultValue: { summary: '4000' },
      },
    },
    closeOnClick: {
      control: 'boolean',
      description: 'Закрывает уведомление при клике по нему.',
      table: {
        category: 'Отображение',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    hideOnOutsideClick: {
      control: 'boolean',
      description:
        'Закрывает уведомление при клике вне его области. Может быть также функцией, возвращающей boolean.',
      table: {
        category: 'Отображение',
        type: { summary: 'boolean | function' },
        defaultValue: { summary: 'false' },
      },
    },
    closeOnSwipe: {
      control: 'boolean',
      description: 'Закрывает уведомление при свайпе.',
      table: {
        category: 'Отображение',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    hoverStateEnabled: {
      control: 'boolean',
      description: 'Включает или отключает состояние наведения для уведомления.',
      table: {
        category: 'Отображение',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    width: {
      control: 'text',
      description: 'Ширина уведомления. Может быть числом или строкой. По умолчанию: "260px".',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'number | string' },
        defaultValue: { summary: '260px' },
      },
    },
    maxWidth: {
      control: 'text',
      description: 'Максимальная ширина уведомления.',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'number | string' },
        defaultValue: { summary: '' },
      },
    },
    minWidth: {
      control: 'text',
      description: 'Минимальная ширина уведомления.',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'number | string' },
        defaultValue: { summary: '' },
      },
    },
    height: {
      control: 'text',
      description:
        'Высота уведомления. Может быть числом, строкой или функцией, возвращающей значение.',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'number | string | Function' },
        defaultValue: { summary: '' },
      },
    },
    maxHeight: {
      control: 'text',
      description: 'Максимальная высота уведомления.',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'number | string' },
        defaultValue: { summary: '' },
      },
    },
    minHeight: {
      control: 'text',
      description: 'Минимальная высота уведомления.',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'number | string' },
        defaultValue: { summary: '' },
      },
    },
    onContentReady: {
      action: 'contentReady',
      description: 'Вызывается, когда содержимое уведомления полностью загружено и готово к отображению.',
      table: {
        category: 'События',
        type: { summary: 'EventEmitter<void>' },
      },
    },
    onDisposing: {
      action: 'disposing',
      description: 'Вызывается перед уничтожением компонента уведомления.',
      table: {
        category: 'События',
        type: { summary: 'EventEmitter<void>' },
      },
    },
    onHidden: {
      action: 'hidden',
      description: 'Вызывается после полного скрытия уведомления.',
      table: {
        category: 'События',
        type: { summary: 'EventEmitter<void>' },
      },
    },
    onHiding: {
      action: 'hiding',
      description: 'Вызывается в процессе скрытия уведомления.',
      table: {
        category: 'События',
        type: { summary: 'EventEmitter<void>' },
      },
    },
    onInitialized: {
      action: 'initialized',
      description: 'Вызывается при инициализации компонента уведомления.',
      table: {
        category: 'События',
        type: { summary: 'EventEmitter<void>' },
      },
    },
    onOptionChanged: {
      action: 'optionChanged',
      description: 'Вызывается при изменении настроек уведомления.',
      table: {
        category: 'События',
        type: { summary: 'EventEmitter<void>' },
      },
    },
    onShowing: {
      action: 'showing',
      description: 'Вызывается перед началом показа уведомления.',
      table: {
        category: 'События',
        type: { summary: 'EventEmitter<void>' },
      },
    },
    onShown: {
      action: 'shown',
      description: 'Вызывается после полного отображения уведомления.',
      table: {
        category: 'События',
        type: { summary: 'EventEmitter<void>' },
      },
    }
  },
  args: {
    size: 'small',
    type: 'info',
    visible: false,
    displayTime: 4000,
    message: 'Операция выполнена успешно',
    position: 'bottom center',
    showIcon: false,
  },
  render: (args) => ({
    props: args,
    template: `<me-toast-directive-storybook-demo ${argsToTemplate(args)}></me-toast-directive-storybook-demo>`,
  })
} satisfies Meta<MeToastDemoStorybookComponent>;

type Story = StoryObj<MeToastDemoStorybookComponent>;

export const Default: Story = {
  args: {}
};

export const SizeSmall: Story = {
  args: {
    size: 'small',
  }
};

export const SizeLarge: Story = {
  args: {
    size: 'large',
  },
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

export const WithIcon: Story = {
  args: {
    showIcon: true,
    type: "warning",
    message: "Проверьте введенные данные",
    size: "large",
  },
};
