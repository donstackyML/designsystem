import { moduleMetadata, StoryObj, Meta } from '@storybook/angular';
import { MeToastDirective } from '../app/directives/toast.directive';
import { DxToastComponent, DxToastModule } from 'devextreme-angular';
import { action } from '@storybook/addon-actions';
import { Component, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'storybook-toast-wrapper',
  template: `
    <div>
      <dx-toast
        meToast
        [message]="message"
        [displayTime]="displayTime"
        [position]="position"
        [animation]="animation"
        [customClass]="customClass"
        (onShowing)="onShowing($event)"
        (onShown)="onShown($event)"
        (onHiding)="onHiding($event)"
        (onHidden)="onHidden($event)"
      ></dx-toast>
      <button (click)="showToast()">Show Toast</button>
    </div>
  `
})
class ToastWrapperComponent {
  @ViewChild(DxToastComponent, { static: false }) toastComponent!: DxToastComponent;

  @Input() message: string = '';
  @Input() displayTime: number = 2000;
  @Input() position: any = 'bottom right';
  @Input() animation: any = {
    show: { type: 'fade', duration: 400, from: 0, to: 1 },
    hide: { type: 'fade', duration: 400, from: 1, to: 0 }
  };
  @Input() customClass: string = '';

  onShowing = action('onShowing');
  onShown = action('onShown');
  onHiding = action('onHiding');
  onHidden = action('onHidden');

  showToast() {
    if (this.toastComponent && this.toastComponent.instance) {
      this.toastComponent.instance.show();
    }
  }
}

const meta: Meta<ToastWrapperComponent> = {
  title: 'Directives/meToast',
  component: ToastWrapperComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [MeToastDirective, ToastWrapperComponent],
      imports: [DxToastModule],
    }),
  ],
  argTypes: {
    position: {
      control: 'select',
      options: ['top left', 'top center', 'top right', 'bottom left', 'bottom center', 'bottom right'],
    },
  },
};

export default meta;
type Story = StoryObj<ToastWrapperComponent>;

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
      show: { type: 'pop', duration: 400, from: { scale: 0 }, to: { scale: 1 } },
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
