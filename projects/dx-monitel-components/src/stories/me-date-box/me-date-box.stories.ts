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
        'Формат сериализации даты. `yyyy-MM-dd` - Дата. `yyyy-MM-ddTHH:mm:ss` Локальная дата и время. `yyyy-MM-ddTHH:mm:ssZ` Дата и время в UTC. `yyyy-MM-ddTHH:mm:ssx`, `yyyy-MM-ddTHH:mm:ssxx`, `yyyy-MM-ddTHH:mm:ssxxx` Дата и время с таймзоной.',
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
    type: 'date',
    label: 'label',
    labelMode: 'outside',
    placeholder: 'Select...',
    showAnalogClock: false,
    showClearButton: true,
    disabled: false,
    readOnly: false,
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
            message="Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required Required "
        >
        </dxi-validation-rule>
    </dx-validator>
		</dx-date-box>`,
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
		[size]="size"
		width="250px">
		Label*
			<dx-date-box meDateBox
				${argsToTemplate(args)}
			>
			</dx-date-box>
		</label>
		`,
  }),
};
