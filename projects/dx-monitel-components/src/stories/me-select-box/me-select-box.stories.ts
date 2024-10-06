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
      description: 'Задает или получает массив данных, отображаемых компонентом.',
    },
    placeholder: {
      control: 'text',
      description: 'Задает текст, отображаемый, когда компонент не имеет значения.',
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
  },
  args: {
    stylingMode: 'outlined',
  },
  render: (args) => ({
    props: args,
    template: `<dx-select-box meSelectBox ${argsToTemplate(args)}></dx-select-box>`,
  }),
} as Meta<MeSelectBoxDirective | DxSelectBoxComponent | MeLabelDirective>;

type Story = StoryObj<MeSelectBoxDirective | DxSelectBoxComponent | MeLabelDirective>;

export const Default: Story = {
  args: {
    dataSource: data,
  },
};

export const WithDataSource: Story = {
  args: {
    dataSource: ['Option 1', 'Option 2', 'Option 3'],
  },
};

export const WithPlaceholder: Story = {
  args: {
    dataSource: data,
    placeholder: 'Выберите опцию',
  },
};

export const WithSearchEnabled: Story = {
  args: {
    dataSource: largeData,
    searchEnabled: true,
    placeholder: 'Поиск...',
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

export const CustomWidth: Story = {
  args: {
    dataSource: data,
    width: '300px',
  },
};
