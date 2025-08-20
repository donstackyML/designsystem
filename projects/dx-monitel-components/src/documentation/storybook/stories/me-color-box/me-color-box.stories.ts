import {
  argsToTemplate,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { DxColorBoxComponent, DxColorBoxModule } from 'devextreme-angular';
import { MeColorBoxDirective } from '../../../../lib/directives/me-color-box/me-color-box.directive';
import { MeLabelDirective } from '../../../../public-api';

export default {
  title: 'Components/ColorBox',
  decorators: [
    moduleMetadata({
      imports: [DxColorBoxModule],
      declarations: [MeColorBoxDirective, MeLabelDirective],
    }),
  ],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Блокирует возможность взаимодействия с элементом.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    value: {
      control: 'object',
      description: 'Выбранное значение.',
      table: {
        defaultValue: { summary: '#473819' },
      },
    },
    label: {
      control: 'text',
      description: 'Текст, отображаемый в качестве лейбла.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    applyButtonText: {
      control: 'text',
      description: 'Текст, отображаемый в качестве лейбла.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Применить' },
      },
    },
    cancelButtonText: {
      control: 'text',
      description: 'Текст, отображаемый в качестве лейбла.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Отменить' },
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
    placeholder: {
      control: 'text',
      description: 'Текст-подсказка, отображаемый при пустом поле.',
      table: {
        defaultValue: { summary: "''" },
      },
    },
    readOnly: {
      control: 'boolean',
      description: 'Делает компонент доступным только для чтения.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    showClearButton: {
      control: 'boolean',
      description: 'Отображает кнопку очистки поля ввода.',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    editAlphaChannel: {
      control: 'boolean',
      description:
        'Определяет, включает ли выбранное значение компонент прозрачности (альфа-канал).',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    applyValueMode: {
      control: 'select',
      options: ['useButtons', 'instantly'],
      description:
        'Определяет способ применения выбранного значения: с помощью кнопок или мгновенно.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'useButtons' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Принимает размер `Color Box` и его элементов.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'small' },
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
  },
  args: {
    value: '#473819',
    disabled: false,
    label: 'Label',
    labelMode: 'outside',
    editAlphaChannel: false,
    applyButtonText: 'Применить',
    cancelButtonText: 'Отменить',
    applyValueMode: 'useButtons',
    placeholder: 'Выберите значение...',
    showClearButton: true,
    readOnly: false,
    size: 'small',
    showRequiredMark: false,
  },
  render: (args) => ({
    props: args,
    template: `
    <dx-color-box
    meColorBox
    ${argsToTemplate(args)}></dx-color-box>`,
  }),
} satisfies Meta<MeColorBoxDirective | DxColorBoxComponent>;

type Story = StoryObj<MeColorBoxDirective | DxColorBoxComponent>;

export const Default: Story = {};

export const WithEditAlphaChannel: Story = {
  args: {
    editAlphaChannel: true,
  },
};

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
      <dx-color-box
        meColorBox
        ${argsToTemplate(args)}>
      </dx-color-box>
    </div>
    `,
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
  },
};

export const CustomButtonsText: Story = {
  args: {
    applyButtonText: 'ОК',
    cancelButtonText: 'Закрыть',
  },
};
