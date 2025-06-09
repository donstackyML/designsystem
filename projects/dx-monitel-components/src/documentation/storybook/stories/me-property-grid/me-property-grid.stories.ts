import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  Meta,
  StoryObj,
  argsToTemplate,
  moduleMetadata,
} from '@storybook/angular';

import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxCheckBoxModule } from 'devextreme-angular/ui/check-box';
import { DxTagBoxModule } from 'devextreme-angular/ui/tag-box';
import { DxTextBoxModule } from 'devextreme-angular/ui/text-box';

import { MeIconsModule } from '@monitel/me-icons-registry';
import { action } from '@storybook/addon-actions';
import {
  DxColorBoxModule,
  DxDateBoxModule,
  DxNumberBoxModule,
  DxSelectBoxModule,
} from 'devextreme-angular';
import {
  MePropertyGridCellComponent,
  MePropertyGridComponent,
} from '../../../../lib/components';
import {
  MeCheckBoxModule,
  MeDateBoxModule,
  MeNumberBoxModule,
  MeSelectBoxModule,
  MeTagBoxModule,
  MeTextBoxModule,
  MeTooltipModule,
} from '../../../../lib/directives';

export default {
  title: 'Components/Property Grid/Property Grid',
  component: MePropertyGridComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        FormsModule,
        MePropertyGridComponent,
        MePropertyGridCellComponent,
        MeIconsModule,
        DxTextBoxModule,
        DxCheckBoxModule,
        DxTagBoxModule,
        DxButtonModule,
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
        MeTooltipModule
      ],
    }),
  ],
  argTypes: {
    gridTitle: {
      control: 'text',
      description: 'Заголовок грида свойств.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Свойства' },
      },
    },
    closeMode: {
      control: 'select',
      options: ['hide', 'remove'],
      description:
        'Определяет, как скрывается грид: "hide" — скрыть, "remove" — удалить из DOM.',
      table: {
        type: { summary: "'hide' | 'remove'" },
        defaultValue: { summary: 'hide' },
      },
    },
    isOpen: {
      control: 'boolean',
      description: 'Определяет, раскрыт ли грид.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    height: {
      control: 'text',
      description: 'Максимальная высота грида (например, "300px" или 300).',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '' },
      },
    },
    rightCellWidth: {
      control: { type: 'text' },
      description: 'Начальная ширина правой колонки в процентах.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '60%' },
      },
    },
    minLeftWidthPx: {
      control: { type: 'number', min: 10, step: 1 },
      description: 'Минимальная ширина левой колонки в пикселях при ресайзе.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '50' },
      },
    },
    minRightWidthPx: {
      control: { type: 'number', min: 10, step: 1 },
      description: 'Минимальная ширина правой колонки в пикселях при ресайзе.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '50' },
      },
    },
    dataSource: {
      control: false,
      description:
        'Массив данных для генерации строк (альтернатива content projection).',
      table: {
        type: { summary: 'Array<PropertyGridCell>' },
        defaultValue: { summary: '[]' },
      },
    },
  },
  args: {
    gridTitle: 'Параметры объекта',
    isOpen: true,
    height: '',
    rightCellWidth: `60%`,
    minLeftWidthPx: 50,
    minRightWidthPx: 50,
    resizable: true,
    closeMode: 'hide',
  },
} satisfies Meta<MePropertyGridComponent>;

type Story = StoryObj<MePropertyGridComponent>;

