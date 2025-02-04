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
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Меняет размер аккордиона и его элементов.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    labelMode: {
      control: 'select',
      options: ['outside', 'static', 'floating', 'hidden'],
      description: 'Определяет положение лейбла текстового поля.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'outside' },
      },
    },
    label: {
      control: 'text',
      description: 'Текст лейбла',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    showClearButton: {
      control: 'boolean',
      description: 'Показывать кнопку очистки',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    readOnly: {
      control: 'boolean',
      description: 'Определяет состояние только для чтения',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Отключение компонента',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
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
        defaultValue: { summary: true }
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
} as Meta<DxAutocompleteModule | MeAutocompleteDirective>;

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
    size: 'medium',
    labelMode: 'floating',
  },
};

export const LabelModeOutside: Story = {
  args: {
    size: 'medium',
    labelMode: 'outside',
  },
};

export const LabelModeStatic: Story = {
  args: {
    size: 'medium',
    labelMode: 'static',
  },
};

export const LabelModeHidden: Story = {
  args: {
    size: 'medium',
    labelMode: 'hidden',
  },
};

export const Disabled: Story = {
  args: {
    size: 'medium',
    disabled: true
  },
};

export const ReadOnly: Story = {
  args: {
    size: 'medium',
    readOnly: true,
    value: 'Moscow'
  },
};

export const DisabledAndReadOnly: Story = {
  args: {
    size: 'medium',
    readOnly: true,
    disabled: true,
    value: 'Moscow'
  },
};

export const WithLabelRow: Story = {
  args: {
    size: 'medium',
    minSearchLength: 1,
    dataSource: meAutocompleteMockData,
  },
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
