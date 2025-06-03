import { Component, OnDestroy, OnInit } from '@angular/core';

import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DxButtonModule } from 'devextreme-angular';
import { MeTimeRangeComponent, defaultMinimalTimeShiftProperty, defaultStepSettings, defaultTimeSteps, type TimeRangeConfig, type TimeShiftChangedOutput } from '../../../../../lib/components';
import { MeButtonModule } from '../../../../../lib/directives';
import { defaultTimeRangeConfig, smallTimeRangeConfig } from './me-time-range-mock-data';

@Component({
  selector: 'me-time-range-popup-demo',
  template: `
      <dx-button
        id="buttonId"
        meButton
        (click)="togglePopup()"
        text="Открыть настройки времени"
      >
      </dx-button>
      <me-time-range
        [isPopup]="true"
        [popupIsVisible]="popupVisible"
        [popupPosition]="popupPosition"
        [popupWidth]="'600px'"
        [popupHeight]="'auto'"
        [title]="'Настройка интервала'"
        [showTitle]="true"
        [hasHeaderCloseButton]="true"
        [hasFooterCancelButton]="false"
        [settingsBlocks]="['quickFilter', 'shiftSettings', 'steps', 'result']"
        [defaultSettings]="defaultSettings"
        [settings]="settings"
        (closed)="onClosed()"
        (popupOnHidden)="onPopupHidden()"
      ></me-time-range>
  `,
})
class TimeRangePopupDemoComponent {
  popupVisible = false;
  popupPosition = {
    at: 'left bottom',
    my: 'left top',
    of: '#buttonId',
    offset: {
      y: 6,
    },
  };
  defaultSettings: Partial<TimeRangeConfig> = defaultTimeRangeConfig;
  settings: Partial<TimeRangeConfig> = defaultTimeRangeConfig;

  togglePopup(): void {
    this.popupVisible = !this.popupVisible;
  }

  onClosed(): void {
    this.popupVisible = false;
  }

  onPopupHidden(): void {
    this.popupVisible = false;
  }
}

