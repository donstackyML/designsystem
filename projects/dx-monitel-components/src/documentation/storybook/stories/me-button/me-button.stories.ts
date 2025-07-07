import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { DxButtonComponent } from 'devextreme-angular';
import { MeButtonDirective } from '../../../../public-api';

export default {
  title: 'Components/Button',
  decorators: [
    moduleMetadata({
      declarations: [MeButtonDirective, DxButtonComponent],
    }),
  ],
  argTypes: {
    text: {
      control: 'text',
      description: 'Определяет текст кнопки.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    buttonType: {
      control: 'select',
      options: ['default', 'normal', 'success', 'warning', 'danger'],
      description: `Определяет тип кнопки. В рамках дизайн-системы добавлен тип "warning".`,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'normal' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Меняет размер кнопки.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    stylingMode: {
      control: 'select',
      options: ['outlined', 'contained', 'text'],
      description: 'Определяет стиль кнопки.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'contained' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Отключает кнопку.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isSelected: {
      control: 'boolean',
      description:
        'Указывает имеет ли кнопка состояние `selected` ("вжатость").',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    selectionStateEnable: {
      control: 'boolean',
      description:
        'При передаче в свойство значения `true` разрешает кнопке иметь состояние `selected` (состояние "вжатости").',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    leftIcon: {
      control: 'select',
      options: ['', 'add', 'arrowback', 'arrowforward'],
      description:
        'Принимает название иконки из стандартного набора, которая будет вставлена слева от текста.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    leftIconColor: {
      control: 'text',
      description:
        'Определяет цвет для иконки слева от текста. Имеет приоритет над свойством `iconColor`.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    leftIconSize: {
      control: 'text',
      description:
        'Принимает размер для иконки слева от текста без единиц измерения (по умолчанию пиксели)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    rightIcon: {
      control: 'select',
      options: ['', 'add', 'arrowback', 'arrowforward'],
      description:
        'Принимает название иконки из стандартного набора, которая будет вставлена справа от текста.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    rightIconColor: {
      control: 'text',
      description:
        'Определяет цвет для иконки справа от текста. Имеет приоритет над свойством `iconColor`.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    rightIconSize: {
      control: 'text',
      description:
        'Определяет размер для иконки справа от текста. Без единиц измерения (по умолчанию пиксели). Имеет приоритет над `iconSize`.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    iconColor: {
      control: 'text',
      description: 'Принимает цвет иконки.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    iconOnly: {
      control: 'select',
      options: ['', 'add', 'arrowback', 'arrowforward'],
      description: 'Принимает иконку для кнопки только с иконкой, без текста.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  },
  args: {
    buttonType: 'normal',
    text: 'Button',
    size: 'medium',
    stylingMode: 'contained',
    disabled: false,
    isSelected: false,
    selectionStateEnable: false,
  },
  render: (args) => ({
    props: args,
    template: `<dx-button meButton ${argsToTemplate(args)}></dx-button>`,
  }),
} satisfies Meta<MeButtonDirective | DxButtonComponent>;

type Story = StoryObj<MeButtonDirective | DxButtonComponent>;

export const Default: Story = {
  args: {},
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

export const TypeNormal: Story = {
  args: {
    buttonType: 'normal',
  },
};

export const TypeDefault: Story = {
  args: {
    buttonType: 'default',
  },
};

export const TypeSuccess: Story = {
  args: {
    buttonType: 'success',
  },
};

export const TypeWarning: Story = {
  args: {
    buttonType: 'warning',
  },
};

export const TypeDanger: Story = {
  args: {
    buttonType: 'danger',
  },
};

export const StylingModeText: Story = {
  args: {
    stylingMode: 'text',
  },
};

export const StylingModeOutlined: Story = {
  args: {
    stylingMode: 'outlined',
  },
};

export const StylingModeContained: Story = {
  args: {
    stylingMode: 'contained',
  },
};

export const SelectionStateEnable: Story = {
  args: {
    selectionStateEnable: true,
  },
};

export const StateSelected: Story = {
  args: {
    isSelected: true,
  },
};

export const StateDisabled: Story = {
  args: {
    disabled: true,
  },
};

export const StateSelectedAndDisabled: Story = {
  args: {
    disabled: true,
  },
};

export const ButtonWithLeftIcon: Story = {
  args: {
    leftIcon: 'arrowback',
  },
};

export const ButtonWithLeftAndRightIcons: Story = {
  args: {
    leftIcon: 'arrowback',
    rightIcon: 'arrowforward',
  },
};

export const ButtonWithIconOnly: Story = {
  args: {
    text: '',
    iconOnly: 'add',
  },
};
