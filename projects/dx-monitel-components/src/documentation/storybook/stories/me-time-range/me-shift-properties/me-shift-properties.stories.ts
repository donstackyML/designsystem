import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';

import { MeShiftPropertiesComponent } from '../../../../../public-api';
import { defaultFullTimeShiftUnits, defaultMinimalTimeShiftUnits } from '../../../../../lib/components/me-time-range/ui/me-shift-properties/default-shift-properties';
import { TimeShiftProperty, MinimalTimeShiftProperty } from '../../../../../lib/components/me-time-range/ui/me-shift-properties/me-shift-properties.model';


const customFullTimeProperties: TimeShiftProperty[] = [
  { text: 'Секунды', key: 'seconds', enabled: true, value: 30 },
  { text: 'Минуты', key: 'minutes', enabled: true, value: 15 },
  { text: 'Часы', key: 'hours', enabled: false, value: 0 },
  { text: 'Дни', key: 'days', enabled: false, value: 0 },
];

const customMinimalTimeProperty: MinimalTimeShiftProperty = {
  value: 5,
  selectedUnit: 'hours',
  units: defaultMinimalTimeShiftUnits,
};

export default {
  title: 'Components/TimeRange/TimeRangeParts/ShiftProperties',
  decorators: [
    moduleMetadata({
      imports: [MeShiftPropertiesComponent],
    }),
  ],
  argTypes: {
    title: {
      control: 'text',
      description: 'Заголовок компонента',
      table: {
        category: 'Контент',
        type: { summary: 'string' },
        defaultValue: { summary: 'Настройка сдвига' },
      },
    },
    variant: {
      control: 'select',
      options: ['full', 'minimal'],
      description: 'Вариант отображения свойств сдвига',
      table: {
        category: 'Внешний вид',
        type: { summary: 'string' },
        defaultValue: { summary: 'full' },
      },
    },
    state: {
      control: 'select',
      options: ['disabled', 'readOnly', 'default'],
      description: 'Состояние компонента',
      table: {
        category: 'Состояние',
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    properties: {
      control: 'object',
      description: 'Свойства временного сдвига',
      table: {
        category: 'Данные',
        type: { summary: 'Array<TimeShiftProperty> | MinimalTimeShiftProperty | null' },
        defaultValue: { summary: 'null' },
      },
    },
    shiftPropertiesChange: {
      action: 'shiftPropertiesChange',
      description: 'Событие изменения свойств сдвига',
      table: {
        category: 'События',
        type: { summary: 'EventEmitter<Array<TimeShiftProperty> | MinimalTimeShiftProperty>' },
      },
    },
  },
  args: {
    title: 'Настройка сдвига',
    variant: 'full',
    state: 'default',
    properties: null,
  },
  render: (args) => ({
    props: args,
    template: `
      <me-shift-properties
        ${argsToTemplate(args)}
        (shiftPropertiesChange)="shiftPropertiesChange($event)"
      ></me-shift-properties>
    `,
  }),
} satisfies Meta<MeShiftPropertiesComponent>;

type Story = StoryObj<MeShiftPropertiesComponent>;

export const Default: Story = {
  args: {},
};

export const FullVariant: Story = {
  args: {
    variant: 'full',
  },
};

export const MinimalVariant: Story = {
  args: {
    variant: 'minimal',
  },
};

export const WithCustomProperties: Story = {
  args: {
    properties: customFullTimeProperties,
  },
};

export const MinimalWithCustomProperties: Story = {
  args: {
    variant: 'minimal',
    properties: customMinimalTimeProperty,
  },
};

export const DisabledState: Story = {
  args: {
    state: 'disabled',
    properties: customFullTimeProperties,
  },
};

export const ReadOnlyState: Story = {
  args: {
    state: 'readOnly',
    properties: customFullTimeProperties,
  },
};

export const CustomTitle: Story = {
  args: {
    title: 'Смещение временного интервала',
  },
};