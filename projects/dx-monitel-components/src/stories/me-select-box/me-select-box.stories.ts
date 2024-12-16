import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';

import {
  DxSelectBoxComponent,
  DxSelectBoxModule,
  DxValidatorModule,
} from 'devextreme-angular';
import { MeLabelDirective, MeSelectBoxDirective } from '../../public-api';

const data = [
  'HD Video Player',
  'SuperHD Video Player',
  'SuperPlasma 50',
  'SuperPlasma 50',
  'SuperPlasma 50',
  'SuperPlasma 50',
  'SuperPlasma 50',
  'SuperPlasma 50',
  'SuperPlasma 50',
  'SuperPlasma 50',
  'SuperPlasma 50',
  'SuperPlasma 50',
  'SuperPlasma 50',
];

export default {
  title: 'Components/SelectBox',
  decorators: [
    moduleMetadata({
      declarations: [MeSelectBoxDirective, MeLabelDirective],
      imports: [DxSelectBoxModule, DxValidatorModule],
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
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'static' },
      },
    },
    placeholder: {
      control: 'text',
      description:
        'Определяет подсказку, которая отображается в текстовом поле.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    readOnly: {
      control: { type: 'boolean' },
      description: 'Определяет состояние только для чтения.',
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
    dataSource: {
      control: 'array',
      description: 'Источник данных для элементов выпадающего списка.',
      table: {
        type: { summary: 'string[]' },
        defaultValue: { summary: '[]' },
      },
    },
    showScrollbar: {
      control: 'select',
      options: ['always', 'onHover'],
      description:
        'Определяет отображение скролла - при наведении или постоянно. По умолчанию скролл отображается при переполнении контента постоянно.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'always' },
      },
    },
  },
  args: {
    size: 'medium',
    showScrollbar: 'always',
    disabled: false,
    isValid: true,
    readOnly: false,
    labelMode: 'static',
    label: 'Label*',
    placeholder: 'Select...',
    dataSource: data,
  },
  render: (args) => ({
    props: args,
    template: `
		<dx-select-box meSelectBox ${argsToTemplate(args)}>
			<dx-validator>
        <dxi-validation-rule
          type="required"
          message="Required">
        </dxi-validation-rule>
    	</dx-validator>
    </dx-select-box>
		<p class='select-box-desc' >description</p>`,
    styles: [
      '.select-box-desc { color: #808084; font-size: 12px; line-height: 16px; font-family: Roboto; }',
      '.select-box-desc { margin-top: 4px; }',
    ],
  }),
} as Meta<MeSelectBoxDirective | DxSelectBoxComponent | MeLabelDirective>;

type Story = StoryObj<
  MeSelectBoxDirective | DxSelectBoxComponent | MeLabelDirective
>;

export const Default: Story = {
  args: {
    dataSource: data,
    label: 'Label*',
    labelMode: 'outside',
  },
};

export const WithLabelColumn: Story = {
  render: (args) => ({
    props: args,
    template: `
      <span meLabel
        labelDirection="column"
        style="align-items: flex-start;">
        Label
        <dx-select-box meSelectBox ${argsToTemplate(args)}></dx-select-box>
      </span>
    `,
  }),
};

export const WithLabelRow: Story = {
  render: (args) => ({
    props: args,
    template: `
      <span meLabel
        labelDirection="row"
        style="width: 250px;"
      >
        Label
        <dx-select-box meSelectBox ${argsToTemplate(args)}></dx-select-box>
      </span>
    `,
  }),
};
