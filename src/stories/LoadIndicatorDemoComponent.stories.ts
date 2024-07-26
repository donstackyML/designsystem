import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DxLoadIndicatorModule } from 'devextreme-angular';
import { MeLoadIndicatorDirective } from '../app/directives/load-indicator.directive';

const meta: Meta<MeLoadIndicatorDirective> = {
  title: 'Directives/meLoadIndicator',
  component: MeLoadIndicatorDirective,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [MeLoadIndicatorDirective],
      imports: [DxLoadIndicatorModule],
    }),
  ],
  render: (args: DxLoadIndicatorModule) => ({
    props: args,
    template: `
      <dx-load-indicator
        meLoadIndicator
        [size]="size"
        [customClass]="customClass"
        [height]="height"
        [width]="width"
        [indicatorSrc]="indicatorSrc"
        [hint]="hint"
        [elementAttr]="elementAttr"
        [rtlEnabled]="rtlEnabled"
        [visible]="visible"
        (onContentReady)="onContentReady($event)"
        (onDisposing)="onDisposing($event)"
        (onInitialized)="onInitialized($event)"
        (onOptionChanged)="onOptionChanged($event)"
      ></dx-load-indicator>
    `,
  }),
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    // visible: {
    //   control: { type: 'boolean' },
    // },
    // rtlEnabled: {
    //   control: { type: 'boolean' },
    // },
  },
};

export default meta;
type Story = StoryObj<DxLoadIndicatorModule>;

export const Default: Story = {
  args: {
    size: 'medium',
    customClass: '',
    height: undefined,
    width: undefined,
    indicatorSrc: undefined,
    hint: undefined,
    elementAttr: {},
    rtlEnabled: false,
    visible: true,
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: 'large',
  },
};

export const CustomSize: Story = {
  args: {
    ...Default.args,
    height: 100,
    width: 100,
  },
};

export const WithHint: Story = {
  args: {
    ...Default.args,
    hint: 'Loading...',
  },
};

export const Hidden: Story = {
  args: {
    ...Default.args,
    visible: false,
  },
};

export const RTLEnabled: Story = {
  args: {
    ...Default.args,
    rtlEnabled: true,
  },
};
