import {
  MeDataGridDirective,
  MeFilterBuilderComponent,
  MeListDirective,
} from '../../../../public-api';

import {
  argsToTemplate,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { DxDataGridModule, DxListModule } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';
import {
  employeesData,
  employeesDataList,
  fields,
  fieldsList,
  filtersForGrid,
} from './me-filter-builder-mock-data';

export default {
  title: 'Components/FilterBuilder',
  component: MeFilterBuilderComponent,
  decorators: [
    moduleMetadata({
      imports: [DxDataGridModule, DxListModule],
      declarations: [MeListDirective, MeDataGridDirective],
    }),
  ],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      description: 'Определяет размер компонента.',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'string' },
        defaultValue: { summary: 'small' },
      },
    },
    fields: {
      description:
        'Массив объектов, описывающих поля для фильтрации. Каждый объект включает dataField, dataType и editorTemplate.',
      table: {
        category: 'Данные',
        type: { summary: 'Array<DevExtremeField>' },
      },
    },
    filteredValue: {
      description:
        'Текущее значение фильтра в формате DevExtreme. Используется для привязки к FilterBuilder и DataGrid/List.',
      table: {
        category: 'Фильтрация',
        type: { summary: 'any[]' },
        defaultValue: { summary: '[]' },
      },
    },
    dataSource: {
      description: 'Исходные данные, отображаемые в DataGrid или List.',
      table: {
        category: 'Данные',
        type: { summary: 'any[]' },
      },
    },
    selectBoxSources: {
      description:
        'Карта с массивами значений для SelectBox, используемых в полях с шаблоном selectTemplate.',
      table: {
        category: 'Редакторы',
        type: { summary: 'Record<string, string[]>' },
      },
    },
  },
  args: {
    fields,
    filteredValue: [],
    dataSource: employeesData,
    size: 'small',
    selectBoxSources: {
      Department: ['HR', 'Finance', 'Engineering', 'Marketing', 'IT'],
    },
  },
  render: (args) => ({
    props: args,
    template: `
      <me-filter-builder 
        ${argsToTemplate(args)} 
        [(filteredValue)]="filteredValue"
      ></me-filter-builder>

      <dx-data-grid 
        style="margin-top: 20px;"
        [dataSource]="dataSource" 
        [filterValue]="filteredValue" 
        [showBorders]="true" 
        [columns]="fields"
      ></dx-data-grid>
    `,
  }),
} satisfies Meta<MeFilterBuilderComponent>;

type Story = StoryObj<MeFilterBuilderComponent>;

export const Default: Story = {
  args: {},
};

export const WithDataGrid: Story = {
  render: (args) => ({
    props: args,
    template: `
      <me-filter-builder 
        ${argsToTemplate(args)} 
        [(filteredValue)]="filteredValue"
      ></me-filter-builder>

      <dx-data-grid 
        meDataGrid
        style="margin-top: 20px;"
        [dataSource]="dataSource" 
        [filterValue]="filteredValue" 
        [showBorders]="true" 
        [columns]="fields"
      ></dx-data-grid>
    `,
  }),
};

export const WithList: Story = {
  args: {
    fields: fieldsList,
    dataSource: employeesDataList,
    selectBoxSources: undefined,
  },
  render: (args) => {
    const listDataSource = new DataSource({
      store: {
        type: 'array',
        data: employeesDataList,
      },
    });

    return {
      props: {
        ...args,
        listDataSource,
        filteredValueChange: (val: any) => {
          listDataSource.filter(val);
          listDataSource.load();
        },
      },
      template: `
        <me-filter-builder 
          ${argsToTemplate(args)} 
          [(filteredValue)]="filteredValue"
          (filteredValueChange)="filteredValueChange($event)"
        ></me-filter-builder>

        <dx-list 
          style="margin-top: 20px;"
          meList 
          [dataSource]="listDataSource"
          [filter]="filteredValue"
          displayExpr="Name"
        ></dx-list>
    `,
    };
  },
};

export const WithPredefinedFilters: Story = {
  args: {
    filteredValue: filtersForGrid,
  },
};

export const SmallSize: Story = {
  args: { size: 'small', filteredValue: filtersForGrid },
};

export const MediumSize: Story = {
  args: { size: 'medium', filteredValue: filtersForGrid },
};

export const LargeSize: Story = {
  args: { size: 'large', filteredValue: filtersForGrid },
};
