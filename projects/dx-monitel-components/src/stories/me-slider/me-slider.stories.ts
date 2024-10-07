import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DxSliderModule } from 'devextreme-angular';
import { MeSliderDirective } from '../../public-api';

export default {
  title: 'Components/Slider(RC)',
  decorators: [
    moduleMetadata({
      declarations: [MeSliderDirective],
      imports: [DxSliderModule],
    }),
  ],
  argTypes: {
    value: {
      control: 'number',
    },
    min: {
      control: 'number',
    },
    max: {
      control: 'number',
    },
    disabled: {
      control: 'boolean',
    },
    hoverStateEnabled: {
      control: 'boolean',
    },
    focusStateEnabled: {
      control: 'boolean',
    },
    isValid: {
      control: 'boolean',
      description: 'Состояние `invalid`',
    },
  },
  args: {
    value: 50,
    min: 0,
    max: 100,
    disabled: false,
    hoverStateEnabled: true,
    focusStateEnabled: true,
    isValid: true,
  },
  render: (args) => ({
    props: args,
    template: `
					<div class="dx-field">
						<div class="dx-field-value">
							<dx-slider
								meSlider
								[min]="min"
								[max]="max"
								[(value)]="value"
								[disabled]="disabled"
								[hoverStateEnabled]="hoverStateEnabled"
								[focusStateEnabled]="focusStateEnabled"
								[isValid]="isValid"
								>
								</dx-slider>
						</div>
					</div>
`,
    styles: [
      `
				.dx-field {
					display: flex;
					flex: 1;
				}
				.dx-field {
					margin-bottom: 50px;
				}
				.dx-field-value {
					width: 233px !important;
				}
			`,
    ],
  }),
} as Meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    value: 50,
    min: 0,
    max: 100,
    height: '75px',
    disabled: false,
    hoverStateEnabled: true,
    focusStateEnabled: true,
    isValid: true,
  },
};

export const WithLabelAndTooltip: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => ({
    props: args,
    template: `
		<div class="dx-field">
	    <div class="dx-field-value">
	      <dx-slider
					meSlider
					[min]="min"
					[max]="max"
					[(value)]="value"
					[height]="height"
					[disabled]="disabled"
					[hoverStateEnabled]="hoverStateEnabled"
					[focusStateEnabled]="focusStateEnabled"
					[isValid]="isValid">
						<dxo-label
							[visible]="true"
							position="top"
						></dxo-label>
						 <dxo-tooltip
	          [enabled]="true"
	          [format]="format"
	          showMode="always"
	          position="bottom"
	        ></dxo-tooltip>
	      </dx-slider>
	    </div>
		</div>
		`,
    styles: [
      `
				.dx-field {
					display: flex;
					flex: 1;
				}
				.dx-field {
					margin-bottom: 50px;
				}
				.dx-field-value {
					width: 233px !important;
				}
			`,
    ],
  }),
};
