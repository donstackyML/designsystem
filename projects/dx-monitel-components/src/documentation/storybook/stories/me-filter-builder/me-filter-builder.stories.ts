import { Component, Input } from '@angular/core';
import { argsToTemplate, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { DxDataGridModule, DxFilterBuilderComponent, DxFilterBuilderModule, DxRadioGroupModule, DxTagBoxModule } from 'devextreme-angular';
import { Field } from 'devextreme/ui/filter_builder';
import { MeDataGridDirective, MeLoadIndicatorDirective, MeRadioGroupDirective, MeTagBoxDirective } from '../../../../public-api';
import { anyOfOperation, isNoneOfOperation } from './me-filter-builder-custom-operations';
import { filterFields as baseFilterFields, departments, mockData, tags } from './me-filter-builder-mock-data';

export default {
  title: 'Components(WIP)/FilterBuilder',
  component: MeLoadIndicatorDirective,
  decorators: [
    moduleMetadata({
      imports: [DxFilterBuilderModule],
    }),
  ],
  argTypes: {
    fields: {
      description: 'Указывает массив полей для построения критериев фильтрации.',
      control: 'object',
      table: {
        type: { summary: 'Array<Object>' },
        defaultValue: { summary: '[]' },
      },
    },
    value: {
      description: 'Указывает выражение фильтрации.',
      control: 'object',
      table: {
        type: { summary: 'Object' },
        defaultValue: { summary: '{}' },
      },
    },
    groupOperations: {
      description: 'Указывает доступные групповые операции.',
      control: 'object',
      table: {
        type: { summary: 'Array<string>' },
        defaultValue: { summary: '["and", "or", "notAnd", "notOr"]' },
      },
    },
    maxGroupLevel: {
      description: 'Указывает максимальный уровень вложенности групп.',
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    customOperations: {
      description: 'Указывает пользовательские операции фильтрации.',
      control: 'object',
      table: {
        type: { summary: 'Array<Object>' },
        defaultValue: { summary: '[]' },
      },
    },
    onValueChanged: {
      description: 'Функция, которая выполняется после изменения выражения фильтрации.',
      action: 'valueChanged',
      table: {
        type: { summary: '(e: { value: any }) => void' },
      },
    },
    allowHierarchicalFields: {
      description: 'Указывает, разрешены ли иерархические поля.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      }
    },
  },
  args: {
    fields: baseFilterFields,
    value: null,
    groupOperations: ['and', 'or', 'notAnd', 'notOr'],
    maxGroupLevel: undefined,
    customOperations: [],
    allowHierarchicalFields: false,
  },
  render: (args) => ({
    props: args,
    template: `
    <dx-filter-builder ${argsToTemplate(args)}></dx-filter-builder>
    `,
  }),
} satisfies Meta<DxFilterBuilderComponent>;

type Story = StoryObj<DxFilterBuilderComponent>;

export const Default: Story = {};

export const filterFields: Field[] = [
  { dataField: "id", dataType: "number" },
  { dataField: "name", dataType: "string" },
  { dataField: "age", dataType: "number" },
  { dataField: "birthdate", dataType: "date" },
  { dataField: "isActive", dataType: "boolean" },
  {
    dataField: "gender", dataType: "string", editorTemplate: 'radioGroupTemplate', lookup: {
      dataSource: ['male', 'female']
    }
  },
  {
    dataField: "tags",
    dataType: "object",
    filterOperations: ['contains', 'notcontains'],
    lookup: {
      dataSource: tags,
      valueExpr: "name",
      displayExpr: "name",
    },
  },
  { dataField: "department", dataType: "string", filterOperations: ['anyof', 'noneof'], },
  { dataField: "address.city", dataType: "string" },
  { dataField: "address.zip", dataType: "string" },
  { dataField: "salary", dataType: "number" },
];

@Component({
  selector: 'story-wrapper',
  template: `
    <dx-filter-builder
      [fields]="fields"
      [value]="filterValue"
      [groupOperations]="groupOperations"
      [maxGroupLevel]="maxGroupLevel"
      [customOperations]="customOperations"
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
      [filterValue]="filterValue"
      height="60dvh"
      style="margin-top: 20px;">
      <dxo-paging pageSize="10"></dxo-paging>
      <dxi-column *ngFor="let column of columns"
      [dataField]="column.dataField"
      [cellTemplate]="column.dataField === 'tags' ? 'tagsTemplate' : undefined"
      >
      </dxi-column>

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
class StoryWrapperComponent {
  fields = filterFields;
  filterValue: any = [['department', 'anyof', ['Engineering']], ['tags', 'contains', 'developer']];
  data = mockData;
  departments = departments;
  sexOptions = ['male', 'female'];

  customOperations: any[] = [anyOfOperation, isNoneOfOperation];

  @Input() allowHierarchicalFields = false;
  @Input() maxGroupLevel: number | undefined = undefined;
  @Input() groupOperations: string[] = ['and', 'or', 'notAnd', 'notOr'];

  columns = filterFields;

  onFilterChanged(e: any) {
    console.log('Filter changed:', e.value);
    this.filterValue = e.value;
  }
}

export const WithDataGrid: StoryObj<StoryWrapperComponent> = {
  decorators: [
    moduleMetadata({
      imports: [DxFilterBuilderModule, DxDataGridModule, DxTagBoxModule, DxRadioGroupModule],
      declarations: [StoryWrapperComponent, MeDataGridDirective, MeTagBoxDirective, MeRadioGroupDirective],
    }),
  ],
  render: (args) => ({
    props: args,
    template: `<story-wrapper
    [allowHierarchicalFields]="allowHierarchicalFields"
    [groupOperations]="groupOperations"
    [maxGroupLevel]="maxGroupLevel"
    ></story-wrapper>`,
  }),
};
