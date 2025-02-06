import {
  argsToTemplate,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { DxCheckBoxComponent } from 'devextreme-angular';

import {
  MeCheckBoxDirective,
  MeIconComponent,
  MeIconDirective,
  MeLabelDirective,
} from '../../public-api';

export default {
  title: 'Components/CheckBox',
  decorators: [
    moduleMetadata({
      declarations: [
        MeCheckBoxDirective,
        DxCheckBoxComponent,
        MeLabelDirective,
        MeIconDirective,
      ],
      imports: [MeIconComponent],
    }),
  ],
  argTypes: {
    value: {
      control: 'select',
      options: [undefined, false, true, null],
      description: 'Значение чекбокса. `true` - включен, `false` - выключен, `null` - неопределенное (*indeterminate*).',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    text: {
      control: 'text',
      description: 'Указывает текст, отображаемый рядом с чекбоксом',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Принимает размер чекбокса',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Отключает чекбокс',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    readOnly: {
      control: 'boolean',
      description: 'Отключает чекбокс',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    enableThreeStateBehavior: {
      control: 'boolean',
      description: 'Указывает, могут ли пользователи устанавливать состояние неопределенное (*indeterminate*).',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isValid: {
      control: 'boolean',
      description: 'Валидность чекбокса',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
  },
  args: {
    value: false,
    text: '',
    size: 'medium',
    disabled: false,
    readOnly: false,
    isValid: true,
    enableThreeStateBehavior: false
  },
  render: (args) => ({
    props: args,
    template: `<dx-check-box meCheckBox ${argsToTemplate(
      args
    )}></dx-check-box>`,
  }),
} satisfies Meta<MeCheckBoxDirective | DxCheckBoxComponent>;

type Story = StoryObj<MeCheckBoxDirective | DxCheckBoxComponent>;

export const Default: Story = {
  args: { },
};

export const SizeSmall: Story = {
  args: {
    size: 'small'
  },
};

export const SizeMedium: Story = {
  args: {
    size: 'medium'
  },
};

export const SizeLarge: Story = {
  args: {
    size: 'large'
  },
};

export const ThreeStateBehavior: Story = {
  args: {
    enableThreeStateBehavior: true
  },
};

export const StateDisabled: Story = {
  args: {
    disabled: true,
    value: true,
  },
};

export const StateReadOnly: Story = {
  args: {
    readOnly: true,
    value: true,
  },
};

export const StateReadOnlyAndDisabled: Story = {
  args: {
    readOnly: true,
    disabled: true,
    value: true,
  },
};

export const WithText: Story = {
  args: {
    text: 'Text'
  }
};

export const WithIconAndText: Story = {
  render: (args) => ({
    props: args,
    template: `
<label meLabel labelDirection="row" width="300px">
  <dx-check-box meCheckBox ${argsToTemplate(
    args
  )}></dx-check-box>
  <me-icon icon="account_circle" size="medium" color="var(--Controls-Content-In-Controls-Main-Default)"></me-icon>
  <span>Text</span>
</label>
		`,
    styles: [
      'label { justify-content: flex-start; }',
      'span { font-size: 14px; line-height: 20px; }',
    ],
  }),
};

export const IndeterminateState: Story = {
  render: (args) => ({
    props: args,
    template: `
		<label meLabel labelDirection="row" width="300px">
			<dx-check-box meCheckBox
			class="dx-checkbox-indeterminate"
			></dx-check-box>
			<span>Indeterminate</span>
		</label>
		`,
    styles: [
      'label { justify-content: flex-start; }',
      'span { font-size: 14px; line-height: 20px; }',
    ],
  }),
};
