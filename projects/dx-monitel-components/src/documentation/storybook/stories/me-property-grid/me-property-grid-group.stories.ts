import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  Meta,
  StoryObj,
  argsToTemplate,
  moduleMetadata,
} from '@storybook/angular';

import {
  DxCheckBoxModule,
  DxColorBoxModule,
  DxDateBoxModule,
  DxNumberBoxModule,
  DxSelectBoxModule,
  DxTagBoxModule,
  DxTextBoxModule,
} from 'devextreme-angular';

import {
  MePropertyGridCellComponent,
  MePropertyGridComponent,
  MePropertyGridGroupComponent,
} from '../../../../lib/components';
import {
  MeCheckBoxModule,
  MeDateBoxModule,
  MeNumberBoxModule,
  MeSelectBoxModule,
  MeTagBoxModule,
  MeTextBoxModule,
} from '../../../../lib/directives';

const getDefaultPropertyGridCells = () => `
  <me-property-grid-cell name="Имя объекта">
    <dx-text-box #rightCell size="small" meTextBox value="Сервер #1" stylingMode="filled" width="100%"></dx-text-box>
  </me-property-grid-cell>
  <me-property-grid-cell name="Статус">
    <dx-select-box
      meSelectBox
      size="small"
      #rightCell
      [items]="['В сети', 'Не в сети']"
      value="В сети"
      stylingMode="filled"
      width="100%"
     ></dx-select-box>
  </me-property-grid-cell>
  <me-property-grid-cell name="Активен">
     <div #rightCell style="display: flex; align-items: center; width: 100%;">
       <dx-check-box meCheckBox [value]="true" style="margin-right: auto;"></dx-check-box>
     </div>
  </me-property-grid-cell>
  <me-property-grid-cell name="Только чтение" [value]="'Нельзя изменить'" [readOnly]="true"></me-property-grid-cell>
`;

export default {
  title: 'Components/Property Grid/Property Grid Group',
  component: MePropertyGridGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        FormsModule,
        MePropertyGridGroupComponent,
        MePropertyGridComponent,
        MePropertyGridCellComponent,
        DxTextBoxModule,
        DxCheckBoxModule,
        DxTagBoxModule,
        DxSelectBoxModule,
        DxNumberBoxModule,
        DxDateBoxModule,
        DxColorBoxModule,
        MeTextBoxModule,
        MeSelectBoxModule,
        MeCheckBoxModule,
        MeTagBoxModule,
        MeNumberBoxModule,
        MeDateBoxModule,
      ],
    }),
  ],
  argTypes: {
    height: {
      control: 'text',
      description:
        'Высота контейнера группы. При переполнении появляется скролл. Например: "400px", "50vh".',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    gap: {
      control: 'text',
      description: 'Отступ между дочерними me-property-grid компонентами.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '8px' },
      },
    },
    synchronizeColumnWidths: {
      control: 'boolean',
      description:
        'Синхронизирует ширину столбцов всех me-property-grid внутри группы. Если включено, изменение ширины столбцов одного грида применится ко всем гридам в группе.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    height: undefined,
    gap: '8px',
    synchronizeColumnWidths: false,
  },
} satisfies Meta<MePropertyGridGroupComponent>;

type Story = StoryObj<MePropertyGridGroupComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <me-property-grid-group ${argsToTemplate(args)}>
        <me-property-grid gridTitle="Параметры объекта 1" [isOpen]="true" [resizable]="true">
          ${getDefaultPropertyGridCells()}
        </me-property-grid>
        <me-property-grid gridTitle="Параметры объекта 2" [isOpen]="true" [resizable]="true">
          ${getDefaultPropertyGridCells()}
        </me-property-grid>
        <me-property-grid gridTitle="Скрытые параметры" [isOpen]="false" [resizable]="true">
          ${getDefaultPropertyGridCells()}
        </me-property-grid>
        <me-property-grid gridTitle="Дополнительные параметры" [isOpen]="true" [resizable]="true">
          <me-property-grid-cell name="Версия ПО" value="1.2.3"></me-property-grid-cell>
          <me-property-grid-cell name="IP Адрес" value="192.168.1.1" [readOnly]="true"></me-property-grid-cell>
        </me-property-grid>
      </me-property-grid-group>
    `,
  }),
};

export const WithSynchronizedColumnWidths: Story = {
  args: {
    synchronizeColumnWidths: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <me-property-grid-group ${argsToTemplate(args)}>
        <me-property-grid gridTitle="Параметры объекта 1" [isOpen]="true" [resizable]="true">
          ${getDefaultPropertyGridCells()}
        </me-property-grid>
        <me-property-grid gridTitle="Параметры объекта 2" [isOpen]="true" [resizable]="true">
          ${getDefaultPropertyGridCells()}
        </me-property-grid>
        <me-property-grid gridTitle="Дополнительные параметры" [isOpen]="true" [resizable]="true">
          <me-property-grid-cell name="Версия ПО" value="1.2.3"></me-property-grid-cell>
          <me-property-grid-cell name="IP Адрес" value="192.168.1.1" [readOnly]="true"></me-property-grid-cell>
        </me-property-grid>
      </me-property-grid-group>
    `,
  }),
};