const meta = {
  title: 'Components/TimeRange/FullTimeRange',
  component: MeTimeRangeComponent,
  decorators: [
    moduleMetadata({
      imports: [DxButtonModule, MeButtonModule],
      declarations: [TimeRangePopupDemoComponent],
    }),
  ],
  argTypes: {
    settingsBlocks: {
      control: 'object',
      description: 'Блоки настроек для отображения в компоненте. Возможные значения: "quickFilter", "shiftSettings", "steps", "result".',
      table: {
        category: 'Конфигурация',
        type: { summary: 'string[]' },
        defaultValue: { summary: '[]' },
      },
    },
    defaultSettings: {
      control: 'object',
      description: 'Настройки по умолчанию для временного диапазона. Используются при сбросе настроек.',
      table: {
        category: 'Конфигурация',
        type: { summary: 'TimeRangeConfig' },
        defaultValue: { summary: '{}' },
      },
    },
    settings: {
      control: 'object',
      description: 'Текущие настройки временного диапазона.',
      table: {
        category: 'Конфигурация',
        type: { summary: 'TimeRangeConfig' },
        defaultValue: { summary: '{}' },
      },
    },
    isPopup: {
      control: 'boolean',
      description: 'Использовать компонент в режиме всплывающего окна.',
      table: {
        category: 'Отображение',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    popupIsVisible: {
      control: 'boolean',
      description: 'Видимость всплывающего окна. Работает только при isPopup=true.',
      table: {
        category: 'Отображение',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    popupWidth: {
      control: 'text',
      description: 'Ширина всплывающего окна. Может быть числом или строкой с единицами измерения.',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'number | string' },
        defaultValue: { summary: '600px' },
      },
    },
    popupHeight: {
      control: 'text',
      description: 'Высота всплывающего окна. Может быть числом или строкой с единицами измерения.',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'number | string' },
        defaultValue: { summary: 'auto' },
      },
    },
    showTitle: {
      control: 'boolean',
      description: 'Показывать заголовок компонента.',
      table: {
        category: 'Отображение',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    title: {
      control: 'text',
      description: 'Текст заголовка компонента.',
      table: {
        category: 'Отображение',
        type: { summary: 'string' },
        defaultValue: { summary: 'Настройка временного диапазона' },
      },
    },
    hasHeaderCloseButton: {
      control: 'boolean',
      description: 'Показывать кнопку закрытия в заголовке компонента.',
      table: {
        category: 'Отображение',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    hasFooterCancelButton: {
      control: 'boolean',
      description: 'Показывать кнопку отмены в футере компонента.',
      table: {
        category: 'Отображение',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    changesApplyMode: {
      control: { type: 'select', options: ['onChange', 'onApply'] },
      description: 'Режим применения изменений: "onChange" - при каждом изменении, "onApply" - только при нажатии кнопки "Применить".',
      table: {
        category: 'Поведение',
        type: { summary: 'string' },
        defaultValue: { summary: 'onChange' },
      },
    },
    disableApplyButton: {
      control: 'boolean',
      description: 'Отключить кнопку применения настроек.',
      table: {
        category: 'Поведение',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disableResetButton: {
      control: 'boolean',
      description: 'Отключить кнопку сброса настроек.',
      table: {
        category: 'Поведение',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    intervalTime: {
      control: 'number',
      description: 'Интервал автоматического обновления в миллисекундах.',
      table: {
        category: 'Поведение',
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    timeRangeApplied: {
      action: 'timeRangeApplied',
      description: 'Событие, возникающее при применении временного диапазона.',
      table: {
        category: 'События',
        type: { summary: 'EventEmitter<TimeRangeConfig>' },
      },
    },
    settingsChanged: {
      action: 'settingsChanged',
      description: 'Событие, возникающее при изменении настроек временного диапазона.',
      table: {
        category: 'События',
        type: { summary: 'EventEmitter<TimeRangeConfig>' },
      },
    },
    timeRangeReset: {
      action: 'timeRangeReset',
      description: 'Событие, возникающее при сбросе временного диапазона.',
      table: {
        category: 'События',
        type: { summary: 'EventEmitter<void>' },
      },
    },
    timeShiftChanged: {
      action: 'timeShiftChanged',
      description: 'Событие, возникающее при изменении сдвига времени.',
      table: {
        category: 'События',
        type: { summary: 'EventEmitter<TimeRangeConfig>' },
      },
    },
    closed: {
      action: 'closed',
      description: 'Событие, возникающее при закрытии компонента.',
      table: {
        category: 'События',
        type: { summary: 'EventEmitter<void>' },
      },
    },
    popupOnHidden: {
      action: 'popupOnHidden',
      description: 'Событие, возникающее при скрытии всплывающего окна.',
      table: {
        category: 'События',
        type: { summary: 'EventEmitter<any>' },
      },
    },
  },
  args: {
    settingsBlocks: ['quickFilter', 'shiftSettings', 'steps', 'result'],
    defaultSettings: defaultTimeRangeConfig,
    settings: defaultTimeRangeConfig,
    isPopup: false,
    showTitle: true,
    title: 'Настройка временного диапазона',
    hasHeaderCloseButton: false,
    hasFooterCancelButton: false,
    changesApplyMode: 'onApply',
  },
} satisfies Meta<MeTimeRangeComponent>;

export default meta;

type Story = StoryObj<MeTimeRangeComponent>;

export const Default: Story = {
  args: {
    settingsBlocks: ['quickFilter', 'shiftSettings', 'steps', 'result'],
    defaultSettings: defaultTimeRangeConfig,
    settings: defaultTimeRangeConfig,
    isPopup: false,
    showTitle: true,
    title: 'Настройка временного диапазона',
    hasHeaderCloseButton: false,
    hasFooterCancelButton: false,
    changesApplyMode: 'onApply',
  },
};

export const PopupWithButton: Story = {
  render: () => ({
    template: `<me-time-range-popup-demo></me-time-range-popup-demo>`,
  }),
};

export const WithOnlyAbsoluteTime: Story = {
  args: {
    settingsBlocks: ['shiftSettings'],
    settings: {
      absoluteDate: {
        start: new Date(),
        end: new Date(),
      },
      startShift: null,
      endShift: null
    },
    showTitle: true,
    title: 'Интервал',
    hasHeaderCloseButton: true,
    hasFooterCancelButton: true,
    changesApplyMode: 'onChange',
  },
};


export const WithShiftSettingsStepsAndResult: Story = {
  args: {
    settingsBlocks: ['shiftSettings', 'steps', 'result'],
    settings: {
      absoluteDate: {
        start: new Date(),
        end: new Date(),
      },
      startShift: {
        type: 'current',
        switchIsActive: true,
        switchEnabled: true,
        properties: defaultMinimalTimeShiftProperty
      },
      endShift: {
        type: 'current',
        switchIsActive: true,
        switchEnabled: true,
        properties: defaultMinimalTimeShiftProperty
      },
      step: defaultStepSettings,
      update: null
    },
    showTitle: true,
    title: 'Фильтрация по времени',
    hasHeaderCloseButton: true,
    hasFooterCancelButton: true,
    changesApplyMode: 'onApply',
  },
};

export const WithQuickFilterShiftTypeShiftSettingsStepsAndResult: Story = {
  args: {
    settingsBlocks: ['quickFilter', 'shiftType', 'shiftSettings', 'steps', 'result'],
    settings: {
      absoluteDate: {
        start: new Date(),
        end: new Date(),
      },
      startShift: {
        properties: defaultMinimalTimeShiftProperty
      },
      endShift: {
        properties: defaultMinimalTimeShiftProperty
      },
      step: defaultStepSettings,
      shiftType: 'current',
      update: null
    },
    showTitle: true,
    title: 'Фильтрация по времени по времени',
    hasHeaderCloseButton: true,
    hasFooterCancelButton: true,
    changesApplyMode: 'onApply',
  },
};

export const WithShiftTypeAndDataBox: Story = {
  args: {
    settingsBlocks: ['shiftType', 'shiftSettings'],
    defaultSettings: smallTimeRangeConfig,
    settings: { ...smallTimeRangeConfig, shiftType: 'current'},
    isPopup: false,
    showTitle: true,
    title: 'Настройка временного диапазона',
    hasHeaderCloseButton: false,
    hasFooterCancelButton: false,
    changesApplyMode: 'onChange',
  },
};

export const WithOnlyFilters: Story = {
  args: {
    settingsBlocks: ['shiftSettings'],
  },
};

export const WithQuickFiltersAndResult: Story = {
  args: {
    settingsBlocks: ['quickFilter', 'result'],
  },
};
