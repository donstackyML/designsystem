import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import {
  DxDataGridModule,
  DxDropDownBoxComponent,
  DxDropDownBoxModule,
  DxTextBoxModule,
  DxTreeViewModule,
} from 'devextreme-angular';
import {
  MeDataGridDirective,
  MeDropDownBoxDirective,
  MeLabelDirective,
  MeTreeViewDirective,
} from '../../../../public-api';
import { mockData } from './me-drop-down-box-mock-data';

export default {
  title: 'Components/DropDownBox',
  decorators: [
    moduleMetadata({
      imports: [
        DxDropDownBoxModule,
        DxTextBoxModule,
        DxTreeViewModule,
        DxDataGridModule,
      ],
      declarations: [
        MeDropDownBoxDirective,
        MeTreeViewDirective,
        MeDataGridDirective,
        MeLabelDirective,
      ],
    }),
  ],
  argTypes: {
    dataSource: {
      control: 'object',
      description: 'Список возможных значений для выбора.',
      table: {
        type: { summary: '[]' },
        defaultValue: { summary: '[]' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Принимает размер `Drop Down Box` и его элементов.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'small' },
      },
    },
    value: {
      control: 'object',
      description: 'Выбранное значение.',
      table: {
        defaultValue: { summary: '' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Текст-подсказка, отображаемый при пустом поле.',
      table: {
        defaultValue: { summary: "''" },
      },
    },
    label: {
      control: 'text',
      description: 'Текст, отображаемый в качестве лейбла.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    labelMode: {
      control: 'select',
      options: ['outside', 'static', 'floating', 'hidden'],
      description: 'Указывает, где будет размещаться лейбл.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'outside' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Блокирует возможность взаимодействия с элементом.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    readOnly: {
      control: 'boolean',
      description: 'Делает компонент доступным только для чтения.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    showClearButton: {
      control: 'boolean',
      description: 'Отображает кнопку очистки поля ввода.',
      table: {
        defaultValue: { summary: 'true' },
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
    leftIcon: {
      control: 'text',
      description: 'Иконка слева.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    dropDownListMaxHeight: {
      control: 'text',
      description: 'Максимальная высота выпадающего списка.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    onValueChanged: {
      action: 'valueChanged',
      description: 'Event emitted when the value changes',
      table: {
        category: 'Events',
      },
    },
  },
  args: {
    label: 'Label',
    dataSource: mockData,
    size: 'small',
    placeholder: 'Выберите значение...',
    disabled: false,
    showClearButton: true,
    showScrollbar: 'always',
    dropDownListMaxHeight: 300,
    readOnly: false,
    labelMode: 'outside',
    value: '1_1',
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; align-items: center; width: 100%">
        <dx-drop-down-box
          meDropDownBox
          [dataSource]="dataSource"
          displayExpr="name"
          valueExpr="id"
          [(value)]="value"
          [showClearButton]="showClearButton"
          [placeholder]="placeholder"
          [size]="size"
          [disabled]="disabled"
          [dropDownListMaxHeight]="dropDownListMaxHeight"
          [showScrollbar]="showScrollbar"
          [leftIcon]="leftIcon"
          [readOnly]="readOnly"
          [labelMode]="labelMode"
          [label]="label"
        >
          <dx-tree-view
            meTreeView
            [dataSource]="dataSource"
            dataStructure="plain"
            keyExpr="id"
            parentIdExpr="categoryId"
            selectionMode="single"
            showCheckBoxesMode="normal"
            [selectNodesRecursive]="false"
            displayExpr="name"
            [selectByClick]="true"
            [disabled]="disabled"
          >
          </dx-tree-view>
        </dx-drop-down-box>

        <dx-drop-down-box
          meDropDownBox
          [dataSource]="dataSource"
          displayExpr="name"
          valueExpr="id"
          [(value)]="value"
          [showClearButton]="showClearButton"
          [placeholder]="placeholder"
          [size]="size"
          [disabled]="disabled"
          [showScrollbar]="showScrollbar"
          [leftIcon]="leftIcon"
          [readOnly]="readOnly"
          [labelMode]="labelMode"
          [label]="label"
        >
          <dx-data-grid
            meDataGrid
            [dataSource]="dataSource"
            [columns]="['id', 'name']"
            [selection]="{ mode: 'single' }"
            [hoverStateEnabled]="true"
            [filterRow]="{ visible: true }"
            [disabled]="disabled"
            [height]="300"
          >
          </dx-data-grid>
        </dx-drop-down-box>
      </div>
    `,
  }),
} satisfies Meta<MeDropDownBoxDirective | DxDropDownBoxComponent>;

type Story = StoryObj<MeDropDownBoxDirective | DxDropDownBoxComponent>;

export const Default: Story = {};

export const SizeSmall: Story = {
  args: {
    size: 'small',
  },
};

export const SizeMedium: Story = {
  args: {
    size: 'medium',
  },
};

export const SizeLarge: Story = {
  args: {
    size: 'large',
  },
};

export const WithTreeView: Story = {
  render: (args) => ({
    props: args,
    template: `
      <dx-drop-down-box
        meDropDownBox
        [dataSource]="dataSource"
        displayExpr="name"
        valueExpr="id"
        [(value)]="value"
        [placeholder]="placeholder"
        [size]="size"
        [showClearButton]="showClearButton"
        [label]="label"
        [labelMode]="labelMode"
      >
        <dx-tree-view
          meTreeView
          [dataSource]="dataSource"
          dataStructure="plain"
          keyExpr="id"
          parentIdExpr="categoryId"
          selectionMode="multiple"
          showCheckBoxesMode="normal"
          [selectNodesRecursive]="false"
          displayExpr="name"
          [selectByClick]="true"
          [searchEnabled]="true"
          size="large"
        >
        </dx-tree-view>
      </dx-drop-down-box>
    `,
  }),
};

export const WithDataGrid: Story = {
  render: (args) => ({
    props: args,
    template: `
      <dx-drop-down-box
        meDropDownBox
        [dataSource]="dataSource"
        displayExpr="name"
        valueExpr="id"
        [(value)]="value"
        [placeholder]="placeholder"
        [size]="size"
        [label]="label"
        [labelMode]="labelMode"
      >
        <dx-data-grid
          meDataGrid
          [dataSource]="dataSource"
          [columns]="['id', 'name']"
          [selection]="{ mode: 'multiple' }"
          [hoverStateEnabled]="true"
          [filterRow]="{ visible: true }"
          [height]="300"
          cellSize="small"
        >
        </dx-data-grid>
      </dx-drop-down-box>
    `,
  }),
};

export const WithLeftIcon: Story = {
  args: {
    leftIcon: 'account_circle_x20',
  },
};

export const ScrollbarAlways: Story = {
  args: {
    showScrollbar: 'always',
  },
};

export const ScrollbarOnHover: Story = {
  args: {
    showScrollbar: 'onHover',
  },
};

export const StateDisabled: Story = {
  args: {
    disabled: true,
  },
};

export const CustomMaxHeight: Story = {
  args: {
    dropDownListMaxHeight: 150,
  },
};

export const LabelLeft: Story = {
  render: (args) => ({
    props: args,
    template: `
      <label meLabel labelDirection="row" width="400px">
        Label
        <dx-drop-down-box
            meDropDownBox
            [dataSource]="dataSource"
            displayExpr="name"
            valueExpr="id"
            [(value)]="value"
            [placeholder]="placeholder"
            [size]="size"
            [showClearButton]="showClearButton"
            [disabled]="disabled"
            [dropDownListMaxHeight]="dropDownListMaxHeight"
            [showScrollbar]="showScrollbar"
            [leftIcon]="leftIcon"
            [readOnly]="readOnly"
          >
            <dx-data-grid
              meDataGrid
              [dataSource]="dataSource"
              [columns]="['id', 'name']"
              [selection]="{ mode: 'multiple' }"
              [hoverStateEnabled]="true"
              [filterRow]="{ visible: true }"
              [height]="300"
              cellSize="small"
            >
            </dx-data-grid>
        </dx-drop-down-box>
      </label>
    `,
  }),
};
