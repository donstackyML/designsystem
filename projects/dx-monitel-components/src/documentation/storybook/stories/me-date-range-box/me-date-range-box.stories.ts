import {
  Meta,
  StoryObj,
  argsToTemplate,
  moduleMetadata,
} from '@storybook/angular';
import { DxDateRangeBoxModule, DxValidatorModule } from 'devextreme-angular';
import {
  MeDateRangeBoxDirective,
  MeLabelDirective,
} from '../../../../public-api';

export default {
  title: 'Components/Fields/DateRangeBox',
  decorators: [
    moduleMetadata({
      declarations: [MeDateRangeBoxDirective, MeLabelDirective],
      imports: [DxDateRangeBoxModule, DxValidatorModule],
    }),
  ],
  argTypes: {
    startDateLabel: {
      control: 'text',
      description: 'Метка поля ввода даты начала.',
      table: {
        category: 'Контент и управление контентом',
        type: { summary: 'string' },
        defaultValue: { summary: 'Start Date' },
      },
    },
    startDatePlaceholder: {
      control: 'text',
      description: 'Метка поля ввода даты начала.',
      table: {
        category: 'Контент и управление контентом',
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    startDate: {
      control: 'text',
      description: 'Дата начала.',
      table: {
        category: 'Контент и управление контентом',
        type: { summary: 'number | Date | string' },
        defaultValue: { summary: 'null' },
      },
    },
    endDateLabel: {
      control: 'text',
      description: 'Метка поля ввода даты окончания.',
      table: {
        category: 'Контент и управление контентом',
        type: { summary: 'string' },
        defaultValue: { summary: 'End Date' },
      },
    },
    endDatePlaceholder: {
      control: 'text',
      description: 'Метка поля ввода даты окончания.',
      table: {
        category: 'Контент и управление контентом',
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    endDate: {
      control: 'text',
      description: 'Дата окончания.',
      table: {
        category: 'Контент и управление контентом',
        type: { summary: 'number | Date | string' },
        defaultValue: { summary: 'null' },
      },
    },
    applyButtonText: {
      control: 'text',
      description: 'Текст на кнопке "Применить".',
      table: {
        category: 'Контент и управление контентом',
        type: { summary: 'string' },
        defaultValue: { summary: 'OK' },
      },
    },
    cancelButtonText: {
      control: 'text',
      description: 'Текст на кнопке "Отменить".',
      table: {
        category: 'Контент и управление контентом',
        type: { summary: 'string' },
        defaultValue: { summary: 'Cancel' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Определяет размер текстового поля.',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    width: {
      control: 'text',
      description: 'Ширина компонента.',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'string | number | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    height: {
      control: 'text',
      description: 'Высота компонента.',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'string | number | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    labelMode: {
      control: 'select',
      options: ['outside', 'static', 'floating', 'hidden'],
      description: 'Указывает, где будет размещаться лейбл.',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'string' },
        defaultValue: { summary: 'outside' },
      },
    },
    showClearButton: {
      control: 'boolean',
      description: 'Показывает кнопку для очистки поля.',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    multiView: {
      control: 'boolean',
      description: 'Показывает дату начала и дату окончания в одном поле.',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    acceptCustomValue: {
      control: 'boolean',
      description: 'Разрешает ввод пользовательских дат.',
      table: {
        category: 'Контент и управление контентом',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    applyValueMode: {
      control: 'select',
      options: ['instantly', 'useButtons'],
      description:
        'Определяет способ, которым конечный пользователь применяет выбранное значение.',
      table: {
        category: 'Контент и управление контентом',
        type: { summary: 'string' },
        defaultValue: { summary: 'instantly' },
      },
    },
    dateSerializationFormat: {
      control: 'text',
      description: 'Формат для сериализации дат.',
      table: {
        category: 'Контент и управление контентом',
        type: { summary: 'string | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    disableOutOfRangeSelection: {
      control: 'boolean',
      description:
        'Указывает, отключает ли компонент пользовательского интерфейса выбор даты до даты начала и после даты окончания.',
      table: {
        category: 'Контент и управление контентом',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    readOnly: {
      control: 'boolean',
      description: 'Определяет состояние только для чтения',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Отключает компонент и его элементы.',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    displayFormat: {
      control: 'text',
      description: 'Формат для отображения информации.',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'string | null' },
        defaultValue: { summary: 'null' },
      },
    },
    max: {
      control: 'text',
      description: 'Максимальная дата окончания.',
      table: {
        category: 'Валидация',
        type: { summary: 'number | Date | string | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    min: {
      control: 'text',
      description: 'Минимальная дата начала.',
      table: {
        category: 'Валидация',
        type: { summary: 'number | Date | string | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    showRequiredMark: {
      control: 'boolean',
      description: 'Определяет, является ли поле обязательным для заполнения.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isValid: {
      control: 'boolean',
      description: 'Проверяет валидность данных.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    invalidDateMessage: {
      control: 'text',
      description: 'Сообщение об ошибке для неверных дат.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Неверная дата.' },
      },
    },
    validationError: {
      control: 'text',
      description: 'Текст ошибки валидации.',
      table: {
        type: { summary: 'any' },
        defaultValue: { summary: 'null' },
      },
    },
    validationMessageMode: {
      control: 'select',
      options: ['auto', 'always'],
      description: 'Режим отображения сообщений об ошибках.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'auto' },
      },
    },
    validationMessagePosition: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Расположение сообщений об ошибках.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'bottom' },
      },
    },
    startDateOutOfRangeMessage: {
      control: 'text',
      description:
        'Указывает сообщение, отображаемое, если указанная дата начала позже максимального значения или раньше минимального значения.',
      table: {
        category: 'Валидация',
        type: { summary: 'string' },
        defaultValue: { summary: 'Start date is out of range' },
      },
    },
    invalidEndDateMessage: {
      control: 'text',
      description: 'Сообщение при неверной дате окончания.',
      table: {
        category: 'Валидация',
        type: { summary: 'string' },
        defaultValue: { summary: 'End value must be a date' },
      },
    },
    invalidStartDateMessage: {
      control: 'text',
      description: 'Сообщение при неверной дате начала.',
      table: {
        category: 'Валидация',
        type: { summary: 'string' },
        defaultValue: { summary: 'Start value must be a date' },
      },
    },
  },
  args: {
    size: 'medium',
    multiView: false,
    disabled: false,
    readOnly: false,
    showClearButton: false,
    acceptCustomValue: true,
    applyValueMode: 'instantly',
    applyButtonText: 'Применить',
    cancelButtonText: 'Отмена',
    dateSerializationFormat: 'yyyy-MM-dd',
    displayFormat: 'dd.MM.yyyy',
    startDate: null,
    startDateLabel: 'Начальная дата',
    endDate: null,
    endDateLabel: 'Конечная дата',
    max: '2025-12-31',
    min: '2025-01-01',
    startDatePlaceholder: 'Начальная дата',
    endDatePlaceholder: 'Конечная дата',
    showRequiredMark: false,
    isValid: true,
    validationMessageMode: 'auto',
    validationMessagePosition: 'auto',
    invalidEndDateMessage: 'Неверная дата окончания',
    invalidStartDateMessage: 'Неверная дата начала',
    startDateOutOfRangeMessage:
      'Начальная дата за пределами допустимых значений',
  },
  render: (args) => ({
    props: args,
    template: `
      <dx-date-range-box meDateRangeBox
        ${argsToTemplate(args)}
      >
        <dx-validator>
          <dxi-validation-rule
              type="required"
              message="Пожалуйста, заполните это обязательное поле"
          >
          </dxi-validation-rule>
        </dx-validator>
      </dx-date-range-box>
    `,
  }),
} satisfies Meta<DxDateRangeBoxModule | MeDateRangeBoxDirective>;

type Story = StoryObj<DxDateRangeBoxModule | MeDateRangeBoxDirective>;

export const Default: Story = {};

export const SizeSmall: Story = {
  args: {
    size: 'small',
  },
};

export const SizeMedium: Story = {
  args: {
    size: 'medium',
  },
};

export const SizeLarge: Story = {
  args: {
    size: 'large',
  },
};

export const LabelModeFloating: Story = {
  args: {
    labelMode: 'floating',
  },
};

export const LabelModeOutside: Story = {
  args: {
    labelMode: 'outside',
  },
};

export const LabelModeStatic: Story = {
  args: {
    labelMode: 'static',
  },
};

export const LabelModeHidden: Story = {
  args: {
    labelMode: 'hidden',
  },
};

export const WithLabelRow: Story = {
  args: {
    labelMode: 'hidden',
  },
  render: (args) => ({
    props: args,
    template: `
    <div
      meLabel
      labelDirection="row"
    >
      <span>Label</span>
      <dx-date-range-box
        meDateRangeBox
        ${argsToTemplate(args)}
      ></dx-date-range-box>
    </div>
    `,
  }),
};

export const WithLabelColumn: Story = {
  args: {
    labelMode: 'hidden',
  },
  render: (args) => ({
    props: args,
    template: `
		<div
      meLabel
		  labelDirection="column"
		>
      <span>Label</span>
      <dx-date-range-box
        meDateRangeBox
        ${argsToTemplate(args)}
      ></dx-date-range-box>
		</div>`,
  }),
};

export const StateDisabled: Story = {
  args: {
    disabled: true,
  },
};

export const StateReadOnly: Story = {
  args: {
    readOnly: true,
    startDate: '1/1/2025',
    endDate: '1/31/2025',
  },
};

export const StateDisabledAndReadOnly: Story = {
  args: {
    readOnly: true,
    disabled: true,
    startDate: '1/1/2025',
    endDate: '1/31/2025',
  },
};

export const WithRequiredMark: Story = {
  args: {
    showRequiredMark: true,
  },
};

export const ValidationInvalid: Story = {
  args: {
    isValid: false,
  },
};

export const WithMultiView: Story = {
  args: {
    multiView: true,
  },
};
