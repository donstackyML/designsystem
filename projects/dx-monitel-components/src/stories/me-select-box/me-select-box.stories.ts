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
      options: ['', 'static', 'floating'],
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
  },
  render: (args) => ({
    props: args,
    template: `<dx-select-box meSelectBox ${argsToTemplate(
      args
    )}></dx-select-box>`,
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
  args: {
    dataSource: data,
  },
  render: (args) => ({
    props: args,
    template: `<label meLabel labelDirection="column">Label<dx-select-box meSelectBox ${argsToTemplate(
      args
    )}></dx-select-box></label>`,
  }),
};

export const WithLabelRow: Story = {
  args: {
    dataSource: data,
  },
  render: (args) => ({
    props: args,
    template: `<label meLabel labelDirection="row" width="250px">Label<dx-select-box meSelectBox ${argsToTemplate(
      args
    )}></dx-select-box></label>`,
  }),
};
