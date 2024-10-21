import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';

import { DxSelectBoxComponent } from 'devextreme-angular';
import { MeLabelDirective, MeSelectBoxDirective } from '../../public-api';

const data = ['HD Video Player', 'SuperHD Video Player', 'SuperPlasma 50'];

export default {
  title: 'Components/SelectBox',
  decorators: [
    moduleMetadata({
      declarations: [
        MeSelectBoxDirective,
        DxSelectBoxComponent,
        MeLabelDirective,
      ],
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
    labelMode: 'static',
    label: '',
    placeholder: '',
    readOnly: false,
    dataSource: data,
  },
  render: (args) => ({
    props: args,
    template: `<dx-select-box meSelectBox ${argsToTemplate(args)}>
    </dx-select-box>`,
  }),
} as Meta<MeSelectBoxDirective | DxSelectBoxComponent | MeLabelDirective>;

type Story = StoryObj<
  MeSelectBoxDirective | DxSelectBoxComponent | MeLabelDirective
>;

export const Default: Story = {
  args: {
    dataSource: data,
  },
};

export const WithLabelColumn: Story = {
  render: (args) => ({
    props: args,
    template: `
      <label meLabel
        labelDirection="column"
        style="align-items: flex-start;"
      >
        Label
        <dx-select-box meSelectBox ${argsToTemplate(args)}></dx-select-box>
      </label>
    `,
  }),
};

export const WithLabelRow: Story = {
  render: (args) => ({
    props: args,
    template: `
      <label meLabel
        labelDirection="row"
        style="width: 250px;"
      >
        Label
        <dx-select-box meSelectBox ${argsToTemplate(args)}></dx-select-box>
      </label>
    `,
  }),
};

export const Disabled: Story = {
  args: {
    dataSource: data,
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    dataSource: data,
    readOnly: true,
  },
};

export const WithCustomPlaceholder: Story = {
  args: {
    dataSource: data,
    placeholder: 'Выберите продукт',
  },
};

export const WithScrollbarOnHover: Story = {
  args: {
    dataSource: data,
    showScrollbar: 'onHover',
  },
};

export const InvalidState: Story = {
  args: {
    dataSource: data,
    isValid: false,
  },
};
