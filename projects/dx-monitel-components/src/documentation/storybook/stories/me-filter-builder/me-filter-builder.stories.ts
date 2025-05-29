import { Component } from '@angular/core';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import {
  DxFilterBuilderModule,
  DxDataGridModule,
  DxTagBoxModule,
  DxRadioGroupModule,
  DxDateBoxModule,
} from 'devextreme-angular';

import { Field } from 'devextreme/ui/filter_builder';
import {
  MeDataGridDirective,
  MeDateBoxDirective,
  MeRadioGroupDirective,
  MeTagBoxDirective,
} from '../../../../public-api';

import {
  anyOfOperation,
  isNoneOfOperation,
} from './me-filter-builder-custom-operations';
import { mockData, tags, departments } from './me-filter-builder-mock-data';

const filterFields: Field[] = [
  { dataField: 'id', dataType: 'number' },
  { dataField: 'name', dataType: 'string' },
  { dataField: 'age', dataType: 'number' },
  {
    dataField: 'birthdate',
    dataType: 'datetime',
    editorTemplate: 'dateTemplate',
  },
  { dataField: 'isActive', dataType: 'boolean' },
  {
    dataField: 'gender',
    dataType: 'string',
    editorTemplate: 'radioGroupTemplate',
    lookup: {
      dataSource: ['male', 'female'],
    },
  },
  {
    dataField: 'tags',
    dataType: 'object',
    filterOperations: ['contains', 'notcontains'],
    lookup: {
      dataSource: tags,
      valueExpr: 'name',
      displayExpr: 'name',
    },
  },
  {
    dataField: 'department',
    dataType: 'string',
    filterOperations: ['anyof', 'noneof'],
    lookup: {
      dataSource: departments,
      valueExpr: 'name',
      displayExpr: 'name',
    },
  },
  { dataField: 'address.city', dataType: 'string' },
  { dataField: 'address.zip', dataType: 'string' },
  { dataField: 'salary', dataType: 'number' },
];

@Component({
  selector: 'me-filter-builder-docs',
  template: `
    <dx-filter-builder
      [fields]="fields"
      [value]="value"
      [groupOperations]="groupOperations"
      [maxGroupLevel]="maxGroupLevel"
      [allowHierarchicalFields]="allowHierarchicalFields"
      (onValueChanged)="onFilterChanged($event)"
      class="me-filter-builder"
    >
      <dx-tag-box
        *dxTemplate="let condition of 'tagBoxTemplate'"
        meTagBox
        [value]="condition.value"
        [items]="departments"
        valueExpr="name"
        displayExpr="name"
        (onValueChanged)="condition.setValue($event.value)"
        style="min-width: 200px;"
      >
      </dx-tag-box>

      <dx-date-box
        *dxTemplate="let condition of 'dateTemplate'"
        meDateBox
        [value]="condition.value"
        [type]="condition.field.dataType"
        (onValueChanged)="condition.setValue($event.value)"
      >
      </dx-date-box>

      <dx-radio-group
        *dxTemplate="let condition of 'radioGroupTemplate'"
        meRadioGroup
        [items]="sexOptions"
        [value]="condition.value"
        layout="horizontal"
        (onValueChanged)="condition.setValue($event.value)"
      >
      </dx-radio-group>
    </dx-filter-builder>

    <dx-data-grid
      meDataGrid
      [dataSource]="data"
      [filterValue]="value"
      height="60dvh"
      style="margin-top: 20px;"
    >
      <dxo-paging pageSize="10"></dxo-paging>
      <dxi-column
        *ngFor="let column of fields"
        [dataField]="column.dataField"
        [cellTemplate]="
          column.dataField === 'tags' ? 'tagsTemplate' : undefined
        "
      ></dxi-column>

      <div *dxTemplate="let cell of 'tagsTemplate'">
        <dx-tag-box
          meTagBox
          [value]="cell.value"
          [readOnly]="true"
          [showSelectionControls]="false"
          [searchEnabled]="false"
        >
        </dx-tag-box>
      </div>
    </dx-data-grid>
  `,
})
class FilterBuilderDocsComponent {
  fields = filterFields;
  value: any = [
    ['department', 'anyof', ['Engineering']],
    ['tags', 'contains', 'developer'],
    ['birthdate', '>', new Date('1990-01-01')],
  ];
  departments = departments;
  sexOptions = ['male', 'female'];
  data = mockData;

  customOperations = [anyOfOperation, isNoneOfOperation];

  allowHierarchicalFields = false;
  maxGroupLevel?: number;
  groupOperations = ['and', 'or', 'notAnd', 'notOr'];

  onFilterChanged(e: any) {
    this.value = e.value;
    console.log('Filter changed:', e.value);
  }
}

export default {
  title: 'Components/FilterBuilder',
  component: FilterBuilderDocsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        DxFilterBuilderModule,
        DxDataGridModule,
        DxTagBoxModule,
        DxRadioGroupModule,
        DxDateBoxModule,
      ],
      declarations: [
        FilterBuilderDocsComponent,
        MeDataGridDirective,
        MeTagBoxDirective,
        MeRadioGroupDirective,
        MeDateBoxDirective,
      ],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Компонент фильтрации на основе DevExtreme FilterBuilder с поддержкой кастомных редакторов, таких как `TagBox` и `RadioGroup`.',
      },
    },
  },
} satisfies Meta<FilterBuilderDocsComponent>;

type Story = StoryObj<FilterBuilderDocsComponent>;

export const Default: Story = {};
