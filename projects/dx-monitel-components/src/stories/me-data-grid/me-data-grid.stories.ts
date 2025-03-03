import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { DxDataGridComponent, DxDataGridModule } from 'devextreme-angular';

import { MeBadgeComponent, MeDataGridDirective } from '../../public-api';
import { dataGridMockSourceData } from './me-data-grid-mock-source-data';
import { DxoPagerComponent, DxoPagingComponent } from 'devextreme-angular/ui/nested';

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
        raw: true
      }
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Размер компонента',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      }
    },
    showBorders: {
      control: 'boolean',
      description: 'Показывать границы',
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
    showRowLines: {
      control: 'boolean',
      description: 'Показывать линии строк',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showPageSizeSelector: {
      control: 'boolean',
      description: 'Относится к Pagination. Показывать ли выбор количества строк на странице. Тэг `dxo-pager`',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    pageSize: {
      control: 'number',
      description: 'Относится к Pagination. Разрешенные размеры страницы. Тэг `dxo-paging`',
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
      description: 'Относится к Pagination. Текст информации о странице. Тэг `dxo-pager`',
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
  },
  args: {
    dataSource: dataGridMockSourceData,
    allowColumnResizing: false,
    allowColumnReordering: false,
    size: 'medium',
    showPageSizeSelector: true,
    displayMode: 'adaptive',
    showInfo: true,
    infoText: 'Записей: {2}',
    showNavigationButtons: true,
    pageSize: 10,
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
} satisfies Meta<DxDataGridComponent | MeDataGridDirective | DxoPagerComponent | DxoPagingComponent>;

type Story = StoryObj<DxDataGridComponent | MeDataGridDirective | DxoPagerComponent | DxoPagingComponent>;

export const Default: Story = {};

export const WithCounter: Story = {
  render: (args) => ({
    props: args,
    template: `<dx-data-grid
    meDataGrid
    [(dataSource)]="dataSource"
    [size]="size"
    [showBorders]="showBorders"
    [showRowLines]="showRowLines"
    [allowColumnReordering]="allowColumnReordering"
    [allowColumnResizing]="allowColumnResizing"
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

export const SizeSmall: Story = {
  args: {
    size: 'small'
  }
};

export const SizeMedium: Story = {
  args: {
    size: 'medium'
  }
};

export const SizeLarge: Story = {
  args: {
    size: 'large'
  }
};
