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
    labelMode: {
      control: { type: 'select' },
      options: ['static', 'floating', 'hidden'],
      description: 'Определяет режим отображения метки.',
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
    stylingMode: 'outlined',
    size: 'medium',
    labelMode: 'static',
    label: '',
    placeholder: '',
    disabled: false,
    readOnly: false,
    isValid: true,
    showClearButton: false,
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

export const WithLabel: Story = {
  args: {
    dataSource: data,
    label: 'Выберите продукт',
    labelMode: 'static',
  },
};

export const WithFloatingLabel: Story = {
  args: {
    dataSource: data,
    label: 'Выберите продукт',
    labelMode: 'floating',
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
      <label meLabel labelDirection="column">
        {{ label }}
        <dx-select-box meSelectBox ${argsToTemplate(args)}></dx-select-box>
      </label>
    `,
  }),
  args: {
    dataSource: data,
    label: 'Выберите продукт',
  },
};

export const WithLabelRow: Story = {
  render: (args) => ({
    props: args,
    template: `
      <label meLabel labelDirection="row" width="250px">
        {{ label }}
        <dx-select-box meSelectBox ${argsToTemplate(args)}></dx-select-box>
      </label>
    `,
  }),
  args: {
    dataSource: data,
    label: 'Выберите продукт',
  },
};
