import {
  argsToTemplate,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { DxAutocompleteComponent, DxValidatorModule } from 'devextreme-angular';
import { MeAutocompleteDirective, MeLabelDirective } from '../../public-api';
import { meAutocompleteMockData } from './me-autocomplete-mock-data';

export default {
  title: 'Components/Fields/Autocomplete',
  decorators: [
    moduleMetadata({
      imports: [DxValidatorModule],
      declarations: [MeAutocompleteDirective, DxAutocompleteComponent, MeLabelDirective],
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
      description: 'Отключение компонента',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    minSearchLength: {
      control: { type: 'number', min: 0, max: 10 },
      description: 'Минимальная длина поиска',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' }
      }
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
      options: ['auto', 'top', 'bottom', 'left', 'right'],
      description: 'Расположение сообщений об ошибках.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'auto' },
      },
    },
    dropDownListMaxHeight: {
      control: 'text',
      description: 'Максимальная высота выпадающего списка',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '300px' }
      }
    },
    dataSource: {
      table: {
        disable: true
      }
    },
  },
  args: {
    dataSource: meAutocompleteMockData,
    size: 'medium',
    labelMode: 'outside',
    label: 'City',
    placeholder: 'Enter city name',
    showClearButton: true,
    disabled: false,
    readOnly: false,
    showRequiredMark: false,
    isValid: true,
    validationError: null,
    validationMessageMode: 'auto',
    validationMessagePosition: 'auto',
    minSearchLength: 1,
    dropDownListMaxHeight: '300px',
  },
  render: (args) => ({
    props: args,
    template: `
      <dx-autocomplete
        meAutocomplete
        ${argsToTemplate(args)}
      >
        <dx-validator>
          <dxi-validation-rule
            type="required"
            message="Required"
          >
          </dxi-validation-rule>
        </dx-validator>
      </dx-autocomplete>
      <p class="me-input-description" *ngIf="description">{{ description }}</p>
    `,
  }),
} satisfies Meta<DxAutocompleteComponent | MeAutocompleteDirective>;

type Story = StoryObj<DxAutocompleteComponent | MeAutocompleteDirective>;

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
      <dx-autocomplete
        meAutocomplete
        ${argsToTemplate(args)}
      ></dx-autocomplete>
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
      <dx-autocomplete
        meAutocomplete
        ${argsToTemplate(args)}
      ></dx-autocomplete>
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
    value: 'Moscow'
  },
};

export const StateDisabledAndReadOnly: Story = {
  args: {
    readOnly: true,
    disabled: true,
    value: 'Moscow'
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
