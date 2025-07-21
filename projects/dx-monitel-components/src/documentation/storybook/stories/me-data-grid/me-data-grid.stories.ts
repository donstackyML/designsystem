import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { DxDataGridComponent, DxDataGridModule } from 'devextreme-angular';
import {
  DxoPagerComponent,
  DxoPagingComponent,
  DxoSelectionComponent,
} from 'devextreme-angular/ui/nested';

import { MeBadgeComponent, MeDataGridDirective } from '../../../../public-api';
import {
  dataGridMockSourceData,
  dataGridMockSourceDataWithGroup,
} from './me-data-grid-mock-source-data';

type StoryProps =
  | DxDataGridComponent
  | MeDataGridDirective
  | DxoPagerComponent
  | DxoPagingComponent
  | DxoSelectionComponent;

export default {
  title: 'Components/DataGrid',
  decorators: [
    moduleMetadata({
      imports: [DxDataGridModule, MeBadgeComponent],
      declarations: [MeDataGridDirective],
    }),
  ],
  argTypes: {
    dataSource: {
      control: 'object',
      description: 'Данные для отображения',
      table: {
        defaultValue: { summary: '[]' },
        raw: true,
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Размер компонента',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    cellSize: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'Размер ячейки',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    showRowLines: {
      control: 'boolean',
      description: 'Определяет, отображаются ли границы строк.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showColumnLines: {
      control: 'boolean',
      description:
        'Определяет, отображаются ли вертикальные границы между столбцами.',
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
        defaultValue: { summary: 'false' },
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
    allowColumnResizing: {
      control: 'boolean',
      description: 'Разрешает изменение размера столбцов',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    allowColumnReordering: {
      control: 'boolean',
      description: 'Разрешает изменение порядка столбцов',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    columnAutoWidth: {
      control: 'boolean',
      description:
        'Определяет, будет ли TreeList автоматически изменять ширину столбцов.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showPageSizeSelector: {
      control: 'boolean',
      description:
        'Относится к Pagination. Показывать ли выбор количества строк на странице. Тэг `dxo-pager`',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    pageSize: {
      control: 'number',
      description:
        'Относится к Pagination. Разрешенные размеры страницы. Тэг `dxo-paging`',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '20' },
      },
    },
    displayMode: {
      control: 'select',
      options: ['adaptive', 'compact', 'full'],
      description: 'Относится к Pagination. Режим отображения PageSizeSelector',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'Page {0} of {1} ({2} items)'" },
      },
    },
    showInfo: {
      control: 'boolean',
      description:
        'Относится к Pagination. Показывать ли компонент информации о странице. Тэг `dxo-pager`',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    infoText: {
      control: 'text',
      description:
        'Относится к Pagination. Текст информации о странице. Тэг `dxo-pager`',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'Page {0} of {1} ({2} items)'" },
      },
    },
    showNavigationButtons: {
      control: 'boolean',
      description:
        'Относится к Pagination. Показывать кнопки навигации. Тэг `dxo-pager`',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    selection: {
      control: {
        type: 'object',
      },
      description:
        'Конфигурация режима выделения. Используется внутри компонента `<dxo-selection [mode]="multi"></dxo-selection>`.',
      table: {
        type: {
          summary:
            '{\n' +
            '  allowSelectAll?: boolean;\n' +
            '  deferred?: boolean;\n' +
            '  mode?: SingleMultipleOrNone;\n' +
            '  selectAllMode?: SelectAllMode;\n' +
            '  showCheckBoxesMode?: SelectionColumnDisplayMode;\n' +
            '}',
        },
        defaultValue: {
          summary: '{}',
        },
      },
    },
    mode: {
      control: 'select',
      options: ['single', 'multiple', 'none'],
      description:
        'Определяет тип выделения. Используется внутри компонента `<dxo-selection [mode]="multi"></dxo-selection>`.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
      },
    },
    allowSelectAll: {
      control: 'boolean',
      description:
        'Определяет тип выделения. Используется внутри компонента `<dxo-selection [mode]="multi"></dxo-selection>`.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    selectAllMode: {
      control: 'select',
      options: ['allPages', 'page'],
      description:
        'Определяет способ выделения. Используется внутри компонента `<dxo-selection [mode]="multi"></dxo-selection>`.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'allPages' },
      },
    },
    showCheckBoxesMode: {
      control: 'select',
      options: ['always', 'none', 'onClick', 'onLongTap'],
      description: 'Указывает, в каких случаях отображаются чекбоксы.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'always' },
      },
    },
  },
  args: {
    dataSource: dataGridMockSourceData,
    size: 'medium',
    cellSize: 'medium',
    allowColumnReordering: false,
    allowColumnResizing: false,
    showRowLines: false,
    showColumnLines: true,
    showBorders: false,
    showColumnHeaders: true,
    wordWrapEnabled: false,
    columnAutoWidth: false,
    disabled: false,
    selection: undefined,
    mode: 'none',
    selectAllMode: 'allPages',
    allowSelectAll: true,
    showCheckBoxesMode: 'always',
    displayMode: 'adaptive',
    showInfo: true,
    infoText: 'Записей: {2}',
    showNavigationButtons: true,
    showPageSizeSelector: true,
    pageSize: 10,
  },
  render: (args) => ({
    props: args,
    template: `
			<dx-data-grid
				meDataGrid
				id="gridContainer"
        [(dataSource)]="dataSource"
				[size]="size"
				[cellSize]="cellSize"
				[allowColumnReordering]="allowColumnReordering"
				[allowColumnResizing]="allowColumnResizing"
				[showRowLines]="showRowLines"
				[showColumnLines]="showColumnLines"
				[disabled]="disabled"
				[columnAutoWidth]="columnAutoWidth"
				[wordWrapEnabled]="wordWrapEnabled"
				[showBorders]="showBorders"
        [showColumnHeaders]="showColumnHeaders"
        [selection]="selection"
			>
        <dxo-selection *ngIf="!selection" [mode]="mode" [allowSelectAll]="allowSelectAll" [selectAllMode]="selectAllMode" [showCheckBoxesMode]="showCheckBoxesMode"></dxo-selection>
				<dxo-search-panel [visible]="true"></dxo-search-panel>
				<dxo-paging [(pageSize)]="pageSize"></dxo-paging>
				<dxo-pager
					[showPageSizeSelector]="showPageSizeSelector"
					[displayMode]="displayMode"
					[showInfo]="showInfo"
					[infoText]="infoText"
					[showNavigationButtons]="showNavigationButtons"
					></dxo-pager>
				<dxo-group-panel [visible]="true"></dxo-group-panel>
			</dx-data-grid>`,
  }),
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {};

export const WithCounter: Story = {
  render: (args) => ({
    props: args,
    template: `<dx-data-grid
    meDataGrid
    [(dataSource)]="dataSource"
    [size]="size"
    [cellSize]="cellSize"
    [allowColumnReordering]="allowColumnReordering"
    [allowColumnResizing]="allowColumnResizing"
    [showRowLines]="showRowLines"
    [showColumnLines]="showColumnLines"
    [disabled]="disabled"
    [columnAutoWidth]="columnAutoWidth"
    [wordWrapEnabled]="wordWrapEnabled"
    [showBorders]="showBorders"
    [showColumnHeaders]="showColumnHeaders"
    [selection]="selection"
>
  <dxo-selection *ngIf="!selection" [mode]="mode" [allowSelectAll]="allowSelectAll" [selectAllMode]="selectAllMode" [showCheckBoxesMode]="showCheckBoxesMode"></dxo-selection>
  <dxo-paging [(pageSize)]="pageSize"></dxo-paging>
  <dxo-paging [(pageSize)]="pageSize"></dxo-paging>
  <dxi-column dataField="CompanyName"></dxi-column>
  <dxi-column dataField="Fax"></dxi-column>
  <dxi-column dataField="Phone"></dxi-column>
  <dxi-column
  dataField="ID"
  cellTemplate="cellTemplate"></dxi-column>
  <div *dxTemplate="let cell of 'cellTemplate'">
    <me-badge color="secondary" [value]="[cell.data.ID]"></me-badge>
  </div>
</dx-data-grid>`,
  }),
};

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

export const SelectionModeMultipleAndAll: Story = {
  args: {
    mode: 'multiple',
    selectAllMode: 'allPages',
    allowSelectAll: true,
  },
};

export const SelectionModeSingle: Story = {
  args: {
    selection: {
      mode: 'single',
    },
  },
};

export const WithContentGrouping: Story = {
  args: {
    dataSource: dataGridMockSourceDataWithGroup,
  },
  render: (args) => ({
    props: args,
    template: `
<dx-data-grid
  id="gridContainer"
  meDataGrid
  [(dataSource)]="dataSource"
  [size]="size"
  [cellSize]="cellSize"
  [allowColumnReordering]="allowColumnReordering"
  [allowColumnResizing]="allowColumnResizing"
  [showRowLines]="showRowLines"
  [showColumnLines]="showColumnLines"
  [disabled]="disabled"
  [columnAutoWidth]="columnAutoWidth"
  [wordWrapEnabled]="wordWrapEnabled"
  [showBorders]="showBorders"
  [showColumnHeaders]="showColumnHeaders"
  [selection]="selection"
  [keyExpr]="'ID'"
>
  <dxi-column dataField="CompanyName"></dxi-column>
  <dxi-column dataField="Phone"></dxi-column>
  <dxi-column dataField="Fax"></dxi-column>
  <dxi-column dataField="City"></dxi-column>
  <dxi-column dataField="State" [groupIndex]="0"></dxi-column>

  <dxo-search-panel [visible]="true"></dxo-search-panel>
  <dxo-paging [pageSize]="10"></dxo-paging>
  <dxo-pager [visible]="true"></dxo-pager>
  <dxo-group-panel [visible]="true"></dxo-group-panel>
  <dxo-grouping #expand [autoExpandAll]="true"></dxo-grouping>
</dx-data-grid>`,
  }),
};

export const WithNumberAlign: Story = {
  render: (args) => ({
    props: args,
    template: `
      <dx-data-grid
        meDataGrid
        [dataSource]="dataSource"
        [size]="size"
        [cellSize]="cellSize"
        [allowColumnReordering]="allowColumnReordering"
        [allowColumnResizing]="allowColumnResizing"
        [showRowLines]="showRowLines"
        [showColumnLines]="showColumnLines"
        [disabled]="disabled"
        [columnAutoWidth]="columnAutoWidth"
        [wordWrapEnabled]="wordWrapEnabled"
        [showBorders]="showBorders"
        [showColumnHeaders]="showColumnHeaders"
        [selection]="selection"
        [headerAlign]="{ 'ID': 'left', 'Company Name': 'right' }"
        [columns]="[{ dataField: 'ID', alignment: 'right' }, { dataField: 'CompanyName' }, { dataField: 'Phone' }, { dataField: 'Fax' }, { dataField: 'State' }, { dataField: 'City' }]"
      >
        <dxo-selection *ngIf="!selection" [mode]="mode" [allowSelectAll]="allowSelectAll" [selectAllMode]="selectAllMode" [showCheckBoxesMode]="showCheckBoxesMode"></dxo-selection>
        <dxo-paging [(pageSize)]="pageSize"></dxo-paging>
      </dx-data-grid>
    `,
  }),
};

export const WithMultipleSortingAndHeaderFilterIcon: Story = {
  args: {
    headerFilter: { visible: true },
  },
  render: (args) => ({
    props: args,
    template: `
			<dx-data-grid
				meDataGrid
				id="gridContainer"
        [(dataSource)]="dataSource"
				[size]="size"
				[cellSize]="cellSize"
				[allowColumnReordering]="allowColumnReordering"
				[allowColumnResizing]="allowColumnResizing"
				[showRowLines]="showRowLines"
				[showColumnLines]="showColumnLines"
				[disabled]="disabled"
				[columnAutoWidth]="columnAutoWidth"
				[wordWrapEnabled]="wordWrapEnabled"
				[showBorders]="showBorders"
        [showColumnHeaders]="showColumnHeaders"
        [selection]="selection"
        [headerFilter]="{ visible: true }"
			>
        <dxo-sorting
          mode="multiple"
        ></dxo-sorting>
				<dxo-search-panel [visible]="true"></dxo-search-panel>
				<dxo-paging [(pageSize)]="pageSize"></dxo-paging>
				<dxo-pager
					[showPageSizeSelector]="showPageSizeSelector"
					[displayMode]="displayMode"
					[showInfo]="showInfo"
					[infoText]="infoText"
					[showNavigationButtons]="showNavigationButtons"
					></dxo-pager>
				<dxo-group-panel [visible]="true"></dxo-group-panel>
			</dx-data-grid>`,
  }),
};
