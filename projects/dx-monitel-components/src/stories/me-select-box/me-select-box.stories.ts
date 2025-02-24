import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import {
  DxSelectBoxComponent,
  DxValidatorModule
} from 'devextreme-angular';

import { MeLabelDirective, MeSelectBoxDirective } from '../../public-api';
import { meSelectBoxData } from './me-select-box-mock-data';

export default {
  title: 'Components/Fields/SelectBox',
  decorators: [
    moduleMetadata({
      imports: [DxValidatorModule],
      declarations: [MeSelectBoxDirective, DxSelectBoxComponent, MeLabelDirective],
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
    dataSource: {
      control: 'object',
      description: 'Источник данных для элементов выпадающего списка.',
      table: {
        type: { summary: 'string[]' },
        defaultValue: { summary: '[]' },
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
    searchEnabled: {
      control: 'boolean',
      description: 'Разрешает поиск.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    searchMode: {
      control: 'select',
      options: ['contains', 'startswith'],
      description: 'Выберите режим поиска.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'contains' },
      },
    },
    minSearchLength: {
      control: 'number',
      description: 'Минимальная длина поиска.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    showScrollbar: {
      control: 'select',
      options: ['always', 'onHover'],
      description:
        'Определяет отображение скролла - при наведении или постоянно. По умолчанию скролл отображается при переполнении контента постоянно.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'always' },
      },
    },
  },
  args: {
    label: 'Label*',
    placeholder: 'Select...',
    dataSource: meSelectBoxData,
    size: 'medium',
    showScrollbar: 'always',
    disabled: false,
    isValid: true,
    readOnly: false,
    grouped: false,
    searchEnabled: false,
    searchMode: 'contains',
    minSearchLength: 0,
    width: undefined,
    height: undefined,
  },
  render: (args) => ({
    props: args,
    template: `
		<dx-select-box meSelectBox ${argsToTemplate(args)}>
			<dx-validator>
        <dxi-validation-rule
          type="required"
          message="Required">
        </dxi-validation-rule>
    	</dx-validator>
    </dx-select-box>`,
  }),
} satisfies Meta<MeSelectBoxDirective | DxSelectBoxComponent>;

type Story = StoryObj<MeSelectBoxDirective | DxSelectBoxComponent>;

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
      width="250px"
      class="dx-widget"
      >
      <span>Label*</span>
      <dx-select-box meSelectBox
        ${argsToTemplate(args)}
      >
      </dx-select-box>
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
      class="dx-widget"
		>
    <span>Label*</span>
		<dx-select-box meSelectBox ${argsToTemplate(args)}></dx-select-box>
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
    value: meSelectBoxData[0]
  },
};

export const StateDisabledAndReadOnly: Story = {
  args: {
    readOnly: true,
    disabled: true,
    value: meSelectBoxData[0]
  },
};

export const WithClearButton: Story = {
  args: {
    showClearButton: true,
    value: meSelectBoxData[0]
  },
};
export const WithSearch: Story = {
  args: {
    searchEnabled: true
  },
};
