import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';

import { MeShiftSettingsComponent } from '../../../../../public-api';

const defaultShiftProperties = [
  { text: 'Месяцы', key: 'months', enabled: true, value: 12 },
  { text: 'Недели', key: 'weeks', enabled: true, value: 0 },
];

const minimalShiftProperty = {
  value: 0,
  selectedUnit: 'days',
  units: [
    { text: 'Секунды', value: 'seconds' },
    { text: 'Минуты', value: 'minutes' },
    { text: 'Часы', value: 'hours' },
    { text: 'Дни', value: 'days' },
    { text: 'Недели', value: 'weeks' },
    { text: 'Месяцы', value: 'months' },
  ],
};

export default {
  title: 'Components/TimeRange/TimeRangeParts/ShiftSettings',
  decorators: [
    moduleMetadata({
      imports: [MeShiftSettingsComponent],
    }),
  ],
  argTypes: {
    title: {
      control: 'text',
      description: 'Заголовок блока настроек сдвига',
      table: {
        category: 'Контент',
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    shiftType: {
      control: 'select',
      options: ['relative', 'absolute', 'mixed'],
      description: 'Тип сдвига',
      table: {
        category: 'Настройки',
        type: { summary: 'string' },
        defaultValue: { summary: 'mixed' },
      },
    },
    switchIsActive: {
      control: 'boolean',
      description: 'Активен ли относительный режим',
      table: {
        category: 'Состояние',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    absoluteDate: {
      control: 'date',
      description: 'Абсолютная дата',
      table: {
        category: 'Данные',
        type: { summary: 'Date | string | number | null' },
        defaultValue: { summary: 'null' },
      },
    },
    properties: {
      control: 'object',
      description: 'Свойства сдвига',
      table: {
        category: 'Данные',
        type: { summary: 'Array<TimeShiftProperty> | MinimalTimeShiftProperty | null' },
        defaultValue: { summary: 'null' },
      },
    },
    propertiesTitle: {
      control: 'text',
      description: 'Заголовок свойств',
      table: {
        category: 'Контент',
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    propertiesVariant: {
      control: 'select',
      options: ['full', 'minimal'],
      description: 'Вариант свойств',
      table: {
        category: 'Настройки',
        type: { summary: 'string' },
        defaultValue: { summary: 'full' },
      },
    },
    propertiesState: {
      control: 'select',
      options: ['default', 'disabled', 'readOnly'],
      description: 'Состояние свойств',
      table: {
        category: 'Состояние',
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    switchTitle: {
      control: 'text',
      description: 'Заголовок переключателя',
      table: {
        category: 'Контент',
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    switchEnabled: {
      control: 'boolean',
      description: 'Включен ли переключатель',
      table: {
        category: 'Состояние',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    settingsChange: {
      action: 'settingsChange',
      description: 'Изменение настроек',
      table: {
        category: 'События',
        type: { summary: 'EventEmitter<ShiftSettingsOutput>' },
      },
    },
    absoluteDateChanged: {
      action: 'absoluteDateChanged',
      description: 'Изменение абсолютной даты',
      table: {
        category: 'События',
        type: { summary: 'EventEmitter<Date | string | number | null>' },
      },
    },
    shiftPropertiesChanged: {
      action: 'shiftPropertiesChanged',
      description: 'Изменение свойств сдвига',
      table: {
        category: 'События',
        type: { summary: 'EventEmitter<Array<TimeShiftProperty> | MinimalTimeShiftProperty>' },
      },
    },
    switchValueChanged: {
      action: 'switchValueChanged',
      description: 'Изменение значения переключателя',
      table: {
        category: 'События',
        type: { summary: 'EventEmitter<boolean>' },
      },
    },
  },
  args: {
    title: 'Начало периода',
    shiftType: 'mixed',
    switchIsActive: true,
    absoluteDate: new Date(),
    properties: defaultShiftProperties,
    propertiesVariant: 'full',
    propertiesState: 'default',
    switchTitle: 'Относительно текущего времени',
    switchEnabled: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <me-shift-settings
        ${argsToTemplate(args)}
        (settingsChange)="settingsChange($event)"
        (absoluteDateChanged)="absoluteDateChanged($event)"
        (shiftPropertiesChanged)="shiftPropertiesChanged($event)"
        (switchValueChanged)="switchValueChanged($event)"
      ></me-shift-settings>
    `,
  }),
} satisfies Meta<MeShiftSettingsComponent>;

type Story = StoryObj<MeShiftSettingsComponent>;

export const Default: Story = {
  args: {},
};

export const CurrentMode: Story = {
  args: {
    switchIsActive: true,
    shiftType: 'current',
  },
};

export const AbsoluteMode: Story = {
  args: {
    switchIsActive: false,
    shiftType: 'absolute',
  },
};

export const MixedMode: Story = {
  args: {
    shiftType: 'mixed',
  },
};

export const MinimalProperties: Story = {
  args: {
    properties: minimalShiftProperty,
    propertiesVariant: 'minimal',
  },
};

export const DisabledProperties: Story = {
  args: {
    propertiesState: 'disabled',
  },
};

export const ReadOnlyProperties: Story = {
  args: {
    propertiesState: 'readOnly',
  },
};

export const WithoutSwitch: Story = {
  args: {
    switchEnabled: false,
  },
};

export const WithOnlyDates: Story = {
  args: {
    hasProperties: false,
    switchEnabled: false,
    title: null
  },
};
