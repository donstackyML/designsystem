import { Component, enableProdMode } from '@angular/core';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

type Pivot = boolean | undefined;

@Component({
  selector: 'app-pivot-grid',
  templateUrl: 'pivot-grid.component.html',
  styleUrls: ['pivot-grid.component.css'],
  preserveWhitespaces: true,
})
export class PivotGridComponent {
  pivotGridDataSource: any;

  searchEnabled: Pivot = true;

  showRelevantValues: Pivot = true;

  constructor() {
    this.pivotGridDataSource = new PivotGridDataSource({
      fields: [
        { dataField: '[Product].[Category]', area: 'column' },
        { dataField: '[Product].[Subcategory]', area: 'column' },
        { dataField: '[Customer].[City]', area: 'row' },
        { dataField: '[Measures].[Internet Total Product Cost]', area: 'data', format: 'currency' },
        {
          dataField: '[Customer].[Country]',
          area: 'filter',
          filterValues: ['[Customer].[Country].&[United Kingdom]'],
        },
        {
          dataField: '[Ship Date].[Calendar Year]',
          area: 'filter',
          filterValues: ['[Ship Date].[Calendar Year].&[2004]'],
        },
      ],
      store: {
        type: 'xmla',
        url: 'https://demos.devexpress.com/Services/OLAP/msmdpump.dll',
        catalog: 'Adventure Works DW Standard Edition',
        cube: 'Adventure Works',
      },
    });
  }
}