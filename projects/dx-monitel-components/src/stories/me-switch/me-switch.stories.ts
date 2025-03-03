import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { DxSwitchComponent } from 'devextreme-angular';
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
    switchedOffText: {
      control: 'text',
      description: 'Текст, отображаемый при выключенном состоянии',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    switchedOnText: {
      control: 'text',
      description: 'Текст, отображаемый при включенном состоянии',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    height: {
      control: 'text',
      description: 'Высота компонента',
      table: {
        type: { summary: 'string | number | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    width: {
      control: 'text',
      description: 'Ширина компонента',
      table: {
        type: { summary: 'string | number | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    }
  },
  args: {
    size: 'medium',
    disabled: false,
    readOnly: false,
    switchedOnText: "",
    switchedOffText: "",
    width: undefined,
    height: undefined,
  },
  render: (args) => ({
    props: args,
    template: `<dx-switch meSwitch ${argsToTemplate(args)}></dx-switch>`,
  }),
} satisfies Meta<DxSwitchComponent | MeSwitchDirective | MeLabelDirective>;

type Story = StoryObj<DxSwitchComponent | MeSwitchDirective | MeLabelDirective>;

export const Default: Story = {};

export const SizeSmall: Story = {
  args: {
    size: 'small'
  }
};

export const SizeMedium: Story = {
  args: {
    size: 'medium'
  }
};

export const SizeLarge: Story = {
  args: {
    size: 'large'
  }
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

export const StateDisabledAndReadOnly: Story = {
  args: {
    readOnly: true,
    disabled: true,
  },
};

export const WithLabel: Story = {
  render: (args) => ({
    props: args,
    template: `<label meLabel width="90px"><dx-switch meSwitch ${argsToTemplate(
      args
    )}></dx-switch>Switch</label>`,
  }),
};

export const WithSwitchStatusText: Story = {
  args: {
    switchedOnText: 'On',
    switchedOffText: 'Off',
  },
};
