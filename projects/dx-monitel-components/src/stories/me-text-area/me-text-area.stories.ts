import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DxTextAreaModule } from 'devextreme-angular';
import { MeTextAreaDirective } from '../../lib/directives/me-text-area/text-area.directive';

export default {
  title: 'Components/TextArea(RC)',
  decorators: [
    moduleMetadata({
      declarations: [MeTextAreaDirective],
      imports: [DxTextAreaModule],
    }),
  ],
  argTypes: {
    autoResizeEnabled: {
      control: 'boolean',
      description:
        'Включает автоматическое изменение высоты компонента. По умолчанию `false`.',
    },
    activeStateEnabled: {
      control: 'boolean',
    },
    height: {
      control: 'text',
    },
    width: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description:
        'Определяет размер `текста`, `placeholder`, `label` в компоненте. В рамках дизайн системы добывлены размеры: `small`, `medium`, `large`.',
    },
    value: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    labelMode: {
      control: 'select',
      options: ['top', 'inside', 'hidden'],
      description:
        'Определяет положение `label` в компоненте. В рамках дизайн системы добывлены позиции: `top`, `inside`.',
    },
    placeholder: {
      control: 'text',
    },
    readOnly: {
      control: 'boolean',
      description: 'Отключает возможность изменения текста в компоненте.',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    autoResizeEnabled: false,
    activeStateEnabled: true,
    size: 'medium',
    label: 'Label',
    labelMode: 'top',
    placeholder: 'Enter your text',
    readOnly: false,
    disabled: false,
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `
		<div class="textarea-wrapper">
			<dx-text-area
			meTextArea
			[(activeStateEnabled)]="activeStateEnabled"
			[(label)]="label"
			[(labelMode)]="labelMode"
			[(placeholder)]="placeholder"
			[(size)]="size"
			[(readOnly)]="readOnly"
			[(disabled)]="disabled"
			[height]="height"
			[width]="width"
			[(maxLength)]="maxLength"
			[(value)]="value"
			[(autoResizeEnabled)]="autoResizeEnabled"
			[inputAttr]="{ 'aria-label': 'Notes' }"
			></dx-text-area>
		</div>
`,
    styles: ['.textarea-wrapper { padding-top: 20px; }'],
  }),
} as Meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    value:
      'Prepare 2013 Marketing Plan: We need to double revenues in 2013 and our marketing strategy is going to be key here.',
    width: '320px',
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

export const LabelModeInside: Story = {
  args: {
    ...Default.args,
    labelMode: 'inside',
  },
};

export const ReadOnly: Story = {
  args: {
    ...Default.args,
    readOnly: true,
    autoResizeEnabled: true,
  },
};

export const AutoResize: Story = {
  args: {
    ...Default.args,
    autoResizeEnabled: true,
    value:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
};
