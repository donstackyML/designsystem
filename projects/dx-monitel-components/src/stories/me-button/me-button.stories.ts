import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { DxButtonComponent } from 'devextreme-angular';
import { MeButtonDirective } from '../../public-api';

export default {
  title: 'Components/Button',
  // tags: ['autodocs'],
  parameters: {
    // docs: {
    //   source: {
    //     type: 'dynamic',
    //   },
    // },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/S2KXryEyWLA9cplaicYrVn/Components?node-id=1-4&t=VoqpA9EX7TuL7TZI-0',
    },
  },
  decorators: [
    moduleMetadata({
      declarations: [MeButtonDirective, DxButtonComponent],
    }),
  ],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'normal', 'success', 'warning', 'danger'],
      description: `Определяет тип кнопки. В рамках дизайн-системы добавлен тип "warning".`,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    text: {
      control: 'text',
      description: 'Определяет текст кнопки.',
      table: {
        defaultValue: { summary: '' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Меняет размер кнопки.',
      table: {
        // type: { summary: 'string', detail: 'detaiiiiils' }, //detail - выпадашка
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
        // category: 'Категория', //разделяет на категории,
        // subcategory: 'Подкатегория', //подкатегории
      },
    },
    stylingMode: {
      control: 'select',
      options: ['outlined', 'contained', 'text'],
      description: 'Определяет стиль кнопки.',
      //В description можно добавить ссылку
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'contained' },
        // category: 'Категория', //разделяет на категории,
      },
    },
    isSelected: {
      control: 'boolean',
      description: 'Указывает имеет ли кнопка состояние selected ("вжатость").',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
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
        'Определяет цвет для иконки слева от текста. Имеет приоритет над свойством iconColor.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    leftIconName: {
      control: 'text',
      description: `Если необходимой иконки нет в стандартном наборе, но нужно чтобы она все равно меняла цвет
       в завимости от темы, требуется положить подготовленные для светлой и темной темы иконки в соответствующие папки:
        <code>assets/images/icons/light</code> <code>assets/images/icons/dark</code> и передать в свойсво название иконки, тогда иконка будет меняться автоматически при переключении темы.`,
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
        'Определяет цвет для иконки справа от текста. Имеет приоритет над свойством iconColor.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    rightIconName: {
      control: 'text',
      description: `Если необходимой иконки нет в стандартном наборе, но нужно чтобы она все равно меняла цвет
       в завимости от темы, требуется положить подготовленные для светлой и темной темы иконки в соответствующие папки:
       <code>assets/images/icons/light</code> <code>assets/images/icons/dark</code>
       и передать в свойсво название иконки, тогда иконка будет меняться автоматически при переключении темы.`,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    rightIconSize: {
      control: 'text',
      description:
        'Определяет размер для иконки справа от текста. Без единиц измерения (по умолчанию пиксели). Имеет приоритет над iconSize.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    selectionStateEnable: {
      control: 'boolean',
      description:
        'При передаче в свойство значения true разрешает кнопке иметь состояние selected (состояние "вжатости").',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
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
  render: (args) => ({
    props: args,
    template: `<dx-button meButton ${argsToTemplate(args)}></dx-button>`,
  }),
} as Meta<MeButtonDirective | DxButtonComponent>;

type Story = StoryObj<MeButtonDirective | DxButtonComponent>;

export const Default: Story = {
  args: {
    type: 'default',
    text: 'Button',
    size: 'medium',

    // isSelected: false,
    stylingMode: 'contained',

    leftIcon: '',
  },
};

export const LeftIcon: Story = {
  args: {
    type: 'normal',
    text: 'Button',
    size: 'medium',
    stylingMode: 'contained',
    leftIcon: 'arrowback',
  },
};

export const LeftRightIcon: Story = {
  args: {
    type: 'normal',
    text: 'Button',
    size: 'medium',
    stylingMode: 'contained',
    leftIcon: 'arrowback',
    rightIcon: 'arrowforward',
  },
};

export const IconOnly: Story = {
  args: {
    iconOnly: 'add',
  },
};