export const Default: Story = {
  render: (args) => ({
    props: {
      ...args,
      colorsSetting: [
        { id: 1, name: 'Красный' },
        { id: 2, name: 'Зеленый' },
        { id: 3, name: 'Синий' },
        { id: 4, name: 'Желтый' },
        { id: 5, name: 'Черный' },
      ],
      dotsSetting: [
        { id: 1, name: 'Круг' },
        { id: 2, name: 'Квадрат' },
        { id: 3, name: 'Треугольник' },
        { id: 4, name: 'Звезда' },
        { id: 5, name: 'Ромб' },
      ],
    },
    template: `
      <me-property-grid ${argsToTemplate(args)}>
        <me-property-grid-cell name="Имя объекта">
          <dx-text-box #rightCell meTextBox value="Сервер #1" stylingMode="filled" width="100%" placeholder="Введите имя"></dx-text-box>
        </me-property-grid-cell>

        <me-property-grid-cell name="Статус">
          <dx-select-box
            #rightCell
            meSelectBox
            [items]="['В сети', 'Не в сети', 'Обслуживание']"
            value="В сети"
            stylingMode="filled"
            width="100%"
            placeholder="Выберите статус"
           ></dx-select-box>
        </me-property-grid-cell>

        <me-property-grid-cell name="Количество ядер">
           <dx-number-box meNumberBox #rightCell [value]="8" [min]="1" [max]="64" [showSpinButtons]="true" stylingMode="filled" width="100%"></dx-number-box>
        </me-property-grid-cell>

        <me-property-grid-cell name="Активен">
           <div #rightCell style="display: flex; align-items: center; width: 100%;">
             <dx-check-box meCheckBox [value]="true" style="margin-right: auto;"></dx-check-box>
           </div>
        </me-property-grid-cell>

         <me-property-grid-cell name="Дата установки">
           <dx-date-box #rightCell meDateBox [value]="'2023-10-26'" stylingMode="filled" width="100%" placeholder="Выберите дату"></dx-date-box>
        </me-property-grid-cell>

         <me-property-grid-cell name="Только чтение" [value]="'Нельзя изменить'" [readOnly]="true">
        </me-property-grid-cell>

        <me-property-grid-cell name="Описание">
          <dx-text-box #rightCell meTextBox value="Описание объекта" stylingMode="filled" width="100%" placeholder="Введите описание"></dx-text-box>
        </me-property-grid-cell>

        <me-property-grid-cell name="Полное содержимое">
          <div #fullCell fullCell style="display: flex; flex-direction: column; gap: 10px;">
            <span>Это пример использования <strong>fullCell</strong>.</span>
            <dx-select-box
              meSelectBox
              [items]="colorsSetting"
              displayExpr="name"
              valueExpr="id"
              value="1"
              stylingMode="filled"
              width="100%"
              placeholder="Выберите цвет"
            ></dx-select-box>
          </div>
        </me-property-grid-cell>

        <me-property-grid-cell name="Точки на графике" [showAdditionalProperties]="true" [additionalPropertiesOpened]="true">
          <ng-container rightCellStartActions>
            <dx-check-box meCheckBox></dx-check-box>
          </ng-container>

          <ng-container #additionalProperties additionalProperties>
            <div class="me-grid-cell-row">
              <dx-select-box
                meSelectBox
                label="Цвет точки"
                labelMode="outside"
                size="small"
                displayExpr="name"
                valueExpr="id"
                [dataSource]="colorsSetting"
                width="100%"
              ></dx-select-box>

              <dx-select-box
                meSelectBox
                label="Вид точки"
                labelMode="outside"
                size="small"
                displayExpr="name"
                valueExpr="id"
                [dataSource]="dotsSetting"
                width="100%"
              ></dx-select-box>

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
        </me-property-grid-cell>

        <me-property-grid-cell name="Температура">
          <dx-number-box meNumberBox #rightCell [value]="22" [min]="-50" [max]="50" [step]="0.1" stylingMode="filled" width="100%" placeholder="Введите температуру"></dx-number-box>
        </me-property-grid-cell>

        <me-property-grid-cell name="Выбор времени">
          <dx-date-box #rightCell meDateBox [type]="'time'" stylingMode="filled" width="100%" placeholder="Выберите время"></dx-date-box>
        </me-property-grid-cell>

        <me-property-grid-cell name="Теги">
          <dx-tag-box
            #rightCell
            meTagBox
            [items]="['Тег1', 'Тег2', 'Тег3']"
            [value]="['Тег1']"
            stylingMode="filled"
            width="100%"
            [showClearButton]="true"
            [searchEnabled]="true"
          ></dx-tag-box>
        </me-property-grid-cell>
      </me-property-grid>
    `,
    styles: [
      `
      .additional-property-list {
        display: flex;
        width: 100%;
        gap: 20px;
      }
      `,
    ],
  }),
};

export const WithHeaderActions: Story = {
  args: {
    gridTitle: 'Настройки с действиями',
  },
  render: (args) => ({
    props: {
      ...args,
      onLeftClick: action('Left icon clicked'),
      onDeleteClick: action('Delete button clicked'),
      onRefreshClick: action('Refresh button clicked'),
    },
    template: `
       <me-property-grid ${argsToTemplate(args)}>
         <ng-container property-grid-header-left-actions>
          <me-icon
            name="settings_x20"
            meTooltip="Дополнительные настройки"
            tooltipSize="small"
            tooltipPosition="bottom"
            (click)="onLeftClick()"
          ></me-icon>
         </ng-container>

         <ng-container property-grid-header-right-actions>
          <button
            type="button"
            style="background:none; border:none; cursor:pointer; padding: 0 5px;"
            (click)="onDeleteClick()"
          >
              <me-icon name="delete_x20" style="color: var(--Icon-Secondary);"></me-icon>
            </button>
          <button
            type="button"
            style="background:none; border:none; cursor:pointer; padding: 0 5px;"
            (click)="onRefreshClick()"
          >
              <me-icon name="collapse_x20" style="color: var(--Icon-Secondary);"></me-icon>
            </button>
         </ng-container>

        <me-property-grid-cell name="Параметр 1" value="Значение 1"></me-property-grid-cell>
        <me-property-grid-cell name="Параметр 2" value="Значение 2"></me-property-grid-cell>
      </me-property-grid>
    `,
  }),
};

