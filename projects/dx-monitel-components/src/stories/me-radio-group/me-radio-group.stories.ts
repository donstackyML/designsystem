import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { DxRadioGroupComponent } from 'devextreme-angular';
import { MeRadioGroupDirective } from '../../public-api';

const data = [
  {
    text: 'red',
    value: '#FF0000',
  },
  {
    text: 'green',
    value: '#00AA00',
  },
  {
    text: 'blue',
    value: '#0000FF',
  },
];

export default {
  title: 'Components/RadioGroup',
  decorators: [
    moduleMetadata({
      declarations: [MeRadioGroupDirective, DxRadioGroupComponent],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Принимает размер радиокнопки.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    dataSource: {
      description: 'Связывает компонент с данными',
    },
    layout: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description:
        'Устанавливает горизонтальное или вертикальное положение группы',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'vertical' },
      },
    },
  },
  args: {
    size: 'medium',
    dataSource: data,
  },
  render: (args) => ({
    props: args,
    template: ` <dx-radio-group meRadioGroup  ${argsToTemplate(args)}>
    </dx-radio-group>`,
  }),
} as Meta<MeRadioGroupDirective | DxRadioGroupComponent>;

type Story = StoryObj<MeRadioGroupDirective | DxRadioGroupComponent>;

export const Default: Story = {
  args: {
    layout: 'horizontal',
  },
};
