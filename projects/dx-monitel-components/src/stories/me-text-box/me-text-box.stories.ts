import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { DxTextBoxComponent } from 'devextreme-angular';
import { MeLabelDirective, MeTextBoxDirective } from '../../public-api';

export default {
  title: 'Components/TextBox',
  decorators: [
    moduleMetadata({
      declarations: [MeTextBoxDirective, DxTextBoxComponent, MeLabelDirective],
    }),
  ],
  argTypes: {
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
      options: ['static', 'floating'],
      description: 'Определяет положение лейбла текстового поля.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
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
  },
  render: (args) => ({
    props: args,
    template: `<dx-text-box meTextBox ${argsToTemplate(args)}></dx-text-box>`,
  }),
} as Meta<MeTextBoxDirective | DxTextBoxComponent | MeLabelDirective>;

type Story = StoryObj<
  MeTextBoxDirective | DxTextBoxComponent | MeLabelDirective
>;

export const Default: Story = {
  args: {
    label: '',
  },
};

export const WithLabelColumn: Story = {
  render: (args) => ({
    props: args,
    template: `<label meLabel labelDirection="column">Label<dx-text-box meTextBox ${argsToTemplate(
      args
    )}></dx-text-box></label>`,
  }),
};

export const WithLabelRow: Story = {
  render: (args) => ({
    props: args,
    template: `<label meLabel labelDirection="row" width="250px">Label<dx-text-box meTextBox ${argsToTemplate(
      args
    )}></dx-text-box></label>`,
  }),
};
