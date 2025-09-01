import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { DxDropDownButtonComponent } from 'devextreme-angular';
import { MeDropDownButtonDirective } from '../../../../public-api';
import {
  meDropDownButtonMockData,
  meDropDownButtonMockDataWithDividers,
  meDropDownButtonMockLargeData,
} from './me-drop-down-button-mock-data';

export default {
  title: 'Components/DropDownButton',
  decorators: [
    moduleMetadata({
      declarations: [MeDropDownButtonDirective, DxDropDownButtonComponent],
    }),
  ],
  argTypes: {
    text: {
      control: 'text',
      description: 'Принимает текст кнопки.',
      table: {
        category: 'Контент и управление контентом',
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    items: {
      control: 'object',
      description: 'Принимает данные для выпадающего списка.',
      table: {
        category: 'Контент и управление контентом',
        type: { summary: 'MeButtonGroupItem[]' },
        defaultValue: { summary: '[]' },
      },
    },
    icon: {
      control: 'select',
      options: ['', 'add', 'arrowleft'],
      description:
        'Принимает название иконки из стандартного набора (или иконку, переданную строкой), которая будет вставлена слева от текста.',
      table: {
        category: 'Контент и управление контентом',
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Меняет размер dropDownButton и выпадающего меню.',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    stylingMode: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
      description: 'Определяет стиль кнопки.',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'string' },
        defaultValue: { summary: 'contained' },
      },
    },
    dividersVisibility: {
      control: 'select',
      options: ['auto', 'all', 'none'],
      description:
        'Определяет видимость разделителей у элементов списка в выпадающем меню',
      table: {
        category: 'Контент и управление контентом',
        type: { summary: 'string' },
        defaultValue: { summary: 'auto' },
      },
    },
    useSelectMode: {
      control: 'boolean',
      description: 'Включает режим выбора элемента из выпадающего списка.',
      table: {
        category: 'Контент и управление контентом',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    type: {
      control: 'select',
      options: ['default', 'normal', 'success', 'danger', 'warning'],
      description: 'Определяет тип кнопки.',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'string' },
        defaultValue: { summary: 'normal' },
      },
    },
    iconColor: {
      control: 'text',
      description: 'Принимает цвет для иконки слева от текста.',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    splitButton: {
      control: 'boolean',
      description: 'При присвоении значения true разделяет кнопку на две.',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showArrowIcon: {
      control: 'boolean',
      description: 'Показывает стрелку-индикатор кнопки.',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Отключает кнопку.',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    displayExpr: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    icon: '',
    text: 'Button',
    displayExpr: 'text',
    dataSource: meDropDownButtonMockData,
    size: 'medium',
    type: 'normal',
    stylingMode: 'contained',
    splitButton: false,
    disabled: false,
    showArrowIcon: true,
    dividersVisibility: 'auto',
    useSelectMode: false,
  },
  render: (args) => ({
    props: args,
    template: `<dx-drop-down-button meDropDownButton ${argsToTemplate(
      args
    )}></dx-drop-down-button>`,
  }),
} satisfies Meta<DxDropDownButtonComponent | MeDropDownButtonDirective>;

type Story = StoryObj<DxDropDownButtonComponent | MeDropDownButtonDirective>;

export const Default: Story = {};

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

export const TypeDefault: Story = {
  args: {
    type: 'default',
  },
};

export const TypeSuccess: Story = {
  args: {
    type: 'success',
  },
};

export const TypeDanger: Story = {
  args: {
    type: 'danger',
  },
};

export const StylingModeContained: Story = {
  args: {
    stylingMode: 'contained',
  },
};

export const StylingModeOutlined: Story = {
  args: {
    stylingMode: 'outlined',
  },
};

export const StylingModeText: Story = {
  args: {
    stylingMode: 'text',
  },
};

export const WithSplitButton: Story = {
  args: {
    splitButton: true,
  },
};

export const WithIconAndText: Story = {
  args: {
    icon: 'add',
  },
};

export const WithIcon: Story = {
  args: {
    icon: 'add',
    text: '',
    showArrowIcon: false,
  },
};

export const WithIconAndSplitButton: Story = {
  args: {
    icon: 'add',
    text: '',
    showArrowIcon: false,
    splitButton: true,
  },
};

export const WithColoredIcon: Story = {
  args: {
    icon: 'add',
    text: 'Button',
    iconColor: '#ff0000',
  },
};

export const WithNoArrowIcon: Story = {
  args: {
    showArrowIcon: false,
  },
};

export const StateDisabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithLargeData: Story = {
  args: {
    items: meDropDownButtonMockLargeData,
  },
};

export const DividersVisibilityNone: Story = {
  args: {
    dividersVisibility: 'none',
  },
};

export const DividersVisibilityAll: Story = {
  args: {
    dividersVisibility: 'all',
  },
};

export const DividersVisibilityByContent: Story = {
  args: {
    dividersVisibility: 'auto',
    dataSource: meDropDownButtonMockDataWithDividers,
  },
};
