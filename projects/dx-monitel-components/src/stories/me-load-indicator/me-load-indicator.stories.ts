import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { DxLoadIndicatorModule } from 'devextreme-angular';
import { MeLoadIndicatorDirective } from '../../public-api';

const meta: Meta<MeLoadIndicatorDirective> = {
  title: 'Components/LoadIndicator',
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
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
      defaultValue: 'medium',
    },
    stylingMode: {
      options: ['line', 'circle'],
      control: { type: 'select' },
      defaultValue: 'circle',
    },
  },
};

export default meta;

type Story = StoryObj<MeLoadIndicatorDirective>;

const Template: Story = {
  args: {
    color: 'normal',
    size: 'small',
    stylingMode: 'circle',
  },
  render: (args) => ({
    props: args,
    template: `
		<div style="display: flex;
    height: 50px;
    width: 50px;
    justify-content: center;
    align-items: center; background-color: var(--Background-Canvas);
		border-radius: 4px;
		border: 1px dashed #9747ff">
		<dx-load-indicator
			id="small-indicator"
			meLoadIndicator
			[size]="size"
			[color]="color"
			[stylingMode]="stylingMode"
		></dx-load-indicator>
		</div>
    `,
  }),
};

export const Default: Story = {
  ...Template,
};

export const WithCustomImage: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div class="label me-title-header2">Custom image</div>
			<div style="display: flex;
			height: 50px;
			width: 50px;
			justify-content: center;
			align-items: center; background-color: var(--Background-Canvas);
			border-radius: 4px;
			border: 1px dashed #9747ff">
				<dx-load-indicator
					id="image-indicator"
					meLoadIndicator
					[size]="'large'"
					[indicatorSrc]="indicatorSrc"
				></dx-load-indicator>
			</div>
    `,
  }),
  args: {
    indicatorSrc:
      'https://static.tildacdn.com/tild6261-3766-4534-a636-643635653261/6068d1f9087cdc5982a3.gif',
  },
};
