import { MeIconsModule } from '@monitel/me-icons-registry';
import {
  Meta,
  StoryObj,
  argsToTemplate,
  moduleMetadata,
} from '@storybook/angular';
import {
  DxButtonModule,
  DxCheckBoxModule,
  DxNumberBoxModule,
  DxTextBoxModule,
} from 'devextreme-angular';
import {
  MePropertyGridCellComponent,
  MePropertyGridComponent,
} from '../../../../lib/components';
import {
  MeButtonModule,
  MeCheckBoxModule,
  MeNumberBoxModule,
  MeTextBoxModule,
} from '../../../../lib/directives';

export default {
  title: 'Components/Property Grid/Property Grid Cell',
  component: MePropertyGridCellComponent,
  decorators: [
    moduleMetadata({
      imports: [
        MePropertyGridComponent,
        MePropertyGridCellComponent,
        DxTextBoxModule,
        MeTextBoxModule,
        DxNumberBoxModule,
        MeNumberBoxModule,
        DxCheckBoxModule,
        MeCheckBoxModule,
        DxButtonModule,
        MeButtonModule,
        MeIconsModule,
      ],
    }),
  ],
  argTypes: {
    name: {
      control: 'text',
      description: 'Название свойства, отображаемое в левой колонке.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    value: {
      control: 'text',
      description: 'Значение свойства, отображаемое в правой колонке.',
      table: {
        type: { summary: 'any' },
        defaultValue: { summary: '' },
      },
    },
    showRequiredMark: {
      control: 'boolean',
      description: 'Отображает индикатор обязательного поля.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    readOnly: {
      control: 'boolean',
      description:
        'Делает значение только для чтения и добавляет кнопку копирования.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showAdditionalProperties: {
      control: 'boolean',
      description: 'Показывает кнопку для отображения дополнительных свойств.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    additionalPropertiesOpened: {
      control: 'boolean',
      description: 'Определяет, открыты ли дополнительные свойства.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    justifyLeftCell: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
      description: 'Выравнивание содержимого в левой части ячейки.',
      table: {
        type: { summary: '"left" | "center" | "right"' },
        defaultValue: { summary: 'left' },
      },
    },
    justifyRightCell: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
      description: 'Выравнивание содержимого в правой части ячейки.',
      table: {
        type: { summary: '"left" | "center" | "right"' },
        defaultValue: { summary: 'left' },
      },
    },
    alignAdditionalPropertiesCell: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
      description: 'Выравнивание содержимого секции дополнительных свойств.',
      table: {
        type: { summary: '"left" | "center" | "right"' },
        defaultValue: { summary: 'left' },
      },
    },
  },
  args: {
    name: 'Cell name',
    value: 'Cell value',
    justifyLeftCell: 'left',
    justifyRightCell: 'left',
    alignAdditionalPropertiesCell: 'left'
  },
} satisfies Meta<MePropertyGridCellComponent>;

type Story = StoryObj<MePropertyGridCellComponent>;

export const Default: Story = {};

export const StateReadOnly: Story = {
  args: {
    readOnly: true,
  },
};

export const WithRequiredMark: Story = {
  args: {
    showRequiredMark: true,
  },
};

export const WithRightCustomContent: Story = {
  render: (args) => ({
    props: args,
    template: `
    <me-property-grid-cell ${argsToTemplate(args)}>
      <ng-container #rightCell>
        <div class="me-grid-cell-row">
          <dx-text-box
            meTextBox
            label="Field 1"
            labelMode="outside"
            size="small"
            width="100%"
          ></dx-text-box>
          <dx-text-box
            meTextBox
            label="Field 2"
            labelMode="outside"
            size="small"
            width="100%"
          ></dx-text-box>
        </div>
        <div class="me-grid-cell-row">
          <dx-text-box
            meTextBox
            label="Field 3"
            labelMode="outside"
            size="small"
            width="100%"
          ></dx-text-box>
          <dx-text-box
            meTextBox
            label="Field 4"
            labelMode="outside"
            size="small"
            width="100%"
          ></dx-text-box>
        </div>
      </ng-container>
    </me-property-grid-cell>`,
  }),
};

export const WithLeftCellCustomContent: Story = {
  args: {
    name: undefined,
    showAdditionalProperties: true,
  },
  render: (args) => ({
    props: args,
    template: `
    <me-property-grid-cell ${argsToTemplate(args)}>
      <ng-container #leftCell leftCell>
        <div class="me-grid-cell-row">
          <dx-text-box
            meTextBox
            label="Кастомный контент в левой ячейке"
            labelMode="outside"
            size="small"
            width="100%"
          ></dx-text-box>
        </div>
      </ng-container>
    </me-property-grid-cell>`,
  }),
};

