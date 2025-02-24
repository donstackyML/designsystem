import {
  Meta,
  StoryObj,
  argsToTemplate,
  moduleMetadata,
} from '@storybook/angular';
import { DxValidatorModule, DxTagBoxComponent } from 'devextreme-angular';
import { MeLabelDirective, MeTagBoxDirective } from '../../public-api';

function generateItems(length: number): string[] {
  return Array.from({ length }, (_, i) => `Пункт ${i + 1}`);
}

const defaultItems = generateItems(25);

export default {
  title: 'Components/Fields/TagBox',
  decorators: [
    moduleMetadata({
      imports: [DxValidatorModule],
      declarations: [MeTagBoxDirective, DxTagBoxComponent,  MeLabelDirective],
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
    items: {
      control: 'text',
      description: 'Массив данных для отображения',
      table: {
        type: { summary: 'Array<{ text: string; value: string }>' },
        defaultValue: { summary: '[]' },
      },
    },
    value: {
      control: 'text',
      description: 'Значение поля.',
      table: {
        type: { summary: 'string[]' },
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
    isValid: {
      control: 'boolean',
      description: 'Проверяет валидность данных.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
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
    grouped: {
      control: 'boolean',
      description: 'Определяет, использовать ли группировку элементов.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    maxDisplayedTags: {
      control: 'number',
      description: 'Максимальное количество отображаемых тегов.',
      table: {
        type: { summary: 'number | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    showMultiTagOnly: {
      control: 'boolean',
      description: 'Отображает мульти-тег, если выбрано более одного значения.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    applyValueMode: {
      control: 'select',
      options: ['instantly', 'useButtons'],
      description:
        'Режим применения данных. `instantly` - Применяет значения, когда они выбраны. `useButtons` - Применяет значения, когда пользователь нажимает кнопку "ОК".',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'instantly' },
      },
    },
    hideSelectedItems: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showSelectionControls: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    selectAllMode : {
      control: 'select',
      options: ['allPages', 'page'],
      description:
        'Определяет, какие элементы будут выбраны при нажатии на кнопку "Выбрать все".',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'page' },
      },
    },
    noDataText: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "No data to display" },
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
    label: 'Label*',
    placeholder: 'Выберите...',
    items: defaultItems,
    size: 'small',
    labelMode: 'outside',
    showClearButton: false,
    disabled: false,
    isValid: true,
    readOnly: false,
    applyValueMode: 'instantly',
    searchEnabled: true,
    grouped: undefined,
    maxDisplayedTags: undefined,
    showMultiTagOnly: true,
    showSelectionControls: false,
    selectAllMode: 'page',
    hideSelectedItems: false,
    noDataText: 'Не найдено',
    validationMessageMode: 'auto',
    validationMessagePosition: 'top',
    width: '400px',
    height: '',
  },
  render: (args) => ({
    props: { ...args },
    template: `
      <dx-tag-box
        meTagBox
        ${argsToTemplate(args)}
      >
        <dx-validator>
          <dxi-validation-rule
            type="required"
            message="Required"
          >
          </dxi-validation-rule>
        </dx-validator>
      </dx-tag-box>
    `,
  }),
} satisfies Meta<DxTagBoxComponent | MeTagBoxDirective>;

type Story = StoryObj<DxTagBoxComponent | MeTagBoxDirective>;

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
      width="250px"
    >
		Label*
			<dx-tag-box
      meTagBox
			${argsToTemplate(args)}
				></dx-tag-box>
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
    <span>Label*</span>
    <dx-tag-box meTextBox ${argsToTemplate(args)}></dx-tag-box>
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
    value: generateItems(3)
  },
};

export const StateDisabledAndReadOnly: Story = {
  args: {
    readOnly: true,
    disabled: true,
    value: generateItems(3)
  },
};

export const GroupedItems: Story = {
  args: {
    items: [
      {
        key: 'Group 1',
        items: ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5'],
      },
      {
        key: 'Group 2',
        items: ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5'],
      },
    ],
    grouped: true,
  },
};

export const GroupedItemsWithIcons: Story = {
  args: {
    items: [
      {
        key: 'Group 1',
        items: ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5'],
      },
      {
        key: 'Group 2',
        items: ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5'],
      },
    ],
    grouped: true,
  },
  render: (args) => ({
    props: { ...args },
    template: `
    <dx-tag-box
      meTagBox
      ${argsToTemplate(args)}
    >
      <dx-validator>
        <dxi-validation-rule
          type="required"
          message="Required"
        >
        </dxi-validation-rule>
      </dx-validator>
      <div *dxTemplate="let data of 'group'">
        <div class="custom-icon">
          <span class="dx-icon-globe icon"></span>
          {{ data.key }}
        </div>
      </div>
    </dx-tag-box>
    `,
    styles: [
      `
      .me-text-body2, .me-text-caption {
        color: var(--Text-Secondary);
        margin-top: 4px;
      }
      `,
    ],
  }),
};

export const WithMaxDisplayedTags: Story = {
  args: {
    maxDisplayedTags: 3,
    value: generateItems(7),

  },
};

export const WithMaxDisplayedTagsWithoutMultiTagOnly: Story = {
  args: {
    maxDisplayedTags: 3,
    value: generateItems(7),
    showMultiTagOnly: false
  },
};
