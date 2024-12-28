import {
  Meta,
  StoryObj,
  argsToTemplate,
  moduleMetadata,
} from '@storybook/angular';
import { DxButtonModule, DxToastModule } from 'devextreme-angular';
import {
  MeButtonModule,
  MeIconComponent,
  MeToastDirective,
} from '../../public-api';

export default {
  title: 'Components/Toast',
  decorators: [
    moduleMetadata({
      declarations: [MeToastDirective],
      imports: [DxToastModule, DxButtonModule, MeButtonModule, MeIconComponent],
    }),
  ],
} as Meta;

type Story = StoryObj;

// export const Default: Story = {
//   args: {
//     size: 'small',
//     message: 'Hello, world!',
//     position: 'top',
//     displayTime: 200000000000000,
//     type: 'info',
//     visible: true,
//   },
//   render: (args) => ({
//     props: { ...args },
//     template: `
//       <dx-toast
//         meToast
//         ${argsToTemplate(args)}
//       >
// 	</dx-toast>
//     `,
//   }),
// };

// Маленький информационный тост
export const SmallInfo: Story = {
  render: () => ({
    props: {
      isVisible: true,
    },
    template: `
      <dx-toast
        meToast
        [(visible)]="isVisible"
        [displayTime]="100000000000"
        [type]="'info'"
      >
        <div *dxTemplate="let data of 'content'" class="me-toast-content me-toast-small">
          <div class="me-toast-header">
            <me-icon icon="info" size="small" color="var(--Controls-BG-Accent-Accent-BG-Default)"></me-icon>
            <div class="me-title-header2">Информация</div>
            <dx-button
              icon="close"
              stylingMode="text"
              class="me-toast-close-button"
              (onClick)="isVisible = false"
            ></dx-button>
          </div>
          <div class="me-toast-content2 me-text-body2">Операция выполнена успешно</div>
          <div class="me-toast-actions">
            <dx-button
              meButton
              size="small"
              text="Принять"
              type="default"
              stylingMode="contained"
              (onClick)="isVisible = false"
            ></dx-button>
            <dx-button
              meButton
              size="small"
              text="Отменить"
              type="default"
              stylingMode="text"
              (onClick)="isVisible = false"
            ></dx-button>
          </div>
        </div>
      </dx-toast>
    `,
  }),
};

// Маленький предупреждающий тост
export const SmallWarning: Story = {
  render: () => ({
    props: {
      isVisible: true,
    },
    template: `
      <dx-toast
        meToast
        [(visible)]="isVisible"
        [displayTime]="100000000000"
        [type]="'warning'"
      >
        <div *dxTemplate="let data of 'content'" class="me-toast-content me-toast-small">
          <div class="me-toast-header">
            <me-icon icon="warning_amber" class="outlined-icon" type="outlined" size="small" color="var(--Icon-Attention)"></me-icon>
            <div class="me-title-header2">Предупреждение</div>
            <dx-button
              icon="close"
              stylingMode="text"
              class="me-toast-close-button"
              (onClick)="isVisible = false"
            ></dx-button>
          </div>
          <div class="me-toast-content2 me-text-body2">Внимание! Данное действие нельзя будет отменить</div>
          <div class="me-toast-actions">
            <dx-button
              meButton
              size="small"
              text="Принять"
              type="warning"
              stylingMode="contained"
              (onClick)="isVisible = false"
            ></dx-button>
            <dx-button
              meButton
              size="small"
              text="Отменить"
              type="warning"
              stylingMode="text"
              (onClick)="isVisible = false"
            ></dx-button>
          </div>
        </div>
      </dx-toast>
    `,
  }),
};

// Большой тост с ошибкой
export const LargeError: Story = {
  render: () => ({
    props: {
      isVisible: true,
    },
    template: `
      <dx-toast
        meToast
        [(visible)]="isVisible"
        [displayTime]="100000000000"
        [type]="'error'"
      >
        <div *dxTemplate="let data of 'content'" class="me-toast-content me-toast-large">
          <div class="me-toast-header">
            <me-icon class="me-error-icon" icon="error" size="large" color="var(--Icon-Error)"></me-icon>
            <div class="me-title-header1">Ошибка</div>
            <dx-button
              icon="close"
              stylingMode="text"
              class="me-toast-close-button"
              (onClick)="isVisible = false"
            ></dx-button>
          </div>
          <div class="me-toast-content1 me-text-body1">Произошла ошибка при выполнении операции</div>
          <div class="me-toast-actions">
            <dx-button
              meButton
              size="large"
              text="Принять"
              type="danger"
              stylingMode="contained"
              (onClick)="isVisible = false"
            ></dx-button>
            <dx-button
              meButton
              size="large"
              text="Отменить"
              type="danger"
              stylingMode="text"
              (onClick)="isVisible = false"
            ></dx-button>
          </div>
        </div>
      </dx-toast>
    `,
  }),
};

// Большой тост успеха
export const LargeSuccess: Story = {
  render: () => ({
    props: {
      isVisible: true,
    },
    template: `
      <dx-toast
        meToast
        [(visible)]="isVisible"
        [displayTime]="100000000000"
        [type]="'success'"
        [position]="{ my: 'bottom right', at: 'bottom right', offset: '-20 -20' }"
      >
        <div *dxTemplate="let data of 'content'" class="me-toast-content me-toast-large">
          <div class="me-toast-header">
            <me-icon icon="check_circle" size="large" color="var(--Icon-Success)"></me-icon>
            <div class="me-title-header1">Успешно</div>
            <dx-button
              icon="close"
              stylingMode="text"
              stylingMode="text"
              class="me-toast-close-button"
              (onClick)="isVisible = false"
            ></dx-button>
          </div>
          <div class="me-toast-content1 me-text-body1">Все файлы успешно загружены на сервер</div>
          <div class="me-toast-actions">
            <dx-button
              meButton
              size="large"
              text="Открыть"
              type="success"
              stylingMode="contained"
              (onClick)="isVisible = false"
            ></dx-button>
            <dx-button
              meButton
              size="large"
              text="Закрыть"
              type="success"
              stylingMode="text"
              (onClick)="isVisible = false"
            ></dx-button>
          </div>
        </div>
      </dx-toast>
    `,
  }),
};

// Маленький инвертированный фон
export const InvertedInfo: Story = {
  render: () => ({
    props: {
      isVisible: true,
    },
    template: `
      <dx-toast
        meToast
        [(visible)]="isVisible"
        [displayTime]="100000000000"
        [type]="'info-inverted'"
      >
        <div *dxTemplate="let data of 'content'" class="me-toast-content me-toast-small me-toast-small-inverted">
          <div class="me-toast-header">
            <me-icon icon="info" size="small" color="var(--Controls-BG-Accent-Accent-BG-Default)"></me-icon>
            <div class="me-title-header2 me-text-body2-inverted">Информация</div>
            <dx-button
              icon="close"
              stylingMode="text"
              class="me-toast-close-button me-toast-close-button-inverted"
              (onClick)="isVisible = false"
              type="normal"
            ></dx-button>
          </div>
          <div class="me-toast-content2 me-text-body2 me-text-body2-inverted">Операция выполнена успешно</div>
          <div class="me-toast-actions me-toast-actions-inverted">
            <dx-button
              meButton
              size="small"
              text="Принять"
              type="normal"
              stylingMode="contained"
              (onClick)="isVisible = false"
            ></dx-button>
            <dx-button
              meButton
              size="small"
              text="Отменить"
              type="normal"
              stylingMode="contained"
              (onClick)="isVisible = false"
            ></dx-button>
          </div>
        </div>
      </dx-toast>
    `,
  }),
};
