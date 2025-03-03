import { Meta, StoryObj, argsToTemplate, moduleMetadata } from '@storybook/angular';
import { DxProgressBarComponent } from 'devextreme-angular';
import { MeProgressBarDirective } from '../../public-api';

export default {
  title: 'Components/ProgressBar',
  decorators: [
    moduleMetadata({
      declarations: [DxProgressBarComponent, MeProgressBarDirective],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'Устанавливает размер прогрессбара.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    height: {
      control: 'text',
      description: 'Устанавливает занимаемую компонентом высоту.',
      table: {
        type: { summary: 'string | number | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    width: {
      control: 'text',
      description: 'Устанавливает занимаемую компонентом ширину.',
      table: {
        type: { summary: 'string | number | undefined' },
        defaultValue: { summary: 'undefined%' },
      },
    },
    showStatus: {
      control: 'boolean',
      description: 'Определяет, будет ли отображаться статус прогресса.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    value: {
      control: 'number',
      description: 'Устанавливает значение прогресса.',
      table: {
        type: { summary: 'number | false' },
        defaultValue: { summary: '0' },
      },
    },
  },
  args: {
    size: 'medium',
    height: undefined,
    width: undefined,
    showStatus: true,
    value: 25,
  },
  render: (args: any) => ({
    props: args,
    template: `
			<dx-progress-bar
				meProgressBar
				${argsToTemplate(args)}
			>
			</dx-progress-bar>
		`,
  }),
} satisfies Meta<DxProgressBarComponent | MeProgressBarDirective>;

type Story = StoryObj<DxProgressBarComponent | MeProgressBarDirective>;

export const Default: Story = {};

export const SizeSmall: Story = {
  args: {
    size: 'small',
  }
};

export const SizeMedium: Story = {
  args: {
    size: 'medium',
  }
};

export const WithoutTextStatus: Story = {
  args: {
    showStatus: false
  }
};

export const WithHeaderSizeSmall: Story = {
  render: (args: any) => ({
    props: args,
    template: `
		<div class="form">
      <div class="me-progress-bar-header me-text-body2">Time left 00:00:10</div>
      <dx-progress-bar
        meProgressBar
        #progressBar
        id="progress-bar-status"
        ${argsToTemplate(args)}
      >
      </dx-progress-bar>
		</div>
		`,
    styles: [
      `
		.form {
			text-align: center;
			align-content: center;
      display: flex;
      flex-direction: column;
      gap: 2px;
		}
    .me-progress-bar-header {
      text-align: center;
    }
    #progress-bar-status {
      width: 100%;
    }
`,
    ],
  }),
};

export const WithHeaderSizeMedium: Story = {
  render: (args: any) => ({
    props: args,
    template: `
		<div class="form">
      <div class="me-progress-bar-header me-text-body1">Time left 00:00:10</div>
      <dx-progress-bar
        meProgressBar
        #progressBar
        id="progress-bar-status"
        ${argsToTemplate(args)}
      >
      </dx-progress-bar>
		</div>
		`,
    styles: [
      `
		.form {
			text-align: center;
			align-content: center;
      display: flex;
      flex-direction: column;
      gap: 4px;
		}
    .me-progress-bar-header {
      text-align: center;
    }
		#progress-bar-status {
      width: 100%;
    }
`,
    ],
  }),
};
