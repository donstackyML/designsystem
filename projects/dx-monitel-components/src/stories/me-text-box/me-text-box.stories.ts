import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { DxButtonModule, DxTextBoxComponent } from 'devextreme-angular';
import { MeLabelDirective, MeTextBoxDirective } from '../../public-api';

export default {
  title: 'Components/Fields/TextBox',
  decorators: [
    moduleMetadata({
      imports: [DxButtonModule],
      declarations: [MeTextBoxDirective, DxTextBoxComponent, MeLabelDirective],
    }),
  ],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      description: 'Определяет состояние компонента.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    isValid: {
      control: { type: 'boolean' },
      description: 'Определяет валидность компонента.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    label: {
      control: 'text',
      description:
        'Указывает текстовую строку, используемую для аннотации значения поля ввода.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    labelMode: {
      control: 'select',
      options: ['static', 'floating', 'hidden', 'outside'],
      description: 'Определяет положение лейбла текстового поля.',
    },
    mode: {
      control: 'select',
      options: ['text', 'password', 'email', 'search', 'tel', 'url'],
      description: 'Определяет поведение текстового поля.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    placeholder: {
      control: 'text',
      description:
        'Определяет подсказку, которая отображается в текстовом поле.',
    },
    readOnly: {
      control: { type: 'boolean' },
      description: 'Определяет состояние только для чтения.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    showClearButton: {
      control: { type: 'boolean' },
      description: 'Показ кнопки очистки.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Принимает размер текстового поля.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
  },
  args: {
    size: 'medium',
    mode: 'text',
    // labelMode: 'static',
    label: 'Label*',
    placeholder: 'Placeholder',
    readOnly: false,
    disabled: false,
    isValid: true,
    showClearButton: true,
  },
  render: (args) => ({
    props: args,
    template: `<dx-text-box meTextBox ${argsToTemplate(args)}>
		</dx-text-box>`,
  }),
} as Meta<MeTextBoxDirective | DxTextBoxComponent | MeLabelDirective>;

type Story = StoryObj<
  MeTextBoxDirective | DxTextBoxComponent | MeLabelDirective
>;

export const Default: Story = {
  args: {},
};

export const WithLabelColumn: Story = {
  render: (args) => ({
    props: args,
    template: `
		<label meLabel
		labelDirection="column"
		style="align-items: flex-start;"
		>Label
		<dx-text-box meTextBox labelMode="hidden" [label]="label" [size]="size" [placeholder]="placeholder"></dx-text-box>
		</label>`,
  }),
};

export const WithLabelRow: Story = {
  render: (args) => ({
    props: args,
    template: `<label meLabel labelDirection="row" width="250px">Label<dx-text-box meTextBox labelMode="hidden" [label]="label" [size]="size" [placeholder]="placeholder"></dx-text-box></label>`,
  }),
};

export const WithTelMask: Story = {
  render: (args) => ({
    props: args,
    template: `<dx-text-box meTextBox mask="+7 (000) 000-0000" ${argsToTemplate(
      args
    )}></dx-text-box>`,
  }),
};

export const WithPasswordToggle: Story = {
  render: (args) => ({
    props: {
      ...args,
      passwordMode: 'password',
      passwordButton: {
        icon: 'eyeopen',
        stylingMode: 'text',
        onClick: function () {
          this.passwordMode =
            this.passwordMode === 'text' ? 'password' : 'text';
        },
      },
    },
    template: `
      <dx-text-box
        meTextBox
        ${argsToTemplate(args)}
        [mode]="passwordMode"
        [(value)]="value"
        placeholder="Enter password"
      >
      </dx-text-box>
    `,
  }),
  args: {
    label: 'Password',
    labelMode: 'floating',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Текстовое поле для ввода пароля с возможностью переключения видимости пароля. Кнопка с иконкой глаза позволяет переключаться между режимами отображения и скрытия пароля.',
      },
    },
  },
};
