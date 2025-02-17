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
  'SuperPlasma 42',
  'SuperPlasma 46',
  'SuperPlasma 50',
  'SuperPlasma 60',
  'SuperPlasma 70',
  'Home Theatre System HTS 700',
  'Home Theatre System HTS 800',
  'Home Theatre System HTS 900',
  'Home Theatre System HTS 1000',
  'Home Theatre System HTS 1100',
  'Home Theatre System HTS 1200',
  'Home Theatre System HTS 1300',
  'Home Theatre System HTS 1400',
  'Home Theatre System HTS 1500',
  'Home Theatre System HTS 1600',
  'Home Theatre System HTS 1700',
  'Home Theatre System HTS 1800',
  'Home Theatre System HTS 1900',
  'Home Theatre System HTS 2000',
  'Home Theatre System HTS 2100',
  'Home Theatre System HTS 2200',
  'Home Theatre System HTS 2300',
  'Home Theatre System HTS 2400',
  'Home Theatre System HTS 2500',
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
        <dx-select-box meSelectBox labelMode="hidden" [dataSource]="dataSource" [label]="label" [size]="size" [placeholder]="placeholder"></dx-select-box>
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
        <dx-select-box meSelectBox  [dataSource]="dataSource" labelMode="hidden" [label]="label" [size]="size" [placeholder]="placeholder"></dx-select-box>

      </span>
    `,
  }),
};
