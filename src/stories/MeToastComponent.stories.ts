import { moduleMetadata, StoryObj, Meta } from '@storybook/angular';
import { MeToastDirective } from '../app/directives/toast.directive';
import { DxToastComponent, DxToastModule } from 'devextreme-angular';
import { action } from '@storybook/addon-actions';

const meta: Meta<MeToastDirective> = {
  title: 'Directives/meToast',
  component: MeToastDirective,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [MeToastDirective],
      imports: [DxToastModule],
    }),
  ],
  render: (args: DxToastModule) => ({
    props: {
      ...args,
      onShowing: action('onShowing'),
      onShown: action('onShown'),
      onHiding: action('onHiding'),
      onHidden: action('onHidden'),
      showToast: function () {
        this['meToastDirective'].showToast();
      },
    },
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
          #meToastDirective="meToastControl"
        ></dx-toast>
        <button (click)="showToast()">Show Toast</button>
      </div>
    `,
  }),
  argTypes: {
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
  },
};

export default meta;
type Story = StoryObj<MeToastDirective>;

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
