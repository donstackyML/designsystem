import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DxButtonModule, DxToastModule } from 'devextreme-angular';
import {
  MeButtonModule,
  MeIconComponent,
  MeToastDirective,
} from '../../public-api';

const ToastStyles = `
  .me-toast-header {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .me-toast-close-button {
    padding: 4px;
    cursor: pointer;
    color: var(--Text-Secondary);
    background: transparent;
    border: none;
    margin-left: auto;
  }

  .me-toast-content1 {
    margin-left: 34px
  }

  .me-toast-content2 {
    margin-left: 30px
  }

  .me-toast-actions {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid var(--Dividers-Borders-On-Bg, rgba(24, 24, 26, 0.20));
  }
`;

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
              size="large"
              text="Принять"
              type="default"
              stylingMode="contained"
              (onClick)="isVisible = false"
            ></dx-button>
            <dx-button
              meButton
              size="large"
              text="Отменить"
              type="default"
              stylingMode="text"
              (onClick)="isVisible = false"
            ></dx-button>
          </div>
        </div>
      </dx-toast>
    `,
    styles: [ToastStyles],
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
            <me-icon icon="warning_outlined" class="outlined-icon" type="outlined" size="small" color="var(--Icon-Attention)"></me-icon>
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
              size="large"
              text="Принять"
              type="warning"
              stylingMode="contained"
              (onClick)="isVisible = false"
            ></dx-button>
            <dx-button
              meButton
              size="large"
              text="Отменить"
              type="warning"
              stylingMode="text"
              (onClick)="isVisible = false"
            ></dx-button>
          </div>
        </div>
      </dx-toast>
    `,
    styles: [ToastStyles],
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
            <me-icon icon="error_outlined" size="large" color="var(--Icon-Error)"></me-icon>
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
    styles: [ToastStyles],
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
    styles: [ToastStyles],
  }),
};
