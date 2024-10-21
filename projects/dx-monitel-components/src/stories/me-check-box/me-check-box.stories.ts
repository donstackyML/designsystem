import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
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
        defaultValue: { summary: false },
      },
    },
    readOnly: {
      control: 'boolean',
      description: 'Отключает чекбокс',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    isValid: {
      control: 'boolean',
      description: 'Валидность чекбокса',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
  },
  args: {
    size: 'medium',
  },
  render: (args) => ({
    props: args,
    template: `<dx-check-box meCheckBox ${argsToTemplate(
      args
    )}></dx-check-box>`,
  }),
} as Meta<MeCheckBoxDirective | DxCheckBoxComponent>;

type Story = StoryObj<MeCheckBoxDirective | DxCheckBoxComponent>;

export const Default: Story = {
  args: {
    text: '',
    disabled: false,
    readOnly: false,
    isValid: true,
  },
};
export const WithIconAndText: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `
		<label meLabel labelDirection="row" width="300px">
    <dx-check-box meCheckBox ${argsToTemplate(args)}></dx-check-box>
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
