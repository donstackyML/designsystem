import {
  argsToTemplate,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { DxAutocompleteModule, DxValidatorModule } from 'devextreme-angular';
import { MeAutocompleteDirective, MeLabelDirective } from '../../public-api';
import { meAutocompleteMockData } from './me-autocomplete-mock-data';

export default {
  title: 'Components/Autocomplete',
  decorators: [
    moduleMetadata({
      declarations: [MeAutocompleteDirective, MeLabelDirective],
      imports: [DxAutocompleteModule, DxValidatorModule],
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
        defaultValue: { summary: 1 }
      }
    },
    isValid: {
      control: 'boolean',
      description: 'Определяет состояние валидности',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },
    dataSource: {
      table: {
        disable: true
      }
    },
  },
  args: {
    size: 'medium',
    labelMode: 'outside',
    label: 'City*',
    placeholder: 'Enter city name',
    showClearButton: true,
    isValid: true,
    disabled: false,
    readOnly: false,
    minSearchLength: 1,
    dataSource: meAutocompleteMockData,
  },
  render: (args) => ({
    props: args,
    template: `
      <dx-autocomplete
        id="autocomplete-element"
        meAutocomplete
        ${argsToTemplate(args)}
        [dropDownOptions]="{
          position: {
            of: '#autocomplete-element',
            my: 'top left',
            at: 'bottom left',
            offset: { y: 4 },
            collision: 'fit flip'
          }
        }"
      >
        <dx-validator>
          <dxi-validation-rule
            type="required"
            message="Required"
          >
          </dxi-validation-rule>
        </dx-validator>
      </dx-autocomplete>
      <p class='autocomplete-box-desc' *ngIf="description">{{ description }}</p>
    `,
  }),
} satisfies Meta<DxAutocompleteModule | MeAutocompleteDirective>;

type Story = StoryObj<DxAutocompleteModule | MeAutocompleteDirective>;

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

export const WithLabelRow: Story = {
  render: (args) => ({
    props: args,
    template: `
    <label meLabel
      labelDirection="row"
      style="max-width: 200px">
      Label*
      <dx-autocomplete
        id="autocomplete-element"
        meAutocomplete
        [size]="size"
        [dataSource]="dataSource"
        [minSearchLength]="minSearchLength"
        [placeholder]="placeholder"
        [dropDownOptions]="{
          position: {
            of: '#autocomplete-element',
            my: 'top left',
            at: 'bottom left',
            offset: { y: 4 },
            collision: 'fit flip'
          }
        }"
      ></dx-autocomplete>
    </label>
    `,
  }),
};
