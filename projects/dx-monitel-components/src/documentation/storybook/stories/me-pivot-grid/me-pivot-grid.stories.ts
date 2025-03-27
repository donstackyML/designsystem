import { argsToTemplate, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { DxPivotGridComponent, DxPivotGridModule } from 'devextreme-angular';
import { MePivotGridDirective } from '../../../../public-api';
import { mePivotGridDataSourceFields, mePivotGridDataSourceSource } from './me-pivot-grid-mock-data';

export default {
  title: 'Components/PivotGrid',
  decorators: [
    moduleMetadata({
      imports: [DxPivotGridModule],
      declarations: [MePivotGridDirective],
    }),
  ],
  argTypes: {
    allowSortingBySummary: {
      control: 'boolean',
      description: 'Allows sorting by summary.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    allowFiltering: {
      control: 'boolean',
      description:
        'Allows the user to filter fields by selecting or clearing values in the popup menu.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showColumnGrandTotals: {
      control: 'boolean',
      description: 'Specifies whether to display the Grand Total column.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showRowGrandTotals: {
      control: 'boolean',
      description: 'Specifies whether to display the Grand Total row.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showRowTotals: {
      control: 'boolean',
      description: 'Specifies whether to display the Totals row.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showColumnTotals: {
      control: 'boolean',
      description: 'Specifies whether to display the Totals column.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showTotalsPrior: {
      control: 'select',
      options: ['both', 'columns', 'none', 'rows'],
      description: 'Specifies the priority of totals.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
      },
    },
  },
  args: {
    dataSource: {
      fields: mePivotGridDataSourceFields,
      store: mePivotGridDataSourceSource,
    },
    allowSortingBySummary: false,
    allowFiltering: false,
    showColumnGrandTotals: false,
    showRowGrandTotals: false,
    showRowTotals: false,
    showColumnTotals: false,
    showTotalsPrior: 'none'
  },
  render: (args: any) => ({
    props: { ...args },
    template: `
  <dx-pivot-grid
		mePivotGrid
    id="pivot-grid"
    ${argsToTemplate(args)}
  >
    <dxo-field-chooser [enabled]="true"></dxo-field-chooser>
    <dxo-scrolling mode="virtual"></dxo-scrolling>
		<dxo-load-panel meLoadPanel size="small" showPane="false" text="Загрузка..." [enabled]="true"></dxo-load-panel>
  </dx-pivot-grid>
		`,
  }),
} satisfies Meta<DxPivotGridComponent | MePivotGridDirective>;

type Story = StoryObj<DxPivotGridComponent| MePivotGridDirective>;

export const Default: Story = {};