const sampleDataSource = [
  { name: 'ID', value: 101, readOnly: true, showRequiredMark: true },
  { name: 'Статус', value: 'Активен' },
  { name: 'Приоритет', value: 'Высокий' },
];

export const WithDataSource: Story = {
  args: {
    gridTitle: 'Данные из источника',
    dataSource: sampleDataSource,
  },
  render: (args) => ({
    props: args,
    template: `
      <me-property-grid ${argsToTemplate(args)}>
      </me-property-grid>
    `,
  }),
};

export const WithVariousInputs: Story = {
  name: 'With Various Inputs',
  args: {
    gridTitle: 'Разные типы полей',
  },
  render: (args) => ({
    props: {
      ...args,
      tags: ['UI', 'Backend'],
      selectedTags: ['UI'],
      statusOptions: ['Новый', 'В работе', 'Завершен'],
      selectedStatus: 'В работе',
      dateValue: new Date(),
      colorValue: '#FF5733',
    },
    template: `
      <me-property-grid ${argsToTemplate(args)}>
        <me-property-grid-cell name="Текстовое поле">
          <dx-text-box #rightCell meTextBox value="Пример текста" stylingMode="filled" width="100%"></dx-text-box>
        </me-property-grid-cell>

        <me-property-grid-cell name="Числовое поле">
           <dx-number-box #rightCell meNumberBox [value]="42" format="#0.0" [step]="0.5" stylingMode="filled" width="100%"></dx-number-box>
        </me-property-grid-cell>

        <me-property-grid-cell name="Выпадающий список">
          <dx-select-box
          #rightCell
            meSelectBox
            [items]="statusOptions"
            [value]="selectedStatus"
            stylingMode="filled"
            width="100%"
           ></dx-select-box>
        </me-property-grid-cell>

        <me-property-grid-cell name="Чекбокс" value="Включить опцию">
           <div rightCellStartActions style="display: flex; align-items: center; width: 100%;">
             <dx-check-box meCheckBox [value]="false" style="margin-right: auto;"></dx-check-box>
           </div>
        </me-property-grid-cell>

        <me-property-grid-cell name="Выбор даты">
           <dx-date-box #rightCell meDateBox [value]="dateValue" type="datetime" stylingMode="filled" width="100%"></dx-date-box>
        </me-property-grid-cell>

        <me-property-grid-cell name="Выбор тегов">
          <dx-tag-box
          #rightCell
            meTagBox
            [items]="tags"
            [value]="selectedTags"
            stylingMode="filled"
            width="100%"
            [showClearButton]="true"
            [searchEnabled]="true"
           ></dx-tag-box>
        </me-property-grid-cell>

        <me-property-grid-cell name="Выбор цвета">
           <dx-color-box #rightCell [value]="colorValue" stylingMode="filled" width="100%"></dx-color-box>
        </me-property-grid-cell>

      </me-property-grid>
    `,
  }),
};

export const WithFixedHeightAndScroll: Story = {
  args: {
    gridTitle: 'Много свойств',
    height: '200px',
  },
  render: (args) => ({
    props: args,
    template: `
      <me-property-grid ${argsToTemplate(args)}>
        ${Array.from(
          { length: 15 },
          (_, i) => `
          <me-property-grid-cell name="Свойство ${i + 1}" value="Значение ${
            i + 1
          }"></me-property-grid-cell>
        `
        ).join('')}
      </me-property-grid>
    `,
  }),
};

export const InitiallyClosed: Story = {
  args: {
    gridTitle: 'Скрытые параметры',
    isOpen: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <me-property-grid ${argsToTemplate(args)}>
        <me-property-grid-cell name="Секретный ключ" value="********"></me-property-grid-cell>
        <me-property-grid-cell name="Режим отладки" value="Выключен"></me-property-grid-cell>
      </me-property-grid>
    `,
  }),
};
