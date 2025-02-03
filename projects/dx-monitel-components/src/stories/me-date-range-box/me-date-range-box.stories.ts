import {
  Meta,
  StoryObj,
  argsToTemplate,
  moduleMetadata,
} from '@storybook/angular';
import { DxDateRangeBoxModule, DxValidatorModule } from 'devextreme-angular';
import { MeDateRangeBoxDirective, MeLabelDirective } from '../../public-api';

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
    acceptCustomValue: {
      control: 'boolean',
      description: 'Позволяет пользователю ввести дату вручную.',
    },
    applyButtonText: {
      control: 'text',
      description: 'Надпись на кнопке "Применить".',
    },
    applyValueMode: {
      control: 'select',
      options: ['instantly', 'useButtons'],
      description:
        'Определяет способ, которым конечный пользователь применяет выбранное значение.',
    },
    cancelButtonText: {
      control: 'text',
      description: 'Надпись на кнопке "Отменить".',
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
    endDatePlaceholder: {
      control: 'text',
      description: 'Задает метку поля ввода даты окончания.',
    },
    invalidEndDateMessage: {
      control: 'text',
      description: 'Сообщение при неверной дате окончания.',
    },
    invalidStartDateMessage: {
      control: 'text',
      description: 'Сообщение при неверной дате начала.',
    },
    labelMode: {
      control: 'select',
      options: ['static', 'floating', 'hidden', 'outside'],
      description: 'Режим отображения метки',
    },
    max: {
      control: 'text',
      description: 'Максимальная дата окончания.',
      table: {
        type: { summary: 'number | Date | string' },
        defaultValue: { summary: 'null' },
      },
    },
    min: {
      control: 'text',
      description: 'Минимальная дата начала.',
      table: {
        type: { summary: 'number | Date | string' },
        defaultValue: { summary: 'null' },
      },
    },
    multiView: {
      control: 'boolean',
      description: 'Показывает дату начала и дату окончания в одном поле.',
    },
    readOnly: {
      control: 'boolean',
      description: 'Определяет состояние только для чтения.',
    },
    showClearButton: {
      control: 'boolean',
      description: 'Показ кнопки очистки.',
      defaultValue: false,
    },
    startDate: {
      control: 'text',
      description: 'Дата начала.',
      table: {
        type: { summary: 'number | Date | string' },
        defaultValue: { summary: 'null' },
      },
    },
    startDateLabel: {
      control: 'text',
      description: 'Задает метку поля ввода даты начала.',
    },
    startDateOutOfRangeMessage: {
      control: 'text',
      description:
        'Указывает сообщение, отображаемое, если указанная дата начала позже максимального значения или раньше минимального значения.',
      defaultValue: 'Start date is out of range',
    },
    startDatePlaceholder: {
      control: 'text',
      description: 'Задает метку поля ввода даты начала.',
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
    multiView: false,
    disabled: false,
    readOnly: false,
    showClearButton: false,
    acceptCustomValue: false,
    applyValueMode: 'instantly',
    applyButtonText: 'Применить',
    cancelButtonText: 'Отмена',
    validationMessageMode: 'auto',
    validationMessagePosition: 'bottom',
    dateSerializationFormat: 'yyyy-MM-dd',
    displayFormat: 'dd.MM.yyyy',
    startDate: null,
    startDateLabel: 'Начальная дата*',
    endDate: null,
    endDateLabel: 'Конечная дата*',
    max: '',
    min: '',
    invalidEndDateMessage: 'Неверная дата окончания',
    invalidStartDateMessage: 'Неверная дата начала',
    startDateOutOfRangeMessage:
      'Начальная дата за пределами допустимых значений',
    startDatePlaceholder: 'Начальная дата',
    endDatePlaceholder: 'Конечная дата',
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
            message="Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required "
        >
        </dxi-validation-rule>
    </dx-validator>
			</dx-date-range-box>
		`,
  }),
} as Meta;

export const Default: StoryObj = {};

export const WithLabelRow: StoryObj = {
  args: {
    ...Default.args,
    labelMode: 'hidden',
  },
  render: (args) => ({
    props: args,
    template: `
		<label meLabel
		labelDirection="row"
		width="500px">
		Label*
			<dx-date-range-box meDateRangeBox
				${argsToTemplate(args)}
			>
			</dx-date-range-box>
		</label>
		`,
  }),
};
