import {
  Meta,
  StoryObj,
  argsToTemplate,
  moduleMetadata,
} from '@storybook/angular';
import { DxTextAreaComponent, DxValidatorModule } from 'devextreme-angular';

import { MeLabelDirective, MeTextAreaDirective } from '../../public-api';

export default {
  title: 'Components/Fields/TextArea',
  decorators: [
    moduleMetadata({
      imports: [DxValidatorModule],
      declarations: [
        MeTextAreaDirective,
        DxTextAreaComponent,
        MeLabelDirective
      ],
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
    autoResizeEnabled: {
      control: 'boolean',
      description:
        'Включает автоматическое изменение высоты компонента. По умолчанию `false`.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    activeStateEnabled: {
      control: 'boolean',
      description: 'Включает активное состояние компонента.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    value: {
      control: 'text',
      description: 'Значение поля.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
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
    }
  },
  args: {
    label: 'Label',
    placeholder: 'Enter your text',
    size: 'medium',
    labelMode: 'outside',
    readOnly: false,
    disabled: false,
    autoResizeEnabled: false,
    activeStateEnabled: true,
    showRequiredMark: false,
    isValid: true,
    validationError: '',
    validationMessageMode: 'auto',
    validationMessagePosition: 'bottom',
    width: undefined,
    height: undefined
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="textarea-wrapper">
        <dx-text-area
          meTextArea
          [inputAttr]="{ 'aria-label': 'Notes' }"
          ${argsToTemplate(args)}
        >
          <dx-validator>
            <dxi-validation-rule
              type="required"
              message="Required"
            >
            </dxi-validation-rule>
          </dx-validator>
        </dx-text-area>
      </div>
    `,
    styles: ['.textarea-wrapper { padding-top: 20px; }'],
  }),
} satisfies Meta<DxTextAreaComponent | MeTextAreaDirective>;

type Story = StoryObj<DxTextAreaComponent | MeTextAreaDirective>;

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
    value: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
};

export const StateDisabledAndReadOnly: Story = {
  args: {
    readOnly: true,
    disabled: true,
    value: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
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

export const WithAutoResize: Story = {
  args: {
    autoResizeEnabled: true,
    value:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
};

export const WithFixedHeight: Story = {
  args: {
    height: '190px',
  },
};

export const WithLabelRow: Story = {
  args: {
    labelMode: 'hidden'
  },
  render: (args) => ({
    props: args,
    template: `
    <div meLabel
      labelDirection="row"
      width="250px"
      class="dx-widget"
      >
      <span>Label*</span>
      <dx-text-area meTextArea
        ${argsToTemplate(args)}
      >
      </dx-text-area>
    </div>
    <p class='me-input-description' *ngIf="description">{{ description }}</p>
    `,
  }),
};