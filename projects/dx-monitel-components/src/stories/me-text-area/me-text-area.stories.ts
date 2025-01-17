import { DxTextAreaModule, DxValidatorModule } from 'devextreme-angular';

import {
  argsToTemplate,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';

import { MeTextAreaDirective } from '../../lib/directives/me-text-area/text-area.directive';

export default {
  title: 'Components/TextArea(RC)',
  decorators: [
    moduleMetadata({
      declarations: [MeTextAreaDirective],
      imports: [DxTextAreaModule, DxValidatorModule],
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
      options: ['static', 'floating', 'outside', 'hidden'],
      description:
        'Определяет положение `label` в компоненте. В рамках дизайн системы добывлены позиции: `static`, `floating`, `outside`, `hidden`.',
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
    isValid: {
      control: 'boolean',
      description: 'Валидность компонента.',
    },
    validationError: {
      control: 'text',
    },
    validationMessageMode: {
      control: 'select',
      options: ['auto', 'always'],
      description:
        'Режим отображения сообщения об ошибке. В рамках дизайн системы добывлены позиции: `text`, `icon`.',
    },
    validationMessagePosition: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description:
        'Режим отображения сообщения об ошибке. В рамках дизайн системы добывлены позиции: `top`, `bottom`, `left`, `right`.',
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
    isValid: true,
    validationError: '',
    validationMessageMode: 'auto',
    validationMessagePosition: 'bottom',
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `
		<div class="textarea-wrapper">
			<dx-text-area
			meTextArea
      ${argsToTemplate(args)}
			[inputAttr]="{ 'aria-label': 'Notes' }"
			>
			    <dx-validator>
        <dxi-validation-rule
            type="required"
            message="Required"
        >
        </dxi-validation-rule>
    </dx-validator>
			</dx-text-area>
		</div>
`,
    styles: ['.textarea-wrapper { padding-top: 20px; }'],
  }),
} as Meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    value: '',
    width: '320px',
    isValid: false,
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
