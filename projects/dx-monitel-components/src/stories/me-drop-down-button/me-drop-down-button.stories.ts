import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { DxDropDownButtonComponent } from 'devextreme-angular';
import { MeDropDownButtonDirective } from '../../public-api';

const items = [
  {
    id: 1,
    name: 'Left',
  },
  {
    id: 4,
    name: 'Right',
  },
  {
    id: 2,
    name: 'Center',
  },
  {
    id: 3,
    name: 'Justify',
  },
];

export default {
  title: 'Components/DropDownButton',
  decorators: [
    moduleMetadata({
      declarations: [MeDropDownButtonDirective, DxDropDownButtonComponent],
    }),
  ],
  argTypes: {
    icon: {
      control: 'select',
      options: ['', 'add', 'arrowleft'],
      description:
        'Принимает название иконки из стандартного набора (или иконку, переданную строкой), которая будет вставлена слева от текста.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Меняет размер dropDownButton и выпадающего меню.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    stylingMode: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
      description: 'Определяет стиль кнопки.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'outlined' },
      },
    },
    type: {
      control: 'select',
      options: ['default', 'normal', 'success', 'danger'],
      description: 'Определяет тип кнопки.',
      table: {
        type: { summary: 'string' },
      },
    },
    splitButton: {
      control: 'boolean',
      description: 'При присвоении значения true разделяет кнопку на две.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    // showScrollbar: {
    //   control: 'select',
    //   options: ['always', 'onHover'],
    //   description:
    //     'Определяет показывать скроллбар всегда или только при наведении.',
    //   table: {
    //     type: { summary: 'string' },
    //     defaultValue: { summary: 'always' },
    //   },
    // },
    // iconColor: {
    //   control: 'color',
    //   description: 'Принимает цвет иконки',
    //   table: {
    //     type: { summary: 'string' },
    //     defaultValue: { summary: '' },
    //   },
    // },
    items: {
      description: 'Принимает данные для выпадающего списка',
    },
    displayExpr: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    icon: 'add',
    text: 'Button',
    displayExpr: 'name',
    items: items,
    size: 'medium',
    splitButton: true,
    type: 'default',
    stylingMode: 'outlined',
    // showScrollbar: 'always',
  },
  render: (args) => ({
    props: args,
    template: `<dx-drop-down-button meDropDownButton ${argsToTemplate(
      args
    )}></dx-drop-down-button>`,
  }),
} as Meta<DxDropDownButtonComponent | MeDropDownButtonDirective>;

type Story = StoryObj<DxDropDownButtonComponent | MeDropDownButtonDirective>;

export const Default: Story = {};
