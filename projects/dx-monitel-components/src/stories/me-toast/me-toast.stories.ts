import { Component, Input, ViewChild } from '@angular/core';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { DxToastComponent, DxToastModule } from 'devextreme-angular';
import { MeToastDirective } from '../../lib/directives/me-toast/toast.directive';

@Component({
  selector: 'toast-demo',
  template: `
    <dx-toast
      meToast
      #dxToast
      [message]="message"
      [displayTime]="displayTime"
      [position]="position"
      [animation]="animation"
      [customClass]="customClass"
    ></dx-toast>

    <dx-button text="Show Toast" (onClick)="showToast()"> </dx-button>
    <button (click)="showToast()">Show Toast</button>
  `,
})
class ToastDemoComponent {
  @ViewChild('dxToast', { static: false }) dxToast!: DxToastComponent;

  @Input() message: string = 'This is a toast message';
  @Input() displayTime: number = 2000;
  @Input() position: any = 'bottom right';
  @Input() animation: any = {
    show: { type: 'fade', duration: 400, from: 0, to: 1 },
    hide: { type: 'fade', duration: 400, from: 1, to: 0 },
  };
  @Input() customClass: string = '';

  showToast() {
    if (this.dxToast && this.dxToast.instance) {
      this.dxToast.instance.show();
    }
  }
}

const meta: Meta<ToastDemoComponent> = {
  title: 'Components/Toast(RC)',
  component: ToastDemoComponent,
  decorators: [
    moduleMetadata({
      declarations: [MeToastDirective, ToastDemoComponent],
      imports: [DxToastModule],
    }),
  ],
  argTypes: {
    message: { control: 'text' },
    displayTime: { control: 'number' },
    position: {
      control: 'select',
      options: [
        'top left',
        'top center',
        'top right',
        'bottom left',
        'bottom center',
        'bottom right',
      ],
    },
    customClass: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<ToastDemoComponent>;

export const Default: Story = {
  args: {
    message: 'This is a toast message',
    displayTime: 2000,
    position: 'bottom right',
    animation: {
      show: { type: 'fade', duration: 400, from: 0, to: 1 },
      hide: { type: 'fade', duration: 400, from: 1, to: 0 },
    },
    customClass: '',
  },
};

export const LongDuration: Story = {
  args: {
    ...Default.args,
    displayTime: 5000,
    message: 'This toast will be displayed for 5 seconds',
  },
};

export const CustomPosition: Story = {
  args: {
    ...Default.args,
    position: 'top center',
    message: 'This toast is positioned at the top center',
  },
};

export const CustomAnimation: Story = {
  args: {
    ...Default.args,
    message: 'This toast has a custom animation',
    animation: {
      show: {
        type: 'pop',
        duration: 400,
        from: { scale: 0 },
        to: { scale: 1 },
      },
      hide: { type: 'pop', duration: 400, to: { scale: 0 } },
    },
  },
};

export const CustomClass: Story = {
  args: {
    ...Default.args,
    message: 'This toast has a custom CSS class',
    customClass: 'my-custom-toast',
  },
};
