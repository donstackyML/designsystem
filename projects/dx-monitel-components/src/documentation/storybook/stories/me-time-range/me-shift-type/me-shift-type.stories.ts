import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';

import { defaultShiftTypes } from '../../../../../lib/components/me-time-range/ui/me-shift-type/me-shift-type.options';
import { MeShiftTypeComponent } from '../../../../../public-api';

export default {
  title: 'Components/TimeRange/TimeRangeParts/ShiftType',
  decorators: [
    moduleMetadata({
      imports: [MeShiftTypeComponent],
    }),
  ],
  argTypes: {
    valueExpr: {
      control: 'text',
      description: 'Свойство для определения значения',
      table: {
        category: 'Данные',
        type: { summary: 'string' },
        defaultValue: { summary: 'id' },
      },
    },
    displayExpr: {
      control: 'text',
      description: 'Свойство для отображения текста',
      table: {
        category: 'Данные',
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    shiftTypes: {
      control: 'object',
      description: 'Массив типов сдвига',
      table: {
        category: 'Данные',
        type: { summary: 'Array<{ id: string; text: string }>' },
        defaultValue: {
          summary: '[{ id: "current", text: "Относительно текущего времени" }]',
        },
      },
    },
    currentShiftType: {
      control: 'text',
      description: 'Текущее выбранное значение',
      table: {
        category: 'Состояние',
        type: { summary: 'string' },
        defaultValue: { summary: 'filters[0]?.id' },
      },
    },
    valueChange: {
      action: 'valueChange',
      description: 'Событие изменения выбранного значения',
      table: {
        category: 'События',
        type: { summary: 'EventEmitter<string>' },
      },
    },
  },
  args: {
    valueExpr: 'id',
    displayExpr: 'text',
    shiftTypes: [{ id: 'current', text: 'Относительно текущего времени' }],
    currentShiftType: 'current',
  },
  render: (args) => ({
    props: args,
    template: `
      <me-shift-type
        ${argsToTemplate(args)}
        (valueChange)="valueChange($event)"
      ></me-shift-type>
    `,
  }),
} satisfies Meta<MeShiftTypeComponent>;

type Story = StoryObj<MeShiftTypeComponent>;

export const Default: Story = {
  args: {},
};

export const WithMultipleOptions: Story = {
  args: {
    shiftTypes: defaultShiftTypes,
    currentShiftType: 'current',
  },
};

export const AbsoluteSelected: Story = {
  args: {
    shiftTypes: defaultShiftTypes,
    currentShiftType: 'absolute',
  },
};

export const CustomDisplayExpr: Story = {
  args: {
    shiftTypes: [
      { id: 'current', name: 'Текущее время' },
      { id: 'current', name: 'Относительное время' },
    ],
    displayExpr: 'name',
    currentShiftType: 'current',
  },
};
