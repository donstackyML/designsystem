import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DxTreeListComponent, DxTreeListModule } from 'devextreme-angular';
import { DxoSelectionComponent } from 'devextreme-angular/ui/nested';

import { MeIconComponent, MeTreeListDirective } from '../../public-api';
import { meTreeListMockData } from './me-tree-list-mock-data';

type StoryProps = MeTreeListDirective | DxTreeListComponent | DxoSelectionComponent | { editingIsEnabled: boolean };

export default {
  title: 'Components/TreeList',
  decorators: [
    moduleMetadata({
      imports: [DxTreeListModule, MeIconComponent],
      declarations: [MeTreeListDirective],
    }),
  ],
  argTypes: {
    allowColumnReordering: {
      control: 'boolean',
      description: 'Определяет, могут ли столбцы быть переставлены.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    allowColumnResizing: {
      control: 'boolean',
      description: 'Определяет, могут ли столбцы быть изменены в размерах.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showRowLines: {
      control: 'boolean',
      description: 'Определяет, отображаются ли границы строк.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    showColumnLines: {
      control: 'boolean',
      description: 'Определяет, отображаются ли вертикальные границы между столбцами.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    showBorders: {
      control: 'boolean',
      description: 'Определяет, отображаются ли границы.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    showColumnHeaders: {
      control: 'boolean',
      description: 'Определяет, отображаются ли заголовки столбцов.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    wordWrapEnabled: {
      control: 'boolean',
      description: 'Определяет, будут ли переноситься строки.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    expandedRowKeys: {
      control: 'object',
      description: 'Массив ключей строк, которые должны быть отображены в развернутом виде.',
      table: {
        type: { summary: 'any[]' },
        defaultValue: { summary: '[]' },
      },
    },
    autoExpandAll: {
      control: 'boolean',
      description: 'Определяет, будут ли все строки отображаться в развернутом виде.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    dataStructure: {
      control: 'select',
      options: ['plain', 'tree'],
      description: 'Определяет, как будет отображаться хранимая в TreeList структура.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'plain' },
      },
    },
    height: {
      control: 'text',
      description: 'Высота TreeList.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'auto' },
      },
    },
    columnAutoWidth: {
      control: 'boolean',
      description: 'Определяет, будет ли TreeList автоматически изменять ширину столбцов.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    mode: {
      control: 'select',
      options: ['single', 'multiple', 'none'],
      description:
        'Определяет тип выделения. Используется внутри компонента `<dxo-selection [mode]="multi"></dxo-selection>`.',
    },
    editingIsEnabled: {
      control: 'boolean',
      description: 'Определяет, включено ли редактирование для компонента `<dxo-editing></dxo-editing>`.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    dataSource: meTreeListMockData,
    allowColumnReordering: false,
    allowColumnResizing: false,
    showRowLines: true,
    showColumnLines: true,
    showBorders: true,
    showColumnHeaders: true,
    wordWrapEnabled: false,
    dataStructure: 'plain',
    columnAutoWidth: false,
    autoExpandAll: true,
    expandedRowKeys: [1, 2, 3],
    disabled: false,
    height: undefined,
    mode: 'none',
    editingIsEnabled: false
  },
  render: (args) => ({
    props: args,
    template: `
			<dx-tree-list
				meTreeList
				[(dataSource)]="dataSource"
				keyExpr="ID"
				parentIdExpr="Head_ID"
				[allowColumnReordering]="allowColumnReordering"
				[allowColumnResizing]="allowColumnResizing"
				[showBorders]="showBorders"
				[showRowLines]="showRowLines"
				[showColumnLines]="showColumnLines"
				[dataStructure]="dataStructure"
				[columnAutoWidth]="columnAutoWidth"
				[autoExpandAll]="autoExpandAll"
				[expandedRowKeys]="expandedRowKeys"
				[wordWrapEnabled]="wordWrapEnabled"
        [showColumnHeaders]="showColumnHeaders"
				[disabled]="disabled"
        [height]="height"
  		>
    <dxo-editing
      *ngIf="editingIsEnabled"
      mode="row"
      [allowUpdating]="true"
      [allowDeleting]="true"
      [allowAdding]="true"
    >
    </dxo-editing>

		<dxo-selection [mode]="mode"></dxo-selection>

    <dxi-column dataField="Full_Name">
      <dxi-validation-rule type="required"></dxi-validation-rule>
    </dxi-column>
    <dxi-column dataField="Head_ID" caption="Head">
      <dxi-validation-rule type="required" message="Head is very very very very very very very very very very very required"></dxi-validation-rule>
    </dxi-column>
    <dxi-column dataField="Title" caption="Position">
      <dxi-validation-rule type="required"></dxi-validation-rule>
    </dxi-column>
    <dxi-column dataField="Hire_Date" dataType="date" [width]="120">
      <dxi-validation-rule type="required"></dxi-validation-rule>
    </dxi-column>
    <dxi-column *ngIf="editingIsEnabled" type="buttons">
      <dxi-button name="edit" icon="edit"></dxi-button>
      <dxi-button name="delete" icon="trash"></dxi-button>
      <dxi-button name="save" icon="save"></dxi-button>
      <dxi-button name="cancel" icon="undo"></dxi-button>

      <dxi-button name="undelete" icon="undelete"></dxi-button>
    </dxi-column>
  </dx-tree-list>
		`,
  }),
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {};

