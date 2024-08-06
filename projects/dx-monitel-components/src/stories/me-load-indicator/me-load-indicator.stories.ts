import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { DxLoadIndicatorModule } from 'devextreme-angular';
import { MeLoadIndicatorDirective } from '../../public-api';

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
          [color]="color"
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
          [color]="color"
        ></div>
      </div>
      <div class="label me-title-header2">Custom image</div>

			<div class="indicators">
				<div
					id="image-indicator"
					meLoadIndicator
					[size]="'large'"
					[indicatorSrc]="indicatorSrc"
				></div>
			</div>
    `,
    styles: [
      `
      .indicators {
        height: 80px;
        width: 200px;
        background-color: rgb(157, 157, 158);
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
    indicatorSrc:
      'https://static.tildacdn.com/tild6261-3766-4534-a636-643635653261/6068d1f9087cdc5982a3.gif',
  },
};

export const WithAccentColor: Story = {
  ...Template,
  args: {
    color: 'accent',
    indicatorSrc:
      'https://static.tildacdn.com/tild6261-3766-4534-a636-643635653261/6068d1f9087cdc5982a3.gif',
  },
};

export const WithCustomImage: Story = {
  ...Template,
  args: {
    color: 'default',
    indicatorSrc:
      'https://static.tildacdn.com/tild6261-3766-4534-a636-643635653261/6068d1f9087cdc5982a3.gif',
  },
};
