import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { DxButtonGroupComponent } from 'devextreme-angular';
import { MeButtonGroupDirective, MeButtonGroupItem } from '../../public-api';

const data: MeButtonGroupItem[] = [
  {
    text: 'Пункт 1',
    leftIcon: 'arrowback',
    rightIcon: 'arrowforward',
    type: 'default',
  },
  {
    text: 'Пункт 2',
    leftIcon: 'arrowback',
    rightIcon: 'arrowforward',
    type: 'default',
  },
  {
    text: 'Пункт 3',
    leftIcon: 'arrowback',
    rightIcon: 'arrowforward',
    type: 'default',
  },
];

export default {
  title: 'Components/ButtonGroup',
  decorators: [
    moduleMetadata({
      declarations: [MeButtonGroupDirective, DxButtonGroupComponent],
    }),
  ],
  argTypes: {
    items: {
      description: 'Определяет внешний вид и поведение кнопки в группе кнопок.',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Меняет размер группы кнопок.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    stylingMode: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
      description: 'Определяет стиль группы кнопок.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'contained' },
      },
    },
  },
  render: (args) => ({
    props: args,
    template: ` <dx-button-group meButtonGroup ${argsToTemplate(
      args
    )}></dx-button-group>`,
  }),
} as Meta<MeButtonGroupDirective | DxButtonGroupComponent>;

type Story = StoryObj<MeButtonGroupDirective | DxButtonGroupComponent>;

export const Default: Story = {
  args: {
    items: data,
    size: 'medium',
    stylingMode: 'contained',
  },
};