export const WithColumns: Story = {
  args: {
    dataSource: [
      { Full_Name: 'John Heart', Title: 'CEO', ID: 1 },
      { Full_Name: 'Samantha Bright', Title: 'COO', ID: 2 },
      { Full_Name: 'Robert Reagan', Title: 'CMO', ID: 3 },
      { Full_Name: 'Greta Sims', Title: 'HR Manager', ID: 4 },
    ],
  },
  render: (args) => ({
    props: args,
    template: `
      <dx-tree-list
        meTreeList
        [(dataSource)]="dataSource"
        keyExpr="ID"
        [allowColumnReordering]="allowColumnReordering"
				[allowColumnResizing]="allowColumnResizing"
				[showRowLines]="showRowLines"
				[showColumnLines]="showColumnLines"
				[disabled]="disabled"
        [height]="height"
				[dataStructure]="dataStructure"
				[columnAutoWidth]="columnAutoWidth"
				[autoExpandAll]="autoExpandAll"
				[expandedRowKeys]="expandedRowKeys"
				[wordWrapEnabled]="wordWrapEnabled"
				[showBorders]="showBorders"
        [showColumnHeaders]="showColumnHeaders"
      >
        <dxi-column dataField="Full_Name" caption="Name"></dxi-column>
        <dxi-column dataField="Title" caption="Position"></dxi-column>
      </dx-tree-list>
    `,
  }),
};

export const WithEditingButtons: Story = {
  args: {
    dataSource: [
      { Full_Name: 'John Heart', Title: 'CEO', ID: 1 },
      { Full_Name: 'Samantha Bright', Title: 'COO', ID: 2 },
      { Full_Name: 'Robert Reagan', Title: 'CMO', ID: 3 },
      { Full_Name: 'Greta Sims', Title: 'HR Manager', ID: 4 }
    ]
  },
  render: (args) => ({
    props: args,
    template: `
      <dx-tree-list
        meTreeList
        [dataSource]="dataSource"
        keyExpr="ID"
        [allowColumnReordering]="allowColumnReordering"
        [allowColumnResizing]="allowColumnResizing"
        [showRowLines]="showRowLines"
        [showColumnLines]="showColumnLines"
        [disabled]="disabled"
        [height]="height"
        [dataStructure]="dataStructure"
        [columnAutoWidth]="columnAutoWidth"
        [autoExpandAll]="autoExpandAll"
        [expandedRowKeys]="expandedRowKeys"
        [wordWrapEnabled]="wordWrapEnabled"
        [showBorders]="showBorders"
        [showColumnHeaders]="showColumnHeaders"
      >
        <dxo-editing
          mode="row"
          [allowUpdating]="true"
          [allowDeleting]="true"
          [allowAdding]="true"
        >
        </dxo-editing>
        <dxi-column dataField="Full_Name" caption="Name"></dxi-column>
        <dxi-column dataField="Title" caption="Position"></dxi-column>
        <dxi-column type="buttons">
          <dxi-button name="edit" icon="edit"></dxi-button>
          <dxi-button name="save" icon="save"></dxi-button>
          <dxi-button name="cancel" icon="undo"></dxi-button>
        </dxi-column>
      </dx-tree-list>
    `,
  }),
};

export const WithValidation: Story = {
  args: {
    dataSource: [
      { Full_Name: 'John Heart', Title: 'CEO', ID: 1 },
      { Full_Name: 'Samantha Bright', Title: 'COO', ID: 2 },
      { Full_Name: 'Robert Reagan', Title: 'CMO', ID: 3 },
      { Full_Name: 'Greta Sims', Title: 'HR Manager', ID: 4 }
    ]
  },
  render: (args) => ({
    props: args,
    template: `
      <dx-tree-list
        meTreeList
        [dataSource]="dataSource"
        keyExpr="ID"
        [allowColumnReordering]="allowColumnReordering"
				[allowColumnResizing]="allowColumnResizing"
				[showRowLines]="showRowLines"
				[showColumnLines]="showColumnLines"
				[disabled]="disabled"
        [height]="height"
				[dataStructure]="dataStructure"
				[columnAutoWidth]="columnAutoWidth"
				[autoExpandAll]="autoExpandAll"
				[expandedRowKeys]="expandedRowKeys"
				[wordWrapEnabled]="wordWrapEnabled"
				[showBorders]="showBorders"
        [showColumnHeaders]="showColumnHeaders"
      >
        <dxo-editing
          mode="row"
          [allowUpdating]="true"
          [allowDeleting]="true"
          [allowAdding]="true"
        ></dxo-editing>
        <dxi-column dataField="Full_Name" caption="Name">
          <dxi-validation-rule type="required"></dxi-validation-rule>
        </dxi-column>
        <dxi-column dataField="Title" caption="Position">
          <dxi-validation-rule type="required"></dxi-validation-rule>
        </dxi-column>
        <dxi-column type="buttons">
          <dxi-button name="edit" icon="edit"></dxi-button>
          <dxi-button name="save" icon="save"></dxi-button>
          <dxi-button name="cancel" icon="undo"></dxi-button>
        </dxi-column>
      </dx-tree-list>
    `,
  }),
};

