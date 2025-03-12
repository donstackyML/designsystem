import {
  Meta,
  StoryObj,
  argsToTemplate,
  moduleMetadata,
} from '@storybook/angular';
import { DxDateBoxComponent, DxValidatorModule } from 'devextreme-angular';
import { MeDateBoxDirective, MeLabelDirective } from '../../public-api';

export default {
  title: 'Components/Fields/DateBox',
  decorators: [
    moduleMetadata({
      imports: [DxValidatorModule],
      declarations: [MeDateBoxDirective, DxDateBoxComponent, , MeLabelDirective],
    }),
  ],
  argTypes: {
    label: {
      control: 'text',
      description: 'Текст, отображаемый в качестве лейбла.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Текст подсказки, отображаемый внутри поля.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Изменяет размер текстового поля.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    labelMode: {
      control: 'select',
      options: ['outside', 'static', 'floating', 'hidden'],
      description: 'Указывает, где будет размещаться лейбл.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'outside' },
      },
    },
    type: {
      control: 'select',
      options: ['date', 'datetime', 'time'],
      description: 'Тип значения для отображения.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'date' },
      },
    },
    showClearButton: {
      control: 'boolean',
      description: 'Показывает кнопку для очистки поля.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    readOnly: {
      control: 'boolean',
      description: 'Определяет состояние только для чтения',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Отключает компонент и его элементы.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    acceptCustomValue: {
      control: 'boolean',
      description: 'Разрешает ввод пользовательских дат.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    applyButtonText: {
      control: 'text',
      description: 'Текст на кнопке "Применить".',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'OK' },
      },
    },
    cancelButtonText: {
      control: 'text',
      description: 'Текст на кнопке "Отменить".',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Cancel' },
      },
    },
    dateOutOfRangeMessage: {
      control: 'text',
      description: 'Сообщение об ошибке для дат вне диапазона.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Дата вне диапазона.' },
      },
    },
    dateSerializationFormat: {
      control: 'text',
      description: 'Формат для сериализации дат.',
      table: {
        type: { summary: 'string | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    disabledDates: {
      control: 'text',
      description: 'Даты, которые нельзя выбрать.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    applyValueMode: {
      control: 'select',
      options: ['instantly', 'useButtons'],
      description: 'Способ применения выбранного значения.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'instantly' },
      },
    },
    displayFormat: {
      control: 'text',
      description: 'Формат для отображения информации.',
      table: {
        type: { summary: 'string | null' },
        defaultValue: { summary: 'null' },
      },
    },
    pickerType: {
      control: 'select',
      options: ['calendar', 'list', 'native', 'rollers'],
      description: 'Тип интерфейса для выбора даты.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'calendar' },
      },
    },
    showAnalogClock: {
      control: 'boolean',
      description: 'Показывать аналоговые часы при выборе дат.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
      options: ['auto', 'top', 'bottom', 'left', 'right'],
      description: 'Расположение сообщений об ошибках.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'auto' },
      },
    },
    width: {
      control: 'text',
      description: 'Ширина компонента.',
      table: {
        type: { summary: 'string | number | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    height: {
      control: 'text',
      description: 'Высота компонента.',
      table: {
        type: { summary: 'string | number | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    }
  },
  args: {
    size: 'medium',
    type: 'date',
    label: 'Label',
    placeholder: 'Select...',
    disabled: false,
    readOnly: false,
    pickerType: 'calendar',
    showAnalogClock: false,
    showClearButton: true,
    applyValueMode: 'useButtons',
    acceptCustomValue: true,
    applyButtonText: 'Выбрать',
    cancelButtonText: 'Отмена',
    dateOutOfRangeMessage: '',
    dateSerializationFormat: '',
    disabledDates: undefined,
    displayFormat: '',
    showRequiredMark: false,
    isValid: true,
    validationMessageMode: 'auto',
    invalidDateMessage: 'Value must be a date or time',
    validationError: null,
    validationMessagePosition: 'auto',
    width: undefined,
    height: undefined
  },
  render: (args) => ({
    props: args,
    template: `
    <dx-date-box meDateBox
      ${argsToTemplate(args)}
    >
      <dx-validator>
        <dxi-validation-rule
          type="required"
          message="Required"
        >
        </dxi-validation-rule>
      </dx-validator>
    </dx-date-box>
  `,
  }),
} satisfies Meta<DxDateBoxComponent | MeDateBoxDirective>;

type Story = StoryObj<DxDateBoxComponent | MeDateBoxDirective>

export const Default: Story = {};

export const SizeSmall: Story = {
  args: {
    size: 'small',
  },
};

export const SizeMedium: Story = {
  args: {
    size: 'medium'
  }
}

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
      <dx-date-box
        meDateBox
        ${argsToTemplate(args)}
      >
      </dx-date-box>
    </div>
    `,
  }),
};

export const WithLabelColumn: Story = {
  args: {
    labelMode: 'hidden'
  },
  render: (args) => ({
    props: args,
    template: `
		<div
      meLabel
		  labelDirection="column"
		>
      <span>Label</span>
      <dx-date-box
        meDateBox
        ${argsToTemplate(args)}
      >
      </dx-date-box>
		</div>`,
  }),
}

export const StateDisabled: Story = {
  args: {
    disabled: true
  },
};

export const StateReadOnly: Story = {
  args: {
    readOnly: true,
    value: '1/1/2024'
  },
};

export const WithRequiredMark: Story = {
  args: {
    showRequiredMark: true
  },
};

export const ValidationInvalid: Story = {
  args: {
    isValid: false
  },
};

export const StateDisabledAndReadOnly: Story = {
  args: {
    readOnly: true,
    disabled: true,
    value: '1/1/2024'
  },
};

export const PickerTypeCalendar: Story = {
  args: {
    pickerType: 'calendar',
  },
};

export const PickerTypeRollers: Story = {
  args: {
    pickerType: 'rollers',
  },
};

export const PickerTypeList: Story = {
  args: {
    pickerType: 'list',
    type: 'time'
  },
};

export const PickerTypeNative: Story = {
  args: {
    pickerType: 'native',
    acceptCustomValue: true
  },
};

export const DateAndTime: Story = {
  args: {
    pickerType: 'calendar',
    type: 'datetime',
    showAnalogClock: true
  },
};

export const WithDescription: Story = {
  render: (args) => ({
    props: {
      ...args,
      description: 'description',
    },
    template: `
    <dx-date-box meDateBox
      ${argsToTemplate(args)}
    >
      <dx-validator>
        <dxi-validation-rule
          type="required"
          message="Required"
        >
        </dxi-validation-rule>
      </dx-validator>
    </dx-date-box>
    <p class="me-input-description" *ngIf="description">{{ description }}</p>`,
  })
};
