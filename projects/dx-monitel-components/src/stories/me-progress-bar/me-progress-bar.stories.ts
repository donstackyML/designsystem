import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DxProgressBarModule } from 'devextreme-angular';
import { MeProgressBarDirective } from '../../public-api';

export default {
  title: 'Components/ProgressBar',
  decorators: [
    moduleMetadata({
      declarations: [MeProgressBarDirective],
      imports: [DxProgressBarModule],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'Размер прогрессбара',
    },
    height: {
      control: 'text',
      description: 'Занимаемая компонентом высота',
    },
    width: {
      control: 'text',
      description: 'Занимаемая компонентом ширина',
    },
    showStatus: {
      control: 'boolean',
      description: 'Показать статус прогресса',
    },
    value: {
      control: 'number',
      description: 'Значение прогресса',
    },
  },

  args: {
    size: 'small',
    height: '15px',
    width: '90%',
    showStatus: true,
    value: 10,
  },

  render: (args: any) => ({
    props: {
      ...args,
    },
    template: `
			<dx-progress-bar
				meProgressBar
				[(value)]="value"
				[(size)]="size"
				[(height)]="height"
				[(width)]="width"
				[(showStatus)]="showStatus"
			>
			</dx-progress-bar>
		`,
  }),
} as Meta;

type Story = StoryObj;

export const Default: Story = {
  args: {},
};

export const WithSmallHeader: Story = {
  args: {},
  render: (args: any) => ({
    props: {
      ...args,
    },
    template: `
		<div class="form">
		<div class="me-text-body2"> Time left 00:00:10 </div>
			<dx-progress-bar
				meProgressBar
				#progressBar
				id="progress-bar-status"
				[(value)]="value"
				[(size)]="size"
				[(height)]="height"
				[(width)]="width"
				[(showStatus)]="showStatus"
			>
			</dx-progress-bar>
		</div>
		`,
    styles: [
      `
		.form {
			height: 100px;
			text-align: center;
			align-content: center;
		}
		.me-text-body2 {
			text-align: center;
		}
		#progress-bar-status {
			display: inline-block;
			padding-top: 2px;
		}
`,
    ],
  }),
};

export const WithMediumHeader: Story = {
  args: {},
  render: (args: any) => ({
    props: {
      ...args,
    },
    template: `
		<div class="form">
		<div class="me-text-body1"> Time left 00:00:10 </div>
			<dx-progress-bar
				meProgressBar
				#progressBar
				id="progress-bar-status"
				[(value)]="value"
				[(size)]="size"
				[(height)]="height"
				[(width)]="width"
				[(showStatus)]="showStatus"
			>
			</dx-progress-bar>
		</div>
		`,
    styles: [
      `
		.form {
			height: 100px;
			text-align: center;
			align-content: center;
		}
		.me-text-body1 {
			text-align: center;
		}
		#progress-bar-status {
			display: inline-block;
			padding-top: 4px;
		}
`,
    ],
  }),
};