export const WithHierarchy: Story = {
  args: {
    dataSource: [
      { ID: 1, Full_Name: 'John Heart', Title: 'CEO', Head_ID: null },
      { ID: 2, Full_Name: 'Samantha Bright', Title: 'COO', Head_ID: 1 },
      { ID: 3, Full_Name: 'Robert Reagan', Title: 'CMO', Head_ID: 1 },
      { ID: 4, Full_Name: 'Greta Sims', Title: 'HR Manager', Head_ID: 2 },
    ],
    autoExpandAll: true
  },
  render: (args) => ({
    props: args,
    template: `
      <dx-tree-list
        meTreeList
        [(dataSource)]="dataSource"
        keyExpr="ID"
        parentIdExpr="Head_ID"
        [allowColumnReordering]="allowColumnReordering"
				[allowColumnResizing]="allowColumnResizing"
				[showRowLines]="showRowLines"
				[showColumnLines]="showColumnLines"
				[disabled]="disabled"
        [height]="height"
				[dataStructure]="dataStructure"
				[columnAutoWidth]="columnAutoWidth"
				[autoExpandAll]="autoExpandAll"
				[expandedRowKeys]="expandedRowKeys"
				[wordWrapEnabled]="wordWrapEnabled"
				[showBorders]="showBorders"
        [showColumnHeaders]="showColumnHeaders"
      >
        <dxi-column dataField="Full_Name" caption="Name"></dxi-column>
        <dxi-column dataField="Title" caption="Position"></dxi-column>
      </dx-tree-list>
    `,
  }),
};

export const WithSortingAndFiltering: Story = {
  args: {
    dataSource: [{ ID: 1, Full_Name: 'John Heart', Title: 'CEO' }, { ID: 2, Full_Name: 'Samantha Bright', Title: 'COO' }],
    filterRow: {
      visible: true
    },
    allowColumnReordering: true
  },
  render: (args) => ({
    props: args,
    template: `
      <dx-tree-list
        meTreeList
        [dataSource]="dataSource"
        keyExpr="ID"
        [filterRow]="filterRow"
        [allowColumnReordering]="allowColumnReordering"
				[allowColumnResizing]="allowColumnResizing"
				[showRowLines]="showRowLines"
				[showColumnLines]="showColumnLines"
				[disabled]="disabled"
        [height]="height"
				[dataStructure]="dataStructure"
				[columnAutoWidth]="columnAutoWidth"
				[autoExpandAll]="autoExpandAll"
				[expandedRowKeys]="expandedRowKeys"
				[wordWrapEnabled]="wordWrapEnabled"
				[showBorders]="showBorders"
        [showColumnHeaders]="showColumnHeaders"
      >
        <dxi-column dataField="Full_Name" caption="Name" [allowSorting]="true"></dxi-column>
        <dxi-column dataField="Title" caption="Position" [allowSorting]="true"></dxi-column>
      </dx-tree-list>
    `,
  }),
};

export const WithCustomCells: Story = {
  args: {
    dataSource: [
      { ID: 1, Full_Name: 'John Heart', Title: 'CEO', Status: 'active' },
      { ID: 2, Full_Name: 'Samantha Bright', Title: 'COO', Status: 'active' },
      { ID: 3, Full_Name: 'Robert Reagan', Title: 'CMO', Status: 'inactive' },
      { ID: 4, Full_Name: 'Greta Sims', Title: 'HR Manager', Status: 'active' },
    ],
  },
  render: (args) => ({
    props: args,
    template: `
      <dx-tree-list
        meTreeList
        [dataSource]="dataSource"
        keyExpr="ID"
        [allowColumnReordering]="allowColumnReordering"
				[allowColumnResizing]="allowColumnResizing"
				[showRowLines]="showRowLines"
				[showColumnLines]="showColumnLines"
				[disabled]="disabled"
        [height]="height"
				[dataStructure]="dataStructure"
				[columnAutoWidth]="columnAutoWidth"
				[autoExpandAll]="autoExpandAll"
				[expandedRowKeys]="expandedRowKeys"
				[wordWrapEnabled]="wordWrapEnabled"
				[showBorders]="showBorders"
        [showColumnHeaders]="showColumnHeaders"
      >
        <dxi-column dataField="Full_Name" caption="Name"></dxi-column>
        <dxi-column dataField="Title" caption="Position"></dxi-column>
        <dxi-column caption="Status" cellTemplate="statusTemplate"></dxi-column>

        <div *dxTemplate="let cell of 'statusTemplate'">
          <span [style.color]="cell.data.Status === 'active' ? 'green' : 'red'">
            {{ cell.data.Status }}
          </span>
        </div>
      </dx-tree-list>
    `,
  }),
};

export const WithNoData: Story = {
  args: {
    dataSource: [],
  },
};

export const WithFixedHeight: Story = {
  args: {
    height: '300px',
  },
};
