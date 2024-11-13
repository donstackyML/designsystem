import {
  Meta,
  StoryObj,
  argsToTemplate,
  moduleMetadata,
} from '@storybook/angular';
import { MeDateRangeBoxDirective, MeLabelDirective } from '../../public-api';
import { DxDateRangeBoxModule, DxValidatorModule } from 'devextreme-angular';

export default {
  title: 'Components/DateRangeBox(RC)',
  decorators: [
    moduleMetadata({
      declarations: [MeDateRangeBoxDirective, MeLabelDirective],
      imports: [DxDateRangeBoxModule, DxValidatorModule],
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
        'Формат сериализации даты. `yyyy-MM-dd` - Дата. `yyyy-MM-ddTHH:mm:ss` Локальная дата и время. `yyyy-MM-ddTHH:mm:ssZ` Дата и время в UTC. `yyyy-MM-ddTHH:mm:ssx`, `yyyy-MM-ddTHH:mm:ssxx`, `yyyy-MM-ddTHH:mm:ssxxx` Дата и время с таймзоной.',
    },
    disableOutOfRangeSelection: {
      control: 'boolean',
      description:
        'Указывает, отключает ли компонент пользовательского интерфейса выбор даты до даты начала и после даты окончания.',
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
    endDate: {
      control: 'text',
      description: 'Дата окончания.',
      table: {
        type: { summary: 'number | Date | string' },
        defaultValue: { summary: 'null' },
      },
    },
    endDateLabel: {
      control: 'text',
      description: 'Задает метку поля ввода даты окончания.',
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
  },
  args: {
    size: 'medium',
  },
  render: (args) => ({
    props: args,
    template: `
			<dx-date-range-box meDateRangeBox
				${argsToTemplate(args)}
			>
			</dx-date-range-box>
		`,
  }),
} as Meta;

export const Default: StoryObj = {};
