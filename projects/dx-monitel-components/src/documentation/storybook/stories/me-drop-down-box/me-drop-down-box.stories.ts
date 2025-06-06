import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import {
  DxDataGridModule,
  DxDropDownBoxModule,
  DxTextBoxModule,
  DxTreeViewModule,
} from 'devextreme-angular';
import {
  MeDataGridDirective,
  MeDropDownBoxDirective,
  MeSize,
  MeTreeViewDirective,
} from '../../../../public-api';
import { mockData } from './me-drop-down-box-mock-data';

type StoryProps = {
  dataSource?: any[];
  size: MeSize;
  value?: any;
  placeholder?: string;
  disabled?: boolean;
  acceptCustomValue?: boolean;
  showClearButton?: boolean;
  width?: number | string;
  height?: number | string;
};

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
      ],
    }),
  ],
  argTypes: {
    dataSource: {
      control: 'object',
      description: 'Список возможных значений для выбора.',
      table: {
        defaultValue: { summary: '[]' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'large'],
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
    disabled: {
      control: 'boolean',
      description: 'Блокирует возможность взаимодействия с элементом.',
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
  },
  args: {
    dataSource: mockData,
    size: 'small',
    placeholder: 'Выберите значение...',
    disabled: false,
    showClearButton: true,
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
        [showClearButton]="showClearButton"
        [placeholder]="placeholder"
        [size]="size"
        [disabled]="disabled"
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
            [size]="size"
            [disabled]="disabled"
          >
          </dx-tree-view>
        </dx-drop-down-box>

        <dx-drop-down-box
        meDropDownBox
        [dataSource]="dataSource"
        displayExpr="name"
        valueExpr="id"
        [showClearButton]="showClearButton"
        [placeholder]="placeholder"
        [size]="size"
        [disabled]="disabled"
        >
          <dx-data-grid
            meDataGrid
            [dataSource]="dataSource"
            [columns]="['id', 'name']"
            [selection]="{ mode: 'multiple' }"
            [hoverStateEnabled]="true"
            [paging]="{ enabled: true, pageSize: 10 }"
            [filterRow]="{ visible: true }"
            [scrolling]="{ mode: 'virtual' }"
            [(selectedRowKeys)]="gridBoxValue"
            [size]="size"
            [disabled]="disabled"
          >
          </dx-data-grid>
        </dx-drop-down-box>
      </div>
    `,
  }),
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {};
