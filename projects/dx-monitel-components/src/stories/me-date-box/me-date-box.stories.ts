import { DxDateBoxModule, DxValidatorModule } from 'devextreme-angular';
import {
  argsToTemplate,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { MeDateBoxDirective, MeLabelDirective } from '../../public-api';

export default {
  title: 'Components/DateBox(RC)',
  decorators: [
    moduleMetadata({
      declarations: [MeDateBoxDirective, MeLabelDirective],
      imports: [DxDateBoxModule, DxValidatorModule],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    type: {
      control: 'select',
      options: ['date', 'datetime', 'time'],
      description: 'Формат, используемый для отображения информации.',
    },
    acceptCustomValue: {
      control: 'boolean',
      description: 'Позволяет пользователю ввести дату вручную.',
    },
    applyButtonText: {
      control: 'text',
      description: 'Надпись на кнопке "Применить".',
    },
    cancelButtonText: {
      control: 'text',
      description: 'Надпись на кнопке "Отменить".',
    },
    dateOutOfRangeMessage: {
      control: 'text',
      description:
        'Сообщение об ошибке при выборе даты за пределами диапазона.',
    },
    dateSerializationFormat: {
      control: 'text',
      description:
        'Формат сериализации даты. `yyyy-MM-dd` - Дата. `yyyy-MM-ddTHH:mm:ss` Локальная дата и время. `yyyy-MM-ddTHH:mm:ssZ` Дата и время в UTC. `yyyy-MM-ddTHH:mm:ssx`, `yyyy-MM-ddTHH:mm:ssxx`, `yyyy-MM-ddTHH:mm:ssxxx` Дата и время с таймзоной.',
    },
    disabledDates: {
      control: 'text',
      description:
        'Указывает даты, которые пользователи не могут выбрать. Применяется, только если выбран параметр "календарь".',
    },
    invalidDateMessage: {
      control: 'text',
      description: 'Сообщение об ошибке при неверной дате.',
    },
    applyValueMode: {
      control: 'select',
      options: ['instantly', 'useButtons'],
      description:
        'Определяет способ, которым конечный пользователь применяет выбранное значение.',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключает `DateBox` и его элементы.',
    },
    displayFormat: {
      control: 'text',
      description: 'Формат, используемый для отображения информации.',
    },
    label: {
      control: 'text',
      description: 'Текст метки',
    },
    labelMode: {
      control: 'select',
      options: ['static', 'floating', 'hidden', 'outside'],
      description: 'Режим отображения метки',
    },
    placeholder: {
      control: 'text',
      description: 'Подсказка.',
    },
    pickerType: {
      control: 'select',
      options: ['calendar', 'list', 'native', 'rollers'],
      description: 'Режим отображения выбора даты',
    },
    readOnly: {
      control: 'boolean',
      description: 'Определяет состояние только для чтения.',
    },
    showAnalogClock: {
      control: 'boolean',
      description:
        'Указывает, следует ли отображать аналоговые часы в средстве выбора значений. Применяется, только если type равен "datetime", а pickerType равен "calendar".',
    },
    showClearButton: {
      control: 'boolean',
      description: 'Показ кнопки очистки.',
    },
    validationMessageMode: {
      control: 'select',
      options: ['auto', 'always'],
      description: 'Режим отображения сообщения об ошибке.',
    },
    validationMessagePosition: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Позиция отображения сообщения об ошибке.',
    },
    description: {
      control: 'text',
      description: 'Описание для компонента',
    },
  },
  args: {
    size: 'medium',
    type: 'date',
    label: 'label',
    labelMode: 'outside',
    placeholder: 'Select...',
    disabled: false,
    readOnly: false,
    pickerType: 'calendar',
    showAnalogClock: false,
    showClearButton: true,
    applyValueMode: 'useButtons',
    acceptCustomValue: false,
    applyButtonText: 'Выбрать',
    cancelButtonText: 'Отмена',
    dateOutOfRangeMessage: '',
    dateSerializationFormat: '',
    disabledDates: '',
    displayFormat: '',
    validationMessageMode: 'auto',
    validationMessagePosition: 'bottom',
    description: 'description',
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
    <p class='autocomplete-box-desc' *ngIf="description">{{ description }}</p>`,
  }),
} as Meta;

export const Default: StoryObj = {};

export const WithLabelRow: StoryObj = {
  args: {
    ...Default.args,
    labelMode: 'hidden',
    description: 'description',
  },
  render: (args) => ({
    props: args,
    template: `
    <div meLabel
      labelDirection="row"
      width="250px">
      <span>Label*</span>
      <dx-date-box meDateBox
        ${argsToTemplate(args)}
      >
      </dx-date-box>
    </div>
    <p class='autocomplete-box-desc' *ngIf="description">{{ description }}</p>
    `,
  }),
};

export const WithDatePicker: StoryObj = {
  args: {
    ...Default.args,
    description: 'description',
  },
  render: (args) => ({
    props: args,
    template: `
    <dx-date-box meDateBox
      pickerType="rollers"
      ${argsToTemplate(args)}
    >
    </dx-date-box>
    <p class='autocomplete-box-desc' *ngIf="description">{{ description }}</p>
    `,
  }),
};
