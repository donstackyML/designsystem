import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DxToastModule, DxButtonModule } from 'devextreme-angular';
import { MeToastDirective, MeIconComponent } from "../../public-api";

const ToastStyles = `
  .me-toast-content {
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
  }

  .me-toast-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }

  .me-toast-title {
    flex: 1;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: var(--Text-Default);
  }

  .me-toast-message {
    font-size: 14px;
    line-height: 20px;
    color: var(--Text-Secondary);
    margin: 8px 0 16px;
  }

  .me-toast-actions {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    margin-top: auto;
  }

  .me-toast-close-button {
    padding: 4px;
    cursor: pointer;
    color: var(--Text-Secondary);
    background: transparent;
    border: none;
  }

  .dx-button {
    height: 32px;
    min-width: 80px;
    border-radius: 4px;
  }

  .dx-button-mode-outlined {
    &.info-button {
      border-color: var(--Controls-Content-In-Controls-Accent-Default);
      color: var(--Controls-Content-In-Controls-Accent-Default);
    }

    &.warning-button {
      border-color: var(--Controls-Content-In-Controls-Attention-Default);
      color: var(--Controls-Content-In-Controls-Attention-Default);
    }

    &.success-button {
      border-color: var(--Controls-Content-In-Controls-Success-Default);
      color: var(--Controls-Content-In-Controls-Success-Default);
    }
  }

  .dx-button-mode-contained.error-button {
    background-color: var(--Controls-BG-Accent-Danger-BG-Default);
    color: var(--Controls-Content-In-Controls-On-BG-Default);
    border-color: transparent;
  }

  .dx-button-mode-text {
    color: var(--Text-Secondary);
    background: transparent;
    border-color: transparent;
  }
`;

export default {
  title: 'Components/Toast',
  decorators: [
    moduleMetadata({
      declarations: [MeToastDirective],
      imports: [DxToastModule, DxButtonModule, MeIconComponent],
    }),
  ],
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'warning', 'success', 'error'],
    },
    title: { control: 'text' },
    message: { control: 'text' },
    showCloseButton: { control: 'boolean' },
    showActions: { control: 'boolean' },
    position: {
      control: 'select',
      options: ['bottom right', 'bottom center', 'bottom left', 'top right', 'top center', 'top left'],
    },
    size: {
      control: 'select',
      options: ['medium', 'large'],
    },
  },
  args: {
    type: 'info',
    title: 'Заголовок',
    message: 'Описание',
    showCloseButton: true,
    showActions: true,
    size: 'medium',
    position: { my: 'bottom right', at: 'bottom right', offset: '-20 -20' }
  },
  render: (args) => ({
    props: {
      ...args,
      isVisible: true,
      displayTime: 1000000,
      getIconByType: (type: string) => {
        switch (type) {
          case 'info': return 'info';
          case 'warning': return 'warning';
          case 'success': return 'check_circle';
          case 'error': return 'error';
          default: return 'info';
        }
      },
      getButtonTypeByToastType: (type: string) => {
        switch (type) {
          case 'info': return 'normal';
          case 'warning': return 'warning';
          case 'success': return 'success';
          case 'error': return 'danger';
          default: return 'default';
        }
      },
      getIconColor: (type: string) => {
        switch (type) {
          case 'info': return 'var(--Icon-Default)';
          case 'warning': return 'var(--Icon-Attention)';
          case 'success': return 'var(--Icon-Success)';
          case 'error': return 'var(--Icon-Error)';
          default: return 'var(--Icon-Default)';
        }
      }
    },
    template: `
      <dx-toast
        meToast
        [type]="type"
        [size]="size"
        [(visible)]="isVisible"
        [position]="position"
        [displayTime]="displayTime"
      >
        <div *dxTemplate="let data of 'content'" class="me-toast-content">
          <div class="me-toast-header">
            <me-icon
              [icon]="getIconByType(type)"
              [size]="size"
              [color]="getIconColor(type)"
            ></me-icon>
            <div class="me-toast-title">{{ title }}</div>
            <dx-button
              *ngIf="showCloseButton"
              icon="close"
              stylingMode="text"
              class="me-toast-close-button"
              (onClick)="isVisible = false"
            ></dx-button>
          </div>
          <div class="me-toast-message">{{ message }}</div>

          <div *ngIf="showActions" class="me-toast-actions">
            <dx-button
              meButton
              [size]="size"
              [text]="'Принять'"
              [type]="getButtonTypeByToastType(type)"
              (onClick)="isVisible = false"
            ></dx-button>
            <dx-button
              meButton
              [size]="size"
              [text]="'Отменить'"
              [stylingMode]="'text'"
              (onClick)="isVisible = false"
            ></dx-button>
          </div>
        </div>
      </dx-toast>
    `,
    styles: [ToastStyles]
  })
} as Meta;

type Story = StoryObj;

export const Info: Story = {
  args: {
    type: 'info',
    title: 'Заголовок',
    message: 'Описание'
  }
};

export const Warning: Story = {
  args: {
    type: 'warning',
    title: 'Предупреждение',
    message: 'Внимание! Данное действие нельзя будет отменить'
  }
};

export const Success: Story = {
  args: {
    type: 'success',
    title: 'Успешно',
    message: 'Операция выполнена успешно',
    showActions: false
  }
};

export const Error: Story = {
  args: {
    type: 'error',
    title: 'Ошибка',
    message: 'Произошла ошибка при выполнении операции'
  }
};
