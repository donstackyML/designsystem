import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';

import { DxButtonModule, DxToastModule } from 'devextreme-angular';
import { MeButtonModule, MeToastComponent } from '../../../../../public-api';

export default {
  title: 'Components/Toast/Component',
  decorators: [
    moduleMetadata({
      imports: [
        MeToastComponent,
        DxToastModule,
        DxButtonModule,
        MeButtonModule,
      ],
    }),
  ],
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'info', 'warning', 'error', 'info-inverted'],
      description:
        'Определяет визуальный стиль уведомления, влияя на цветовую схему и значок.',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'string' },
        defaultValue: { summary: 'info' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'large'],
      description:
        'Задает размер тоста: "small" для компактного вида или "large" для более выразительного уведомления.',
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
    title: {
      control: 'text',
      description:
        'Заголовок уведомления. Если не задан, заголовок не отображается.',
      table: {
        category: 'Контент и управление контентом',
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    showIcon: {
      control: 'boolean',
      description:
        'Определяет, отображается ли иконка уведомления. По умолчанию: true.',
      table: {
        category: 'Контент и управление контентом',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    showCloseButton: {
      control: 'boolean',
      description:
        'Отображает кнопку закрытия уведомления. По умолчанию: true.',
      table: {
        category: 'Контент и управление контентом',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    showActionButtons: {
      control: 'boolean',
      description:
        'Отображает дополнительные кнопки действий (например, Accept/Cancel). По умолчанию: false.',
      table: {
        category: 'Контент и управление контентом',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
      description:
        'Управляет отображением тоста. Если значение `false`, уведомление скрыто.',
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
      description:
        'Время отображения тоста в миллисекундах, после которого уведомление скрывается.',
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
    width: {
      control: 'text',
      description:
        'Ширина уведомления. Может быть числом или строкой. По умолчанию: "260px".',
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
      description:
        'Вызывается, когда содержимое уведомления полностью загружено и готово к отображению.',
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
    },
    onAccept: {
      action: 'accept',
      description:
        'Вызывается при подтверждении уведомления (например, при клике на кнопку "Принять").',
      table: {
        category: 'События',
        type: { summary: 'EventEmitter<string>' },
      },
    },
    onCancel: {
      action: 'cancel',
      description:
        'Вызывается при отмене уведомления (например, при клике на кнопку "Отмена").',
      table: {
        category: 'События',
        type: { summary: 'EventEmitter<void>' },
      },
    },
    onClose: {
      action: 'close',
      description: 'Вызывается при закрытии уведомления.',
      table: {
        category: 'События',
        type: { summary: 'EventEmitter<void>' },
      },
    },
  },
  args: {
    size: 'small',
    type: 'info',
    visible: false,
    displayTime: 4000,
    title: 'Заголовок',
    message: 'Операция выполнена успешно',
    position: 'bottom center',
    width: '260px',
    showCloseButton: true,
    showIcon: true,
    showActionButtons: false,
    closeOnSwipe: false,
    hideOnOutsideClick: false,
    closeOnClick: false,
  },
  render: (args) => ({
    props: args,
    template: `
    <div class='flex'>
      <dx-button text="Открыть тост" meButton (onClick)="visible = true"></dx-button>
      <dx-button text="Закрыть тост" meButton (onClick)="visible = false"></dx-button>
    </div>

    <me-toast
     ${argsToTemplate(args)}
      (onAccept)="visible = false"
      (onCancel)="visible = false"
      (onClose)="visible = false"
    >
    </me-toast>`,
    styles: [
      `
      .flex {
        display: flex;
        gap: 10px;
      }
    `,
    ],
  }),
} satisfies Meta<MeToastComponent>;

type Story = StoryObj<MeToastComponent>;

export const Default: Story = {
  args: {},
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
    type: 'info-inverted',
  },
};

export const ContentOnlyTitle: Story = {
  args: {
    message: undefined,
  },
};

export const ContentOnlyMessage: Story = {
  args: {
    title: undefined,
  },
};

export const LongTitleAndMessage: Story = {
  args: {
    title: 'Система успешно завершила обработку данных',
    message:
      'Ваши данные были успешно обработаны и сохранены в базе данных. Теперь вы можете перейти к следующему этапу.',
    type: 'success',
  },
};

export const CustomContent: Story = {
  args: {
    type: 'custom',
  },
  render: (args) => ({
    props: args,
    template: `
    <div class='flex'>
      <dx-button text="Открыть тост" meButton (onClick)="visible = true"></dx-button>
      <dx-button text="Закрыть тост" meButton (onClick)="visible = false"></dx-button>
    </div>

   <me-toast
    [template]="customTemplate"
    ${argsToTemplate(args)}
    (onAccept)="visible = false"
    (onCancel)="visible = false"
    (onClose)="visible = false"
  >
  </me-toast>

  <ng-template #customTemplate let-item="content">
    <div class='custom-content'>
      <h4 class="me-title-header2">{{ title }}</h4>
      <p class="me-text-body2">{{ message }}</p>
      <div class="actions">
        <dx-button meButton text="Принять" (click)="handleAccept()"></dx-button>
        <dx-button meButton text="Отмена" (click)="handleCancel()"></dx-button>
      </div>
    </div>
  </ng-template>
`,
    styles: [
      `
      .flex {
        display: flex;
        gap: 10px;
      }

      .custom-content {
        display: flex;
        flex-direction: column;

        .actions {
          display: flex;
          gap: 4px;
          align-self: flex-end;
        }
      }

      .me-title-header2,
      .me-text-body2 {
        margin: 0;
      }
    `,
    ],
  }),
};

export const WithActionButtons: Story = {
  args: {
    showActionButtons: true,
    type: 'warning',
    message: 'Внимание! Требуется подтверждение.',
    title: 'Подтверждение',
  },
};
