import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { DxSwitchComponent, DxValidatorModule } from 'devextreme-angular';
import { MeLabelDirective, MeSwitchDirective } from '../../public-api';

export default {
  title: 'Components/Switch',
  decorators: [
    moduleMetadata({
      declarations: [MeSwitchDirective, DxSwitchComponent, MeLabelDirective],
    }),
  ],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Отключение компонента',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    readOnly: {
      control: 'boolean',
      description: 'Состояние только для чтения',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Используется для изменения размера',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
  },
  args: {
    size: 'medium',
    disabled: false,
    readOnly: false,
  },
  render: (args) => ({
    props: args,
    template: `<dx-switch meSwitch ${argsToTemplate(args)}></dx-switch>`,
  }),
} as Meta<MeLabelDirective | MeSwitchDirective | DxSwitchComponent>;

type Story = StoryObj<MeLabelDirective | MeSwitchDirective | DxSwitchComponent>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `<label meLabel width="90px"><dx-switch meSwitch ${argsToTemplate(
      args
    )}></dx-switch>Switch</label>`,
  }),
};
