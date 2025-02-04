import { DxDataGridModule } from 'devextreme-angular';

import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';

import { MeBadgeComponent, MeDataGridDirective } from '../../public-api';
import { dataGridMockSourceData } from './data-grid-mock-source-data';

export default {
  title: 'Components/DataGrid(RC)',
  component: MeBadgeComponent,
  decorators: [
    moduleMetadata({
      declarations: [MeDataGridDirective],
      imports: [DxDataGridModule],
    }),
  ],
  argTypes: {
    dataSource: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Размер компонента',
    },
    showPageSizeSelector: {
      control: 'select',
      options: [true, false],
      description:
        'Относится к Pagination. Показывать ли выбор количества строк на странице. Тэг `dxo-pager`',
    },
    displayMode: {
      control: 'select',
      options: ['compact', 'full'],
      description: 'Относится к Pagination. Режим отображения PageSizeSelector',
    },
    pageSize: {
      control: 'text',
      description:
        'Относится к Pagination. Разрешенные размеры страницы. Тэг `dxo-paging`',
    },
    showInfo: {
      control: 'select',
      options: [true, false],
      description:
        'Относится к Pagination. Показывать ли компонент информации о странице. Тэг `dxo-pager`',
    },
    infoText: {
      control: 'text',
      description:
        'Относится к Pagination. Текст информации о странице. Тэг `dxo-pager`',
    },
    showNavigationButtons: {
      control: 'select',
      options: [true, false],
      description:
        'Относится к Pagination. Показывать кнопки навигации. Тэг `dxo-pager`',
    },
    showBorders: {
      control: 'boolean',
      description: 'Показывать границы',
    },
    allowColumnResizing: {
      control: 'boolean',
      description: 'Разрешает изменение размера столбцов',
    },
    allowColumnReordering: {
      control: 'boolean',
      description: 'Разрешает изменение порядка столбцов',
    },
    showRowLines: {
      control: 'boolean',
      description: 'Показывать линии строк',
    },
  },
  args: {
    dataSource: dataGridMockSourceData,
    allowColumnResizing: false,
    allowColumnReordering: false,
    size: 'medium',
    showPageSizeSelector: true,
    displayMode: 'full',
    showInfo: true,
    infoText: 'Записей: {2}',
    showNavigationButtons: true,
    pageSize: '10',
    showRowLines: true,
    showBorders: true,
  },
  render: (args) => ({
    props: args,
    template: `
			<dx-data-grid
				meDataGrid
				id="gridContainer"
				[(dataSource)]="dataSource"
				[size]="size"
				[showBorders]="showBorders"
			  [showRowLines]="showRowLines"
				[allowColumnReordering]="allowColumnReordering"
        [allowColumnResizing]="allowColumnResizing"
			>
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
} as Meta;

export const DataGrid: StoryObj = {};

export const WithCounter: StoryObj = {
  render: (args) => ({
    props: args,
    template: `<dx-data-grid
    meDataGrid
    [(dataSource)]="dataSource"
    [size]="size"
    [showBorders]="showBorders"
    [showRowLines]="showRowLines"
>
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
