import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { DxButtonModule, DxTextBoxComponent } from 'devextreme-angular';

import { MeLabelDirective, MeTextBoxDirective } from '../../public-api';

export default {
  title: 'Components/Fields/TextBox',
  decorators: [
    moduleMetadata({
      imports: [DxButtonModule],
      declarations: [MeTextBoxDirective, DxTextBoxComponent, MeLabelDirective],
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
    mode: {
      control: 'select',
      options: ['text', 'password', 'email', 'search', 'tel', 'url'],
      description: 'Определяет поведение текстового поля.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
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
      description: 'Отключает компонент и его элементы.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
    mask: {
      control: 'text',
      description: 'Маска для ввода данных.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    maskInvalidMessage: {
      control: 'text',
      description: 'Сообщение об ошибке при неверном вводе по маске.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "Value is invalid" },
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
    label: 'Label',
    placeholder: 'Enter your text',
    mode: 'text',
    size: 'medium',
    labelMode: 'outside',
    showClearButton: false,
    readOnly: false,
    disabled: false,
    showRequiredMark: false,
    isValid: true,
    mask: "",
    maskInvalidMessage: "Value is invalid",
    validationError: null,
    validationMessageMode: 'auto',
    validationMessagePosition: 'bottom',
  },
  render: (args) => ({
    props: args,
    template: `<dx-text-box meTextBox ${argsToTemplate(args)}>
		</dx-text-box>`,
  }),
} satisfies Meta<MeTextBoxDirective | DxTextBoxComponent>;

type Story = StoryObj<MeTextBoxDirective | DxTextBoxComponent>;

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
    labelMode: 'hidden'
  },
  render: (args) => ({
    props: args,
    template: `
    <div meLabel
      labelDirection="row"
      >
      <span>Label</span>
      <dx-text-box meTextBox
        ${argsToTemplate(args)}
      >
      </dx-text-box>
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
      <dx-text-box meTextBox ${argsToTemplate(args)}></dx-text-box>
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
    value: 'Lorem ipsum dolor sit amet consectetur.'
  },
};

export const StateDisabledAndReadOnly: Story = {
  args: {
    readOnly: true,
    disabled: true,
    value: 'Lorem ipsum dolor sit amet consectetur.'
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

export const WithClearButton: Story = {
  args: {
    showClearButton: true,
    value: '123'
  },
};

export const ModeTelWithMask: Story = {
  args: {
    mode: 'tel',
    mask: "+7 (000) 000-0000"
  },
};

export const ModePassword: Story = {
  args: {
    mode: 'password',
    placeholder: 'Введите пароль'
  },
};

export const ModeSearch: Story = {
  args: {
    mode: 'search',
    placeholder: 'Введите запрос для поиска'
  },
};
