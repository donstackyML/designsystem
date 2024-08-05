import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { DxLoadIndicatorModule } from 'devextreme-angular';
import { MeLoadIndicatorDirective } from '../../public-api'

const meta: Meta<MeLoadIndicatorDirective> = {
  title: 'Components/MeLoadIndicator',
  component: MeLoadIndicatorDirective,
  decorators: [
    moduleMetadata({
      declarations: [MeLoadIndicatorDirective],
      imports: [DxLoadIndicatorModule],
    }),
  ],
  argTypes: {
    color: {
      options: ['normal', 'default', 'accent'],
      control: { type: 'select' },
      defaultValue: 'default',
    },
    indicatorSrc: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<MeLoadIndicatorDirective>;

const Template: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div class="indicators">
        <div
          id="small-indicator"
          meLoadIndicator
          [size]="'small'"
          [color]="'normal'"
        ></div>
        <div
          id="medium-indicator"
          meLoadIndicator
          [size]="'medium'"
          [color]="color"
        ></div>
        <div
          id="large-indicator"
          meLoadIndicator
          [size]="'large'"
          [color]="'accent'"
        ></div>
      </div>
      <div class="label me-title-header2">Custom image</div>
      <div
        id="image-indicator"
        meLoadIndicator
        [size]="'large'"
        [indicatorSrc]="indicatorSrc"
      ></div>
    `,
    styles: [
      `
      .indicators {
        height: 80px;
        width: 200px;
        background-color: var(--button-normal-bg-color);
        display: flex;
        border: 1px solid #9747ff;
        border-radius: 4px;
        align-items: center;
        justify-content: space-around;
      }
      .label {
        margin-top: 20px;
        margin-bottom: 10px;
      }
    `,
    ],
  }),
};

export const Default: Story = {
  ...Template,
  args: {
    color: 'default',
    indicatorSrc: '../../../assets/images/Spider web.gif',
  },
};

export const WithAccentColor: Story = {
  ...Template,
  args: {
    color: 'accent',
    indicatorSrc: '../../../assets/images/Spider web.gif',
  },
};

export const WithCustomImage: Story = {
  ...Template,
  args: {
    color: 'default',
    indicatorSrc: '../../../assets/images/custom-loader.gif',
  },
};
