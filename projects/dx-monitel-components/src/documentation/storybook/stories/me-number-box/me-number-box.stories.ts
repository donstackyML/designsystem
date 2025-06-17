import {
  argsToTemplate,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import {
  DxButtonModule,
  DxNumberBoxComponent,
  DxNumberBoxModule,
  DxValidatorModule,
} from 'devextreme-angular';
import { MeLabelDirective, MeNumberBoxDirective } from '../../../../public-api';

export default {
  title: 'Components/Fields/NumberBox',
  decorators: [
    moduleMetadata({
      imports: [DxValidatorModule, DxButtonModule, DxNumberBoxModule],
      declarations: [MeNumberBoxDirective, MeLabelDirective],
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
      description: 'Изменяет размер компонента.',
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
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Отключает компонент и его элементы.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    format: {
      control: 'text',
      description:
        'Формат отображения числа. Пример: `#`, `#,##0.00`, `#,##0%`, `#0.## kg`, `($ #,##0.##)`.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    max: {
      control: 'number',
      description: 'Максимальное значение',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    min: {
      control: 'number',
      description: 'Минимальное значение',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    showSpinButtons: {
      control: 'boolean',
      description: 'Показывать кнопки управления значениями.',
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
    },
  },
  args: {
    size: 'medium',
    label: 'Label',
    placeholder: 'Select...',
    disabled: false,
    readOnly: false,
    showClearButton: false,
    showSpinButtons: false,
    format: '',
    max: undefined,
    min: undefined,
    showRequiredMark: false,
    isValid: true,
    validationMessageMode: 'auto',
    validationMessagePosition: 'bottom',
    value: undefined,
    height: undefined,
    width: undefined,
  },
  render: (args) => ({
    props: { ...args },
    template: `
		<dx-number-box
			meNumberBox
			${argsToTemplate(args)}
    >
      <dx-validator>
          <dxi-validation-rule
              type="required"
              message="Required"
          >
          </dxi-validation-rule>
      </dx-validator>
		</dx-number-box>`,
  }),
} satisfies Meta<DxNumberBoxComponent | MeNumberBoxDirective>;

type Story = StoryObj<DxNumberBoxComponent | MeNumberBoxDirective>;

export const Default: StoryObj = {};

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
      <dx-number-box
        meNumberBox
        ${argsToTemplate(args)}
      ></dx-number-box>
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
      <dx-number-box
        meNumberBox
        ${argsToTemplate(args)}
      ></dx-number-box>
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
    value: 123,
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

export const WithMinMaxRestrictions: Story = {
  args: {
    min: 0,
    max: 100,
  },
};

export const WithFormatting: Story = {
  args: {
    format: '#,##0.00',
  },
};

export const WithSpinButtonsAndClearButton: Story = {
  args: {
    showSpinButtons: true,
    showClearButton: true,
  },
};

export const WithDescription: Story = {
  render: (args) => ({
    props: {
      ...args,
      description: 'description',
    },
    template: `
      <dx-number-box meNumberBox ${argsToTemplate(args)}></dx-number-box>
      <div class='me-text-body2' *ngIf="size=='large'">description</div>
      <div class='me-text-caption' *ngIf="size=='small'">description</div>
      <div class='me-text-caption' *ngIf="size=='medium'">description</div>`,
    styles: [
      `
      .me-text-body2, .me-text-caption {
        color: var(--Text-Secondary);
        margin-top: 4px;
      }`,
    ],
  }),
};

export const WithCurrencyButton: StoryObj = {
  args: {
    currencyButton: {
      text: '€',
      stylingMode: 'text',
      width: '24px',
      height: '24px',
      elementAttr: {
        class: 'me-button me-button-small me-button-icon-only',
      },
      onClick: (e: any) => {
        if (e.component.option('text') === '$') {
          e.component.option('text', '€');
        } else {
          e.component.option('text', '$');
        }
      },
    },
    labelMode: 'static',
  },
  render: (args) => ({
    props: args,
    template: `
			<dx-number-box
			meNumberBox
      ${argsToTemplate(args)}>
			  <dxi-button
          name="currency"
          location="after"
          [options]="currencyButton"
        ></dxi-button>
			</dx-number-box>
		`,
    styles: [
      'label { justify-content: flex-start; }',
      'span { font-size: 14px; line-height: 20px; }',
      '.me-text-body2 { height: 20px; margin-top: 4px; color: #808084 }',
      '.currency { padding: 0; }',
      '.me-text-body2 { color: var(--Text-Secondary); margin-top: 4px; }',
    ],
  }),
};
