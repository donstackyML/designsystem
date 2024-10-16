import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';

import { DxSelectBoxComponent } from 'devextreme-angular';
import { MeLabelDirective, MeSelectBoxDirective } from '../../public-api';

const data = ['HD Video Player', 'SuperHD Video Player', 'SuperPlasma 50'];
const largeData = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

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
    dataSource: {
      control: 'object',
      description:
        'Задает или получает массив данных, отображаемых компонентом.',
    },
    placeholder: {
      control: 'text',
      description:
        'Задает текст, отображаемый, когда компонент не имеет значения.',
    },
    searchEnabled: {
      control: 'boolean',
      description: 'Определяет, разрешен ли поиск в списке элементов.',
    },
    disabled: {
      control: 'boolean',
      description: 'Определяет, отключен ли компонент.',
    },
    readOnly: {
      control: 'boolean',
      description: 'Определяет, доступен ли компонент только для чтения.',
    },
    width: {
      control: 'text',
      description: 'Задает ширину компонента.',
    },
    label: {
      control: 'text',
      description: 'Задает текст метки для компонента.',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Задает размер компонента.',
    },
    isValid: {
      control: 'boolean',
      description: 'Определяет, является ли текущее значение допустимым.',
    },
    showClearButton: {
      control: 'boolean',
      description: 'Показывает или скрывает кнопку очистки.',
    },
  },
  args: {
    stylingMode: 'filled',
    size: 'medium',
    labelMode: 'hidden',
    label: 'Label*',
    placeholder: 'Placeholder',
    readOnly: false,
    disabled: false,
    isValid: true,
    showClearButton: true,
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

export const Disabled: Story = {
  args: {
    dataSource: data,
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    dataSource: data,
    value: 'HD Video Player',
    readOnly: true,
  },
};

export const Invalid: Story = {
  args: {
    dataSource: data,
    isValid: false,
  },
};

export const WithClearButton: Story = {
  args: {
    dataSource: data,
    showClearButton: true,
    value: 'HD Video Player',
  },
};

export const SmallSize: Story = {
  args: {
    dataSource: data,
    size: 'small',
  },
};

export const LargeSize: Story = {
  args: {
    dataSource: data,
    size: 'large',
  },
};

export const WithLabelColumn: Story = {
  render: (args) => ({
    props: args,
    template: `
      <label meLabel
      labelDirection="column"
      style="align-items: flex-start;"
      >Label
      <dx-select-box meSelectBox ${argsToTemplate(args)}></dx-select-box>
      </label>
    `,
  }),
  args: {
    dataSource: data,
  },
};

export const WithLabelRow: Story = {
  render: (args) => ({
    props: args,
    template: `
      <label meLabel labelDirection="row" width="250px">Label
      <dx-select-box meSelectBox ${argsToTemplate(args)}></dx-select-box>
      </label>
    `,
  }),
  args: {
    dataSource: data,
  },
};