export const WithAdditionalProperties: Story = {
  args: {
    name: 'With additional properties',
    showAdditionalProperties: true,
  },
  render: (args) => ({
    props: args,
    template: `
    <me-property-grid-cell ${argsToTemplate(args)}>
          <ng-container rightCellStartActions>
            <dx-check-box meCheckBox></dx-check-box>
          </ng-container>
          <ng-container #additionalProperties additionalProperties>
            <div class="me-grid-cell-row">
              <dx-text-box
                meTextBox
                label="Field 1"
                labelMode="outside"
                size="small"
                width="100%"
              ></dx-text-box>

              <dx-text-box
                meTextBox
                label="Field 2"
                labelMode="outside"
                size="small"
                width="100%"
              ></dx-text-box>

              <dx-number-box
                meNumberBox
                label="Размер точки"
                labelMode="outside"
                size="small"
                [showSpinButtons]="true"
                stylingMode="filled"
                width="100%"
                [min]="1"
                [step]="1"
              ></dx-number-box>
            </div>
          </ng-container>
        </me-property-grid-cell>`,
  }),
};

export const WithRightCellCenterJustifying: Story = {
  args: {
    value: undefined,
    justifyRightCell: 'center',
  },
  render: (args) => ({
    props: args,
    template: `
    <me-property-grid-cell ${argsToTemplate(args)}>
      <ng-container #rightCell rightCell>
        <button
          type="button"
          class="cell-action-button"
        >
          <me-icon class="icon" name="docx_me_x20"></me-icon>
        </button>
      </ng-container>
    </me-property-grid-cell>
    `,
  }),
};

export const WithAdditionalPropertiesCenterJustifying: Story = {
  args: {
    name: 'With additional properties',
    showAdditionalProperties: true,
    additionalPropertiesOpened: true,
    alignAdditionalPropertiesCell: 'center'
  },
  render: (args) => ({
    props: args,
    template: `
    <me-property-grid-cell ${argsToTemplate(args)}>
          <ng-container rightCellStartActions>
            <dx-check-box meCheckBox></dx-check-box>
          </ng-container>
          <ng-container #additionalProperties additionalProperties>
            <div>
              <dx-text-box
                meTextBox
                label="Field 1"
                labelMode="outside"
                size="small"
              ></dx-text-box>
            </div>
          </ng-container>
        </me-property-grid-cell>`,
  }),
};

export const WithRightCellStartActions: Story = {
  args: {
    value: undefined,
  },
  render: (args) => ({
    props: args,
    template: `
    <me-property-grid-cell ${argsToTemplate(args)}>
      <ng-container rightCellStartActions>
        <button
          type="button"
          class="cell-action-button"
        >
          <me-icon class="icon" name="docx_me_x20"></me-icon>
        </button>
      </ng-container>
    </me-property-grid-cell>
    `,
  }),
};

export const WithRightCellEndActions: Story = {
  args: {
    value: undefined,
  },
  render: (args) => ({
    props: args,
    template: `
    <me-property-grid-cell ${argsToTemplate(args)}>
      <ng-container rightCellEndActions>
        <button
          type="button"
          class="cell-action-button"
        >
          <me-icon class="icon" name="delete_x20"></me-icon>
        </button>
        <button
          type="button"
          class="cell-action-button"
        >
          <me-icon class="icon" name="upload_x20"></me-icon>
        </button>
      </ng-container>
    </me-property-grid-cell>
    `,
  }),
};

export const WithRightCellStartAndEndActions: Story = {
  render: (args) => ({
    props: args,
    template: `
    <me-property-grid-cell ${argsToTemplate(args)}>
      <ng-container rightCellStartActions>
        <button
          type="button"
          class="cell-action-button"
        >
          <me-icon class="icon" name="docx_me_x20"></me-icon>
        </button>
      </ng-container>
      <ng-container rightCellEndActions>
        <button
          type="button"
          class="cell-action-button"
        >
          <me-icon class="icon" name="delete_x20"></me-icon>
        </button>
        <button
          type="button"
          class="cell-action-button"
        >
          <me-icon class="icon" name="upload_x20"></me-icon>
        </button>
      </ng-container>
    </me-property-grid-cell>
    `,
  }),
};
