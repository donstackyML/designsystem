import { Meta, StoryObj, argsToTemplate, moduleMetadata } from '@storybook/angular';
import { DxSliderModule } from 'devextreme-angular';
import { MeSliderDirective } from '../../public-api';

export default {
  title: 'Components/Slider',
  decorators: [
    moduleMetadata({
      declarations: [MeSliderDirective],
      imports: [DxSliderModule],
    }),
  ],
  argTypes: {
    value: {
      control: 'number',
      description: 'Значение слайдера',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    min: {
      control: 'number',
      description: 'Минимальное значение',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    max: {
      control: 'number',
      description: 'Максимальное значение',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100' },
      },
    },
    isValid: {
      control: 'boolean',
      description: 'Состояние валидации',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Отключение слайдера',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    value: 50,
    min: 0,
    max: 100,
    isValid: true,
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `
					<div class="dx-field">
						<div class="dx-field-value">
							<dx-slider
								meSlider
                ${argsToTemplate(args)}
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
} satisfies Meta<DxSliderModule | MeSliderDirective>;

type Story = StoryObj<DxSliderModule | MeSliderDirective>;

export const Default: Story = {
  args: { }
};

export const WithLabelAndTooltip: Story = {
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

export const ValidationStateIsValid: Story = {
  args: {
    isValid: true
  }
};

export const ValidationStateIsInvalid: Story = {
  args: {
    isValid: false
  }
};

export const StateDisabled: Story = {
  args: {
    disabled: true
  }
};
